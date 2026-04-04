<script setup>
// Redirect unknown routes to 404
throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
</script>

<template>
  <div />
</template>
