"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/research", label: "研究" },
];

const secondaryLinks = [
  { href: "/life", label: "生活" },
  { href: "/football", label: "足球" },
  { href: "/sport", label: "运动" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      borderBottom: "1px solid var(--border)",
      background: "rgba(15,15,15,0.88)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      position: "sticky", top: 0, zIndex: 50,
    }}>
      <style>{`
        .nav-link { transition: color 0.15s; }
        .nav-link:hover { color: var(--text) !important; }
      `}</style>
      <div style={{
        maxWidth: 900, margin: "0 auto", padding: "0 32px",
        height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          fontWeight: 600, fontSize: "0.95rem",
          letterSpacing: "-0.01em", color: "var(--text)", textDecoration: "none",
        }}>
          Jack Zhang
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* 主板块：研究，金色高亮 */}
          {primaryLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link" style={{
              fontSize: "0.88rem", fontWeight: 600,
              color: pathname.startsWith(href) ? "var(--accent)" : "var(--accent)",
              textDecoration: "none", letterSpacing: "0.01em",
              padding: "5px 12px", borderRadius: 8,
              background: pathname.startsWith(href) ? "var(--accent-dim)" : "transparent",
              transition: "background 0.15s",
            }}>
              {label}
            </Link>
          ))}

          {/* 分隔线 */}
          <div style={{
            width: 1, height: 16,
            background: "var(--border)", margin: "0 8px",
          }} />

          {/* 副板块：生活、足球、运动 */}
          {secondaryLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link" style={{
              fontSize: "0.83rem", fontWeight: 400,
              color: pathname.startsWith(href) ? "var(--text)" : "var(--text-muted)",
              textDecoration: "none", letterSpacing: "0.01em",
              padding: "5px 10px",
            }}>
              {label}
            </Link>
          ))}

          {/* 分隔线 */}
          <div style={{
            width: 1, height: 16,
            background: "var(--border)", margin: "0 8px",
          }} />

          <Link href="/about" className="nav-link" style={{
            fontSize: "0.83rem",
            color: pathname.startsWith("/about") ? "var(--text)" : "var(--text-muted)",
            textDecoration: "none", letterSpacing: "0.01em",
            padding: "5px 10px",
          }}>
            关于我
          </Link>
        </div>
      </div>
    </nav>
  );
}
