/// <reference path="./og-image-virtual.d.ts" />
/// <reference path="./og-image-bindings.d.ts" />
import type { OgImageOptions, OgImageRenderEventContext, VNode } from '../../runtime/types'

declare module 'nitropack' {
  interface NitroRouteRules {
    ogImage?: false | OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: VNode, ctx: OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module 'nitropack/types' {
  interface NitroRouteRules {
    ogImage?: false | OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: VNode, ctx: OgImageRenderEventContext) => void | Promise<void>
  }
}

export {}
