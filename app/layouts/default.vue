<template>
  <div :class="{ dark: isDark }">
    <nav>
      <div class="nav-inner">
        <NuxtLink to="/" class="nav-logo"><strong>Anurag</strong> Kanade</NuxtLink>
        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <ul class="nav-links">
            <li><NuxtLink to="/blog" :class="{ active: route.path.startsWith('/blog') }">Blog</NuxtLink></li>
            <li><NuxtLink to="/datasets" :class="{ active: route.path === '/datasets' }">Datasets</NuxtLink></li>
          </ul>
          <button class="theme-toggle" @click="isDark = !isDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <!-- Sun icon -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <line x1="12" y1="2" x2="12" y2="4"/>
              <line x1="12" y1="20" x2="12" y2="22"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="2" y1="12" x2="4" y2="12"/>
              <line x1="20" y1="12" x2="22" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <!-- Moon icon -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <main>
      <slot />
    </main>

  </div>
</template>

<script setup>
const route = useRoute()
const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
})

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
</script>
