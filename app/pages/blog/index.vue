<template>
  <div class="blog-container">
    <ul class="post-list">
      <li v-for="post in posts" :key="post.path" class="post-item">
        <NuxtLink :to="post.path">
          <span class="post-meta">{{ formatDate(post.date) }}</span>
          <span class="post-title">{{ post.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

useSeoMeta({
  title: 'Blog — Anurag Kanade',
  description: 'Notes on ASR, TTS, NLP, and machine learning.',
})
</script>
