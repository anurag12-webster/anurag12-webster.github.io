export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-og-image'],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',

  site: {
    url: 'https://anuragkanade.com',
    name: 'Anurag Kanade',
  },


  css: ['~/assets/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Anurag Kanade',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'I work on ASR, TTS, NLP, and Machine Learning.' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Mono:wght@300;400&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
        },
      ],
    },
  },

  content: {
    highlight: {
      theme: 'github-light',
      langs: ['python', 'javascript', 'typescript', 'bash', 'json', 'yaml', 'c', 'cpp'],
    },
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {},
        },
      },
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/blog/gpu-architecture-notes',
        '/blog/neural-audio-codec-rvq',
        '/blog/teaching-models-to-write-kernels',
        '/blog/tpu-silicon-engine-ai-training',
        '/blog/tts-datasets',
      ],
    },
  },
})
