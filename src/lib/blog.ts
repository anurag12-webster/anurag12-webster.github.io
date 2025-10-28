import { getAllMDXPosts, getMDXPost, MDXPost } from './mdx';
import { DEFAULTS } from './constants';

export type BlogPost = MDXPost;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const mdxPosts = await getAllMDXPosts();

    const allPosts = mdxPosts
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
