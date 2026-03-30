import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface EntryMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary?: string;
}

export interface Entry extends EntryMeta {
  content: string;
}

function parseDate(raw: unknown): string {
  if (!raw) return "";
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  return String(raw).slice(0, 10);
}

export function getAllEntries(category: string): EntryMeta[] {
  const dir = path.join(process.cwd(), "content", category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: parseDate(data.date),
        tags: data.tags ?? [],
        summary: data.summary ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEntry(category: string, slug: string): Entry | null {
  const dir = path.join(process.cwd(), "content", category);
  for (const ext of [".md", ".mdx"]) {
    const filepath = path.join(dir, slug + ext);
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: parseDate(data.date),
        tags: data.tags ?? [],
        summary: data.summary ?? "",
        content,
      };
    }
  }
  return null;
}
