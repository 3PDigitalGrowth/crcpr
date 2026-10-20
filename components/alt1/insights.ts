import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllInsights } from "@/lib/mdx";
import type { InsightFrontmatter, InsightPost, LeadMagnetKey } from "@/types";
import { A1_ROUTES, DOWNLOADABLE, PHOTOS } from "./data";
import { slugify } from "./format";

/**
 * Article data for the Alt 1 insights hub and article template. Reads the
 * live insights (content/insights) plus the one real post carried over from
 * the current crcpr.com.au WordPress site (content/insights-archive).
 */

export type A1Post = InsightPost & {
  href: string;
  image: string;
  imageAlt: string;
  readMins: number;
  magnet: LeadMagnetKey;
};

/** What a card needs: everything except the article body. */
export type A1Card = Omit<A1Post, "content">;

export function toCard(post: A1Post): A1Card {
  const card: Partial<A1Post> = { ...post };
  delete card.content;
  return card as A1Card;
}

const ARCHIVE_DIR = path.join(process.cwd(), "content", "insights-archive");

const IMAGES: Record<string, { src: string; alt: string }> = {
  "the-15-minutes-principle": {
    src: PHOTOS.lyallPhone,
    alt: "Lyall Mercer taking a call in the CRC Public Relations office",
  },
  "what-your-board-needs-to-know-about-reputation-risk": {
    src: PHOTOS.officeBoardroom,
    alt: "The boardroom table at the CRC Public Relations office",
  },
  "why-your-crisis-communications-advice-might-hurt-you": {
    src: PHOTOS.lyallLaptop,
    alt: "Lyall Mercer working through a client matter at his laptop",
  },
};

function readArchive(): InsightPost[] {
  if (!fs.existsSync(ARCHIVE_DIR)) return [];
  return fs
    .readdirSync(ARCHIVE_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(ARCHIVE_DIR, f), "utf-8"));
      return { slug: f.replace(/\.mdx$/, ""), content, ...(data as InsightFrontmatter) };
    });
}

function decorate(post: InsightPost): A1Post {
  const words = post.content.split(/\s+/).filter(Boolean).length;
  const img = IMAGES[post.slug] ?? { src: PHOTOS.officeLounge, alt: "The CRC Public Relations office" };
  const magnet =
    post.leadMagnet && DOWNLOADABLE.includes(post.leadMagnet) ? post.leadMagnet : "crisisReadinessChecklist";
  return {
    ...post,
    href: `${A1_ROUTES.insights}/${post.slug}`,
    image: img.src,
    imageAlt: img.alt,
    readMins: Math.max(1, Math.round(words / 220)),
    magnet,
  };
}

export function getA1Posts(): A1Post[] {
  return [...getAllInsights(), ...readArchive()]
    .map(decorate)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getA1Post(slug: string): A1Post | null {
  return getA1Posts().find((p) => p.slug === slug) ?? null;
}

export function getToc(content: string) {
  return content
    .split("\n")
    .filter((l) => /^##\s+/.test(l))
    .map((l) => {
      const text = l.replace(/^##\s+/, "").trim();
      return { text, id: slugify(text) };
    });
}

/**
 * Internal links: the first natural mention of each phrase in the body links
 * to the matching service page (one link per destination, never in headings
 * or quotes, never inside an existing link).
 */
const LINK_RULES: { phrase: string; href: string }[] = [
  { phrase: "crisis communications planning", href: A1_ROUTES.crisis },
  { phrase: "tested crisis communications plan", href: A1_ROUTES.crisis },
  { phrase: "outside crisis counsel", href: A1_ROUTES.crisis },
  { phrase: "crisis communications expert", href: A1_ROUTES.crisis },
  { phrase: "media trained", href: "/media-training" },
  { phrase: "media training", href: "/media-training" },
  { phrase: "internal communications", href: "/services/corporate-communications" },
  { phrase: "corporate communications", href: "/services/corporate-communications" },
  { phrase: "reputational vulnerability", href: "/services/reputation-management" },
  { phrase: "reputation damage", href: "/services/reputation-management" },
  { phrase: "reputation issue", href: "/services/reputation-management" },
  { phrase: "emerging crisis", href: "/services/issues-management" },
];

export function autoLink(content: string): string {
  const usedHrefs = new Set<string>();
  const lines = content.split("\n");
  return lines
    .map((line) => {
      if (/^\s*(#|>|---)/.test(line) || line.trim().startsWith("*Lyall")) return line;
      let out = line;
      for (const rule of LINK_RULES) {
        if (usedHrefs.has(rule.href)) continue;
        // Only touch text outside existing markdown links.
        const parts = out.split(/(\[[^\]]*\]\([^)]*\))/g);
        let done = false;
        for (let i = 0; i < parts.length && !done; i += 2) {
          const re = new RegExp(`\\b(${rule.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
          const m = parts[i].match(re);
          if (m && m.index !== undefined) {
            parts[i] =
              parts[i].slice(0, m.index) + `[${m[1]}](${rule.href})` + parts[i].slice(m.index + m[1].length);
            done = true;
          }
        }
        if (done) {
          out = parts.join("");
          usedHrefs.add(rule.href);
        }
      }
      return out;
    })
    .join("\n");
}

/** Split the body so a resource offer can sit naturally mid-article. */
export function splitForInsert(content: string): [string, string] {
  const h2: number[] = [];
  const re = /^## /gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) h2.push(m.index);
  if (h2.length >= 3) return [content.slice(0, h2[2]), content.slice(h2[2])];
  const blocks = content.split(/\n{2,}/);
  let at = Math.round(blocks.length * 0.45);
  while (at < blocks.length - 1 && /^(\s*[-*]|\s*\d+\.|\s{2,})/.test(blocks[at])) at += 1;
  return [blocks.slice(0, at).join("\n\n"), blocks.slice(at).join("\n\n")];
}

export const RELATED_SERVICES: Record<string, { title: string; href: string; blurb: string }[]> = {
  "Crisis Communications": [
    {
      title: "Crisis Communications",
      href: A1_ROUTES.crisis,
      blurb: "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    },
    {
      title: "Issues management",
      href: "/services/issues-management",
      blurb: "Get ahead before issues become crises",
    },
    {
      title: "Media Training",
      href: "/media-training",
      blurb: "Spokesperson training, hostile interview preparation, and on-camera coaching.",
    },
  ],
  "Reputation Management": [
    {
      title: "Reputation Management",
      href: "/services/reputation-management",
      blurb:
        "Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny.",
    },
    {
      title: "Crisis Communications",
      href: A1_ROUTES.crisis,
      blurb: "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    },
    {
      title: "Issues management",
      href: "/services/issues-management",
      blurb: "Get ahead before issues become crises",
    },
  ],
};
