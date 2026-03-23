import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="text-lg text-slate-300">{project.summary}</p>
      </header>

      <p className="text-slate-300">{project.description}</p>

      <div>
        <h2 className="text-sm uppercase tracking-wider text-slate-400">
          Stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 text-sm">
        {project.href ? (
          <Link href={project.href} target="_blank" rel="noreferrer">
            Live site
          </Link>
        ) : null}
        {project.repo ? (
          <Link href={project.repo} target="_blank" rel="noreferrer">
            Source code
          </Link>
        ) : null}
      </div>
    </article>
  );
}
