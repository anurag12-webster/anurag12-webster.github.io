import { getAllBlogPosts } from "@/lib/blog";
import { BlogClient } from "./blog-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anurag Kanade",
  description: "Articles and insights on ASR, TTS, NLP, and Machine Learning",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
