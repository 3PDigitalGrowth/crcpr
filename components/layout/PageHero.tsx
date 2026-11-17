import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MT, T } from "@/components/editable";
import { Container, Eyebrow } from "@/components/altkit/primitives";
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
  /**
   * Kept for call-site compatibility. The Chambers design does not run
   * full-bleed hero imagery or video (Lyall, 1 Nov 2026: far fewer photos,
   * no AI video), so these are ignored. Use `photo` for a real photograph.
   */
  heroImage?: { src: string; alt: string };
  heroVideo?: { src: string; poster?: string };
  /** One of CRC's own photographs, shown as a band under the hero (4:1 desktop, 2:1 phones). */
  photo?: { src: string; alt: string; position?: string };
  /** Right-rail message variant (below firm tenure stat). Defaults to seniorAccess. */
  asidePreset?: PageHeroAsidePreset;
  /** Override aside copy entirely when a page needs one-off wording */
  asideHighlight?: AsideHighlight;
  /** Proof ledger attached to the bottom of the hero. */
  proofStrip?: PageHeroProofStrip;
  /**
   * Page-scoped id (e.g. "faq") that makes this hero's copy editable in the
   * /admin/editor visual editor. Overrides store under pageCopy.<copyId>.hero.*
   */
  copyId?: string;
}

/** Chambers page hero: eyebrow, capitals headline, a quiet aside card, hairline proof ledger. */
export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  photo,
  asidePreset = "seniorAccess",
  asideHighlight,
  proofStrip,
  copyId,
}: PageHeroProps) {
  const cid = (suffix: string) => (copyId ? `${copyId}.${suffix}` : undefined);
  const aside = asideHighlight ?? PAGE_HERO_ASIDES[asidePreset];

  return (
    <section id="hero-section" className="tone-base relative overflow-hidden">
      <Container className="pb-11 pt-12 md:pb-14 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),300px] lg:items-end lg:gap-14">
          <div className="max-w-3xl">
            {eyebrow ? (
              <Eyebrow>
                <MT id={cid("hero.eyebrow")}>{eyebrow}</MT>
              </Eyebrow>
            ) : null}
            <h1 className={`kit-display kit-h1-page ${eyebrow ? "mt-5" : ""}`}>
              <MT id={cid("hero.title")}>{title}</MT>
            </h1>
            {description
              ? description
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`max-w-2xl text-base leading-relaxed text-muted md:text-[17px] ${idx === 0 ? "mt-6" : "mt-4"}`}
                    >
                      <MT id={cid(`hero.desc.${idx}`)}>{paragraph}</MT>
                    </p>
                  ))
              : null}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {ctaLabel && ctaHref ? (
                <Link href={ctaHref} className="btn btn-primary">
                  <MT id={cid("hero.ctaLabel")}>{ctaLabel}</MT>
                </Link>
              ) : null}
              <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                Or call {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <aside className="kit-r border border-line p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Direct strategic counsel</p>
            <p className="kit-display mt-3 text-[2rem] leading-none text-accent">{siteConfig.stats.yearsTrading}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <T id="global.heroAside.tenureLine">Years serving organisations across Australia and the Pacific</T>
            </p>
            <div className="my-4 h-px bg-[var(--line)]" />
            <p className="kit-display text-[15px] uppercase leading-snug">
              <T id={`global.heroAside.${asideHighlight ? "custom" : asidePreset}.title`}>{aside.title}</T>
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              <T id={`global.heroAside.${asideHighlight ? "custom" : asidePreset}.body`}>{aside.body}</T>
            </p>
          </aside>
        </div>

        {photo ? (
          <div className="kit-r relative mt-10 aspect-[2/1] overflow-hidden md:aspect-[4/1]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              quality={85}
              sizes="(min-width: 1200px) 1140px, 100vw"
              className="object-cover"
              style={{ objectPosition: photo.position ?? "50% 50%" }}
            />
          </div>
        ) : null}

        {proofStrip ? (
          <div className="mt-12">
            {proofStrip.eyebrow ? (
              <Eyebrow>
                <MT id={cid("heroProof.eyebrow")}>{proofStrip.eyebrow}</MT>
              </Eyebrow>
            ) : null}
            {proofStrip.title ? (
              <p className={`kit-display kit-h2 max-w-3xl ${proofStrip.eyebrow ? "mt-3" : ""}`}>
                <MT id={cid("heroProof.title")}>{proofStrip.title}</MT>
              </p>
            ) : null}
            <div className={`ledger mt-8 ${proofStrip.items.length > 3 ? "ledger-wide" : ""}`} role="list">
              {proofStrip.items.map((item, itemIndex) => (
                <div
                  key={`${item.label}-${item.value}`}
                  role="listitem"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    <MT id={cid(`heroProof.${itemIndex}.label`)}>{item.label}</MT>
                  </p>
                  <p className="kit-display mt-2 text-[clamp(1.2rem,1.9vw,1.5rem)] uppercase leading-tight">
                    <MT id={cid(`heroProof.${itemIndex}.value`)}>{item.value}</MT>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    <MT id={cid(`heroProof.${itemIndex}.detail`)}>{item.detail}</MT>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
