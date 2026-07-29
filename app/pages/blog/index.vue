<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Writing</h1>
      <p>Notes on ASR, TTS, speech-to-speech systems, and GPU programming.</p>
    </header>

    <ul class="post-list writing-list">
      <li v-for="post in posts" :key="post.path" class="post-item">
        <NuxtLink :to="post.path">
          <span class="post-title">{{ post.title }}</span>
          <span class="post-meta">{{ formatDate(post.date) }}</span>
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
  const d = new Date(dateStr)
  const month = d.toLocaleDateString('en-US', { month: 'short' })
  const year = String(d.getFullYear()).slice(-2)
  return `${month} '${year}`
}

useSeoMeta({
  title: 'Writing — Anurag Kanade',
  description: 'Notes on ASR, TTS, NLP, and machine learning.',
})
</script>
