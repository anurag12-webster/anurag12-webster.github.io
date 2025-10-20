import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Image from "next/image";
import { formatDate, calculateReadTime } from "@/lib/utils";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 space-y-3">
            <h1 className="section-title">Blog</h1>
            <p className="section-subtitle">
              Thoughts on development, technology, and the craft of programming.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found. Check back later!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="group transition-colors duration-200 hover:border-primary/40 hover:bg-muted/30 dark:hover:bg-white/[0.05]"
                >
                  <CardHeader className="space-y-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        {post.source === "medium" && (
                          <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                            </svg>
                            Medium
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground sm:flex-col sm:items-end sm:text-right">
                        <time dateTime={post.pubDate} className="font-medium text-foreground dark:text-white/90">
                          {formatDate(post.pubDate)}
                        </time>
                        <span>{post.source === "local" ? (post as { readingTime: string }).readingTime : calculateReadTime(post.content)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {post.thumbnail && post.thumbnail !== '/placeholder-blog.jpg' && (
                        <div>
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="rounded-lg object-cover w-full h-48"
                          />
                        </div>
                      )}
                      <p className="card-subtext">{post.description}</p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.categories.slice(0, 3).map((category: string) => (
                          <span
                            key={category}
                            className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Button asChild className="w-full sm:w-auto">
                        <Link href={post.source === 'medium' ? post.link : `/blog/${post.slug}`} {...(post.source === 'medium' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                          {post.source === 'medium' ? 'Read on Medium' : 'Read More'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
