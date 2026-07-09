import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { InsightPost, InsightFrontmatter } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

export function getInsightSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getInsightBySlug(slug: string): InsightPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as InsightFrontmatter;

  return {
    slug,
    content,
    ...frontmatter,
  };
}

export function getAllInsights(): InsightPost[] {
  const slugs = getInsightSlugs();
  const posts = slugs
    .map((slug) => getInsightBySlug(slug))
    .filter((post): post is InsightPost => post !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
