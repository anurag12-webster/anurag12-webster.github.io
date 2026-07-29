<template>
  <div class="home">
    <div class="container">
      <h1 class="home-name">Anurag Kanade</h1>

      <p class="home-bio">
        I work in audio ML — ASR, TTS, and speech-to-speech systems. Lately I'm most interested in speech-to-speech models and evals, with a bit of GPU programming on the side.
      </p>

      <p class="home-bio">
        I also publish open-source audio <NuxtLink to="/models">models</NuxtLink> and <NuxtLink to="/datasets">datasets</NuxtLink>.
      </p>

      <p class="home-contact">
        Building something in speech or ML? <a href="mailto:anuragkanade54@gmail.com">Say hi.</a>
      </p>

      <div class="home-actions">
        <a href="https://drive.google.com/file/d/11PAI9DTdlqDPHTIP5WzOGTDWdn9w0hPG/view?usp=sharing" download="Anurag-Kanade-Resume.pdf" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
        <NuxtLink to="/blog" class="btn btn-secondary">
          Read my writing
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </NuxtLink>
      </div>

      <div class="home-divider"></div>

      <ul class="social-list">
        <li>
          <GitHubCard>
            <a href="https://github.com/anurag12-webster" target="_blank" rel="noopener">
              GitHub
              <svg class="ext-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </GitHubCard>
        </li>
        <li>
          <a href="https://huggingface.co/edwixx" target="_blank" rel="noopener">
            HuggingFace
            <svg class="ext-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://x.com/edwixxxx" target="_blank" rel="noopener">
            Twitter / X
            <svg class="ext-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anurag-kanade/" target="_blank" rel="noopener">
            LinkedIn
            <svg class="ext-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </li>
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
