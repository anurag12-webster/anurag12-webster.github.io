<template>
  <div class="page-container">
    <NuxtLink to="/resources" class="back-link">← All resources</NuxtLink>

    <article v-if="resource" class="rd">
      <div class="rd-media">
        <ResourceThumb :src="resource.thumbnail" :title="resource.title" :type="resource.type" :seed="resource.stem" eager />
      </div>

      <div class="rd-info">
        <div class="rd-meta">
          <span v-if="resource.type">{{ resource.type }}</span>
          <span v-if="resource.size">{{ resource.size }}</span>
          <span>{{ formatResourceDate(resource.date) }}</span>
        </div>
        <h1>{{ resource.title }}</h1>
        <p class="rd-desc">{{ resource.description }}</p>

        <div class="rd-actions">
          <ResourceDownload :resource="resource" />
          <button type="button" class="btn btn-secondary" @click="share">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            {{ copied ? 'Link copied' : 'Share' }}
          </button>
        </div>

        <div v-if="resource.highlights?.length" class="rd-highlights">
          <div class="section-label">What's inside</div>
          <ul>
            <li v-for="h in resource.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <div v-if="resource.tags?.length" class="rd-tags">
          <span v-for="t in resource.tags" :key="t" class="rd-tag">{{ t }}</span>
        </div>
      </div>
    </article>

    <section v-if="more.length" class="rd-more">
      <div class="section-label">More resources</div>
      <ul class="rd-more-grid">
        <li v-for="r in more" :key="r.stem">
          <NuxtLink :to="`/resources/${resourceSlug(r)}`" class="rd-more-card">
            <ResourceThumb :src="r.thumbnail" :title="r.title" :type="r.type" :seed="r.stem" />
            <span class="rd-more-title">{{ r.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { formatResourceDate, resourceSlug, useResources } from '~/composables/useResources'

const route = useRoute()
const slug = route.params.slug

const { data: resources } = await useResources()
const resource = computed(() => resources.value?.find(r => resourceSlug(r) === slug))

if (!resource.value) {
  throw createError({ statusCode: 404, statusMessage: 'Resource not found', fatal: true })
}

const more = computed(() => (resources.value || []).filter(r => r.stem !== resource.value.stem).slice(0, 3))

const site = useSiteConfig()
const absolute = path => (/^https?:\/\//.test(path) ? path : `${site.url}${path}`)

useSeoMeta({
  title: `${resource.value.title} — Resources`,
  description: resource.value.description,
  ogTitle: resource.value.title,
  ogDescription: resource.value.description,
  ogImage: resource.value.thumbnail ? absolute(resource.value.thumbnail) : undefined,
  twitterCard: 'summary_large_image',
})

const copied = ref(false)
async function share() {
  const url = window.location.href
  if (navigator.share) {
    try {
      await navigator.share({ title: resource.value.title, url })
      return
    } catch {
      // cancelled — fall through to copying
    }
  }
  try {
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // clipboard blocked; nothing else to do
  }
}
</script>

<style scoped>
.rd {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: start;
  margin-top: 1.5rem;
}

.rd-media {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.rd-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fg-subtle);
  margin-bottom: 0.6rem;
}

.rd h1 {
  font-size: clamp(1.6rem, 3.5vw, 2.1rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  text-wrap: balance;
}

.rd-desc {
  color: var(--fg-muted);
  font-size: 0.975rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.rd-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.rd-actions :deep(.btn) {
  padding: 0.7rem 1.15rem;
}

.rd-highlights {
  margin-bottom: 1.5rem;
}

.rd-highlights ul {
  margin-top: 0.6rem;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.rd-highlights li {
  margin-bottom: 0.3rem;
}

.rd-highlights li::marker {
  color: var(--fg-subtle);
}

.rd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.rd-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  color: var(--fg-muted);
}

.rd-more {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.rd-more-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.rd-more-card {
  display: block;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}

.rd-more-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.rd-more-title {
  display: block;
  padding: 0.7rem 0.9rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-top: 1px solid var(--border);
}

@media (max-width: 800px) {
  .rd {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .rd-actions :deep(.btn) {
    flex: 1;
    justify-content: center;
  }
}
</style>
