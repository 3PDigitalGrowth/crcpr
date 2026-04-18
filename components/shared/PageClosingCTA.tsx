import Link from "next/link";
import { siteConfig } from "@/config/site";

interface PageClosingCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryDescription?: string;
}

export function PageClosingCTA({
  eyebrow = "Next step",
  title,
  body,
  primaryLabel = "Book a consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  secondaryDescription,
}: PageClosingCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_300px]">
            <div className="p-8 md:p-12">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                {eyebrow}
              </p>
              <h2 className="font-heading font-black text-3xl mb-5 max-w-3xl">
                {title}
              </h2>
              <p className="text-white/72 text-base leading-relaxed max-w-3xl">
                {body}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  {primaryLabel}
                </Link>
                {secondaryLabel && secondaryHref ? (
                  <div className="flex flex-col gap-2">
                    {secondaryHref.startsWith("http") ? (
                      <a
                        href={secondaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/[0.04] text-white font-heading font-black text-xs rounded-[4px] px-6 py-4 hover:bg-white/[0.08] transition"
                      >
                        {secondaryLabel}
                      </a>
                    ) : (
                      <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/[0.04] text-white font-heading font-black text-xs rounded-[4px] px-6 py-4 hover:bg-white/[0.08] transition"
                      >
                        {secondaryLabel}
                      </Link>
                    )}
                    {secondaryDescription ? (
                      <p className="text-white/55 text-xs leading-relaxed max-w-xs">
                        {secondaryDescription}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <p className="text-white/35 text-xs mb-3">
                  Speak to an adviser
                </p>
                <p className="text-white/65 text-sm leading-relaxed">
                  Direct access to advisers and a clear recommendation on what
                  to do next.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={siteConfig.phone.href}
                  className="block font-heading font-black text-brand-gold text-2xl hover:text-gold-light transition-colors"
                >
                  {siteConfig.phone.display}
                </a>
                <p className="text-white/45 text-sm mt-2">
                  Available across Australia and the Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
