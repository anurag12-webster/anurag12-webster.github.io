<template>
  <div class="rthumb" :class="{ 'rthumb-generated': !src }" :style="src ? null : coverStyle">
    <img v-if="src" :src="src" :alt="title" :loading="eager ? 'eager' : 'lazy'" decoding="async">
    <template v-else>
      <span class="rthumb-type">{{ type || 'Resource' }}</span>
      <span class="rthumb-title">{{ title }}</span>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, default: '' },
  title: { type: String, required: true },
  type: { type: String, default: '' },
  seed: { type: String, default: '' },
  eager: { type: Boolean, default: false },
})

// Deterministic gradient per resource so covers without a thumbnail still look distinct.
const coverStyle = computed(() => {
  const s = props.seed || props.title
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  const hue = h % 360
  const hue2 = (hue + 40 + (h % 60)) % 360
  return {
    background: `radial-gradient(120% 120% at 0% 0%, hsl(${hue} 85% 62%) 0%, transparent 60%),
                 radial-gradient(120% 120% at 100% 100%, hsl(${hue2} 80% 55%) 0%, transparent 55%),
                 hsl(${hue} 40% 14%)`,
  }
})
</script>

<style scoped>
.rthumb {
  position: relative;
  aspect-ratio: 16 / 10;
  width: 100%;
  overflow: hidden;
  background: var(--bg-subtle);
}

.rthumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.rthumb-generated {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.35rem;
  padding: 1.1rem 1.15rem;
  color: #fff;
}

.rthumb-type {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
}

.rthumb-title {
  font-size: 1.15rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-wrap: balance;
}
</style>
