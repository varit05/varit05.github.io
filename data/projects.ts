export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "parasdham-platform",
    title: "Parasdham.org",
    summary: "Cloud-native volunteer platform built with Vue and Firebase (Aug 2021 - Aug 2022).",
    description:
      "Designed and developed a cost-efficient digital platform supporting around 50k users during COVID.",
    stack: ["Vue", "Firebase", "Cloud"],
    href: "https://parasdham.org",
  },
  {
    slug: "tree-irrigation-app",
    title: "Tree Irrigation Application",
    summary: "End-to-end full-stack product development for field operations (Oct 2018 - Aug 2019).",
    description:
      "Led feature development for Planting, Notifications, Login, and Signup flows as a full stack engineer.",
    stack: ["JavaScript", "Frontend", "Backend", "Product Engineering"],
    href: "https://github.com/ti-app",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
