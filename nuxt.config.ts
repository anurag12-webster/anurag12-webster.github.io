export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-og-image', '@vercel/analytics/nuxt', '@nuxtjs/color-mode'],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  site: {
    url: 'https://anuragkanade.com',
    name: 'Anurag Kanade',
  },


  css: ['~/assets/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Anurag Kanade',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'I work on ASR, TTS, NLP, and Machine Learning.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@300;400&display=swap',
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
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
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
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },

  // Short link for Instagram bios/captions: anuragkanade.com/r
  routeRules: {
    '/r': { redirect: '/resources' },
  },

  nitro: {
    prerender: {
      routes: [
        '/resources',
        '/r',
        '/blog/gpu-architecture-notes',
        '/blog/neural-audio-codec-rvq',
        '/blog/shrinking-full-duplex-speech',
        '/blog/teaching-models-to-write-kernels',
        '/blog/tpu-silicon-engine-ai-training',
        '/blog/tts-datasets',
      ],
    },
  },
})
