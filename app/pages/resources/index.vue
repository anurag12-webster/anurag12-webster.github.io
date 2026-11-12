<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Resources</h1>
      <p>Free notes, cheatsheets, datasets and code I share on Instagram — grab whatever's useful.</p>
    </header>

    <div v-if="resources?.length" class="res-toolbar">
      <label class="res-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input v-model="query" type="search" placeholder="Search resources" aria-label="Search resources">
      </label>

      <div v-if="allTags.length" class="res-tags" role="group" aria-label="Filter by tag">
        <button type="button" class="res-tag" :class="{ active: !activeTag }" @click="activeTag = ''">All</button>
        <button
          v-for="tag in allTags"
          :key="tag"
          type="button"
          class="res-tag"
          :class="{ active: activeTag === tag }"
          @click="activeTag = activeTag === tag ? '' : tag"
        >{{ tag }}</button>
      </div>
    </div>

    <ul v-if="filtered.length" class="res-grid">
      <li v-for="(r, i) in filtered" :key="r.stem" class="res-card">
        <NuxtLink :to="`/resources/${resourceSlug(r)}`" class="res-card-link">
          <div class="res-card-media">
            <ResourceThumb :src="r.thumbnail" :title="r.title" :type="r.type" :seed="r.stem" :eager="i < 3" />
            <span v-if="r.featured" class="res-badge">Featured</span>
            <span v-if="r.draft" class="res-badge res-badge-draft">Draft</span>
          </div>
          <div class="res-card-body">
            <div class="res-card-meta">
              <span v-if="r.type">{{ r.type }}</span>
              <span v-if="r.size">{{ r.size }}</span>
            </div>
            <h2 class="res-card-title">{{ r.title }}</h2>
            <p class="res-card-desc">{{ r.description }}</p>
          </div>
        </NuxtLink>
        <div class="res-card-actions">
          <ResourceDownload :resource="r" small />
          <NuxtLink :to="`/resources/${resourceSlug(r)}`" class="res-details">Details →</NuxtLink>
        </div>
      </li>
    </ul>

    <p v-else-if="resources?.length" class="res-empty">Nothing matches “{{ query || activeTag }}”.</p>
    <p v-else class="res-empty">New resources are on the way — check back soon.</p>
  </div>
</template>

<script setup>
import { resourceSlug, useResources } from '~/composables/useResources'

// Resources visitors (from Instagram) get a standalone layout with no links to the rest of the site.
definePageMeta({ layout: 'resources' })

const { data: resources } = await useResources()

const query = ref('')
const activeTag = ref('')

const allTags = computed(() => {
  const counts = new Map()
  for (const r of resources.value || []) for (const t of r.tags || []) counts.set(t, (counts.get(t) || 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t)
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return (resources.value || []).filter((r) => {
    if (activeTag.value && !(r.tags || []).includes(activeTag.value)) return false
    if (!q) return true
    return [r.title, r.description, r.type, ...(r.tags || [])].join(' ').toLowerCase().includes(q)
  })
})

useSeoMeta({
  title: 'Resources — Anurag Kanade',
  description: 'Free notes, cheatsheets, datasets and code on ML, speech and GPUs.',
  ogTitle: 'Free ML resources — Anurag Kanade',
  ogDescription: 'Free notes, cheatsheets, datasets and code on ML, speech and GPUs.',
})
</script>

<style scoped>
.res-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
  margin-bottom: 1.75rem;
}

.res-search {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  height: 36px;
  width: min(100%, 280px);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  color: var(--fg-subtle);
  background: var(--bg);
  transition: border-color var(--duration) var(--ease-out);
}

.res-search:focus-within {
  border-color: var(--fg-muted);
}

.res-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--fg);
  font: inherit;
  font-size: 0.875rem;
}

.res-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.res-tag {
  font-size: 0.78rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--bg);
  color: var(--fg-muted);
  cursor: pointer;
  transition: all var(--duration) var(--ease-out);
}

.res-tag:hover {
  color: var(--fg);
  border-color: var(--border-hover);
}

.res-tag.active {
  background: var(--fg);
  border-color: var(--fg);
  color: var(--bg);
}

.res-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.res-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  overflow: hidden;
  transition: border-color 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}

.res-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.res-card:hover :deep(.rthumb img) {
  transform: scale(1.03);
}

.res-card-link {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.res-card-media {
  position: relative;
  border-bottom: 1px solid var(--border);
}

.res-badge {
  position: absolute;
  top: 0.65rem;
  left: 0.65rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  backdrop-filter: blur(6px);
}

.res-badge-draft {
  left: auto;
  right: 0.65rem;
  background: #b45309;
}

.res-card-body {
  padding: 1rem 1.1rem 0.5rem;
}

.res-card-meta {
  display: flex;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fg-subtle);
  margin-bottom: 0.4rem;
}

.res-card-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin-bottom: 0.35rem;
}

.res-card-desc {
  font-size: 0.85rem;
  color: var(--fg-muted);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.res-card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1.1rem 1.1rem;
}

.res-details {
  font-size: 0.8rem;
  color: var(--fg-muted);
  transition: color var(--duration) var(--ease-out);
}

.res-details:hover {
  color: var(--fg);
}

.res-empty {
  color: var(--fg-muted);
  font-size: 0.9rem;
  padding: 2rem 0;
}

@media (max-width: 600px) {
  .res-grid {
    grid-template-columns: 1fr;
  }

  .res-search {
    width: 100%;
  }
}
</style>
