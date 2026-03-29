import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} · Jack Zhang` };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "52px 32px 96px" }}>
      {/* 返回 */}
      <Link href="/research" style={{
        fontSize: "0.82rem", color: "var(--text-faint)",
        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4,
        marginBottom: 40,
      }}>
        ← 返回研究列表
      </Link>

      {/* 文章头 */}
      <div style={{ marginBottom: 40 }}>
        {post.sector && (
          <p style={{
            fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          }}>
            {post.sector}
          </p>
        )}
        <h1 style={{
          fontSize: "1.85rem", fontWeight: 700, letterSpacing: "-0.03em",
          lineHeight: 1.25, color: "var(--text)", margin: "0 0 16px",
        }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: "0.82rem", color: "var(--text-faint)" }}>
            {post.date}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "0.72rem", padding: "2px 8px", borderRadius: 6,
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-faint)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 分割线 */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: 40 }} />

      {/* 正文 */}
      <article className="prose-research">
        <MDXRemote source={post.content} />
      </article>

      {/* 免责声明 */}
      <div style={{
        marginTop: 56, padding: "16px 20px", borderRadius: 10,
        background: "var(--bg-card)", border: "1px solid var(--border)",
        fontSize: "0.78rem", color: "var(--text-faint)", lineHeight: 1.6,
      }}>
        本文为个人研究记录，不构成投资建议。所有观点仅代表写作时的判断。
      </div>
    </div>
  );
}
