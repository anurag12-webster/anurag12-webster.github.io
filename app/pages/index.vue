<template>
  <div class="home">
    <div class="container">
      <h1 class="home-name">Anurag Kanade</h1>

      <p class="home-bio">
        Currently building real-time voice AI — low-latency ASR/TTS pipelines and LLM inference serving speech agents to 100k+ daily requests.
      </p>

      <p class="home-bio">
        I also publish open-source <NuxtLink to="/models">models</NuxtLink> and <NuxtLink to="/datasets">datasets</NuxtLink> for speech and language research.
      </p>

      <p class="home-bio">
        Started out as a Python developer intern at CKMVigil Technologies, building medical-imaging pipelines.
      </p>

      <p class="home-contact">
        Building something in speech or ML? <a href="mailto:anuragkanade54@gmail.com">Say hi.</a>
      </p>

      <ul class="social-list">
        <li>
          <GitHubCard>
            <a href="https://github.com/anurag12-webster" target="_blank" rel="noopener">GitHub</a>
          </GitHubCard>
        </li>
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
