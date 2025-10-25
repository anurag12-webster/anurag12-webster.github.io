import { getRecentBlogPosts } from "@/lib/blog";
import { formatDate, calculateReadTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

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

                    <div className="flex gap-6 md:gap-8 justify-start md:justify-center pt-2 md:pt-4 md:hidden">
                      <a href="mailto:anuragkanade54@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5" aria-label="Email">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/anurag-kanade/" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5" aria-label="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/anurag12-webster" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5" aria-label="GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://huggingface.co/edwixx" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5" aria-label="Hugging Face">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" clipRule="evenodd" d="M15.0216 12.9067C15.1542 12.6053 15.1672 12.266 15.0594 11.9588C15.1666 11.6895 15.1835 11.3879 15.1109 11.1077C15.073 10.9629 15.0125 10.8286 14.9325 10.7088C15.062 10.2511 14.9293 9.76178 14.6096 9.41217C14.4835 9.27426 14.3319 9.17171 14.1684 9.10376C14.2677 8.65557 14.3201 8.18997 14.3201 7.71255C14.3201 4.19004 11.4753 1.3313 7.96213 1.3313C4.449 1.3313 1.60422 4.19004 1.60422 7.71255C1.60422 8.2011 1.65902 8.67732 1.76291 9.13516C1.62551 9.20206 1.49836 9.29437 1.39062 9.41217C1.11172 9.71715 0.970218 10.1156 1.02972 10.5294C1.0386 10.5911 1.05139 10.651 1.06778 10.7088C0.987687 10.8286 0.927261 10.9629 0.889378 11.1077C0.816118 11.3874 0.833871 11.69 0.940828 11.9588C0.833048 12.266 0.845995 12.6053 0.978628 12.9067C1.21674 13.4476 1.77038 13.7844 2.53035 14.0869C3.37522 14.4232 4.30846 14.669 5.2641 14.669C6.03595 14.669 6.70689 14.4811 7.19679 14.048C7.44786 14.0783 7.70328 14.0938 7.96213 14.0938C8.24393 14.0938 8.52162 14.0753 8.79408 14.0396C9.2845 14.4785 9.9591 14.669 10.7361 14.669C11.6956 14.669 12.6219 14.4245 13.4699 14.0869C14.2298 13.7844 14.7835 13.4475 15.0216 12.9067ZM13.2948 13.6471C14.0459 13.3481 14.4327 13.0695 14.5883 12.716C14.6978 12.4671 14.6784 12.18 14.5326 11.9505C14.7261 11.6538 14.689 11.3658 14.6529 11.2275C14.6067 11.0511 14.5112 10.9044 14.3815 10.7991C14.443 10.6965 14.4842 10.5856 14.5019 10.462C14.5523 10.1118 14.363 9.73198 14.0467 9.56892C13.9043 9.49529 13.74 9.46502 13.5786 9.48087C13.6273 9.32464 13.6698 9.16565 13.7056 9.00412C13.7979 8.58845 13.8467 8.15618 13.8467 7.71255C13.8467 4.44972 11.2121 1.80469 7.96213 1.80469C4.71221 1.80469 2.07761 4.44972 2.07761 7.71255C2.07761 8.15775 2.12667 8.59151 2.21966 9.00861C2.255 9.16715 2.29669 9.32322 2.34445 9.47668C2.11872 9.47489 1.89314 9.56403 1.73991 9.73172C1.54674 9.94289 1.46094 10.2024 1.4983 10.462C1.51607 10.5856 1.55722 10.6965 1.61873 10.7991C1.48904 10.9044 1.39352 11.0511 1.34735 11.2275C1.3112 11.3658 1.27415 11.6538 1.46762 11.9505C1.3218 12.18 1.30238 12.4671 1.41189 12.716C1.56755 13.0695 1.95433 13.3481 2.70542 13.6471C3.51574 13.9696 4.38761 14.1956 5.2641 14.1956C6.0583 14.1956 6.6509 13.9775 7.02942 13.5466C7.3332 13.5952 7.64475 13.6204 7.96213 13.6204C8.30268 13.6204 8.63651 13.5913 8.96129 13.5356C9.33929 13.9738 9.93526 14.1956 10.7361 14.1956C11.6163 14.1956 12.4813 13.9709 13.2948 13.6471Z"/>
                          <path d="M6.65394 13.0396C7.07186 12.4243 7.04226 11.9625 6.46887 11.3871C5.89542 10.8119 5.56163 9.97029 5.56163 9.97029C5.56163 9.97029 5.43695 9.48151 5.15298 9.52651C4.869 9.57144 4.6605 10.3019 5.25534 10.7488C5.85017 11.1955 5.13688 11.499 4.90804 11.0795C4.67918 10.6598 4.05428 9.58123 3.73021 9.37492C3.4063 9.16869 3.17821 9.28425 3.25459 9.70942C3.33098 10.1347 4.68571 11.1653 4.5539 11.3883C4.42208 11.6112 3.95754 11.1263 3.95754 11.1263C3.95754 11.1263 2.50395 9.79815 2.18748 10.1442C1.871 10.4903 2.42757 10.7803 3.22073 11.2624C4.01404 11.7443 4.07554 11.8717 3.96302 12.054C3.85033 12.2363 2.0994 10.7543 1.93494 11.3825C1.77063 12.0108 3.72186 12.1932 3.60144 12.6269C3.48102 13.0608 2.22696 11.806 1.97048 12.2949C1.71383 12.784 3.74009 13.3586 3.75649 13.3628C4.411 13.5333 6.07322 13.8945 6.65394 13.0396Z"/>
                          <path d="M9.34631 13.0396C8.9284 12.4243 8.958 11.9625 9.53147 11.3871C10.1049 10.8119 10.4387 9.97029 10.4387 9.97029C10.4387 9.97029 10.5634 9.48151 10.8473 9.52651C11.1313 9.57144 11.3398 10.3019 10.7449 10.7488C10.1502 11.1955 10.8634 11.499 11.0923 11.0795C11.3211 10.6598 11.946 9.58123 12.2701 9.37492C12.594 9.16869 12.8221 9.28425 12.7457 9.70942C12.6693 10.1347 11.3146 11.1653 11.4464 11.3883C11.5782 11.6112 12.0427 11.1263 12.0427 11.1263C12.0427 11.1263 13.4963 9.79815 13.8128 10.1442C14.1293 10.4903 13.5727 10.7803 12.7796 11.2624C11.9863 11.7443 11.9248 11.8717 12.0372 12.054C12.15 12.2363 13.9009 10.7543 14.0653 11.3825C14.2297 12.0108 12.2785 12.1932 12.3989 12.6269C12.5193 13.0608 13.7733 11.806 14.0298 12.2949C14.2864 12.784 12.2602 13.3586 12.2438 13.3628C11.5893 13.5333 9.92703 13.8945 9.34631 13.0396Z"/>
                          <path d="M7.13116 9.21035C7.68053 9.53065 8.39171 9.53183 8.92303 9.17895C8.78645 9.056 8.62418 8.96114 8.44531 8.90388C8.31873 8.86319 8.18387 9.29997 8.04391 9.29997C7.91316 9.29997 7.78674 8.86042 7.66748 8.8961C7.46364 8.95702 7.28051 9.06616 7.13116 9.21035Z"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.96214 2.41455C5.04774 2.41455 2.68506 4.78667 2.68506 7.71256C2.68506 8.14057 2.73563 8.55677 2.83108 8.9554C2.83237 8.95383 2.83367 8.95226 2.83497 8.95069C2.9882 8.76681 3.20794 8.66545 3.4538 8.66545C3.89524 8.66545 4.23152 8.96376 4.49145 9.28825C4.66026 9.05322 4.91817 8.91361 5.18939 8.91361C5.70739 8.91361 6.01914 9.36479 6.13702 9.7706C6.19547 9.90769 6.47608 10.5321 6.89825 10.9557C7.54116 11.6007 7.7021 12.2661 7.38382 12.9791C7.7851 13.023 8.20295 13.0213 8.61268 12.9707C8.29948 12.2609 8.46169 11.5982 9.10198 10.9557C9.52416 10.5321 9.80484 9.90769 9.86329 9.7706C9.98109 9.36479 10.2927 8.91361 10.8107 8.91361C11.082 8.91361 11.34 9.05324 11.5088 9.28825C11.7687 8.96377 12.105 8.66545 12.5464 8.66545C12.7634 8.66545 12.9601 8.74438 13.1086 8.88932C13.2328 8.33972 13.2699 7.74287 13.212 7.17086C12.9417 4.49924 10.694 2.41455 7.96214 2.41455ZM6.86163 9.58044C6.28068 9.0948 6.02594 8.3752 6.02594 7.90713C6.02594 7.22108 6.90968 8.27063 8.00012 8.27063C9.09037 8.27063 9.97429 7.22098 9.97429 7.90713C9.97429 8.59186 9.49409 9.92922 8.00602 9.92922C7.52576 9.92922 7.15016 9.79086 6.86163 9.58044ZM9.78877 6.27052C9.61583 6.20913 9.32089 6.49448 9.22793 6.31895C9.03104 5.94723 9.17157 5.48568 9.54187 5.28803C9.9121 5.09038 10.3719 5.2315 10.5688 5.60323C10.7656 5.97496 10.625 6.43653 10.2548 6.63417C10.0594 6.73858 9.98235 6.33909 9.78877 6.27052ZM6.21147 6.27052C6.01788 6.33909 5.94089 6.73858 5.74544 6.63417C5.37517 6.43653 5.23461 5.97496 5.43149 5.60323C5.62836 5.2315 6.08813 5.09038 6.45836 5.28803C6.82866 5.48568 6.96919 5.94723 6.7723 6.31895C6.67934 6.49448 6.3844 6.20913 6.21147 6.27052ZM12.0244 6.49289C12.0244 6.76655 11.8035 6.9884 11.5308 6.9884C11.2583 6.9884 11.0374 6.76655 11.0374 6.49289C11.0374 6.21924 11.2583 5.99739 11.5308 5.99739C11.8035 5.99739 12.0244 6.21924 12.0244 6.49289ZM4.46938 6.9884C4.74196 6.9884 4.96292 6.76655 4.96292 6.49289C4.96292 6.21924 4.74196 5.99739 4.46938 5.99739C4.1968 5.99739 3.97584 6.21924 3.97584 6.49289C3.97584 6.76655 4.1968 6.9884 4.46938 6.9884Z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/edwixxxx" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5" aria-label="X (Twitter)">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
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
                    href={post.source === 'medium' ? post.link : `/blog/${post.slug}`}
                    {...(post.source === 'medium' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
                            {post.source === 'medium' && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                                <svg className="w-3 h-3 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                                </svg>
                                <span className="text-xs text-green-600 dark:text-green-400 font-medium">Medium</span>
                              </div>
                            )}
                          </div>
                          <p className="card-subtext mb-4">
                            {post.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{formatDate(post.pubDate)}</span>
                              <span>{post.source === 'local' ? (post as { readingTime: string }).readingTime : calculateReadTime(post.content)}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild className="group-hover:bg-primary/10 claude-button-hover">
                              <Link href={post.source === 'medium' ? post.link : `/blog/${post.slug}`} {...(post.source === 'medium' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                                {post.source === 'medium' ? 'Read on Medium →' : 'Read More →'}
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
