import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate, calculateReadTime } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <span>{formatDate(post.pubDate)}</span>
              <span>•</span>
              <span>{calculateReadTime(post.content)}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <Separator />
          </header>
          <article className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-li:text-muted-foreground">
            {post.source === 'local' ? (
              <MDXRemote source={post.content} />
            ) : (
              <div className="text-center py-12">
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                    </svg>
                    <span className="text-lg font-semibold text-green-600 dark:text-green-400">Medium Article</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    This article is published on Medium. Click the button below to read the full content.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Full Article on Medium
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </article>

        </div>
      </div>
    </div>
  );
}
