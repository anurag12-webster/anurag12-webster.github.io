"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate, calculateReadTime } from "@/lib/utils";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  pubDate: string;
  slug: string;
  thumbnail?: string;
  source: string;
  link: string;
  categories: string[];
}

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    });
  }, [posts, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 space-y-6">
            <div className="space-y-3">
              <h1 className="display-heading text-5xl md:text-6xl">Blog</h1>
              <p className="section-subtitle text-lg md:text-xl max-w-2xl text-muted-foreground">
                Thoughts on development, technology, and the craft of programming.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {searchQuery ? `No posts found for "${searchQuery}"` : "No blog posts found. Check back later!"}
              </p>
            </div>
          ) : (
            <>
              {searchQuery && (
                <p className="text-sm text-muted-foreground mb-8">
                  Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                </p>
              )}
              <div className="space-y-16">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group"
                  >
                    <Link
                      href={post.source === 'medium' ? post.link : `/blog/${post.slug}`}
                      {...(post.source === 'medium' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <time dateTime={post.pubDate} className="text-muted-foreground font-medium">
                            {formatDate(post.pubDate)}
                          </time>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-muted-foreground text-sm">
                            {post.source === "local" ? (post as any).readingTime : calculateReadTime(post.content)}
                          </span>
                          {post.source === "medium" && (
                            <>
                              <span className="text-muted-foreground">·</span>
                              <span className="text-green-600 dark:text-green-400 text-xs font-medium">Medium</span>
                            </>
                          )}
                        </div>

                        <h2 className="display-heading text-3xl md:text-4xl group-hover:text-primary transition-colors duration-200">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                          {post.description}
                        </p>
                      </div>

                      {post.thumbnail && post.thumbnail !== '/placeholder-blog.jpg' && (
                        <div className="overflow-hidden rounded-2xl mt-6">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            width={900}
                            height={500}
                            className="object-cover w-full h-64 md:h-80 transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
