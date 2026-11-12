import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().optional(),
        categories: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
        hidden: z.boolean().optional(),
        citations: z.array(z.object({
          text: z.string(),
          url: z.string().optional(),
        })).optional(),
      }),
    }),
    // One YAML file per resource in content/resources/ — the file name is the URL slug.
    resources: defineCollection({
      type: 'data',
      source: 'resources/*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        // Absolute URL (GitHub Releases, Hugging Face, Drive, Notion…) or a path under /public, e.g. /downloads/files/cheatsheet.pdf
        download: z.string(),
        // Path under /public (e.g. /downloads/thumbs/foo.png) or absolute URL. Omit for an auto-generated cover.
        thumbnail: z.string().optional(),
        type: z.string().optional(), // PDF, Notebook, Dataset, Notion, Link…
        size: z.string().optional(), // shown next to the button, e.g. "2.4 MB"
        date: z.string(),
        tags: z.array(z.string()).optional(),
        highlights: z.array(z.string()).optional(), // "What's inside" bullets on the detail page
        cta: z.string().optional(), // button label, defaults to "Download"
        featured: z.boolean().optional(),
        draft: z.boolean().optional(), // visible in `npm run dev` only
      }),
    }),
  },
})
