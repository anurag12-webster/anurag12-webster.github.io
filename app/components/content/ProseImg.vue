<template>
  <figure class="prose-figure">
    <img :src="src" :alt="alt" :width="width" :height="height" />
    <figcaption v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  width: String,
  height: String,
})
</script>
