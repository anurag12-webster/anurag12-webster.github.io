import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from "@/lib/utils";
import { ShareButton } from "@/components/share-button";

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

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Anurag Kanade`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://anuragkanade.com/blog/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="py-6 flex items-center justify-between">
          <Button variant="ghost" asChild size="sm" className="-ml-3">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <ShareButton title={post.title} url={postUrl} />
        </div>

        <div className="max-w-2xl mx-auto pb-20">
          <article>
            <header className="mb-16 text-center space-y-8">
              <div className="space-y-6">
                <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl leading-tight px-4">
                  {post.title}
                </h1>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={post.pubDate} className="font-medium">
                    {formatDate(post.pubDate)}
                  </time>
                </div>
              </div>

              <Separator className="max-w-xl mx-auto" />
            </header>

            <div className="prose prose-lg max-w-none px-4
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-center
              prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-14
              prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-12
              prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-10
              prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base prose-code:font-normal
              prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:my-8
              prose-li:text-foreground/85 prose-li:leading-relaxed prose-li:text-lg
              prose-ul:my-6 prose-ol:my-6
              prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80 prose-blockquote:my-8
              prose-img:rounded-2xl prose-img:shadow-sm prose-img:my-10
              dark:prose-invert">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
