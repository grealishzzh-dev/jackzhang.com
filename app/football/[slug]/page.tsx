import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllEntries, getEntry } from "@/lib/entries";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllEntries("football").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("football", slug);
  if (!entry) return {};
  return { title: `${entry.title} · Jack Zhang` };
}

export default async function FootballPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("football", slug);
  if (!entry) notFound();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "52px 32px 96px" }}>
      <Link href="/football" style={{
        fontSize: "0.82rem", color: "var(--text-faint)",
        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4,
        marginBottom: 40,
      }}>
        ← 返回足球
      </Link>

      <div style={{ marginBottom: 40 }}>
        <h1 style={{
          fontSize: "1.85rem", fontWeight: 700, letterSpacing: "-0.03em",
          lineHeight: 1.25, color: "var(--text)", margin: "0 0 16px",
        }}>
          {entry.title}
        </h1>
        <span style={{ fontSize: "0.82rem", color: "var(--text-faint)" }}>
          {entry.date}
        </span>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", marginBottom: 40 }} />

      <article className="prose-research">
        <MDXRemote source={entry.content} />
      </article>
    </div>
  );
}
