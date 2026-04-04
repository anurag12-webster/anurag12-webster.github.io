declare module '#og-image-virtual/public-assets.mjs' {
  import type { H3Event } from 'h3'
  import type { FontConfig } from '../../runtime/types'
  export function resolve(event: H3Event, font: FontConfig): Promise<BufferSource>
}

declare module '#og-image/fonts' {
  import type { FontConfig } from '../../runtime/types'
  const fonts: FontConfig[]
  export default fonts
}

declare module '#og-image/fonts-available' {
  const fonts: Array<{ family: string, src: string, weight: number, style: string, satoriSrc?: string, unicodeRange?: string }>
  export default fonts
}

declare module '#og-image/font-requirements' {
  export const fontRequirements: {
    weights: number[]
    styles: Array<'normal' | 'italic'>
    families: string[]
    hasDynamicBindings: boolean
  }
  export function getComponentFontMap(): Record<string, {
    weights: number[]
    styles: Array<'normal' | 'italic'>
    families: string[]
    hasDynamicBindings: boolean
    category?: 'app' | 'community' | 'pro'
  }>
  export const hasNuxtFonts: boolean
}

declare module '#og-image-virtual/unocss-config.mjs' {
  export const theme: Record<string, any>
}

declare module '#og-image-virtual/iconify-json-icons.mjs' {
  interface IconsData { icons: Record<string, { body: string, width?: number, height?: number }>, width: number, height: number }
  export function loadIcons(): IconsData
}

declare module '#og-image-virtual/component-names.mjs' {
  import type { OgImageComponent } from '../../runtime/types'
  export const componentNames: OgImageComponent[]
}

declare module '#og-image-virtual/build-dir.mjs' {
  export const buildDir: string
  export const rootDir: string
}

declare module '#og-image/compatibility' {
  import type { RuntimeCompatibilitySchema } from '../../runtime/types'
  const compatibility: Partial<Omit<RuntimeCompatibilitySchema, 'wasm'>>
  export default compatibility
}
declare module '#og-image-virtual/tw4-theme.mjs' {
  export const tw4FontVars: Record<string, string>
  export const tw4Breakpoints: Record<string, number>
  export const tw4Colors: Record<string, string | Record<string, string>>
}
