import { getRecentBlogPosts } from "@/lib/blog";
import { formatDate, calculateReadTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Anurag Kanade | Home",
  description: "I work on Automatic Speech Recognition, Text-to-Speech, NLP, and Machine Learning. This blog is some of what I'm learning along the way.",
};

export default async function Home() {
  const recentPosts = await getRecentBlogPosts(2);
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-start justify-start md:items-center md:justify-center overflow-hidden -mt-20 pt-24 md:pt-28">
        <div className="relative z-10 container mx-auto px-4 text-left md:text-center">
          <div className="max-w-3xl md:max-w-4xl md:mx-auto space-y-8 md:space-y-10">
            <div className="space-y-5 md:space-y-6">
              <h1 className="display-heading text-5xl md:text-7xl md:text-center md:mx-auto font-normal">
                Hi, I&apos;m{" "}
                <span className="text-primary">Anurag</span>
              </h1>
              <p className="section-subtitle text-lg md:text-xl leading-relaxed max-w-2xl md:max-w-3xl md:mx-auto md:text-center">
                I work on Automatic Speech Recognition, Text-to-Speech, NLP, and Machine Learning. This blog is some of what I&apos;m learning along the way. All opinions are my own...
              </p>
            </div>

            <div className="md:hidden">
              <SocialLinks
                className="flex gap-6 md:gap-8 justify-start md:justify-center pt-2 md:pt-4"
                iconClassName="w-6 h-6 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              />
            </div>

            {/* Mobile blog suggestions - only visible on small screens */}
            <div className="md:hidden mt-16 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Recent</h2>
                <Button variant="ghost" asChild size="sm" className="text-sm">
                  <Link href="/blog">View All →</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <article className="border-b border-border/30 pb-4">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{formatDate(post.pubDate)}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Recent Log - hidden on mobile */}
      <div className="hidden md:block">
        <Separator />
        <section className="container mx-auto px-4 py-4 md:py-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="section-title text-3xl md:text-4xl">Recent Log</h2>
              <Button variant="outline" asChild size="sm" className="claude-button-hover">
                <Link href="/blog">View All →</Link>
              </Button>
            </div>
            <div className="space-y-5">
              {recentPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No recent posts found. Check back later!</p>
                </div>
              ) : (
                recentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {post.thumbnail && post.thumbnail !== '/placeholder-blog.jpg' && (
                          <div className="flex-shrink-0">
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              width={120}
                              height={80}
                              className="rounded-lg object-cover w-30 h-20"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {post.title}
                              </Link>
                            </h3>
                          </div>
                          <p className="card-subtext mb-4">
                            {post.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{formatDate(post.pubDate)}</span>
                              <span>{post.readingTime || calculateReadTime(post.content)}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild className="group-hover:bg-primary/10 claude-button-hover">
                              <Link href={`/blog/${post.slug}`}>
                                Read More →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
