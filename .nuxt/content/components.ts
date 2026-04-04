const pickExport = (mod, exportName, componentName, path) => {
  const resolved = exportName === 'default' ? mod?.default : mod?.[exportName]
  if (!resolved) {
    throw new Error(`[nuxt-content] Missing export "${exportName}" for component "${componentName}" in "${path}".`)
  }
  return resolved
}
export const localComponentLoaders = {
  Alert: () => import("./../../app/components/Alert.vue").then(m => pickExport(m, "default", "Alert", "./../../app/components/Alert.vue")),
  Counter: () => import("./../../app/components/Counter.vue").then(m => pickExport(m, "default", "Counter", "./../../app/components/Counter.vue")),
  NuxtWelcome: () => import("./../../node_modules/nuxt/dist/app/components/welcome.vue").then(m => pickExport(m, "default", "NuxtWelcome", "./../../node_modules/nuxt/dist/app/components/welcome.vue")),
  NuxtLayout: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-layout").then(m => pickExport(m, "default", "NuxtLayout", "./../../node_modules/nuxt/dist/app/components/nuxt-layout")),
  NuxtErrorBoundary: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").then(m => pickExport(m, "default", "NuxtErrorBoundary", "./../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")),
  ClientOnly: () => import("./../../node_modules/nuxt/dist/app/components/client-only").then(m => pickExport(m, "default", "ClientOnly", "./../../node_modules/nuxt/dist/app/components/client-only")),
  DevOnly: () => import("./../../node_modules/nuxt/dist/app/components/dev-only").then(m => pickExport(m, "default", "DevOnly", "./../../node_modules/nuxt/dist/app/components/dev-only")),
  ServerPlaceholder: () => import("./../../node_modules/nuxt/dist/app/components/server-placeholder").then(m => pickExport(m, "default", "ServerPlaceholder", "./../../node_modules/nuxt/dist/app/components/server-placeholder")),
  NuxtLink: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-link").then(m => pickExport(m, "default", "NuxtLink", "./../../node_modules/nuxt/dist/app/components/nuxt-link")),
  NuxtLoadingIndicator: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").then(m => pickExport(m, "default", "NuxtLoadingIndicator", "./../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")),
  NuxtTime: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-time.vue").then(m => pickExport(m, "default", "NuxtTime", "./../../node_modules/nuxt/dist/app/components/nuxt-time.vue")),
  NuxtRouteAnnouncer: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").then(m => pickExport(m, "default", "NuxtRouteAnnouncer", "./../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")),
  NuxtAnnouncer: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-announcer").then(m => pickExport(m, "default", "NuxtAnnouncer", "./../../node_modules/nuxt/dist/app/components/nuxt-announcer")),
  NuxtImg: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-stubs").then(m => pickExport(m, "NuxtImg", "NuxtImg", "./../../node_modules/nuxt/dist/app/components/nuxt-stubs")),
  NuxtPicture: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-stubs").then(m => pickExport(m, "NuxtPicture", "NuxtPicture", "./../../node_modules/nuxt/dist/app/components/nuxt-stubs")),
  ContentRenderer: () => import("./../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue").then(m => pickExport(m, "default", "ContentRenderer", "./../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")),
  NuxtPage: () => import("./../../node_modules/nuxt/dist/pages/runtime/page").then(m => pickExport(m, "default", "NuxtPage", "./../../node_modules/nuxt/dist/pages/runtime/page")),
  NoScript: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "NoScript", "NoScript", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Link: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Link", "Link", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Base: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Base", "Base", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Title: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Title", "Title", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Meta: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Meta", "Meta", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Style: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Style", "Style", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Head: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Head", "Head", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Html: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Html", "Html", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Body: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Body", "Body", "./../../node_modules/nuxt/dist/head/runtime/components")),
  MDC: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue").then(m => pickExport(m, "default", "MDC", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")),
  MDCCached: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue").then(m => pickExport(m, "default", "MDCCached", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")),
  MDCRenderer: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue").then(m => pickExport(m, "default", "MDCRenderer", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")),
  MDCSlot: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue").then(m => pickExport(m, "default", "MDCSlot", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")),
  NuxtIsland: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-island").then(m => pickExport(m, "default", "NuxtIsland", "./../../node_modules/nuxt/dist/app/components/nuxt-island")),
}
export const globalComponents: string[] = ["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"]
export const localComponents: string[] = ["Alert","Counter","NuxtWelcome","NuxtLayout","NuxtErrorBoundary","ClientOnly","DevOnly","ServerPlaceholder","NuxtLink","NuxtLoadingIndicator","NuxtTime","NuxtRouteAnnouncer","NuxtAnnouncer","NuxtImg","NuxtPicture","ContentRenderer","NuxtPage","NoScript","Link","Base","Title","Meta","Style","Head","Html","Body","MDC","MDCCached","MDCRenderer","MDCSlot","NuxtIsland"]