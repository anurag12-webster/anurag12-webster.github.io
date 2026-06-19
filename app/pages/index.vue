<template>
  <div class="home">
    <div class="container">
      <h1 class="home-name">Anurag Kanade</h1>
      <p class="home-role">Audio AI — ASR, TTS, speech-to-speech.</p>

      <p class="home-bio">
        I work on making machines listen and speak. Lately deep in speech-to-speech models and the weird edge cases that break them. I write here when something clicks.
      </p>

      <p class="home-contact">
        Building something in audio? <a href="mailto:anuragkanade54@gmail.com">Say hi.</a>
      </p>

      <ul class="social-list">
        <li><a href="https://github.com/anurag12-webster" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://huggingface.co/edwixx" target="_blank" rel="noopener">HuggingFace</a></li>
        <li><a href="https://x.com/edwixxxx" target="_blank" rel="noopener">Twitter / X</a></li>
        <li><a href="https://www.linkedin.com/in/anurag-kanade/" target="_blank" rel="noopener">LinkedIn</a></li>
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
