<template>
  <div>
    <div class="reading-progress" :style="{ width: progress + '%' }" />

    <div class="page-container">
      <NuxtLink to="/blog" class="back-link">← Writing</NuxtLink>

      <div v-if="post">
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-header-meta">
            <span>{{ formatDate(post.date) }}</span>
            <template v-if="post.author">
              <span class="meta-sep">·</span>
              <span>{{ post.author }}</span>
            </template>
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
              <svg v-if="!copied" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <svg v-else width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {{ copied ? 'Copied' : 'Copy BibTeX' }}
            </button>
          </div>
          <pre class="cite-block">{{ bibtex }}</pre>
        </section>
      </div>
    </div>

    <aside v-if="toc.length >= 3" class="post-toc" aria-label="Table of contents">
      <span class="section-label">On this page</span>
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a
            :href="'#' + item.id"
            :class="['toc-' + item.depth, { 'toc-active': activeId === item.id }]"
            @click.prevent="scrollTo(item.id)"
          >{{ item.text }}</a>
        </li>
      </ul>
    </aside>
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

/* Table of contents from the post body (h2 + h3) */
const toc = computed(() => {
  const items = post.value?.body?.toc?.links ?? []
  return items
    .filter(l => l.depth === 2 || l.depth === 3)
    .map(l => ({ id: l.id, text: l.text, depth: l.depth === 3 ? 'h3' : 'h2' }))
})

/* Reading progress bar */
const progress = ref(0)
if (import.meta.client) {
  const onScroll = () => {
    const el = document.documentElement
    const total = el.scrollHeight - el.clientHeight
    progress.value = total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onMounted(onScroll)
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}

/* Scroll-spy: highlight the TOC entry for the section in view */
const activeId = ref('')
let observer = null

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  activeId.value = id
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' })
}

onMounted(() => {
  const ids = toc.value.map(t => t.id)
  if (!ids.length) return
  const headings = ids.map(id => document.getElementById(id)).filter(Boolean)

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeId.value = entry.target.id
    }
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 })

  headings.forEach(h => observer.observe(h))
})

onUnmounted(() => observer?.disconnect())

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
