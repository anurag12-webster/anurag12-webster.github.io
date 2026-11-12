// Shared helpers for the /resources section.

export function resourceSlug(item) {
  return item.stem.split('/').pop()
}

export function isExternal(url) {
  return /^https?:\/\//.test(url)
}

export function sortResources(items) {
  return [...items]
    .filter(r => !r.draft || import.meta.dev)
    .sort((a, b) => {
      if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1
      return new Date(b.date) - new Date(a.date)
    })
}

export function useResources() {
  return useAsyncData('resources', async () => {
    const items = await queryCollection('resources').all()
    return sortResources(items)
  })
}

export function formatResourceDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
