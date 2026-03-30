"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/research", label: "研究" },
  { href: "/about", label: "关于我" },
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
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link" style={{
              fontSize: "0.85rem",
              color: pathname.startsWith(href) ? "var(--text)" : "var(--text-muted)",
              textDecoration: "none", letterSpacing: "0.01em",
            }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
