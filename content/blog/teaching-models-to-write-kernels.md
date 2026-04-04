---
title: "Teaching models to write kernels; dataset, training, and honest results"
description: "A practical guide to building a focused dataset and fine-tuning models to understand low-level GPU code - masked loads, boundary checks, shared memory, and CUDA→Triton translations."
author: "Anurag Kanade"
date: "2025-10-29"
categories: ["Machine Learning", "GPU", "Triton", "CUDA"]
---

i wanted a model that actually understands low‑level GPU code: masked loads, boundary checks, shared memory... the stuff people sweat about and models usually mess up. this is a short, practical writeup: what i collected, how i cleaned it, how i trained, how i evaluated.

---

## tl;dr

- a focused dataset of triton kernel bodies and cuda→triton translation pairs (a few thousand examples).
- cleaned, [deduped](https://en.wikipedia.org/wiki/Data_deduplication), licensed... ready for adapter-style fine‑tuning.
- i fine‑tuned adapters on a qwen 8b checkpoint using a single RTX 3090... results are useful as kernel drafts.

## what's in the dataset

**HuggingFace Dataset:** [edwixx/triton-code-dataset](https://huggingface.co/datasets/edwixx/triton-code-dataset)

**Fine-tuned Model:** [edwixx/qwen3-8b-triton-finetune](https://huggingface.co/edwixx/qwen3-8b-triton-finetune)

Two CSV splits, simple schema (`prompt,completion`):

- **`fim_sft.csv`** — fill‑in‑the‑middle for triton kernels (prompt: signature + context, completion: body).
- **`cu2triton_sft.csv`** — CUDA functions paired with hand‑crafted or curated Triton rewrites.

Repo layout:

```
/fim_sft.csv
/cu2triton_sft.csv
/ANALYSIS.json
/ANALYSIS.md
/PROVENANCE.md
/figs/*.png
```

---

## how i built it

i started by searching repositories, documentation pages, and blog posts for kernel examples that show real GPU concerns. i prioritized permissively licensed sources and files that were self contained or had clear argument shapes.

next i normalized the text — unify newlines, trim whitespace, collapse repeated spaces and tabs:

```python
def normalize_code(s: str) -> str:
    import re
    s = s.replace('\r\n', '\n')
    s = s.strip()
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s
```

after cleaning i deduplicated exactly. compute a SHA‑1 hash over `normalize(prompt) ||| normalize(completion)` and drop exact matches. then run a leakage filter using Jaccard word overlap and flag pairs with overlap ≥ 0.8 for manual review.

---

## training

i used qwen 8b and trained LoRA adapters on a single RTX 3090. loaded the base model with 4‑bit quantization using bitsandbytes.

```python
from transformers import BitsAndBytesConfig
from peft import LoraConfig
from trl import SFTConfig

bnb = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype="bfloat16",
)

peft_cfg = LoraConfig(
    r=32,
    lora_alpha=32,
    lora_dropout=0.05,
    bias="none",
    target_modules=["q_proj","k_proj","v_proj","o_proj","gate_proj","up_proj","down_proj"],
    task_type="CAUSAL_LM",
)

cfg = SFTConfig(
    output_dir="qwen3_8b_triton_fim_lora",
    num_train_epochs=1,
    per_device_train_batch_size=1,
    gradient_accumulation_steps=16,
    learning_rate=1e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.02,
    packing=True,
    max_length=1024,
    bf16=True,
    gradient_checkpointing=True,
)
```

---

## evaluation

i kept eval simple — mix of automated and manual:

- **static checks:** grep for `@triton.jit`, `tl.load`, masked stores. fast signal.
- **token overlap:** for translation pairs, measure how much the output matches reference.
- **spot compile:** try compiling a few examples. catches syntax errors.
- **human read:** i read ~100 outputs. catches weird patterns machines miss.

---

## example the model learned

**prompt**

```python
import triton, triton.language as tl

@triton.jit
def add_kernel(x_ptr, y_ptr, out_ptr, n, BLOCK_SIZE: tl.constexpr):
    # complete: load x,y (masked), add, store
```

**completion**

```python
pid = tl.program_id(0)
offsets = pid * BLOCK_SIZE + tl.arange(0, BLOCK_SIZE)
mask = offsets < n
x = tl.load(x_ptr + offsets, mask=mask)
y = tl.load(y_ptr + offsets, mask=mask)
out = x + y
tl.store(out_ptr + offsets, out, mask=mask)
```

This pattern repeats across kernels; a few dozen examples are enough for the model to reproduce it reliably.

---

## limitations

- small dataset: teaches idioms, not everything. expect hallucinations.
- translations may not compile in edge cases. treat outputs as drafts.
- no automatic proof of correctness across all outputs.

---

## next steps

- add fuzzy near‑duplicate detection (minhash) to cut semantic leakage.
- run compile tests for a subset and label examples as "compilable."

---

PS: i did all this just cause i wanted to — this was a fun project, nothing more.
