import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product and engineering work."
};

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-slate-300">{project.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
