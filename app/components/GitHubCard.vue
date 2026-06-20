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
              <div v-if="profile.bio" class="gh-bio">{{ profile.bio }}</div>
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
              <div class="gh-skel-line" style="width: 70%" />
              <div class="gh-skel-line" style="width: 45%" />
            </div>
          </div>
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

    // group into weeks (chunks of 7), take last 26 weeks
    const grouped = []
    for (let i = 0; i < all.length; i += 7) {
      grouped.push(all.slice(i, i + 7))
    }
    weeks.value = grouped.slice(-26)
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
  bottom: calc(100% + 10px);
  left: 0;
  width: 280px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px;
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
  pointer-events: none;
}

.dark .gh-card {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Transition */
.ghcard-enter-active,
.ghcard-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.ghcard-enter-from,
.ghcard-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.97);
}

/* Top row */
.gh-top {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
}

.gh-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
  flex-shrink: 0;
}

.gh-info {
  min-width: 0;
}

.gh-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--fg);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.gh-login {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--fg-subtle);
  margin-top: 1px;
}

.gh-bio {
  font-size: 0.72rem;
  color: var(--fg-muted);
  margin-top: 4px;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Meta stats */
.gh-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 6px 0;
}

.gh-meta span {
  font-family: var(--font-mono);
  font-size: 0.65rem;
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
  width: 7px;
  height: 7px;
  border-radius: 1.5px;
  background: var(--border);
}

/* Light mode levels */
.gh-day[data-level="1"] { background: #9be9a8; }
.gh-day[data-level="2"] { background: #40c463; }
.gh-day[data-level="3"] { background: #30a14e; }
.gh-day[data-level="4"] { background: #216e39; }

/* Dark mode levels */
.dark .gh-day[data-level="0"] { background: #161b22; }
.dark .gh-day[data-level="1"] { background: #0e4429; }
.dark .gh-day[data-level="2"] { background: #006d32; }
.dark .gh-day[data-level="3"] { background: #26a641; }
.dark .gh-day[data-level="4"] { background: #39d353; }

.gh-graph-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--fg-subtle);
  margin-top: 6px;
}

/* Skeleton */
.gh-skeleton {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.gh-skel-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--border);
  flex-shrink: 0;
  animation: pulse 1.2s ease-in-out infinite;
}

.gh-skel-lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}

.gh-skel-line {
  height: 10px;
  border-radius: 3px;
  background: var(--border);
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>
