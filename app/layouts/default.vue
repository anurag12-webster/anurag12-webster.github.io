<template>
  <div>
    <nav :class="{ 'nav-scrolled': scrolled }">
      <div class="nav-inner">
        <NuxtLink to="/" class="nav-name">Anurag Kanade</NuxtLink>

        <ul class="nav-links">
          <li><NuxtLink to="/" :class="{ active: route.path === '/' }">Home</NuxtLink></li>
          <li><NuxtLink to="/blog" :class="{ active: route.path.startsWith('/blog') }">Writing</NuxtLink></li>
          <li><NuxtLink to="/work" :class="{ active: route.path === '/work' }">Work</NuxtLink></li>
        </ul>

        <div class="nav-right">
          <a href="https://drive.google.com/file/d/11PAI9DTdlqDPHTIP5WzOGTDWdn9w0hPG/view?usp=sharing" download="Anurag-Kanade-Resume.pdf" class="btn btn-secondary btn-sm nav-resume-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>

          <button
            class="theme-toggle"
            type="button"
            :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
          >
            <svg v-if="colorMode.value === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            class="mobile-menu-btn"
            type="button"
            aria-label="Toggle menu"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <svg v-if="!menuOpen" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <Transition name="menu">
        <div v-if="menuOpen" class="mobile-menu">
          <NuxtLink to="/" :class="{ active: route.path === '/' }" @click="menuOpen = false">Home</NuxtLink>
          <NuxtLink to="/blog" :class="{ active: route.path.startsWith('/blog') }" @click="menuOpen = false">Writing</NuxtLink>
          <NuxtLink to="/work" :class="{ active: route.path === '/work' }" @click="menuOpen = false">Work</NuxtLink>
          <a href="https://drive.google.com/file/d/11PAI9DTdlqDPHTIP5WzOGTDWdn9w0hPG/view?usp=sharing" download="Anurag-Kanade-Resume.pdf" class="mobile-resume" @click="menuOpen = false">
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </Transition>
    </nav>

    <main>
      <slot />
    </main>

    <footer v-if="route.path !== '/'">
      <div class="footer-inner">
        <span class="footer-copy">© {{ year }} Anurag Kanade</span>
        <div class="footer-links">
          <a href="https://github.com/anurag12-webster" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://huggingface.co/edwixx" target="_blank" rel="noopener" aria-label="Hugging Face">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </a>
          <a href="https://x.com/edwixxxx" target="_blank" rel="noopener" aria-label="X (Twitter)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/anurag-kanade/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
          <a href="mailto:anuragkanade54@gmail.com" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute()
const colorMode = useColorMode()
const year = new Date().getFullYear()

const menuOpen = ref(false)
watch(() => route.path, () => { menuOpen.value = false })

const scrolled = ref(false)
if (import.meta.client) {
  const onScroll = () => { scrolled.value = window.scrollY > 8 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}
</script>
