import Link from "next/link";
import { Phone } from "lucide-react";
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

/**
 * Chambers closing invitation: the CRC blue panel inset at the foot of the
 * canvas, as on the approved homepage. Sits last on the page, above the footer.
 */
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
  const external = secondaryHref?.startsWith("http");

  return (
    <div className="tone-base px-3 pb-3 pt-4 md:px-5 md:pb-5">
      <section className="tone-cta kit-r relative overflow-hidden px-6 py-14 text-center md:py-16" aria-label={title}>
        <div className="orb -right-32 -top-40 h-[30rem] w-[30rem]" aria-hidden />
        <p className="relative text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
          <MT id={cid("eyebrow")}>{eyebrow}</MT>
        </p>
        <h2 className="kit-display relative mx-auto mt-4 max-w-3xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.08]">
          <MT id={cid("title")}>{title}</MT>
        </h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          <MT id={cid("body")}>{body}</MT>
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href={primaryHref} className="btn btn-primary">
            <MT id={cid("primaryLabel")}>{primaryLabel}</MT>
          </Link>
          {secondaryLabel && secondaryHref ? (
            external ? (
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-quiet">
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="btn btn-quiet">
                {secondaryLabel}
              </Link>
            )
          ) : null}
          <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone.display}
          </a>
        </div>
        {secondaryDescription ? (
          <p className="relative mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted">{secondaryDescription}</p>
        ) : null}
        <p className="relative mt-7 text-xs text-muted">
          <T id="global.closing.availability">Available across Australia and the Pacific.</T>
        </p>
      </section>
    </div>
  );
}
