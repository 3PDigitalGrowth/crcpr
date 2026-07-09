import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { InsightPost, InsightFrontmatter } from "@/types";

/**
 * Insights come from two places. CMS-authored articles (pulled from Sanity at
 * build time into content/cms/insights) win over the static repo files in
 * content/insights when slugs collide.
 */
const CONTENT_DIRS = [
  path.join(process.cwd(), "content", "cms", "insights"),
  path.join(process.cwd(), "content", "insights"),
];

export function getInsightSlugs(): string[] {
  const slugs = new Set<string>();
  for (const dir of CONTENT_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith(".mdx")) slugs.add(file.replace(/\.mdx$/, ""));
    }
  }
  return Array.from(slugs);
}

export function getInsightBySlug(slug: string): InsightPost | null {
  for (const dir of CONTENT_DIRS) {
    const filePath = path.join(dir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as InsightFrontmatter;

    return {
      slug,
      content,
      ...frontmatter,
    };
  }
  return null;
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
