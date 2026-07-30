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
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.14),transparent_55%)]"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_320px]">
            <div className="p-8 md:p-14">
              <p className="mb-5 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                <MT id={cid("eyebrow")}>{eyebrow}</MT>
              </p>
              <h2 className="mb-6 max-w-3xl font-heading text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                <MT id={cid("title")}>{title}</MT>
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-white/72">
                <MT id={cid("body")}>{body}</MT>
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
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
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        {secondaryLabel}
                      </a>
                    ) : (
                      <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        {secondaryLabel}
                      </Link>
                    )}
                    {secondaryDescription ? (
                      <p className="max-w-xs text-xs leading-relaxed text-white/55">
                        {secondaryDescription}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="v2-glass-dark flex flex-col justify-between rounded-none p-8 md:p-10 lg:rounded-l-[1.75rem]">
              <div>
                <p className="mb-3 text-xs text-white/45">
                  <T id="global.closing.asideEyebrow">Speak to an adviser</T>
                </p>
                <p className="text-sm leading-relaxed text-white/65">
                  <T id="global.closing.asideBody">Direct access to advisers and a clear recommendation on what to do next.</T>
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={siteConfig.phone.href}
                  className="block font-heading text-3xl text-brand-gold transition-colors hover:text-gold-light"
                >
                  {siteConfig.phone.display}
                </a>
                <p className="mt-2 text-sm text-white/45">
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
