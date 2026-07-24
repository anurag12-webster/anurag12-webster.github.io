<template>
  <div>
    <nav>
      <div class="nav-inner">
        <ul class="nav-links">
          <li><NuxtLink to="/" :class="{ active: route.path === '/' }">Home</NuxtLink></li>
          <li><NuxtLink to="/blog" :class="{ active: route.path.startsWith('/blog') }">Writing</NuxtLink></li>
          <li><NuxtLink to="/datasets" :class="{ active: route.path === '/datasets' }">Datasets</NuxtLink></li>
          <li><NuxtLink to="/models" :class="{ active: route.path === '/models' }">Models</NuxtLink></li>
        </ul>

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
    </nav>

    <main>
      <slot />
    </main>

  </div>
</template>

<script setup>
const route = useRoute()
const colorMode = useColorMode()
</script>

<style scoped>
.nav-inner {
  justify-content: space-between;
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.25rem;
  margin: -0.25rem;
  color: var(--fg-muted);
  cursor: pointer;
  transition: color 0.15s;
  line-height: 0;
}

.theme-toggle:hover {
  color: var(--fg);
}
</style>
