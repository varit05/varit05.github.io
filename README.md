# Next.js Portfolio Starter

Simple production-ready portfolio starter with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX blog from local content
- Dynamic project pages
- SEO defaults (`metadata`, `robots`, `sitemap`)

## 1) Install dependencies

```bash
pnpm install
```

## 2) Run locally

```bash
pnpm run dev
```

## 3) Customize

- Edit site-level metadata in `lib/site.ts`
- Add blog posts in `content/blog/*.mdx`
- Update project entries in `data/projects.ts`

## Structure

```text
app/
  blog/
  projects/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
content/blog/
data/projects.ts
lib/
```
