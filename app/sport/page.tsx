import Link from "next/link";
import { getAllEntries } from "@/lib/entries";

export const metadata = { title: "运动 · Jack Zhang" };

export default function SportPage() {
  const entries = getAllEntries("sport");
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 32px 96px" }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{
          fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 12,
        }}>
          运动
        </p>
        <h1 style={{
          fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em",
          color: "var(--text)", margin: "0 0 12px",
        }}>
          运动
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
          健身 · 滑雪 · 高尔夫 · 徒步
        </p>
      </div>

      {entries.length === 0 ? (
        <p style={{ color: "var(--text-faint)" }}>暂无内容，敬请期待。</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {entries.map((entry) => (
            <Link key={entry.slug} href={`/sport/${entry.slug}`} style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              padding: "18px 0", borderBottom: "1px solid var(--border)",
              textDecoration: "none", gap: 24,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "0.95rem", fontWeight: 500, color: "var(--text)",
                  letterSpacing: "-0.01em", marginBottom: entry.summary ? 6 : 0,
                }}>
                  {entry.title}
                </div>
                {entry.summary && (
                  <div style={{ fontSize: "0.83rem", color: "var(--text-faint)" }}>
                    {entry.summary}
                  </div>
                )}
              </div>
              <span style={{
                fontSize: "0.78rem", color: "var(--text-faint)",
                whiteSpace: "nowrap", flexShrink: 0, marginTop: 2,
              }}>
                {entry.date}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
