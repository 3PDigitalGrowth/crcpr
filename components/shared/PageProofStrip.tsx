import { MT } from "@/components/editable";

interface ProofItem {
  label: string;
  value: string;
  detail: string;
}

interface ProofTestimonial {
  quote: string;
  attribution: string[];
  highlightLastLine?: boolean;
  portrait?: {
    src: string;
    alt: string;
  };
}

interface PageProofStripProps {
  eyebrow?: string;
  title: string;
  body?: string;
  items: ProofItem[];
  variant?: "white" | "off-white" | "navy";
  testimonial?: ProofTestimonial;
  /** Page-scoped id making this strip editable in /admin/editor. */
  copyId?: string;
}

export function PageProofStrip({
  eyebrow = "Why CRC Public Relations",
  title,
  body,
  items,
  variant = "off-white",
  testimonial,
  copyId,
}: PageProofStripProps) {
  const cid = (suffix: string) => (copyId ? `${copyId}.proof.${suffix}` : undefined);
  const sectionClass =
    variant === "navy"
      ? "bg-navy"
      : variant === "white"
        ? "bg-warm-white"
        : "bg-off-white";

  const cardClass =
    variant === "navy"
      ? "v2-glass-dark"
      : "border border-brand-border bg-warm-white/70 backdrop-blur shadow-sm shadow-navy/5";

  const titleClass = variant === "navy" ? "text-white" : "text-navy";
  const bodyClass = variant === "navy" ? "text-white/70" : "text-charcoal-mid";
  const valueClass = variant === "navy" ? "text-white" : "text-navy";
  const detailClass =
    variant === "navy" ? "text-white/60" : "text-body";

  const quoteClass =
    variant === "navy" ? "text-white/85" : "text-charcoal";
  const attributionPrimaryClass =
    variant === "navy" ? "text-white" : "text-navy";
  const attributionSecondaryClass =
    variant === "navy" ? "text-white/60" : "text-charcoal-mid";

  return (
    <section className={`${sectionClass} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden />
            <MT id={cid("eyebrow")}>{eyebrow}</MT>
          </p>
          <h2 className={`font-heading text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl ${titleClass}`}>
            <MT id={cid("title")}>{title}</MT>
          </h2>
          {body ? (
            <p className={`mt-5 text-lg leading-relaxed ${bodyClass}`}>
              <MT id={cid("body")}>{body}</MT>
            </p>
          ) : null}
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } gap-6 mt-10`}
        >
          {items.map((item, itemIndex) => (
            <div
              key={`${item.label}-${item.value}`}
              className={`rounded-[1.5rem] p-6 ${cardClass}`}
            >
              <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                <MT id={cid(`items.${itemIndex}.label`)}>{item.label}</MT>
              </p>
              <p className={`font-heading text-4xl leading-none ${valueClass}`}>
                <MT id={cid(`items.${itemIndex}.value`)}>{item.value}</MT>
              </p>
              <p className={`text-sm leading-relaxed mt-3 ${detailClass}`}>
                <MT id={cid(`items.${itemIndex}.detail`)}>{item.detail}</MT>
              </p>
            </div>
          ))}
        </div>

        {testimonial ? (
          <figure
            className={`mt-12 border-l-[3px] border-l-brand-gold rounded-[1.5rem] p-6 ${
              variant === "navy" ? "bg-white/[0.04]" : "bg-off-white"
            }`}
          >
            <blockquote
              className={`font-heading text-xl leading-snug md:text-2xl ${quoteClass}`}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 space-y-0.5">
              {testimonial.attribution.map((line, idx) => {
                const isLast = idx === testimonial.attribution.length - 1;
                const emphasised = testimonial.highlightLastLine && isLast;
                if (idx === 0) {
                  return (
                    <p
                      key={line}
                      className={`font-sans font-semibold text-sm ${attributionPrimaryClass}`}
                    >
                      {line}
                    </p>
                  );
                }
                if (emphasised) {
                  return (
                    <p
                      key={line}
                      className="font-sans font-semibold text-brand-gold text-xs"
                    >
                      {line}
                    </p>
                  );
                }
                return (
                  <p
                    key={line}
                    className={`text-xs ${attributionSecondaryClass}`}
                  >
                    {line}
                  </p>
                );
              })}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}
