import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MT, T, copySrc, imgBind } from "@/components/editable";
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
  /**
   * Ambient background video looping behind the hero. Desktop only; below md
   * the heroImage (or poster) renders as the static fallback per house rules.
   */
  heroVideo?: { src: string; poster?: string };
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
  /**
   * Page-scoped id (e.g. "faq") that makes this hero's copy editable in the
   * /admin/editor visual editor. Overrides store under pageCopy.<copyId>.hero.*
   */
  copyId?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  heroImage,
  heroVideo,
  asidePreset = "seniorAccess",
  asideHighlight,
  proofStrip,
  copyId,
}: PageHeroProps) {
  const cid = (suffix: string) => (copyId ? `${copyId}.${suffix}` : undefined);
  const aside = asideHighlight ?? PAGE_HERO_ASIDES[asidePreset];

  return (
    <section
      id="hero-section"
      className={`relative overflow-hidden ${heroImage || heroVideo ? "" : "bg-navy"}`}
    >
      {heroImage ? (
        <Image
          {...(copyId ? imgBind(`${copyId}.hero.image`) : {})}
          src={copyId ? copySrc(`${copyId}.hero.image`, heroImage.src) : heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center ${heroVideo ? "md:hidden" : ""}`}
        />
      ) : null}
      {heroVideo ? (
        <video
          className="absolute inset-0 hidden size-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideo.poster ?? heroImage?.src}
          aria-hidden
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      ) : null}
      {heroImage || heroVideo ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(16,28,52,0.94)_0%,rgba(16,28,52,0.84)_46%,rgba(16,28,52,0.55)_100%)]"
          aria-hidden
        />
      ) : null}
      {!proofStrip ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent to-[#F5F2EC]"
        />
      ) : null}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="max-w-4xl">
            {eyebrow ? (
              <p className="mb-5 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                <MT id={cid("hero.eyebrow")}>{eyebrow}</MT>
              </p>
            ) : null}
            <h1 className="max-w-4xl font-heading text-[3rem] leading-[0.98] tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[4.5rem]">
              <MT id={cid("hero.title")}>{title}</MT>
            </h1>
            {description
              ? description
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`max-w-2xl text-lg leading-relaxed text-white/80 ${
                        idx === 0 ? "mt-7" : "mt-4"
                      }`}
                    >
                      <MT id={cid(`hero.desc.${idx}`)}>{paragraph}</MT>
                    </p>
                  ))
              : null}
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {ctaLabel && ctaHref ? (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
                >
                  <MT id={cid("hero.ctaLabel")}>{ctaLabel}</MT>
                </Link>
              ) : null}
              <a
                href={siteConfig.phone.href}
                className="font-sans text-sm font-semibold text-brand-gold transition-colors hover:text-gold-light"
              >
                Or call {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="v2-glass-dark rounded-[1.75rem] p-6">
            <p className="mb-4 text-xs text-white/45">Direct strategic counsel</p>
            <div className="space-y-4">
              <div>
                <p className="font-heading text-4xl leading-none text-brand-gold">
                  {siteConfig.stats.yearsTrading}
                </p>
                <p className="mt-2 text-sm text-white/60">
                  <T id="global.heroAside.tenureLine">Years serving organisations across Australia and the Pacific</T>
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="font-heading text-xl text-white">
                  <T id={`global.heroAside.${asideHighlight ? "custom" : asidePreset}.title`}>
                    {aside.title}
                  </T>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  <T id={`global.heroAside.${asideHighlight ? "custom" : asidePreset}.body`}>
                    {aside.body}
                  </T>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {proofStrip ? (
        <div className="relative z-10 border-t border-white/[0.08] bg-[rgba(7,18,40,0.72)] backdrop-blur-[6px]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
            {proofStrip.title || proofStrip.eyebrow ? (
              <div className="mb-8 max-w-3xl">
                {proofStrip.eyebrow ? (
                  <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                    <MT id={cid("heroProof.eyebrow")}>{proofStrip.eyebrow}</MT>
                  </p>
                ) : null}
                {proofStrip.title ? (
                  <p className="font-heading text-2xl leading-snug text-white md:text-3xl">
                    <MT id={cid("heroProof.title")}>{proofStrip.title}</MT>
                  </p>
                ) : null}
              </div>
            ) : null}

            <div
              className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0"
              role="list"
            >
              {proofStrip.items.map((item, itemIndex) => (
                <div
                  key={`${item.label}-${item.value}`}
                  role="listitem"
                  className="px-0 py-5 first:md:pl-0 last:md:pr-0 md:px-8 md:py-2"
                >
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    <MT id={cid(`heroProof.${itemIndex}.label`)}>{item.label}</MT>
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white md:text-3xl">
                    <MT id={cid(`heroProof.${itemIndex}.value`)}>{item.value}</MT>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    <MT id={cid(`heroProof.${itemIndex}.detail`)}>{item.detail}</MT>
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
