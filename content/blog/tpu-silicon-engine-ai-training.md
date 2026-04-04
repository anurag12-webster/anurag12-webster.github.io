---
title: "Tensor Processing Units (TPUs): The Silicon Engine Behind Modern AI Training"
description: "Exploring TPUs and why they're so effective for large-scale AI training."
author: "Anurag Kanade"
date: "2026-01-28"
categories: ["low-level", "tpu", "machine-learning", "performance"]
---

Every neural network training run burns through billions of matrix multiplications. Doing that on standard processors was never going to scale.

Now imagine if a chip was purpose-built for the exact math that powers deep learning. That idea, realized in Tensor Processing Units, changed how the world trains large models.

## The Challenge Behind Training at Scale

Modern AI systems face a fundamental bottleneck: training a large language model like BERT or GPT requires processing trillions of floating-point operations. Multiply that by the need for faster experimentation cycles, and compute quickly becomes the limiting factor. Earlier approaches like CPU clusters or even GPU farms helped, but each involved trade-offs — throwing more hardware at the problem at the cost of power consumption, cost, or programming complexity.

## Understanding the TPU Advantage

Before we jump into how TPUs accelerate training, it helps to understand what makes them different from GPUs. In machine learning, the dominant operations are **matrix multiplications** — massive batches of multiply-accumulate operations that transform high-dimensional tensors.

GPUs were originally designed for graphics: rendering pixels, shading triangles, parallel texture mapping. They happen to be good at deep learning because graphics and neural networks both benefit from parallel computation. But GPUs are general-purpose parallel processors.

> **NOTE:** TPUs are not just "faster GPUs." They are [application-specific integrated circuits (ASICs)](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) designed exclusively for the tensor operations that dominate neural network training — trading generality for raw efficiency in a specific domain.

This makes them incredibly efficient for model training, but it's a trade-off: TPUs excel at tensor math but are less flexible for arbitrary computations.

## Matrix Multiply Units (MXU)

Inside the TPU resides the **Matrix Multiply Unit (MXU)**, a massive [systolic array](https://en.wikipedia.org/wiki/Systolic_array) that performs tens of thousands of operations per clock cycle.

[TPU v4](https://docs.cloud.google.com/tpu/docs/v4) can perform **275 trillion** matrix multiply-accumulate operations per second. To understand why this matters, let's look at a typical BERT-large layer:

```
Operations = 32 × 1024 × 4096 = 134 million MACs per layer forward pass
```

And that's just one layer. BERT-large has 24 of them, plus backward passes, plus multiple training steps.

```python
# Input: batch of 32 sequences, each with 1024-dimensional embeddings
X = np.random.randn(32, 1024).astype(np.float32)

# Weights: projecting from 1024 to 4096 dimensions
W = np.random.randn(1024, 4096).astype(np.float32)

b = np.zeros(4096, dtype=np.float32)

# Standard matrix multiplication: 134M operations
Y = np.matmul(X, W) + b

print(f"Operations: {32 * 1024 * 4096:,} multiply-accumulates")
```

On a CPU, this executes sequentially. On a GPU, it runs in parallel across CUDA cores. On a TPU, the entire operation flows through a systolic array in a pipelined fashion.

## Systolic Arrays

A **systolic array** is a 2D grid of processing elements where each element:
- Receives input from its neighbors
- Performs a multiply-accumulate operation (MAC)
- Passes results to the next element

![Systolic Array for Matrix Multiplication](https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Output_Stationary_Systolic_Array_Example.png/960px-Output_Stationary_Systolic_Array_Example.png)

*Figure: Systolic Array for Matrix Multiplication. Source: [Wikipedia](https://en.wikipedia.org/wiki/Systolic_array)*

This pipelined approach means once the array is filled, it produces one result element per clock cycle with minimal memory access.

## TPU Memory: High Bandwidth, On-Chip

Traditional architectures suffer from the **von Neumann bottleneck**: moving data between memory and compute units takes time and energy. TPUs address this with:

| Component | Specification |
|-----------|---------------|
| HBM (High Bandwidth Memory) | Up to 32 GB with 1200 GB/s bandwidth per TPU v4 chip |
| On-chip SRAM | 144 MB of ultra-fast scratchpad memory |
| Communication links | Dedicated high-speed links for all-reduce operations |

## Limitations of Traditional Accelerators

- **Memory bandwidth bound** — When fetching data takes longer than computing, the processor sits idle. GPUs often achieve only 30–50% of peak compute utilization.
- **Kernel launch overhead** — Each CUDA kernel launch has ~5–10 microseconds of overhead.
- **Limited on-chip memory** — GPU shared memory (~100KB per SM) requires frequent off-chip accesses for large models.
- **Communication bottlenecks** — All-reduce operations for gradient synchronization become the bottleneck as cluster size grows.

TPUs address these by co-designing hardware and software — XLA fuses operations, minimizes memory transfers, and optimizes the entire compute graph for the MXU architecture.

## XLA: The Compiler That Unlocks TPU Performance

**[XLA (Accelerated Linear Algebra)](https://en.wikipedia.org/wiki/XLA_(software))** takes your TensorFlow/PyTorch/JAX code and:

1. **Fuses operations** — Combines multiple ops into single kernels
2. **Eliminates intermediate allocations** — Reduces memory traffic
3. **Optimizes layouts** — Arranges tensors for efficient MXU access
4. **Automatic parallelism** — Distributes computation across TPU cores

```python
import tensorflow as tf

@tf.function(jit_compile=True)
def dense_layer(x, w, b):
    """XLA will fuse matmul + add + activation into a single kernel"""
    return tf.nn.gelu(tf.matmul(x, w) + b)
```

On TPU, this runs as one optimized operation instead of three separate kernels.

## TPU Pods: Scaling Beyond Single Chips

TPU v4 pods contain up to **4,096 chips** interconnected with high-speed optical switches, enabling:

- **Model parallelism** — Splitting giant models across chips
- **Data parallelism** — Processing different batches on different chips
- **Pipeline parallelism** — Staggering computation across layers

The all-reduce bandwidth of 300 GB/s per chip means gradient synchronization stays efficient even with thousands of chips.

## Key Optimizations for TPU Training

### Batch Size

On TPU, batch size should be a multiple of 8 (TPU v2/v3) or 4 (TPU v4) times the number of TPU cores:

```
Optimal Batch Size = k × num_cores × MXU_width
```

### Use bfloat16

TPUs natively support **bfloat16**, maintaining the dynamic range of float32 while using half the memory:

```python
tf.keras.mixed_precision.set_global_policy('mixed_bfloat16')
```

## TPU Generations

| Generation | Year | Peak Performance (BF16) | Memory |
|------------|------|-------------------------|--------|
| TPU v1 | 2016 | 92 TOPS | 8 GB HBM |
| TPU v2 | 2017 | 180 TFLOPS | 16 GB HBM |
| TPU v3 | 2018 | 420 TFLOPS | 32 GB HBM |
| TPU v4 | 2021 | 275 TFLOPS/chip | 32 GB HBM |
| TPU v5e | 2023 | 197 TFLOPS | 16 GB HBM |
| TPU v5p | 2023 | 459 TFLOPS | 95 GB HBM |
| TPU v6e (Trillium) | 2024 | 918 TFLOPS/chip | 32 GB HBM |
| TPU v7x (Ironwood) | 2025 | 2,307 TFLOPS/chip | 192 GB HBM |

## References

- **Jouppi, N. P., et al.** (2017). *In-Datacenter Performance Analysis of a Tensor Processing Unit*. [arXiv:1704.04760](https://arxiv.org/abs/1704.04760)
- **Google Cloud.** [TPU Documentation](https://cloud.google.com/tpu/docs)
- **TensorFlow.** [TPU Strategy Guide](https://www.tensorflow.org/guide/tpu)
- **JAX Documentation.** [Using JAX on TPU](https://jax.readthedocs.io/en/latest/jax-101/08-pjit.html)
