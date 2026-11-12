<template>
  <div>
    <!-- Standalone shell for /resources: no links out to the rest of the site. -->
    <nav :class="{ 'nav-scrolled': scrolled }">
      <div class="nav-inner">
        <NuxtLink to="/resources" class="nav-name">Anurag Kanade</NuxtLink>

        <div class="nav-right">
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
        </div>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer>
      <div class="footer-inner">
        <span class="footer-copy">© {{ year }} Anurag Kanade</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const year = new Date().getFullYear()

const scrolled = ref(false)
if (import.meta.client) {
  const onScroll = () => { scrolled.value = window.scrollY > 8 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}
</script>
