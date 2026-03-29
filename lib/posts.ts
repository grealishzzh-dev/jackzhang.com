import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/research");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  sector?: string;
  summary?: string;
  status?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function parseDate(raw: unknown): string {
  if (!raw) return "";
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  return String(raw).slice(0, 10);
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: parseDate(data.date),
        tags: data.tags ?? [],
        sector: data.sector ?? "",
        summary: data.summary ?? "",
        status: data.status ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const filepath = path.join(CONTENT_DIR, slug + ext);
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: parseDate(data.date),
        tags: data.tags ?? [],
        sector: data.sector ?? "",
        summary: data.summary ?? "",
        status: data.status ?? "",
        content,
      };
    }
  }
  return null;
}
