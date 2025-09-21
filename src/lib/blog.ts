import { getMediumPosts, getMediumPost } from './medium';
import { getAllMDXPosts, getMDXPost, MDXPost } from './mdx';
import { DEFAULTS } from './constants';

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
  hidden?: boolean;
}

export type BlogPost = MediumPost | MDXPost;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const [mediumPosts, mdxPosts] = await Promise.all([
      getMediumPosts(),
      getAllMDXPosts()
    ]);

    const allPosts = [...mediumPosts, ...mdxPosts]
      .filter(post => !(post as { hidden?: boolean }).hidden)
      .sort((a, b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      });

    return allPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const mdxPost = getMDXPost(slug);
    if (mdxPost) {
      return mdxPost;
    }

    const mediumPost = await getMediumPost(slug);
    if (mediumPost) {
      return mediumPost;
    }

    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getRecentBlogPosts(limit: number = DEFAULTS.RECENT_POSTS_LIMIT): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}
