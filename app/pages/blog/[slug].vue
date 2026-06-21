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

      <section v-if="post.citations && post.citations.length" class="citations">
        <div class="section-label">References</div>
        <ol class="citations-list">
          <li v-for="(cite, i) in post.citations" :key="i">
            <a v-if="cite.url" :href="cite.url" target="_blank" rel="noopener noreferrer">{{ cite.text }}</a>
            <span v-else>{{ cite.text }}</span>
          </li>
        </ol>
      </section>

      <section class="cite-this">
        <div class="cite-this-header">
          <div class="section-label">Cite this post</div>
          <button class="cite-copy" :class="{ copied }" @click="copy">
            {{ copied ? 'Copied!' : 'Copy BibTeX' }}
          </button>
        </div>
        <pre class="cite-block">{{ bibtex }}</pre>
      </section>
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

const year = post.value?.date ? new Date(post.value.date).getFullYear() : ''
const authorLast = post.value?.author ? post.value.author.split(' ').at(-1).toLowerCase() : 'kanade'
const bibtexKey = `${authorLast}${year}${slug.replace(/-/g, '').slice(0, 10)}`
const postUrl = `https://anuragkanade.com/blog/${slug}`

const bibtex = `@misc{${bibtexKey},
  author  = {${post.value?.author ?? 'Anurag Kanade'}},
  title   = {${post.value?.title ?? ''}},
  year    = {${year}},
  url     = {${postUrl}},
  note    = {Blog post}
}`

const copied = ref(false)
async function copy() {
  await navigator.clipboard.writeText(bibtex)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
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
