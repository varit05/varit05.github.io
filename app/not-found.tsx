import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-wider text-slate-400">404</p>
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="text-slate-300">The page you are looking for does not exist.</p>
      <Link href="/">Return home</Link>
    </section>
  );
}
