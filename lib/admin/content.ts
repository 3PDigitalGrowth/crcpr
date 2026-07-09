import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { siteDefaults, mergeOverrides } from "@/config/site";
import {
  getRepoFile,
  putRepoFile,
  deleteRepoFile,
  listRepoDir,
  ContentStoreError,
} from "@/lib/admin/github";
import type { AdminField, AdminItemField, AdminSection } from "@/config/adminSections";

const SITE_JSON_PATH = "content/cms/site.json";
const INSIGHTS_DIR = "content/insights";
const UPLOADS_DIR = "public/images/uploads";

export class ValidationError extends Error {}

/* ------------------------------------------------------------------ */
/* Site overrides (content/cms/site.json)                               */
/* ------------------------------------------------------------------ */

export async function getOverrides(): Promise<Record<string, unknown>> {
  const file = await getRepoFile(SITE_JSON_PATH);
  if (!file) return {};
  try {
    const parsed = JSON.parse(file.content);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

/** Current content as the site renders it: repo overrides over defaults. */
export async function getMergedConfig(): Promise<Record<string, unknown>> {
  const overrides = await getOverrides();
  return mergeOverrides(siteDefaults, overrides) as Record<string, unknown>;
}

export function getPath(source: unknown, dotPath: string): unknown {
  let current: unknown = source;
  for (const key of dotPath.split(".")) {
    if (typeof current !== "object" || current === null) return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function setPath(
  target: Record<string, unknown>,
  dotPath: string,
  value: unknown
): void {
  const keys = dotPath.split(".");
  let current = target;
  for (const key of keys.slice(0, -1)) {
    const next = current[key];
    if (typeof next !== "object" || next === null || Array.isArray(next)) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
}

function sanitiseScalar(
  field: {
    type: AdminField["type"] | AdminItemField["type"];
    label: string;
    options?: { value: string; label: string }[];
  },
  raw: unknown
): unknown {
  switch (field.type) {
    case "boolean":
      return raw === true || raw === "true" || raw === "on";
    case "number": {
      const num = Number(raw);
      if (!Number.isFinite(num)) {
        throw new ValidationError(`"${field.label}" must be a number.`);
      }
      return num;
    }
    case "select": {
      const value = String(raw ?? "").trim();
      if (field.options && !field.options.some((opt) => opt.value === value)) {
        throw new ValidationError(`"${field.label}" has an invalid option.`);
      }
      return value;
    }
    default:
      return String(raw ?? "").trim();
  }
}

function sanitiseField(field: AdminField, raw: unknown): unknown {
  if (field.type === "stringList") {
    if (!Array.isArray(raw)) throw new ValidationError(`"${field.label}" must be a list.`);
    return raw.map((entry) => String(entry ?? "").trim()).filter(Boolean);
  }
  if (field.type === "itemList") {
    if (!Array.isArray(raw)) throw new ValidationError(`"${field.label}" must be a list.`);
    return raw
      .map((item) => {
        const source = (typeof item === "object" && item !== null ? item : {}) as Record<
          string,
          unknown
        >;
        const clean: Record<string, unknown> = {};
        for (const itemField of field.itemFields ?? []) {
          clean[itemField.key] = sanitiseScalar(itemField, source[itemField.key]);
        }
        if (field.generatedIdKey) {
          const existing = String(source[field.generatedIdKey] ?? "").trim();
          clean[field.generatedIdKey] = existing || generateId();
        }
        return clean;
      })
      .filter((item) =>
        Object.entries(item).some(
          ([key, value]) =>
            key !== field.generatedIdKey &&
            typeof value === "string" &&
            value.length > 0
        )
      );
  }
  return sanitiseScalar(field, raw);
}

function generateId(): string {
  return `item-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Saves one admin section: sanitises the submitted values against the section
 * definition, writes them into the overrides file, and commits.
 */
export async function saveSection(
  section: AdminSection,
  payload: Record<string, unknown>
): Promise<void> {
  const overrides = await getOverrides();
  for (const field of section.fields) {
    if (!(field.path in payload)) continue;
    setPath(overrides, field.path, sanitiseField(field, payload[field.path]));
  }
  await writeOverrides(overrides, section.title);
}

/** Saves the lead magnets keyed map (special-cased: not an array section). */
export async function saveLeadMagnets(
  fields: AdminItemField[],
  payload: Record<string, Record<string, unknown>>
): Promise<void> {
  const overrides = await getOverrides();
  const validKeys = Object.keys(siteDefaults.leadMagnets);
  const clean: Record<string, Record<string, unknown>> = {};
  for (const key of validKeys) {
    const submitted = payload[key];
    if (!submitted || typeof submitted !== "object") continue;
    const entry: Record<string, unknown> = {};
    for (const field of fields) {
      if (!(field.key in submitted)) continue;
      entry[field.key] = sanitiseScalar(field, submitted[field.key]);
    }
    if (Object.keys(entry).length) clean[key] = entry;
  }
  setPath(overrides, "leadMagnets", clean);
  await writeOverrides(overrides, "Lead magnets");
}

async function writeOverrides(
  overrides: Record<string, unknown>,
  sectionTitle: string
): Promise<void> {
  await putRepoFile(
    SITE_JSON_PATH,
    JSON.stringify(overrides, null, 2) + "\n",
    `Content update via admin: ${sectionTitle}`
  );
}

/* ------------------------------------------------------------------ */
/* Insights (content/insights/*.mdx)                                    */
/* ------------------------------------------------------------------ */

export interface AdminInsight {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  leadMagnet: string;
  body: string;
}

export async function listInsights(): Promise<
  Pick<AdminInsight, "slug" | "title" | "date" | "category">[]
> {
  const entries = await listRepoDir(INSIGHTS_DIR);
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.name.endsWith(".mdx"))
      .map(async (entry) => {
        const slug = entry.name.replace(/\.mdx$/, "");
        const post = await getInsight(slug);
        return post
          ? { slug, title: post.title, date: post.date, category: post.category }
          : null;
      })
  );
  return posts
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInsight(slug: string): Promise<AdminInsight | null> {
  if (!isValidSlug(slug)) return null;
  const file = await getRepoFile(`${INSIGHTS_DIR}/${slug}.mdx`);
  if (!file) return null;
  const { data, content } = matter(file.content);
  return {
    slug,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? ""),
    excerpt: String(data.excerpt ?? ""),
    category: String(data.category ?? ""),
    leadMagnet: String(data.leadMagnet ?? ""),
    body: content.trim(),
  };
}

export async function saveInsight(post: AdminInsight): Promise<void> {
  if (!isValidSlug(post.slug)) {
    throw new ValidationError(
      "The URL slug can only contain lowercase letters, numbers and hyphens."
    );
  }
  if (!post.title.trim()) throw new ValidationError("The article needs a title.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date)) {
    throw new ValidationError("The publish date must look like 2026-07-09.");
  }
  await assertMdxCompiles(post.body);

  const frontmatter: Record<string, string> = {
    title: post.title.trim(),
    date: post.date,
    author: post.author.trim() || "Lyall Mercer",
    excerpt: post.excerpt.trim(),
    category: post.category.trim(),
  };
  if (post.leadMagnet.trim()) frontmatter.leadMagnet = post.leadMagnet.trim();

  const raw = matter.stringify(`\n${post.body.trim()}\n`, frontmatter);
  await putRepoFile(
    `${INSIGHTS_DIR}/${post.slug}.mdx`,
    raw,
    `Content update via admin: article "${post.title.trim()}"`
  );
}

export async function deleteInsight(slug: string): Promise<void> {
  if (!isValidSlug(slug)) return;
  await deleteRepoFile(
    `${INSIGHTS_DIR}/${slug}.mdx`,
    `Content update via admin: delete article ${slug}`
  );
}

export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * Article bodies are compiled as MDX at build time, so a stray "<" or "{"
 * would fail the production build. Compile here first and reject the save
 * with a friendly error instead.
 */
async function assertMdxCompiles(body: string): Promise<void> {
  try {
    await compileMDX({ source: body });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    throw new ValidationError(
      `The article body has formatting that cannot be published: ${detail}. ` +
        "This usually means a stray < or { character. Wrap code-like text in backticks or remove the character."
    );
  }
}

/* ------------------------------------------------------------------ */
/* Images (public/images/uploads)                                       */
/* ------------------------------------------------------------------ */

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"];
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export interface UploadedImage {
  name: string;
  /** Public URL path, e.g. /images/uploads/team.jpg */
  src: string;
  size: number;
}

export async function listUploadedImages(): Promise<UploadedImage[]> {
  const entries = await listRepoDir(UPLOADS_DIR);
  return entries
    .filter((entry) =>
      IMAGE_EXTENSIONS.some((ext) => entry.name.toLowerCase().endsWith(ext))
    )
    .map((entry) => ({
      name: entry.name,
      src: `/images/uploads/${entry.name}`,
      size: entry.size,
    }));
}

export async function uploadImage(file: File): Promise<UploadedImage> {
  const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    throw new ValidationError(
      `Only image files are allowed (${IMAGE_EXTENSIONS.join(", ")}).`
    );
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new ValidationError("Images must be under 4 MB. Resize it and try again.");
  }
  const base = slugify(file.name.slice(0, file.name.lastIndexOf("."))) || "image";
  const name = `${base}${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await putRepoFile(
    `${UPLOADS_DIR}/${name}`,
    buffer,
    `Content update via admin: upload image ${name}`
  );
  return { name, src: `/images/uploads/${name}`, size: file.size };
}

export { ContentStoreError };
