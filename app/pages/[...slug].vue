<script setup>
throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
</script>

<template>
  <div class="page-container">
    <div class="not-found">
      <div class="not-found-code">404</div>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <NuxtLink to="/" class="btn btn-secondary">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back home
      </NuxtLink>
    </div>
  </div>
</template>
