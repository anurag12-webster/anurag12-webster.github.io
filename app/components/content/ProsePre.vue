<template>
  <div v-if="language === 'mermaid'" class="prose-mermaid" :class="{ 'prose-mermaid--wide': isWide }">
    <ClientOnly>
      <div v-if="svg" class="mermaid-diagram" :class="{ 'mermaid-diagram--wide': isWide }" v-html="svg" />
      <pre v-else class="mermaid-loading">{{ code }}</pre>
      <template #fallback>
        <pre class="mermaid-loading">{{ code }}</pre>
      </template>
    </ClientOnly>
  </div>
  <pre v-else :class="props.class"><slot /></pre>
</template>

<script setup>
const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null },
})

const svg = ref('')
// opt-in via ```mermaid wide fence meta — for diagrams that are naturally
// much wider than the prose column (multi-subgraph pipelines); these render
// at their true native size with horizontal scroll instead of being
// force-shrunk to fit, which was making their labels unreadably small.
const isWide = props.meta?.split(/\s+/).includes('wide') ?? false

const MERMAID_THEMES = {
  light: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: '14px',
    background: '#ffffff',
    primaryColor: '#f7f7f7',
    primaryTextColor: '#0a0a0a',
    primaryBorderColor: '#bbbbbb',
    lineColor: '#999999',
    secondaryColor: '#f5f5f5',
    tertiaryColor: '#ffffff',
    clusterBkg: '#f7f7f7',
    clusterBorder: '#e5e5e5',
  },
  dark: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: '14px',
    background: '#0c0c0c',
    primaryColor: '#161616',
    primaryTextColor: '#f2f1ed',
    primaryBorderColor: '#444444',
    lineColor: '#737373',
    secondaryColor: '#191919',
    tertiaryColor: '#161616',
    clusterBkg: '#161616',
    clusterBorder: '#262626',
  },
}

if (import.meta.client && props.language === 'mermaid') {
  const colorMode = useColorMode()

  async function renderMermaid() {
    const { default: mermaid } = await import('mermaid')
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'strict',
      themeVariables: MERMAID_THEMES[colorMode.value] || MERMAID_THEMES.light,
    })
    const id = `mermaid-${Math.random().toString(36).slice(2)}`
    try {
      const { svg: rendered } = await mermaid.render(id, props.code.trim())
      if (isWide) {
        // Keep mermaid's own width/height attributes — they encode the
        // diagram's true rendered size — and only drop the inline
        // style="max-width:...px" that would otherwise cap it. CSS below
        // leaves width/height alone so it renders at native size; the card
        // scrolls horizontally instead of shrinking the labels.
        svg.value = rendered.replace(/(<svg[^>]*?)\sstyle="[^"]*"/, '$1')
      } else {
        // mermaid writes an inline style="max-width:...px" plus width/height
        // attributes onto the root <svg>, which beats our external CSS and
        // keeps the diagram pinned to its small natural render size. Strip
        // them so width: 100% in the scoped styles below actually applies;
        // the viewBox mermaid always emits keeps the aspect ratio correct.
        svg.value = rendered
          .replace(/(<svg[^>]*?)\sstyle="[^"]*"/, '$1')
          .replace(/(<svg[^>]*?)\swidth="[^"]*"/, '$1')
          .replace(/(<svg[^>]*?)\sheight="[^"]*"/, '$1')
      }
    } catch (err) {
      console.error('mermaid render failed', err)
    }
  }

  onMounted(renderMermaid)
  watch(() => colorMode.value, renderMermaid)
}
</script>

<style scoped>
.prose-mermaid {
  margin: 2rem 0;
  padding: 1.25rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
}

/* Wide diagrams (marked ```mermaid wide) break out of the narrow prose
   column and render at native size instead of being force-shrunk. */
.prose-mermaid--wide {
  width: 100vw;
  max-width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  justify-content: flex-start;
}

.mermaid-diagram {
  width: 100%;
  display: flex;
  justify-content: center;
}

.mermaid-diagram :deep(svg) {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Wide variant: no width forced on the div or the svg — mermaid's own
   width/height attributes (kept intact for this case) define the real
   size, and the card scrolls horizontally for whatever doesn't fit. */
.mermaid-diagram--wide {
  width: max-content;
  justify-content: flex-start;
}

.mermaid-diagram--wide :deep(svg) {
  width: auto;
  max-width: none;
  height: auto;
}

.mermaid-loading {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--fg-subtle);
  white-space: pre-wrap;
  margin: 0;
}
</style>
