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
      </div>
    </nav>

    <main>
      <slot />
    </main>

  </div>
</template>

<script setup>
const route = useRoute()
</script>
