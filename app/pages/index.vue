<template>
  <div class="home">
    <div class="container">
      <p>Hi,</p>
      <p>I'm Anurag. I work in audio AI, mostly ASR and TTS. Lately obsessed with speech-to-speech models. I write here when something clicks.</p>
      <p>Hit me up if you're building something in audio.</p>
      <ul class="social-list">
        <li><a href="https://github.com/anurag12-webster" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://huggingface.co/edwixx" target="_blank" rel="noopener">HuggingFace</a></li>
        <li><a href="https://x.com/edwixxxx" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/anurag-kanade/" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="mailto:anuragkanade54@gmail.com">Email</a></li>
      </ul>

    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: 'Anurag Kanade',
  description: 'I work on ASR, TTS, NLP, and Machine Learning.',
})

defineOgImageComponent('BlogPost', {
  title: 'Anurag Kanade',
  category: 'ASR · TTS · ML',
})
</script>
