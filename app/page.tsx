import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "72px 32px 96px" }}>
      {/* Hero */}
      <div style={{ marginBottom: 72 }}>
        <p style={{
          fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 16,
        }}>
          投研笔记
        </p>
        <h1 style={{
          fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-0.04em",
          lineHeight: 1.15, color: "var(--text)", margin: "0 0 20px",
        }}>
          Jack Zhang
        </h1>
        <p style={{
          fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7,
          maxWidth: 520, margin: 0,
        }}>
          二级市场研究 · 公开记录投资思考与行业分析
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <Link href="/research" style={{
            display: "inline-flex", alignItems: "center",
            padding: "9px 22px", borderRadius: 10,
            background: "var(--accent)", color: "#0f0f0f",
            fontWeight: 600, fontSize: "0.88rem", textDecoration: "none",
          }}>
            查看研究
          </Link>
          <Link href="/about" style={{
            display: "inline-flex", alignItems: "center",
            padding: "9px 22px", borderRadius: 10,
            border: "1px solid var(--border)",
            color: "var(--text-muted)", fontWeight: 500,
            fontSize: "0.88rem", textDecoration: "none",
          }}>
            关于我
          </Link>
        </div>
      </div>

      {/* 最新研究 */}
      {posts.length > 0 && (
        <div>
          <div style={{
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 20,
          }}>
            最新研究
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/research/${post.slug}`} style={{
                display: "flex", alignItems: "baseline",
                justifyContent: "space-between",
                padding: "14px 0", borderBottom: "1px solid var(--border)",
                textDecoration: "none", gap: 16,
              }}>
                <span style={{
                  fontSize: "0.95rem", color: "var(--text)",
                  fontWeight: 500, letterSpacing: "-0.01em",
                }}>
                  {post.title}
                </span>
                <span style={{
                  fontSize: "0.78rem", color: "var(--text-faint)",
                  whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/research" style={{
              fontSize: "0.83rem", color: "var(--accent)", textDecoration: "none",
            }}>
              全部研究 →
            </Link>
          </div>
        </div>
      )}

      {/* 方法论 */}
      <div style={{
        marginTop: 80, padding: "28px 32px", borderRadius: 14,
        border: "1px solid var(--accent-border)", background: "var(--accent-dim)",
      }}>
        <p style={{
          fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 10,
        }}>
          方法论
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
          每一篇研究都标注了写作时间和当时的判断。对了还是错了，都留着。
          这是我认为最诚实的投资学习方式。
        </p>
      </div>
    </div>
  );
}
