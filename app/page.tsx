import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Kalido",
    period: "Feb 2022 - Present",
    location: "London, UK",
    highlights: [
      "Built web product features and internal tooling for enterprise permission-based systems.",
      "Delivered React/Vue SPAs with strong usability, scalability, and performance outcomes.",
      "Improved load times by 20% and drove 50% overall optimisation via refactoring and bundle tuning.",
      "Collaborated with product and design teams to improve user workflows.",
      "Led frontend modernisation and developer-experience improvements.",
      "Mentored engineers and drove code quality through structured reviews.",
      "Built developer-facing tools and APIs to improve platform security and productivity.",
      "Designed frontend architecture and workflows for rapid iteration and reliable deployments.",
      "Implemented API communication layers using Protocol Buffers and Go tooling.",
      "Established engineering standards for scalable, maintainable systems.",
    ],
  },
  {
    role: "Technical Lead - Frontend",
    company: "Dhani",
    period: "May 2021 - Feb 2022",
    location: "Pune, India",
    highlights: [
      "Improved e-pharmacy portal retention by 12% through performance optimisation.",
      "Built a Storybook-based design system used across 4 product teams.",
      "Designed internationalisation architecture for 3 languages.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "LahiTapiola (TCS)",
    period: "Dec 2018 - May 2021",
    location: "Pune, India",
    highlights: [
      "Led technical design discussions to reduce rework and protect timelines.",
      "Mentored engineers on Angular and WCAG 2.1 compliance.",
      "Built Angular component library adopted by 5 product teams.",
    ],
  },
  {
    role: "Technical Lead [Frontend]",
    company: "Kingfisher UK PLC (TCS)",
    period: "Aug 2016 - Nov 2018",
    location: "Pune, India & Lille, France",
    highlights: [
      "Led a 3-engineer frontend team delivering React SPA launches with 99.5% uptime.",
      "Drove test coverage growth from 50% to 80% using TDD practices.",
      "Architected Redux-based state management and scalable Angular architecture.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "TalkTalk UK PLC (TCS)",
    period: "Dec 2012 - Jul 2016",
    location: "Pune, India & London, England",
    highlights: [
      "Expanded mobile-first responsive interfaces with WCAG 2.0 accessibility compliance.",
      "Built reusable REST API integration layers and improved maintainability.",
      "Partnered cross-functionally to reduce rework and improve sprint velocity.",
    ],
  },
];

const skills = {
  frontend: ["JavaScript", "TypeScript", "React", "Vue", "SPA Architecture"],
  backend: ["Node.js", "Go", "GraphQL", "REST APIs", "Protocol Buffers"],
  testing: ["Jest", "Vitest", "Playwright", "Testing Library"],
  productAndUx: [
    "User Experience Design",
    "Performance Optimisation",
    "Accessibility",
  ],
  others: [
    "Internationalisation",
    "Micro Frontends",
    "Generative AI / LLM Integration",
    "Internal Tools",
    "Design Systems",
    "CI/CD",
    "API-driven applications",
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-100">
          Product Engineer (Frontend)
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Varit J Patel
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Product-focused frontend engineer with 14+ years of experience
          building scalable web applications, internal tools, and developer
          platforms.
        </p>
        <p className="max-w-3xl text-slate-300">
          Strong expertise in React, TypeScript, and modern web architecture
          with proven end-to-end ownership across API-driven applications,
          design systems, and performance-focused delivery.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="mailto:varitpatel@gmail.com">varitpatel@gmail.com</a>
          <span>London, England</span>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Volunteer Projects
          </h2>
          <Link href="/projects" className="text-sm">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <h3 className="text-lg font-medium text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Professional Experience
        </h2>
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-medium text-white">
                  {item.role}, {item.company}
                </h3>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-slate-400">{item.location}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Frontend
            </h3>
            <p className="mt-2 text-slate-300">{skills.frontend.join(" • ")}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Backend
            </h3>
            <p className="mt-2 text-slate-300">{skills.backend.join(" • ")}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Testing
            </h3>
            <p className="mt-2 text-slate-300">{skills.testing.join(" • ")}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Product & UX Focus
            </h3>
            <p className="mt-2 text-slate-300">
              {skills.productAndUx.join(" • ")}
            </p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:col-span-2">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Other
            </h3>
            <p className="mt-2 text-slate-300">{skills.others.join(" • ")}</p>
          </article>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-medium text-white">
            A D Patel Institute of Technology
          </h3>
          <p className="mt-1 text-slate-300">
            Bachelor of Engineering (B.E.) in Information Technology
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Jul 2008 - Jun 2012 | Gujarat, India
          </p>
        </article>
      </section>
    </div>
  );
}
