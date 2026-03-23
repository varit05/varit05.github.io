import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on engineering, product, and building for the web."
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h2 className="text-xl font-semibold text-white">{post.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{post.date}</p>
            <p className="mt-2 text-slate-300">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
