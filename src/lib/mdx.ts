import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CONTENT_PATHS, DEFAULTS } from './constants';
import { calculateReadTime } from './utils';

const postsDirectory = path.join(process.cwd(), CONTENT_PATHS.BLOG_POSTS);

export interface MDXPost {
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
  readingTime: string;
  hidden?: boolean;
}

export function getAllMDXPosts(): MDXPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          id: slug,
          title: data.title || 'Untitled',
          description: data.description || content.substring(0, 200) + '...',
          content: content,
          author: data.author || DEFAULTS.AUTHOR,
          pubDate: data.date || new Date().toISOString(),
          link: `/blog/${slug}`,
          thumbnail: data.thumbnail || DEFAULTS.PLACEHOLDER_IMAGE,
          categories: data.categories || [],
          slug: slug,
          readingTime: calculateReadTime(content),
          hidden: data.hidden || false,
        };
      });

    return allPostsData.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
  } catch {
    return [];
  }
}

export function getMDXPost(slug: string): MDXPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      title: data.title || 'Untitled',
      description: data.description || content.substring(0, 200) + '...',
      content: content,
      author: data.author || DEFAULTS.AUTHOR,
      pubDate: data.date || new Date().toISOString(),
      link: `/blog/${slug}`,
      thumbnail: data.thumbnail || DEFAULTS.PLACEHOLDER_IMAGE,
      categories: data.categories || [],
      slug: slug,
      readingTime: calculateReadTime(content),
      hidden: data.hidden || false,
    };
  } catch {
    return null;
  }
}

