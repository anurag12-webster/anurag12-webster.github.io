import _RemarkEmoji from 'remark-emoji'
import _RemarkMath from 'remark-math'
import _Highlight from 'C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'
import _RehypeKatex from 'rehype-katex'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-math': { instance: _RemarkMath },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
  'rehype-katex': { instance: _RehypeKatex },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"}}