<template>
  <div class="container">
    <NuxtLink to="/blog" class="back-link">← Blog</NuxtLink>

    <div v-if="post">
      <header class="post-header">
        <h1>{{ post.title }}</h1>
        <div class="post-header-meta">
          <span>{{ formatDate(post.date) }}</span>
          <span v-if="post.author">{{ post.author }}</span>
        </div>
      </header>

      <div class="prose">
        <ContentRenderer :value="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useSeoMeta({
  title: () => post.value ? `${post.value.title} — Anurag Kanade` : 'Anurag Kanade',
  description: () => post.value?.description,
})

defineOgImageComponent('BlogPost', {
  title: post.value?.title ?? '',
  category: post.value?.categories?.[0] ?? '',
})
</script>
