---
title: "Shrinking Full-Duplex Speech: Training a 600M Moshi-Style Model on a Weekend Budget"
description: "An attempt at a sub-1B full-duplex speech-to-speech model built on a pretrained text backbone instead of Moshi's audio pretraining, with a synthetic data pipeline, on-policy distillation from PersonaPlex, and a per-codebook diagnosis of exactly where the small model broke."
author: "Anurag Kanade"
date: "2026-07-24"
categories: ["TTS", "Speech-to-Speech", "Full-Duplex", "Machine Learning"]
---

Full-duplex conversation, the ability of a speech model to listen and speak at the same time, is usually discussed as a property of *scale*: Moshi ([Défossez et al., 2024](https://arxiv.org/abs/2410.00037)) demonstrated it with a 7B model pretrained on seven million hours of audio, and most systems that followed kept roughly that budget. The interesting question is whether duplexity actually requires any of that, or whether it is a data and objective problem that a much smaller model could learn: small enough to train in two GPU-days and run on a laptop.

There was reason to think so. PersonaPlex ([Roy et al., 2026](https://arxiv.org/abs/2602.06053)) took stock Moshi, changed nothing about the architecture, and taught it voice and role control with roughly 2,250 hours of synthetic dialog and about 48 A100-hours of fine-tuning. Their data ablation is the load-bearing result for anyone attempting this on a small budget: 25% of their data retained most of the quality. Turn-taking, barge-in, and backchanneling, the behaviors that make duplex models feel alive, appear to be learnable from a few hundred hours of the right data.

So the plan was a "Kokoro-class Moshi": a model of roughly 600M parameters, English-only, one fixed persona voice, trained end to end on a budget a single person can carry, with a recipe others could re-run for their own language. This post covers the full attempt: the synthetic data pipeline, a distillation trick I think is underused, four training runs, and a diagnosis of where the small model broke. The project is paused for capital rather than concluded, but the failure mode turned out to be specific and measurable, and that specificity is the useful part.

## The Architecture We Inherit

Moshi models a two-person conversation as a grid of discrete tokens at 12.5 Hz. Audio enters through Mimi, a streaming neural codec that compresses 24 kHz speech into 8 residual vector-quantization (RVQ) codebooks per 80 ms frame. Codebook 0 is *semantic*, distilled from WavLM ([Chen et al., 2021](https://arxiv.org/abs/2110.13900)), and carries phonetic content. Codebooks 1 through 7 encode successively finer acoustic residuals. Mimi is about 80M parameters, released under CC-BY-4.0, and stays frozen throughout; nothing here involves training a codec.

Each frame of the conversation contains seventeen tokens:

| Stream | t | t+1 | t+2 | t+3 | Notes |
|---|---|---|---|---|---|
| 0 · agent text | "I" | "'m" | PAD | "here" | text leads audio |
| 1 · agent audio cb0 | a₀ | a₁ | a₂ | a₃ | semantic codebook |
| 2–8 · agent audio cb1–7 | · | · | a₀′ | a₁′ | acoustic, delayed +2 |
| 9 · user audio cb0 | u₀ | u₁ | u₂ | u₃ | input at inference |
| 10–16 · user audio cb1–7 | · | · | u₀′ | u₁′ | input at inference |

*Figure 1: The duplex token grid; one row is one stream, one column is one 80 ms frame. Stream layout and ordering follow Moshi.*

Two design choices in this grid do most of the work. The first is the *inner monologue*: the agent's own text stream is time-aligned with its audio and shifted slightly earlier, so the model decides what to say in text before it vocalizes it. This is the mechanism that lets the language modeling happen in a space the model is good at, and it yields streaming ASR and TTS behavior as side effects. The second is the RQ-Transformer factorization: a large *temporal* transformer runs across frames, consuming one summed embedding per 80 ms step, while a small *depth* transformer autoregressively predicts the seventeen tokens within the next frame. The expensive model never sees a sequence seventeen times longer than the conversation.

PersonaPlex sits entirely on top of this architecture. Its contribution is a conditioning scheme and a data recipe, not a change to the model. The conditioning is a hybrid system prompt: an audio clip of the target voice on the agent streams, temporally concatenated with a text role prompt forced onto the text stream, a 440 Hz sine on the user channel, and loss masked over the whole prefix. The data recipe is synthetic dialogs produced by LLM transcript generation, TTS rendering, and stitching. Their loss weighting (acoustic codebooks ×0.02, padded text tokens ×0.3) comes up again later, because inheriting it turned out to be a mistake in this setting.

![The student model: user audio and the hybrid system prompt feed a Qwen3-0.6B-Base temporal transformer, which drives a 6-layer depth transformer; that produces the agent text stream (leading by 2 frames) and 8 agent audio codebooks (codebooks 1-7 delayed by 2), with the audio codes decoded to 24 kHz speech by a frozen Mimi decoder](/diag_1.png)

## The Central Bet: Replace Audio Pretraining with a Text-Pretrained Backbone

Moshi's seven million hours were mostly spent teaching its backbone *language*, from audio, from nothing. That is the one expense a small project cannot pay and also the one it shouldn't have to: pretrained text LMs already exist at every size. So the temporal transformer here is initialized from Qwen3-0.6B-Base ([Qwen Team, 2025](https://arxiv.org/abs/2505.09388)), the depth transformer is trained from scratch, and the wager is that the inner monologue bridges the two worlds: the backbone already knows how to conduct a conversation in text, and training only has to teach it to read and write Mimi codes.

The verified model is 773M parameters, of which 156M are text embeddings tied three ways (backbone input, depth-transformer input, depth text head), leaving about 617M working parameters. Pruning Qwen's 150k-entry multilingual vocabulary to English would cut another ~130M; that stayed on the v2 list.

A back-of-envelope that held up throughout: at 12.5 Hz, one epoch over a thousand hours of audio is about 45 million frames. At roughly 6 FLOPs per parameter per token (forward and backward combined) and ~700M active parameters, that is on the order of a few hundred petaFLOPs, call it half an exaFLOP. On a 96 GB RTX Pro 6000 at modest utilization, that lands around two hours. Compute was never the constraint. The constraints were data hours and, as it turned out, how the loss allocates capacity across those seventeen streams.

## Building the Data

Everything in this section ran on one rented RTX Pro 6000 and a Mac.

![The data pipeline: LLM-generated dialogs go through TTS rendering and duplex stitching, then a QC filter keeps 3,191 of 4,569 (70%); PersonaPlex 7B teacher rollouts add 423 more; both feed the final Mimi tokenize step producing 3,614 token grids](/diag_2.png)

Transcript generation follows PersonaPlex's hierarchical sampling: draw a domain, a scenario, an angle, then have an LLM write the full two-speaker exchange. The adjustment is where diversity comes from. PersonaPlex gets diversity from thousands of personas and roles; a fixed-persona model can't, so diversity here comes from *conversational dynamics* instead. Every turn carries a `dynamic_tag` (`normal`, `backchannel`, `interruption`, `overlap`, `pause_before_long`) that the stitching stage later turns into physics. 5,496 dialogs came out of this, which deduplicated to 4,569 after I discovered the generation script's resume path had been reusing dialog IDs.

Each turn was rendered with Higgs TTS 3 ([Boson AI](https://huggingface.co/bosonai/higgs-tts-3-4b), a 4B Qwen3-based TTS with zero-shot cloning) behind an sglang server, with the agent cloned onto Kore, one of the two clean voices in the Apache-licensed [gemini-flash-2.0-speech](https://huggingface.co/datasets/shb777/gemini-flash-2.0-speech) dataset. Kore was chosen so the same 284 hours could serve as alignment data later with a consistent persona voice. Stitching then assembles two-channel duplex audio where the tags become timing: normal turns get 300–800 ms of gap, backchannels and overlaps get a small negative gap, interruptions truncate the previous turn mid-word. This sounds too crude to work, but PersonaPlex validated exactly this negative-silence trick for teaching barge-in mechanics.

What the plan had treated as an optional cleanup pass turned out to be structural. Raw Higgs renders carried a 10–20% per-dialog defect rate: silent turns, clipping, and runaway generations (forty seconds of audio for nine seconds of text, though most of the excess proved to be silence tails that trimming could repair rather than reject). The best failure was linguistic: the transcript generator's language filter operated on whole dialogs, so around four hundred Japanese backchannels (うん, なるほど) sat undetected inside otherwise-English conversations, because a two-token acknowledgment doesn't move a document-level language classifier. The filter pass runs re-ASR word error rate against the clean transcript using Whisper ([Radford et al., 2022](https://arxiv.org/abs/2212.04356)), ECAPA speaker similarity against Kore references, artifact detection, and loudness normalization, and kept 3,191 of 4,569 dialogs. Kokoro ([hexgrad](https://huggingface.co/hexgrad/Kokoro-82M)) is often described as an architecture achievement; I read it mainly as a curation result, and at this scale the arithmetic agrees: five hundred clean hours beat fifteen hundred noisy ones.

### Distilling the Teacher's Timing, Not Its Content

Hand-stitched gaps teach a model the *mechanics* of overlap but not human micro-timing: when precisely to murmur agreement, how quickly to yield when interrupted. PersonaPlex had real telephony-style data for that; I did not. But PersonaPlex itself is released under the NVIDIA Open Model License, which permits derivatives, and it is a model whose entire value in this context is that it already *has* the timing.

So a rollout script streams our rendered user channels into PersonaPlex 7B, conditioned with a Kore voice prompt and the dialog's own role context, and records its live agent response, capturing the full seventeen-stream token grid per frame, training-ready without re-tokenization. The teacher's learned turn-taking becomes supervision on exactly the axis where synthetic stitching is weakest. The practical numbers: each instance wants ~24 GB of VRAM (three fit on a 96 GB card; four OOM each other) and runs at about 0.7× realtime, which cut the target from 2,000 rollouts to 423. PersonaPlex's own scaling ablation suggests this regime is sufficient for a timing signal, and the training loader oversamples rollouts 2×. If a strong open model exists in your target behavior space, I now think on-policy rollouts of it are worth trying before hand-built alternatives.

The final dataset is 3,614 token grids, stitched corpus and rollouts in one format. Mimi tokenization of the whole ~100 hours took fifteen minutes on one GPU.

## Training

Training ran on Modal B200 instances. Each run below cost between \$2 and \$15.

### Finding One: The Text Channel Converges Almost Immediately, and the Audio Channel Does Not

The first run went straight to duplex dialog fine-tuning, 6,000 steps, about 95 minutes. Validation text loss bottomed out near 1.68 by step three to four thousand, and free-run samples (the model continuing a conversation given only the user's audio channel) produced coherent, on-persona text: reassurances, confirmation-email service talk, sensible responses to what the user had actually said. The central bet paid out in full on the text side; the pretrained backbone needed almost no persuading to conduct a spoken-style conversation over Mimi-clocked frames.

The audio told a different story. Speech was present, with roughly the right prosodic contour, but acoustically rough to the point of being hard to make out, and validation audio loss sat flat at 1.72 from step four thousand onward.

![Run 1, text loss (blue) keeps falling toward 1.1 while audio loss (green) flattens around 1.6 from step 3,000 onward on a 6,000-step duplex fine-tuning run on a B200; hollow markers are validation](https://huggingface.co/datasets/edwixx/s2s-blog-assets/resolve/main/figures/fig_stageB_loss.png)

### Finding Two: Loss Weighting Is Not the Bottleneck

The obvious suspect was the inherited ×0.02 weight on acoustic codebooks. PersonaPlex tuned that number for a model whose audio embeddings had already seen seven million hours of pretraining; the audio embeddings here started from a random initialization, so a starvation explanation fit the flat loss curve. The second run raised the weight to 0.15, keeping everything else fixed. Text quality was unchanged and the audio did not improve. The loss weight was not the bottleneck.

![Validation audio loss at acoustic weight 0.02 versus 0.15; the absolute levels are not directly comparable since each run's audio loss is scaled by its own acoustic weight, but both curves flatten at the same step with the same shape and the 0.15 run did not sound clearer](https://huggingface.co/datasets/edwixx/s2s-blog-assets/resolve/main/figures/fig_aw15_val_audio.png)

### Finding Three: Ruling Out a Bug

Before spending more on training, three checks separated a bug from a capacity problem, for about \$2 of GPU time total. Decoding stored training tokens straight through Mimi produced clean speech, so the tokenization pipeline was correct. Applying the acoustic delay and then inverting it reproduced the direct decode to four decimal places, so the delay handling was correct. Overfitting a single dialog for 400 steps drove audio loss from 7.79 to 0.28, close to a full reconstruction, so the model was mechanically capable of learning audio. None of these checks needed a training run, and they should have run before the first one rather than after the second.

With a bug ruled out, two structural causes remained, both avoidable. First, copying Moshi's objective meant the model spent eight of its sixteen audio streams learning to *predict the user's voice*, tokens that are pure input at inference time. At 7B with unlimited data that multi-task load is apparently free; at 600M with three hundred hours it starves the one voice that ships. The fix is a one-line change in the loss: user streams become input-only with zero weight. Second, I had skipped the planned alignment stage (single-speaker TTS in the same frame format) to save budget, when the general pattern with small TTS models (Kokoro-class systems get intelligible on 24–100 hours of single-voice data) says a model should learn to read aloud before it learns to converse.

### Finding Four: The Garble Lives in the Fine Codebooks

The alignment stage went in as a pivot: TTS-as-duplex on ~600 hours of single-speaker audio (gemini-flash plus LibriTTS-R, [Koizumi et al., 2023](https://arxiv.org/abs/2305.18802)), agent-only prediction, acoustic weight raised to 0.5, run to 40,000 steps. The result sharpened the problem rather than solving it. Teacher-forced output remained substantially garbled, but text-forced generation (forcing the ground-truth text stream and letting the model generate only audio) was noticeably clearer, recognizable if robotic. A gap of that shape, where the model performs better the more of its own predictions you replace with ground truth, is the classic signature of exposure bias: the acoustic decoder is learning, but it is conditioned on a self-generated text and semantic stream that has not stabilized.

![Alignment-stage run across its resumed segments to 40,000 steps; training text loss collapses toward zero while validation text loss climbs steadily as the small read-aloud corpus gets memorized, and audio loss grinds down slowly without reaching the region where Mimi decodes cleanly](https://huggingface.co/datasets/edwixx/s2s-blog-assets/resolve/main/figures/fig_stageA_40k.png)

The most instructive experiment of the project was also the cheapest. Freeze the Qwen backbone entirely, train only the audio embeddings and depth transformer on a 32-dialog overfit set with acoustic weight 1.0, and log cross-entropy separately for each RVQ codebook. A single aggregate audio loss number had been averaging this away the whole time.

| codebook | role | CE at step 20 | CE at step 1500 |
|---|---|---|---|
| cb0 | semantic | 0.45 | 0.29 |
| cb1 | coarse acoustic | 3.31 | 1.25 |
| cb4 | mid acoustic | 4.64 | 2.04 |
| cb7 | fine acoustic | 5.43 | 3.21 |

*Table 1: Per-codebook audio cross-entropy during the frozen-backbone rescue run on a 32-example overfit set. The semantic codebook is essentially solved; loss rises monotonically with RVQ depth, and the finest levels resist even deliberate overfitting.*

![The same run as Table 1, over time; codebook 0 sits near the floor from the start, each deeper acoustic level converges to a higher plateau, and codebook 7 is still above 3 nats after 1,500 steps of deliberate overfitting at acoustic weight 1.0, the ordering never inverts](https://huggingface.co/datasets/edwixx/s2s-blog-assets/resolve/main/figures/fig_rescue_codebooks.png)

There is the garble, quantified. The model learned *what* to say acoustically (codebook 0, the phonetic content) but could not master the fine residual detail that separates clean speech from smear. This is not mysterious once stated: each RVQ level encodes the residual of the level before it, so the fine codebooks are individually the closest to noise and the hardest to predict, and they were precisely the streams that every budget decision (the ×0.02 inherited weight, the absent audio pretraining, a 100M shared-weight depth transformer) had deprioritized. Moshi could afford that allocation because its scale paid the fine codebooks' bill elsewhere. A cold-start 600M model cannot, and no aggregate loss curve will tell you so unless you ask per codebook.

## Where This Leaves the Project

The open thread is specific. Stabilize the self-generated text and semantic streams, either scheduled sampling or a semantic-first curriculum that trains codebooks 0 and 1 to convergence before unlocking deeper levels. Give the fine codebooks more alignment hours (Emilia, [He et al., 2024](https://arxiv.org/abs/2407.05361), is the obvious source) or a depth transformer that isn't sharing 100M parameters across seven residual levels it has never heard in pretraining. After that, the rest of the original plan still stands: streaming KV-cached inference at the 80 ms frame budget, evaluation on Full-Duplex-Bench ([Lin et al., 2025](https://arxiv.org/abs/2503.04721)), and quantized exports in the 450–800 MB range. The data (3,614 duplex grids), the checkpoints, and the pipeline are intact and waiting on compute.

None of the findings above needed a large training run to discover. The decode round-trip, the single-dialog overfit, the frozen-backbone rescue, and the per-codebook logging together cost a few dollars, and they turned "the audio sounds bad" into "codebooks 1 through 7 are under-supervised and conditioned on an unstable stream," a statement precise enough to act on. The lesson from the failed part is about inheritance: borrowing an architecture also means borrowing its objective and loss weighting, and those encode assumptions about scale and pretraining that don't transfer just because the layer diagram does. Moshi's decision to predict both speakers and to down-weight acoustic detail was correct for Moshi. The layer diagram transferred; the assumptions did not, and seeing the difference cost two training runs. The text half of the bet, that a pretrained text LM plus the inner monologue gives you conversation for close to free, held completely. That's why I still think a small full-duplex model is a data problem rather than a scale problem, and worth finishing.

If you're working on small duplex models, or want to run this recipe for your language, say hi.

## References

1. **Défossez, A., Mazaré, L., Orsini, M., Royer, A., Pérez, P., Jégou, H., Grave, E., & Zeghidour, N.** (2024). *Moshi: a speech-text foundation model for real-time dialogue*. [arXiv:2410.00037](https://arxiv.org/abs/2410.00037). Code and Mimi weights: [kyutai-labs/moshi](https://github.com/kyutai-labs/moshi).

2. **Roy, R., Raiman, J., Lee, S., et al.** (NVIDIA) (2026). *PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models*. [arXiv:2602.06053](https://arxiv.org/abs/2602.06053). Checkpoint: [nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1) (NVIDIA Open Model License).

3. **Qwen Team.** (2025). *Qwen3 Technical Report*. [arXiv:2505.09388](https://arxiv.org/abs/2505.09388). Backbone: [Qwen/Qwen3-0.6B-Base](https://huggingface.co/Qwen/Qwen3-0.6B-Base).

4. **Boson AI.** *Higgs TTS 3*. Model: [bosonai/higgs-tts-3-4b](https://huggingface.co/bosonai/higgs-tts-3-4b) (Boson Higgs TTS 3 Research and Non-Commercial License, disclosed here since it rendered the training audio).

5. **shb777.** *gemini-flash-2.0-speech*, 284 h, two voices (Puck/Kore), Apache-2.0. [Dataset](https://huggingface.co/datasets/shb777/gemini-flash-2.0-speech).

6. **hexgrad.** *Kokoro-82M*. [Model](https://huggingface.co/hexgrad/Kokoro-82M).

7. **Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., & Sutskever, I.** (2022). *Robust Speech Recognition via Large-Scale Weak Supervision*. [arXiv:2212.04356](https://arxiv.org/abs/2212.04356).

8. **Chen, S., et al.** (2021). *WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing*. [arXiv:2110.13900](https://arxiv.org/abs/2110.13900).

9. **Koizumi, Y., et al.** (2023). *LibriTTS-R: A Restored Multi-Speaker Text-to-Speech Corpus*. [arXiv:2305.18802](https://arxiv.org/abs/2305.18802).

10. **He, H., et al.** (2024). *Emilia: An Extensive, Multilingual, and Diverse Speech Dataset for Large-Scale Speech Generation*. [arXiv:2407.05361](https://arxiv.org/abs/2407.05361).

11. **Lin, G.-T., et al.** (2025). *Full-Duplex-Bench: A Benchmark to Evaluate Full-duplex Spoken Dialogue Models on Turn-taking Capabilities*. [arXiv:2503.04721](https://arxiv.org/abs/2503.04721).
