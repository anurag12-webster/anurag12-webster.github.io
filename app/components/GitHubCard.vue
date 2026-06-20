<template>
  <span class="gh-wrap" @mouseenter="onEnter" @mouseleave="show = false">
    <slot />
    <Transition name="ghcard">
      <div v-if="show" class="gh-card">
        <template v-if="profile">
          <div class="gh-top">
            <img :src="profile.avatar_url" class="gh-avatar" :alt="profile.login" />
            <div class="gh-info">
              <div class="gh-name">{{ profile.name || profile.login }}</div>
              <div class="gh-login">@{{ profile.login }}</div>
            </div>
          </div>

          <div class="gh-meta">
            <span>{{ profile.public_repos }} repos</span>
            <span>{{ profile.followers }} followers</span>
          </div>

          <div v-if="weeks.length" class="gh-graph">
            <div v-for="(week, wi) in weeks" :key="wi" class="gh-week">
              <div
                v-for="(day, di) in week"
                :key="di"
                class="gh-day"
                :data-level="day.level"
              />
            </div>
          </div>

          <div class="gh-graph-label">{{ totalContributions.toLocaleString() }} contributions this year</div>
        </template>

        <template v-else>
          <div class="gh-skeleton">
            <div class="gh-skel-avatar" />
            <div class="gh-skel-lines">
              <div class="gh-skel-line" style="width: 65%" />
              <div class="gh-skel-line" style="width: 40%" />
            </div>
          </div>
          <div class="gh-skel-graph" />
        </template>
      </div>
    </Transition>
  </span>
</template>

<script setup>
const USERNAME = 'anurag12-webster'

const show = ref(false)
const profile = ref(null)
const weeks = ref([])
const totalContributions = ref(0)
let fetched = false

async function onEnter() {
  show.value = true
  if (fetched) return
  fetched = true

  const [profileData, contribData] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`).then(r => r.json()),
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`).then(r => r.json()),
  ])

  profile.value = profileData

  if (contribData?.contributions) {
    const all = contribData.contributions
    totalContributions.value = all.reduce((s, d) => s + d.count, 0)
    const grouped = []
    for (let i = 0; i < all.length; i += 7) grouped.push(all.slice(i, i + 7))
    weeks.value = grouped.slice(-20)
  }
}
</script>

<style scoped>
.gh-wrap {
  position: relative;
  display: inline-block;
}

.gh-card {
  position: absolute;
  top: 50%;
  left: calc(100% + 14px);
  transform: translateY(-50%);
  width: 240px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px;
  z-index: 100;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  pointer-events: none;
}

.dark .gh-card {
  box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3);
}

/* Arrow pointing left */
.gh-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -5px;
  transform: translateY(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: var(--bg);
  border-left: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* Transition — slides in from left */
.ghcard-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.ghcard-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.ghcard-enter-from {
  opacity: 0;
  transform: translateY(-50%) translateX(-6px) scale(0.97);
}
.ghcard-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(-4px) scale(0.98);
}

/* Top row */
.gh-top {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 9px;
}

.gh-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border);
  flex-shrink: 0;
}

.gh-name {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--fg);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.gh-login {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--fg-subtle);
  margin-top: 1px;
}

/* Stats */
.gh-meta {
  display: flex;
  gap: 10px;
  padding: 6px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: 9px;
}

.gh-meta span {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--fg-subtle);
}

/* Contribution graph */
.gh-graph {
  display: flex;
  gap: 2px;
}

.gh-week {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.gh-day {
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--border);
}

.gh-day[data-level="1"] { background: #9be9a8; }
.gh-day[data-level="2"] { background: #40c463; }
.gh-day[data-level="3"] { background: #30a14e; }
.gh-day[data-level="4"] { background: #216e39; }

.dark .gh-day[data-level="0"] { background: #1a1f27; }
.dark .gh-day[data-level="1"] { background: #0e4429; }
.dark .gh-day[data-level="2"] { background: #006d32; }
.dark .gh-day[data-level="3"] { background: #26a641; }
.dark .gh-day[data-level="4"] { background: #39d353; }

.gh-graph-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--fg-subtle);
  margin-top: 5px;
}

/* Skeleton */
.gh-skeleton {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 9px;
}

.gh-skel-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--border);
  flex-shrink: 0;
  animation: pulse 1.2s ease-in-out infinite;
}

.gh-skel-lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.gh-skel-line {
  height: 8px;
  border-radius: 3px;
  background: var(--border);
  animation: pulse 1.2s ease-in-out infinite;
}

.gh-skel-graph {
  height: 52px;
  border-radius: 4px;
  background: var(--border);
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
</style>
