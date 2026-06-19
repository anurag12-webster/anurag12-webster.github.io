---
title: "Refusal Is a Direction: The Geometry of Safety Training in Diffusion Language Models"
description: "Refusal in LLMs is not a diffuse, distributed property of the network. It is a single linear direction in activation space. This post reviews the evidence for that claim and what changes under mixture-of-experts routing and bidirectional attention."
author: "Anurag Kanade"
date: "2026-06-18"
categories: ["LLMs", "Interpretability", "Linear Algebra", "Diffusion Models"]
---

Refusal, the behavior by which a language model declines to answer a harmful or disallowed request, is usually discussed as a property of *alignment*: something trained in through RLHF or instruction tuning, diffusely spread across billions of parameters. A growing body of interpretability work suggests this framing is wrong, or at least incomplete. Refusal behaves, geometrically, like a single direction in the residual stream of the network, one that can be located with a difference of means and removed with a linear projection, no gradient steps required. This post reviews that evidence, then walks through what happens when the same idea is tested on architectures it was never characterized on: diffusion language models, where attention is not always causal and the feedforward block is not always a single dense matrix.

## The Linear Representation Hypothesis, Applied to Refusal

The broader claim this work sits inside of is the **linear representation hypothesis**: many high-level concepts learned by a transformer end up represented as directions, or low-dimensional linear subspaces, in its activation space, rather than as some more exotic nonlinear structure. Refusal is one of the cleanest empirical instances of this hypothesis found to date.

The direction is recovered with a simple procedure. Given a set of harmful prompts and a set of harmless prompts, the hidden state at a chosen layer is averaged separately for each group, and the refusal direction is taken as the difference of means:

```
r = mean(h_harmful) - mean(h_harmless)
```

The normalized vector r̂ can then be projected out of the residual stream at every layer, replacing h with h minus (h · r̂)r̂ on every forward pass, and the model's refusal rate collapses. The cost of this intervention is measured as the KL divergence between the ablated model's output distribution and the original model's, on a held-out, non-adversarial benchmark. A good ablation minimizes refusals while keeping that divergence small. This is the entire mechanism behind automated tools such as [heretic](https://github.com/p-e-w/heretic): no fine-tuning, no reward model, no gradient updates, just a measured direction and a subtraction.

![Refusal direction shown as a vector between the mean harmful and mean harmless activation, and what projecting it out does to the two clusters](/refusal-vector-diagram.svg)

## Locating the Direction Across Depth

The first question worth asking is at which depth in the network this separation is sharpest, and how cleanly it resolves. This is measured directly by tracking cosine similarity between the mean harmful and mean harmless hidden state at every layer:

![Refusal direction strength across layers in a 30-layer diffusion-based model](/dg-refusal-direction-layers.png)

The quantity plotted is `cos(h_harmful, h_harmless)` per layer. Values near 1.0 mean the two classes are nearly parallel in that layer's representation, poorly separated along this axis. The pronounced dip near layer 2, and the smaller dip later in the network, mark the layers where the harmful/harmless distinction is most geometrically pronounced, and where projecting out r does the most work. The same structure shows up spatially when the hidden vectors at one of these layers are projected with PCA and colored by class:

![PCA projection of hidden states at an early layer, harmful vs harmless prompts](/dg-pca-layer2-separation.png)

Harmful (red) and harmless (green) prompts already form visually distinguishable clusters this early in the network. That is the geometric precondition the whole method depends on. If the two classes were not linearly separable in some layer's representation, there would be no consistent direction to subtract in the first place.

## Finding One: One Direction Becomes Many Under Mixture-of-Experts Routing

The linearity result holds cleanly for dense transformers, where every token at a given layer passes through the same weight matrices, giving one consistent place to intervene. **Mixture-of-experts (MoE)** architectures complicate this. Different tokens route to different subsets of experts, so "one direction, one subtraction" becomes "one direction, but a separate copy of the relevant weights inside every expert that might activate."

Ablating only a layer's combined output, averaged over whichever experts happened to fire, removes an *average effect* rather than the underlying mechanism. The refusal direction still exists, untouched, inside any expert that was not hit, and the router can simply shift more weight onto those untouched experts at inference time, restoring the original refusal behavior almost entirely. The correct fix is to repeat the projection independently inside every expert's weight slice, not once per layer but once per expert. Doing this on the MoE model used here took refusals from 100/100 down to 13/100, at a KL divergence of 0.49 against the unablated model, found over a 200-trial search. The linearity of refusal is not weakened by this. It just needs to be applied at finer granularity.

![Ablating only the active experts leaves the refusal direction intact in the untouched ones; ablating every expert slice removes it everywhere](/moe-expert-ablation-diagram.svg)

This also runs counter to a claim that has circulated about this class of model: that refusal in MoE-based diffusion LLMs is some non-linear "vocabulary-space attractor" that resists simple projection. The geometry says otherwise. The representation stays linear. What changes is the granularity at which the projection has to be applied, and missing that granularity is enough to make the whole technique look like it doesn't work.

## Finding Two: Weight Tying Is a Silent Failure Mode for Adapter Tooling

A second, less obvious failure showed up once the per-expert fix was in place. Some encoder-decoder diffusion architectures tie their encoder and decoder weights directly, meaning both halves of the model literally share the same underlying tensors rather than two separately trained copies. Standard adapter tooling (LoRA included) typically wraps only the encoder side of a model by default. Since the decoder is what actually drives generation, an adapter trained this way changes nothing about the model's output: the loss curve looks normal during training, but nothing changes at inference time.

The fix has to merge the adapter's delta directly into the shared weights immediately before generation, then unmerge it afterward, rather than relying on the adapter framework's usual hook-based wrapping. The broader lesson generalizes past this one architecture: whenever two parts of a model are tied at the tensor level, any tool that assumes "wrap module X" is operating on an independent copy of weights needs to be checked, not trusted.

## Finding Three: High-Strength Ablation Introduces Real, Reproducible Damage

Pushing the ablation strength high enough to suppress nearly all refusals introduced a side effect: the word "own" started leaking into generated outputs in places it did not belong. This was confirmed to be genuine model behavior rather than a bug in the ablation tooling, by reproducing the same artifact through the model's native inference path with no tooling involved. The more interesting question was whether ablation had caused it. Comparing notes with other people independently abliterating the same base model showed the same artifact appearing across different checkpoints and different ablation strengths, including in outputs from the unmodified autoregressive Gemma model the diffusion variant is built on. That points to the artifact being an upstream property of the model's own mask or placeholder tokens rather than damage introduced by directional ablation, a meaningfully different, and more interesting, conclusion than "ablation broke the model."

The natural next step, before that broader pattern was confirmed, was to try to repair the artifact with a small supervised fine-tune on a general-purpose reasoning dataset, training only the language-model component while freezing the rest. That attempt failed outright: the training loss diverged rather than converged, and the artifact persisted in the resulting checkpoint. The original ablated model, prior to any attempted fix, was kept as the better result. This is worth stating plainly because negative results like this are usually the least documented part of any such project: not every attempt to patch a side effect of an intervention succeeds, and a failed fine-tune is itself a useful data point about how fragile the ablated representation can be, even when the underlying artifact turns out not to be caused by the ablation at all.

## Finding Four: Two Architectures, Two Different Winning Techniques

The cleanest test of how far the single-direction picture generalizes came from repeating the entire measurement on a second diffusion language model, one using bidirectional, BERT-style attention rather than causal masking. The cosine-similarity-by-layer curve for this model looks qualitatively different from the first:

![Hidden state PCA per layer in a bidirectional diffusion model, harmful vs harmless prompts](/llada-pca-grid-layers.png)

![Causal attention funnels information into the last token early, while bidirectional attention delays separation until the final layer](/attention-flow-diagram.svg)

Here, harmful and harmless prompts stay entangled for almost the full depth of the network and only separate near the final layer, in contrast to the early, persistent separation seen above. A plausible explanation follows from the attention mask itself: causal attention forces information relevant to a sequence-level decision to accumulate into the last token's representation early, since every later token can only look backward at it. Bidirectional attention removes that bottleneck. Every token attends to every other token at every layer, so there is much less structural pressure on the network to commit to a harmful/harmless distinction before its last few layers.

The practical consequence: a single global direction, projected out at one fixed layer, worked well on the first model and barely moved the needle on the second. What worked there instead was optimizing a learned subspace via gradients, rather than assuming the signal lives along one fixed vector. Measured the same way, that approach produces a curve with the same qualitative shape as the first model's, despite the two networks differing substantially in attention structure:

![Refusal direction strength across layers for a bidirectional diffusion model, single-direction vs subspace method](/llada-refusal-direction-layers.png)

Tested in both directions, on both models, the result holds cleanly: the per-expert single-direction method was the better technique on the MoE model, and the gradient-based subspace method was the better technique on the bidirectional dense model. Neither method won outright across both architectures. The two failure modes documented above (MoE routing and bidirectional attention) each had a distinct fix, and those fixes did not transfer in the direction you might first guess.

## Discussion

Strip away the specific model names, and what is left is a fairly compact empirical claim: refusal is encoded as a measurable linear structure, but the form that linearity takes (a single global direction, a direction repeated independently across parallel experts, or a low-dimensional learned subspace) is set by how information is allowed to move through the architecture. Causal attention concentrates the relevant signal early. Bidirectional attention delays it until the final layers. Mixture-of-experts fragments it across parallel copies of the network, each of which has to be treated as its own intervention site.

None of these findings required computing gradients or training an auxiliary model to discover. They follow from a difference of means and a cosine similarity, computed carefully and at the right place in the network. The harder, more interesting work was diagnosing the places where the standard technique silently failed: averaged ablation on MoE layers, invisible adapters on tied weights, and a single fixed direction that simply does not exist in a bidirectional model the way it does in a causal one.

## Acknowledgments

This investigation built on [heretic](https://github.com/p-e-w/heretic), an open-source automated abliteration tool, and on discussion in [p-e-w/heretic#370](https://github.com/p-e-w/heretic/issues/370). The mixture-of-experts and weight-tying support developed for this work is available as a draft PR at [p-e-w/heretic#378](https://github.com/p-e-w/heretic/pull/378).

## References

[1] Arditi, Andy, et al. ["Refusal in Language Models Is Mediated by a Single Direction."](https://arxiv.org/abs/2406.11717) arXiv preprint arXiv:2406.11717 (2024).

[2] p-e-w. ["heretic: Automatic censorship removal for language models."](https://github.com/p-e-w/heretic) GitHub repository.

[3] p-e-w/heretic Issue #370. ["Diffusion LLM abliteration discussion."](https://github.com/p-e-w/heretic/issues/370) GitHub (2026).

[4] p-e-w/heretic Pull Request #378. ["Add support for DiffusionGemma and MoE expert-granular ablation."](https://github.com/p-e-w/heretic/pull/378) GitHub (2026).

[5] Nie, Shen, et al. ["Large Language Diffusion Models."](https://arxiv.org/abs/2502.09992) arXiv preprint arXiv:2502.09992 (2025). (LLaDA)
