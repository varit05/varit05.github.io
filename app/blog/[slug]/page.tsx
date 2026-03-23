import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header>
        <p className="text-sm text-slate-400">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{post.title}</h1>
        {post.canonicalUrl ? (
          <a
            href={post.canonicalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 hover:border-slate-500"
          >
            Original Article
          </a>
        ) : null}
      </header>
      <div className="prose-content">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}
