import { URLS, DEFAULTS } from './constants';

interface MediumPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
  slug: string;
  source: 'medium' | 'local';
}

interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Array<{
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: unknown;
    categories: string[];
  }>;
}


export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      `${URLS.RSS2JSON_API}?rss_url=${URLS.MEDIUM_RSS_FEED}`,
      {
        next: { revalidate: DEFAULTS.CACHE_REVALIDATE },
      }
    );

    if (!response.ok) {
      console.warn(`RSS2JSON failed with status ${response.status}`);
      return getFallbackPosts();
    }

    const data: MediumResponse = await response.json();

    if (data.status !== 'ok') {
      console.warn('RSS2JSON returned non-ok status:', data.status);
      return getFallbackPosts();
    }

    const posts = data.items.map((item) => {
      const cleanDescription = item.description
        .replace(/<[^>]*>/g, '')
        .replace(/Continue reading on Medium.*$/, '')
        .trim();
      
      return {
        id: item.guid,
        title: item.title,
        description: cleanDescription.substring(0, 200) + (cleanDescription.length > 200 ? '...' : ''),
        content: cleanDescription,
        author: item.author,
        pubDate: item.pubDate,
        link: item.link,
        thumbnail: item.thumbnail || DEFAULTS.PLACEHOLDER_IMAGE,
        categories: item.categories || [],
        slug: item.guid.split('/').pop() || item.guid,
        source: 'medium' as const,
      };
    });

    return posts;
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return getFallbackPosts();
  }
}

function getFallbackPosts(): MediumPost[] {
  return [
    {
      id: 'medium-fallback-1',
      title: 'Welcome to My Blog',
      description: 'I write about technology, development, and the craft of programming. Check out my Medium profile for the latest posts.',
      content: 'Welcome to my blog! I write about technology, development, and programming.',
      author: DEFAULTS.AUTHOR,
      pubDate: new Date().toISOString(),
      link: URLS.MEDIUM_PROFILE,
      thumbnail: DEFAULTS.PLACEHOLDER_IMAGE,
      categories: ['Technology', 'Programming'],
      slug: 'welcome-to-my-blog',
      source: 'medium' as const,
    },
    {
      id: 'medium-fallback-2',
      title: 'Follow Me on Medium',
      description: 'Visit my Medium profile to read my latest articles on web development, machine learning, and more.',
      content: 'Follow me on Medium for the latest articles.',
      author: DEFAULTS.AUTHOR,
      pubDate: new Date(Date.now() - 86400000).toISOString(),
      link: URLS.MEDIUM_PROFILE,
      thumbnail: DEFAULTS.PLACEHOLDER_IMAGE,
      categories: ['Development', 'Tech'],
      slug: 'follow-me-on-medium',
      source: 'medium' as const,
    }
  ];
}

export async function getMediumPost(slug: string): Promise<MediumPost | null> {
  try {
    const posts = await getMediumPosts();
    return posts.find((post) => 
      post.slug === slug ||
      post.link.includes(slug) || 
      post.title.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(slug)
    ) || null;
  } catch (error) {
    console.error('Error fetching Medium post:', error);
    return null;
  }
}
