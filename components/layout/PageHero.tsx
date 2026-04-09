import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Full-bleed background; use /public paths, e.g. /images/services/foo/hero.webp */
  heroImage?: { src: string; alt: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  heroImage,
}: PageHeroProps) {
  return (
    <section
      id="hero-section"
      className={`relative overflow-hidden py-20 md:py-24 border-b border-white/5 ${
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            {description ? (
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                {description}
              </p>
            ) : null}
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
            <p className="text-white/35 text-xs mb-4">Direct senior counsel</p>
            <div className="space-y-4">
              <div>
                <p className="font-heading font-black text-brand-gold text-2xl">
                  {siteConfig.stats.yearsTrading}
                </p>
                <p className="text-white/60 text-sm">
                  Years advising leaders in high-stakes environments
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="font-heading font-black text-white text-lg">
                  Confidential by default
                </p>
                <p className="text-white/60 text-sm leading-relaxed mt-1">
                  No junior handoff, no generic account team, and no public
                  reference to client work without permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
