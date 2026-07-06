import _RemarkEmoji from 'remark-emoji'
import _RemarkMath from 'remark-math'
import _RehypeKatex from 'rehype-katex'
import _Highlight from '/Users/anuragkanade/Documents/my_github_repos/anurag12-webster.github.io/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-math': { instance: _RemarkMath },
}

export const rehypePlugins = {
  'rehype-katex': { instance: _RehypeKatex },
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"}}