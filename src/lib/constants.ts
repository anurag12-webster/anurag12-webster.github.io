export const SITE = {
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://anuragkanade.com',
  TITLE: 'Anurag Kanade',
  NAME: 'Anurag Kanade',
  DESCRIPTION: 'Minimal dev log showcasing my work and thoughts',
  DOMAIN: 'anuragkanade.com',
} as const;

export const URLS = {
  LINKEDIN: 'https://www.linkedin.com/in/anurag-kanade/',
  GITHUB: 'https://github.com/anurag12-webster',
  HUGGINGFACE: 'https://huggingface.co/edwixx',
  TWITTER: 'https://x.com/edwixxxx',
  EMAIL: 'mailto:anuragkanade54@gmail.com',
} as const;

export const CONTENT_PATHS = {
  BLOG_POSTS: 'content/blog',
} as const;

export const DEFAULTS = {
  AUTHOR: 'Anurag Kanade',
  CACHE_REVALIDATE: 3600,
  RECENT_POSTS_LIMIT: 2,
  PLACEHOLDER_IMAGE: '/placeholder-blog.jpg',
} as const;

export const READING_TIME = {
  WORDS_PER_MINUTE: 200,
} as const;

export const OG_IMAGE = {
  WIDTH: 1200,
  HEIGHT: 630,
  BACKGROUND: '#eeece2',
  TITLE_COLOR: '#3d3929',
  SUBTITLE_COLOR: '#6b6656',
} as const;
