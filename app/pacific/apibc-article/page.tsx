import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MEDIA } from "@/components/altkit/data";
import { formatDate } from "@/components/altkit/format";
import { LeadMagnetForm } from "@/components/altkit/forms";
import { FramedPhoto } from "@/components/altkit/media";
import { ReadingProgress, Reveal } from "@/components/altkit/motion";
import { BlueRule, Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { MT } from "@/components/editable";
import { APIBC_ARTICLE, APIBC_CLOSING, APIBC_SOURCE, type ArticleBlock } from "@/components/pacific/apibc/article";
import { ScrollQuote } from "@/components/pacific/apibc/ScrollQuote";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

/*
 * Landing page for the Australia Pacific Islands Business Council's member
 * story about CRC (Alex, 18 Nov 2026). The article is APIBC's, shown word for
 * word, and the page says so at the top, beside the text and at the end, so no
 * visitor takes it for something CRC wrote about itself.
 *
 * Everything on the white sheet is APIBC's. Everything off it is CRC's and
 * reuses wording already approved elsewhere on the site: the proof strip and
 * enquiry block from /pacific, the checklist offer from Corporate
 * Communications. The only new wording is the attribution itself.
 */

const published = formatDate(APIBC_SOURCE.published);

/*
 * The share image needs a full address on whichever domain is serving the site.
 * The layout's metadataBase is crcpr.com.au, which is still the old WordPress
 * site, so until the domain moves the picture is served from the Vercel address.
 */
const shareHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : siteConfig.crcPrUrl;

export const metadata: Metadata = {
  title: { absolute: "Effective communication critical to business success in the Pacific | CRC Public Relations" },
  description: `The ${APIBC_SOURCE.publisher}'s member story on CRC Public Relations and its work across the Pacific, published ${published}.`,
  // The original is the version search engines should credit.
  alternates: { canonical: APIBC_SOURCE.url },
  openGraph: {
    title: APIBC_SOURCE.headline,
    description: `Published by the ${APIBC_SOURCE.publisher}, ${published}.`,
    type: "article",
    images: [{ url: `${shareHost}${MEDIA.pacificForum}`, width: 1800, height: 1200 }],
  },
};

/* Same wording as the proof strip on /pacific. */
const proofItems = [
  {
    label: "Regional depth",
    value: "Pacific-specific",
    detail:
      "Our advice is built for the political, cultural, and stakeholder realities of Pacific Island nations, not copied from a generic playbook.",
  },
  {
    label: "Relationship discipline",
    value: "Protocol-aware",
    detail:
      "We understand the importance of national sovereignty to every Pacific nation, and the respect required to deal across stakeholders.",
  },
  {
    label: "Cross-border counsel",
    value: "Government and corporate",
    detail:
      "We support governments, NGOs, development partners, and Australian and international organisations operating across the region.",
  },
];

const testimonial = {
  quote:
    "CRC Public Relations has worked extensively across the Pacific Region providing high-level advice to governments.",
  name: "His Excellency Baron Waqa",
  role: "Former President, Republic of Nauru",
  office: "Secretary General, Pacific Islands Forum",
} as const;

/* Same wording as the checklist panel on /services/corporate-communications. */
const offer = {
  magnet: "corpCommsChecklist",
  title: "Is your organisation's communications strategy ready for scrutiny?",
  description:
    "Download the CRC Public Relations 10 point communications checklist. This provides you with 10 key areas that together ensure your communication isn't random, but is strategically planned with the aim of building ongoing trust with your stakeholders. Applies to companies, non-profits, governments, professional services firms, schools and associations.",
} as const;

function OriginalLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={APIBC_SOURCE.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </a>
  );
}

/** CRC's own offer, laid across APIBC's sheet in CRC blue so the two voices never blur. */
function ChecklistOffer() {
  return (
    <aside
      className="tone-cta kit-r relative -mx-2 overflow-hidden p-6 shadow-[0_32px_60px_-34px_rgba(21,94,154,0.7)] md:-mx-4 md:p-9 lg:-mx-[4.75rem]"
      aria-label={siteConfig.leadMagnets[offer.magnet].title}
    >
      <div className="orb -right-24 -top-36 h-[26rem] w-[26rem]" aria-hidden />
      <div className="relative">
        <div className="flex items-center justify-between gap-6">
          <Eyebrow className="whitespace-nowrap">Free download</Eyebrow>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/crc-2026/crc-logo-white.png" alt="CRC Public Relations" className="h-6 w-auto brightness-0 invert md:h-8"
          />
        </div>
        <p className="kit-display mt-5 max-w-2xl text-[clamp(1.35rem,2.3vw,1.9rem)] leading-[1.08]">{offer.title}</p>
        <p className="mt-2 text-sm font-semibold">{siteConfig.leadMagnets[offer.magnet].title}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{offer.description}</p>
        <div className="mt-6">
          <LeadMagnetForm magnet={offer.magnet} layout="row" submitLabel="Send it to me" />
        </div>
      </div>
    </aside>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.kind) {
    case "lead":
      return <p className="max-w-[44rem] text-[clamp(1.15rem,1.65vw,1.375rem)] font-semibold leading-[1.42]">{block.text}</p>;
    case "p":
      return <p className="max-w-[44rem] text-[1.0625rem] leading-[1.75] text-muted">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="max-w-[44rem] space-y-4 border-l-[3px] border-[var(--k-blue)] pl-5 md:pl-6">
          {block.paras.map((para) => (
            <p key={para} className="text-[1.125rem] font-medium leading-[1.6]">
              {para}
            </p>
          ))}
        </blockquote>
      );
    case "peak":
      return (
        <figure className="py-3 md:py-5">
          <BlueRule width="3rem" />
          <blockquote>
            <ScrollQuote
              text={block.quote}
              className="kit-display mt-6 text-[clamp(1.65rem,3.3vw,2.6rem)] leading-[1.08] [text-indent:-0.42em]"
            />
          </blockquote>
          <figcaption className="mt-5 text-[1.0625rem] leading-[1.75] text-muted">{block.tail}</figcaption>
        </figure>
      );
    case "offer":
      return <ChecklistOffer />;
  }
}

export default function ApibcArticlePage() {
  const [headlineLead, headlineSubject] = APIBC_SOURCE.headline.split("says ");

  return (
    <>
      <ReadingProgress />

      {/* ---------- WHO PUBLISHED IT, THEN THE HEADLINE ---------- */}
      <section className="tone-base relative overflow-hidden">
        <div className="orb -right-56 -top-72 h-[44rem] w-[44rem]" aria-hidden />
        <Container className="pb-11 pt-10 md:pb-14 md:pt-14">
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">Published by</p>
                <p className="kit-display mt-2 text-[clamp(1.2rem,2.1vw,1.7rem)] leading-[1.1]">{APIBC_SOURCE.publisher}</p>
              </div>
              <p className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:pb-1">
                <span>{APIBC_SOURCE.section}</span>
                <time dateTime={APIBC_SOURCE.published}>{published}</time>
                <OriginalLink className="text-fg">{APIBC_SOURCE.site}</OriginalLink>
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-10 md:mt-11 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)] lg:gap-14">
            <Reveal delay={0.06} className="flex flex-col">
              <h1 className="kit-display text-balance text-[clamp(1.9rem,3.9vw,3.25rem)] leading-[1.04]">
                {headlineLead}says <span className="text-accent sm:whitespace-nowrap">{headlineSubject}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-[17px]">
                This article was published by the {APIBC_SOURCE.publisher} on {published}. It is reproduced here in
                full, as it appeared.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-auto lg:pt-10">
                <a href="#enquiry" className="btn btn-primary">
                  Work with us in the Pacific
                </a>
                <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  Or call {siteConfig.phone.display}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.14} className="lg:h-full">
              <FramedPhoto
                src={MEDIA.pacificForum}
                alt="Delegation tables and flags at the Pacific Islands Forum"
                ratio="aspect-[3/2] lg:aspect-auto"
                position="60% 55%"
                sizes="(min-width: 1024px) 480px, 100vw"
                className="lg:h-full lg:min-h-[23rem]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- THE ARTICLE, ON ITS OWN SHEET ---------- */}
      <Section id="article" tone="deep" className="scroll-mt-24 py-11 md:py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr),300px] lg:gap-14">
          <article
            className="kit-r border border-line bg-card px-6 py-8 shadow-[0_36px_70px_-52px_rgba(15,27,45,0.45)] md:px-10 md:py-12 lg:px-14 lg:py-14"
            aria-label={APIBC_SOURCE.headline}
          >
            <header>
              <BlueRule />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">{APIBC_SOURCE.section}</p>
            </header>

            <div className="mt-7 space-y-7">
              {APIBC_ARTICLE.map((block, i) => (
                <Block key={i} block={block} />
              ))}
              <p className="max-w-[44rem] text-[1.0625rem] leading-[1.75] text-muted">
                {APIBC_CLOSING.before}
                <a
                  href={APIBC_CLOSING.href}
                  className="font-medium text-accent underline decoration-[1.5px] underline-offset-[3px]"
                >
                  {APIBC_CLOSING.label}
                </a>
                {APIBC_CLOSING.after}
              </p>
            </div>

            <footer className="mt-10 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="text-balance text-sm leading-relaxed text-muted">
                Published by the {APIBC_SOURCE.publisher}, <time dateTime={APIBC_SOURCE.published}>{published}</time>.
              </p>
              <OriginalLink className="shrink-0 text-sm font-semibold">Read the original article</OriginalLink>
            </footer>
          </article>

          {/* Stays beside the text on desktop: who published it, and the way to reach CRC. */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              <div className="kit-r border border-line bg-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Published by</p>
                <p className="kit-display mt-2 text-[1.05rem] leading-snug">{APIBC_SOURCE.publisher}</p>
                <dl className="mt-4 divide-y divide-[var(--line)] border-y border-line text-sm">
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-muted">Published</dt>
                    <dd className="font-semibold">
                      <time dateTime={APIBC_SOURCE.published}>{published}</time>
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-muted">Source</dt>
                    <dd className="font-semibold">{APIBC_SOURCE.site}</dd>
                  </div>
                </dl>
                <OriginalLink className="mt-4 text-sm font-semibold">Read the original article</OriginalLink>
              </div>

              <div className="kit-r border border-line bg-card p-5">
                <p className="text-[15px] font-bold leading-snug">Need communications advice for a Pacific matter?</p>
                <a href="#enquiry" className="btn btn-primary mt-4 w-full">
                  Work with us in the Pacific
                </a>
                <a href={siteConfig.phone.href} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      {/* ---------- CRC'S OWN PROOF ---------- */}
      {/* The proof strip from /pacific, same wording and same editor ids, with the
          testimonial moved up beside the heading so nothing sits next to empty space. */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-end lg:gap-14">
            <div>
              <Eyebrow>
                <MT id="pacific.proof.eyebrow">Why CRC Public Relations</MT>
              </Eyebrow>
              <H2 className="mt-3 max-w-3xl">
                <MT id="pacific.proof.title">
                  Pacific advisory work succeeds when communication respects context, protocol, and relationship.
                </MT>
              </H2>
            </div>
            <Reveal>
              <figure className="border-l-[3px] border-[var(--k-blue)] pl-5 md:pl-6">
                <blockquote className="text-[clamp(1.05rem,1.6vw,1.3rem)] font-medium leading-[1.45]">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-4 space-y-0.5">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{testimonial.office}</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="ledger mt-9">
            {proofItems.map((item, i) => (
              <div key={item.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  <MT id={`pacific.proof.items.${i}.label`}>{item.label}</MT>
                </p>
                <p className="kit-display mt-2 text-[clamp(1.2rem,1.9vw,1.5rem)] uppercase leading-tight">
                  <MT id={`pacific.proof.items.${i}.value`}>{item.value}</MT>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <MT id={`pacific.proof.items.${i}.detail`}>{item.detail}</MT>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <LeadMagnetBanner magnet="crisisReadinessChecklist" variant="dark" />

      <div id="enquiry" className="scroll-mt-24">
        <InlineEnquirySection
          copyId="pacific"
          title="Need communications advice for a Pacific matter?"
          body="We work with Pacific governments, regional organisations, NGOs, development partners, and Australian organisations operating in the region. If the matter is culturally or politically sensitive, early advice matters."
          bullets={[
            "Pacific government and donor-facing communications support",
            "Cross-cultural stakeholder engagement planning",
            "Crisis and issue advice for region-specific matters",
          ]}
          defaultMessage="We need Pacific communications or stakeholder engagement advice."
        />
      </div>
    </>
  );
}
