declare module '#og-image/bindings/browser' {
  import type { H3Event } from 'h3'
  export function createBrowser(event?: H3Event): Promise<any>
}

declare module '#og-image/bindings/satori' {
  import satori from 'satori'
  const _default: { initWasmPromise: Promise<void>, satori: typeof satori }
  export default _default
}

declare module '#og-image/bindings/resvg' {
  import { Resvg } from '@resvg/resvg-js'
  const _default: { initWasmPromise: Promise<void>, Resvg: typeof Resvg }
  export default _default
}

declare module '#og-image/bindings/sharp' {
  import sharp from 'sharp'
  const _default: typeof sharp
  export default _default
}

declare module '#og-image/bindings/takumi' {
  const _default: any
  export default _default
}

declare module '#og-image/renderers/satori' {
  import type { Renderer } from '../../runtime/types'
  const _default: Renderer
  export default _default
}

declare module '#og-image/renderers/browser' {
  import type { Renderer } from '../../runtime/types'
  const _default: Renderer
  export default _default
}

declare module '#og-image/renderers/takumi' {
  import type { Renderer } from '../../runtime/types'
  const _default: Renderer
  export default _default
}

declare module '#og-image/emoji-transform' {
  import type { OgImageRenderEventContext } from '../../runtime/types'
  export function getEmojiSvg(ctx: OgImageRenderEventContext, emoji: string): Promise<string | null>
}

declare module '#og-image-cache' {
  export { htmlPayloadCache, prerenderOptionsCache, emojiCache, fontCache } from '../../runtime/server/og-image/cache/lru'
}
