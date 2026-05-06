import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  PAGE_HERO_ASIDES,
  type AsideHighlight,
  type PageHeroAsidePreset,
} from "@/config/pageHeroAsides";

export interface PageHeroProofItem {
  label: string;
  value: string;
  detail: string;
}

export interface PageHeroProofStrip {
  eyebrow?: string;
  title?: string;
  items: readonly PageHeroProofItem[];
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Full-bleed background; use /public paths, e.g. /images/services/foo/hero.webp */
  heroImage?: { src: string; alt: string };
  /** Right-rail message variant (below firm tenure stat). Defaults to seniorAccess. */
  asidePreset?: PageHeroAsidePreset;
  /** Override aside copy entirely when a page needs one-off wording */
  asideHighlight?: AsideHighlight;
  /**
   * Optional proof strip rendered as a darker band attached to the bottom of
   * the hero. When provided, removes the need for a separate `PageProofStrip`
   * section directly below the hero on the page.
   */
  proofStrip?: PageHeroProofStrip;
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  heroImage,
  asidePreset = "seniorAccess",
  asideHighlight,
  proofStrip,
}: PageHeroProps) {
  const aside =
    asideHighlight ?? PAGE_HERO_ASIDES[asidePreset];

  return (
    <section
      id="hero-section"
      className={`relative overflow-hidden ${proofStrip ? "" : "border-b border-white/5"} ${
        heroImage ? "" : "bg-navy"
      }`}
    >
      {heroImage ? (
        <>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(26,43,74,0.88)] to-[rgba(26,43,74,0.92)] md:from-[rgba(26,43,74,0.7)] md:to-[rgba(26,43,74,0.85)]"
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-end">
          <div className="max-w-4xl">
            {eyebrow ? (
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
              {title}
            </h1>
            {description
              ? description
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`text-white/75 text-lg leading-relaxed max-w-2xl ${
                        idx === 0 ? "mt-6" : "mt-4"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))
              : null}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              {ctaLabel && ctaHref ? (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  {ctaLabel}
                </Link>
              ) : null}
              <a
                href={siteConfig.phone.href}
                className="text-brand-gold text-sm font-heading font-black hover:text-gold-light transition-colors"
              >
                Or call {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.03] rounded-lg p-6 backdrop-blur-[2px]">
            <p className="text-white/35 text-xs mb-4">Direct strategic counsel</p>
            <div className="space-y-4">
              <div>
                <p className="font-heading font-black text-brand-gold text-2xl">
                  {siteConfig.stats.yearsTrading}
                </p>
                <p className="text-white/60 text-sm">
                  Years serving organisations across Australia and the Pacific
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="font-heading font-black text-white text-lg">
                  {aside.title}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mt-1">
                  {aside.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {proofStrip ? (
        <div className="relative z-10 bg-[rgba(7,18,40,0.78)] backdrop-blur-[2px] border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
            {proofStrip.title || proofStrip.eyebrow ? (
              <div className="max-w-3xl mb-8">
                {proofStrip.eyebrow ? (
                  <p className="font-sans font-medium tracking-[0.18em] uppercase text-brand-gold text-[10px] mb-3">
                    {proofStrip.eyebrow}
                  </p>
                ) : null}
                {proofStrip.title ? (
                  <p className="font-heading font-black text-white text-xl md:text-2xl leading-snug">
                    {proofStrip.title}
                  </p>
                ) : null}
              </div>
            ) : null}

            <div
              className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]"
              role="list"
            >
              {proofStrip.items.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  role="listitem"
                  className="px-0 md:px-8 py-5 md:py-2 first:md:pl-0 last:md:pr-0"
                >
                  <p className="text-brand-gold text-[11px] font-sans font-medium tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="font-heading font-black text-white text-lg md:text-xl mt-2">
                    {item.value}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed mt-2">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
