export const URLS = {
  MEDIUM_RSS_FEED: 'https://medium.com/feed/@anuragkanade6',
  MEDIUM_PROFILE: 'https://medium.com/@anuragkanade6',
  LINKEDIN: 'https://www.linkedin.com/in/anurag-kanade/',
  GITHUB: 'https://github.com/anurag12-webster',
  HUGGINGFACE: 'https://huggingface.co/edwixx',
  TWITTER: 'https://x.com/edwixxxx',
  EMAIL: 'mailto:anuragkanade54@gmail.com',
  RSS2JSON_API: 'https://api.rss2json.com/v1/api.json',
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
