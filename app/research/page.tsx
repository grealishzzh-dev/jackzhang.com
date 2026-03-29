import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "研究 · Jack Zhang",
};

export default function ResearchPage() {
  const posts = getAllPosts();

  // 按行业分组
  const sectors = Array.from(new Set(posts.map((p) => p.sector || "其他")));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 32px 96px" }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{
          fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
        }}>
          研究记录
        </p>
        <h1 style={{
          fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em",
          color: "var(--text)", margin: "0 0 12px",
        }}>
          所有研究
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
          {posts.length} 篇 · 持续更新中
        </p>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: "var(--text-faint)" }}>暂无研究，敬请期待。</p>
      ) : sectors.length > 1 ? (
        // 多行业时按行业分组
        sectors.map((sector) => {
          const sectorPosts = posts.filter((p) => (p.sector || "其他") === sector);
          return (
            <div key={sector} style={{ marginBottom: 48 }}>
              <div style={{
                fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 16,
              }}>
                {sector}
              </div>
              <PostList posts={sectorPosts} />
            </div>
          );
        })
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

function PostList({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {posts.map((post) => (
        <Link key={post.slug} href={`/research/${post.slug}`} style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          padding: "18px 0", borderBottom: "1px solid var(--border)",
          textDecoration: "none", gap: 24,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "0.95rem", fontWeight: 500, color: "var(--text)",
              letterSpacing: "-0.01em", marginBottom: 6,
            }}>
              {post.title}
            </div>
            {post.tags.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.72rem", padding: "2px 8px", borderRadius: 6,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-faint)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <span style={{
            fontSize: "0.78rem", color: "var(--text-faint)",
            whiteSpace: "nowrap", flexShrink: 0, marginTop: 2,
          }}>
            {post.date}
          </span>
        </Link>
      ))}
    </div>
  );
}
