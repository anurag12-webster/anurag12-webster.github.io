<template>
  <div class="blog-container">
    <ul class="post-list">
      <li v-for="dataset in datasets" :key="dataset.title" class="post-item dataset-item">
        <a :href="dataset.link" target="_blank" rel="noopener noreferrer">
          <span class="post-title">{{ dataset.title }}</span>
        </a>
        <p class="dataset-desc">{{ dataset.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const datasets = [
  {
    title: 'Triton Kernel Code Dataset',
    desc: 'Triton kernel bodies and CUDA→Triton translation pairs for fine-tuning code models.',
    link: 'https://huggingface.co/datasets/edwixx/triton-code-dataset',
  },
  {
    title: 'Aesthetic Images',
    desc: '7.9k+ filtered high-aesthetic images for diffusion and image-text alignment models.',
    link: 'https://huggingface.co/datasets/edwixx/aesthetic-images',
  },
{
    title: 'Brazilian Portuguese TTS',
    desc: '≈150 hours of multi-speaker Brazilian Portuguese for text-to-speech synthesis.',
    link: 'https://huggingface.co/datasets/edwixx/brazilian-portuguese-TTS',
  },
  {
    title: 'Obama Voice Sample Dataset',
    desc: '25+ minutes of clean 24kHz speech from public addresses, optimized for RVC training.',
    link: 'https://huggingface.co/datasets/ModelsLab/Obama-Sample-Dataset',
  },
]

useSeoMeta({
  title: 'Datasets — Anurag Kanade',
  description: 'Open-source datasets for ML research and development.',
})
</script>
