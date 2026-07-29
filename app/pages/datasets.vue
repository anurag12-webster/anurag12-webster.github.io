<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Datasets</h1>
      <p>Open-source datasets for ML research and development, published on Hugging Face.</p>
    </header>

    <ul class="post-list writing-list">
      <li v-for="dataset in datasets" :key="dataset.title" class="post-item dataset-item">
        <a :href="dataset.link" target="_blank" rel="noopener noreferrer">
          <span class="post-title-row">
            <span class="post-title">{{ dataset.title }}</span>
            <svg class="ext-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
          <span class="dataset-desc">{{ dataset.desc }}</span>
        </a>
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
  {
    title: 'Speech Dataset International',
    desc: 'Multilingual speech dataset for TTS and speech synthesis research.',
    link: 'https://huggingface.co/datasets/edwixx/Speech-Dataset-International',
  },
]

useSeoMeta({
  title: 'Datasets — Anurag Kanade',
  description: 'Open-source datasets for ML research and development.',
})
</script>
