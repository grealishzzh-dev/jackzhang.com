import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Nav";

export const metadata: Metadata = {
  title: "Jack Zhang",
  description: "投研笔记 · 个人研究记录",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className="h-full">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px 32px",
        textAlign: "center",
        fontSize: "0.78rem",
        color: "var(--text-faint)",
      }}
    >
      © {new Date().getFullYear()} Jack Zhang · 个人研究记录，不构成投资建议
    </footer>
  );
}
