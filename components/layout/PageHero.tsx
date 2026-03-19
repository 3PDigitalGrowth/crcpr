import Link from "next/link";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section id="hero-section" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow ? (
          <p className="text-brand-gold font-sans font-medium text-xs tracking-[0.14em] uppercase mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.05]">
          {title}
        </h1>
        {description ? (
          <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-xl">
            {description}
          </p>
        ) : null}
        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 mt-8 hover:bg-gold-light transition"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
