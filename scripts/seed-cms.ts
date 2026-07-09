/**
 * Generates sanity-seed.ndjson from the site's current static content
 * (config/site.ts defaults plus the MDX insights) so a fresh Sanity dataset
 * starts fully populated.
 *
 * Usage:
 *   npm run cms:seed
 *   npx sanity dataset import sanity-seed.ndjson production
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { siteDefaults } from "../config/site";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "sanity-seed.ndjson");
const INSIGHTS_DIR = path.join(ROOT, "content", "insights");

const docs: Record<string, unknown>[] = [];

docs.push({
  _id: "siteSettings",
  _type: "siteSettings",
  phoneDisplay: siteDefaults.phone.display,
  address: { ...siteDefaults.address },
  emails: {
    general: siteDefaults.email.general,
    media: siteDefaults.email.media,
    newBusiness: siteDefaults.email.newBusiness,
  },
  abn: siteDefaults.abn || undefined,
  linkedInUrl: siteDefaults.linkedInUrl,
  lyallLinkedIn: siteDefaults.lyallLinkedIn,
  lyallTwitter: siteDefaults.lyallTwitter,
  stats: { ...siteDefaults.stats },
  sectors: [...siteDefaults.sectors],
  lyall: {
    fullName: siteDefaults.lyall.fullName,
    title: siteDefaults.lyall.title,
    yearsExperience: siteDefaults.lyall.yearsExperience,
    origin: siteDefaults.lyall.origin,
    quote: siteDefaults.lyall.quote,
    mediaOutlets: [...siteDefaults.lyall.mediaOutlets],
  },
  mediaReachSnapshot: {
    period: siteDefaults.mediaReachSnapshot.period,
    clientDescriptor: siteDefaults.mediaReachSnapshot.clientDescriptor,
    storyCount: siteDefaults.mediaReachSnapshot.storyCount,
    total: siteDefaults.mediaReachSnapshot.total,
    breakdown: siteDefaults.mediaReachSnapshot.breakdown.map((item, i) => ({
      _key: `breakdown-${i}`,
      label: item.label,
      value: item.value,
    })),
    source: siteDefaults.mediaReachSnapshot.source,
    caveat: siteDefaults.mediaReachSnapshot.caveat,
  },
});

siteDefaults.caseStudies.forEach((study, i) => {
  docs.push({
    _id: `caseStudy.${study.id}`,
    _type: "caseStudy",
    sector: study.sector,
    context: study.context,
    challenge: study.challenge,
    approach: study.approach,
    outcome: study.outcome,
    outcomeSub: study.outcomeSub,
    icon: study.icon,
    order: (i + 1) * 10,
  });
});

siteDefaults.faqs.forEach((faq, i) => {
  docs.push({
    _id: `faqItem.${i + 1}`,
    _type: "faqItem",
    question: faq.question,
    answer: faq.answer,
    order: (i + 1) * 10,
  });
});

for (const [key, magnet] of Object.entries(siteDefaults.leadMagnets)) {
  docs.push({
    _id: `leadMagnet.${key}`,
    _type: "leadMagnet",
    key,
    title: magnet.title,
    headline: "headline" in magnet ? magnet.headline : undefined,
    description: magnet.description,
    fileName: magnet.fileName,
    available: magnet.available,
  });
}

if (fs.existsSync(INSIGHTS_DIR)) {
  for (const file of fs.readdirSync(INSIGHTS_DIR)) {
    if (!file.endsWith(".mdx")) continue;
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    docs.push({
      _id: `insight.${slug}`,
      _type: "insight",
      title: data.title,
      slug: { _type: "slug", current: slug },
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      category: data.category,
      leadMagnet: data.leadMagnet,
      body: content.trim(),
    });
  }
}

const ndjson = docs
  .map((doc) =>
    JSON.stringify(doc, (_key, value) => (value === undefined ? undefined : value))
  )
  .join("\n");

fs.writeFileSync(OUT, ndjson + "\n");
console.log(`Wrote ${docs.length} documents to sanity-seed.ndjson`);
console.log("Import with: npx sanity dataset import sanity-seed.ndjson production --replace");
