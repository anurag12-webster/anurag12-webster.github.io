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
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
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
                <Card key={post.id} className="hover:shadow-lg hover:border-primary/50 transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        {post.source === 'medium' && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                            <svg className="w-3 h-3 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                            </svg>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Medium</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div>{formatDate(post.pubDate)}</div>
                        <div>{post.source === 'local' ? (post as { readingTime: string }).readingTime : calculateReadTime(post.content)}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      {post.thumbnail && post.thumbnail !== '/placeholder-blog.jpg' && (
                        <div className="mb-4">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="rounded-lg object-cover w-full h-48"
                          />
                        </div>
                      )}
                      <p className="text-muted-foreground">{post.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.categories.slice(0, 3).map((category: string) => (
                          <span
                            key={category}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Button asChild>
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
