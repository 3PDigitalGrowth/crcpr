import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MT, T } from "@/components/editable";

interface PageClosingCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryDescription?: string;
  /** Page-scoped id making this CTA editable in /admin/editor. */
  copyId?: string;
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
  copyId,
}: PageClosingCTAProps) {
  const cid = (suffix: string) => (copyId ? `${copyId}.closing.${suffix}` : undefined);
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_300px]">
            <div className="p-8 md:p-12">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                <MT id={cid("eyebrow")}>{eyebrow}</MT>
              </p>
              <h2 className="font-heading font-black text-3xl mb-5 max-w-3xl">
                <MT id={cid("title")}>{title}</MT>
              </h2>
              <p className="text-white/72 text-base leading-relaxed max-w-3xl">
                <MT id={cid("body")}>{body}</MT>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  <MT id={cid("primaryLabel")}>{primaryLabel}</MT>
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
                  <T id="global.closing.asideEyebrow">Speak to an adviser</T>
                </p>
                <p className="text-white/65 text-sm leading-relaxed">
                  <T id="global.closing.asideBody">Direct access to advisers and a clear recommendation on what to do next.</T>
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
                  <T id="global.closing.availability">Available across Australia and the Pacific.</T>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
