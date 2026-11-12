<template>
  <a
    :href="resource.download"
    class="btn btn-primary"
    :class="{ 'btn-sm': small }"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    :download="external ? null : ''"
  >
    <svg v-if="isLink" :width="small ? 12 : 14" :height="small ? 12 : 14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
    <svg v-else :width="small ? 12 : 14" :height="small ? 12 : 14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
    {{ label }}
  </a>
</template>

<script setup>
import { isExternal } from '~/composables/useResources'

const props = defineProps({
  resource: { type: Object, required: true },
  small: { type: Boolean, default: false },
})

const external = computed(() => isExternal(props.resource.download))
// Notion pages, websites, etc. open rather than download — show an arrow instead of a tray icon.
const isLink = computed(() => ['link', 'notion', 'website', 'course', 'video'].includes((props.resource.type || '').toLowerCase()))
const label = computed(() => props.resource.cta || (isLink.value ? 'Open' : 'Download'))
</script>
