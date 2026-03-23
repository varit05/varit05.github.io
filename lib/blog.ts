import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  canonicalUrl?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    content,
    ...frontmatter
  };
}

export function getAllPosts() {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}
