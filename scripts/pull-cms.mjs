/**
 * Pulls all published content from Sanity and writes it into the repo so the
 * static site builds with CMS content:
 *   - content/cms/site.json      overrides deep-merged over config/site.ts
 *   - content/cms/insights/*.mdx CMS-authored articles (win over content/insights)
 *
 * Runs automatically before every build (prebuild). If the CMS is not
 * configured or unreachable it logs and exits 0 so the site still builds from
 * the static defaults.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, "content", "cms", "site.json");
const OUT_INSIGHTS = path.join(ROOT, "content", "cms", "insights");

loadDotEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_READ_TOKEN; // only needed for private datasets

if (!projectId) {
  console.log("[cms] NEXT_PUBLIC_SANITY_PROJECT_ID not set - building from static defaults.");
  process.exit(0);
}

try {
  const { createClient } = await import("@sanity/client");
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-10-01",
    useCdn: false,
    perspective: "published",
    token,
  });

  const [settings, caseStudies, faqs, leadMagnets, insights] =
    await Promise.all([
      client.fetch(`*[_id == "siteSettings"][0]`),
      client.fetch(`*[_type == "caseStudy"] | order(order asc, _createdAt asc)`),
      client.fetch(`*[_type == "faqItem"] | order(order asc, _createdAt asc)`),
      client.fetch(`*[_type == "leadMagnet"]`),
      client.fetch(`*[_type == "insight"] | order(date desc)`),
    ]);

  const overrides = prune({
    ...mapSettings(settings),
    caseStudies: mapCaseStudies(caseStudies),
    faqs: mapFaqs(faqs),
    leadMagnets: mapLeadMagnets(leadMagnets),
  });

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(overrides ?? {}, null, 2) + "\n");

  const written = writeInsights(insights);
  console.log(
    `[cms] Pulled from Sanity (${projectId}/${dataset}): ` +
      `${caseStudies?.length ?? 0} case studies, ${faqs?.length ?? 0} FAQs, ` +
      `${leadMagnets?.length ?? 0} lead magnets, ${written} insights, ` +
      `settings ${settings ? "yes" : "no"}.`
  );
} catch (err) {
  console.warn("[cms] Pull failed - building from static defaults.", err?.message ?? err);
  process.exit(0);
}

function mapSettings(doc) {
  if (!doc) return {};
  return {
    phone: doc.phoneDisplay
      ? {
          display: doc.phoneDisplay,
          href: "tel:" + doc.phoneDisplay.replace(/[^\d+]/g, ""),
        }
      : undefined,
    address: doc.address,
    email: doc.emails
      ? {
          general: doc.emails.general,
          media: doc.emails.media,
          newBusiness: doc.emails.newBusiness,
        }
      : undefined,
    abn: doc.abn,
    linkedInUrl: doc.linkedInUrl,
    lyallLinkedIn: doc.lyallLinkedIn,
    lyallTwitter: doc.lyallTwitter,
    stats: doc.stats,
    sectors: doc.sectors,
    lyall: doc.lyall
      ? {
          fullName: doc.lyall.fullName,
          title: doc.lyall.title,
          yearsExperience: doc.lyall.yearsExperience,
          origin: doc.lyall.origin,
          quote: doc.lyall.quote,
          mediaOutlets: doc.lyall.mediaOutlets,
        }
      : undefined,
    mediaReachSnapshot: doc.mediaReachSnapshot
      ? {
          period: doc.mediaReachSnapshot.period,
          clientDescriptor: doc.mediaReachSnapshot.clientDescriptor,
          storyCount: doc.mediaReachSnapshot.storyCount,
          total: doc.mediaReachSnapshot.total,
          breakdown: doc.mediaReachSnapshot.breakdown?.map((item) => ({
            label: item.label,
            value: item.value,
          })),
          source: doc.mediaReachSnapshot.source,
          caveat: doc.mediaReachSnapshot.caveat,
        }
      : undefined,
  };
}

function mapCaseStudies(docs) {
  if (!docs?.length) return undefined;
  return docs.map((doc) => ({
    id: doc._id,
    sector: doc.sector ?? "",
    context: doc.context ?? "",
    challenge: doc.challenge ?? "",
    approach: doc.approach ?? "",
    outcome: doc.outcome ?? "",
    outcomeSub: doc.outcomeSub ?? "",
    icon: doc.icon ?? "Building2",
  }));
}

function mapFaqs(docs) {
  if (!docs?.length) return undefined;
  return docs.map((doc) => ({
    question: doc.question ?? "",
    answer: doc.answer ?? "",
  }));
}

function mapLeadMagnets(docs) {
  if (!docs?.length) return undefined;
  const byKey = {};
  for (const doc of docs) {
    if (!doc.key) continue;
    byKey[doc.key] = prune({
      title: doc.title,
      headline: doc.headline,
      description: doc.description,
      fileName: doc.fileName,
      available: doc.available,
    });
  }
  return Object.keys(byKey).length ? byKey : undefined;
}

function writeInsights(docs) {
  fs.rmSync(OUT_INSIGHTS, { recursive: true, force: true });
  fs.mkdirSync(OUT_INSIGHTS, { recursive: true });
  let written = 0;
  for (const doc of docs ?? []) {
    const slug = doc.slug?.current;
    if (!slug || !doc.title) continue;
    const frontmatter = [
      "---",
      `title: ${JSON.stringify(doc.title)}`,
      `date: ${JSON.stringify(doc.date ?? "")}`,
      `author: ${JSON.stringify(doc.author ?? "Lyall Mercer")}`,
      `excerpt: ${JSON.stringify(doc.excerpt ?? "")}`,
      `category: ${JSON.stringify(doc.category ?? "")}`,
      doc.leadMagnet ? `leadMagnet: ${JSON.stringify(doc.leadMagnet)}` : null,
      "---",
    ]
      .filter(Boolean)
      .join("\n");
    fs.writeFileSync(
      path.join(OUT_INSIGHTS, `${slug}.mdx`),
      `${frontmatter}\n\n${doc.body ?? ""}\n`
    );
    written += 1;
  }
  return written;
}

/** Removes null/undefined values recursively; empty objects collapse away. */
function prune(value) {
  if (Array.isArray(value)) {
    return value.map(prune);
  }
  if (value && typeof value === "object") {
    const result = {};
    for (const [key, entry] of Object.entries(value)) {
      const cleaned = prune(entry);
      if (cleaned === undefined || cleaned === null) continue;
      if (
        typeof cleaned === "object" &&
        !Array.isArray(cleaned) &&
        Object.keys(cleaned).length === 0
      ) {
        continue;
      }
      result[key] = cleaned;
    }
    return result;
  }
  return value ?? undefined;
}

/** Minimal .env.local loader so local `npm run cms:pull` works without extras. */
function loadDotEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, raw] = match;
    if (process.env[key] !== undefined) continue;
    process.env[key] = raw.replace(/^["']|["']$/g, "");
  }
}
