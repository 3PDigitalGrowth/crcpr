import Image from "next/image";

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
}

export function PageProofStrip({
  eyebrow = "Why CRC Public Relations",
  title,
  body,
  items,
  variant = "off-white",
  testimonial,
}: PageProofStripProps) {
  const sectionClass =
    variant === "navy"
      ? "bg-navy"
      : variant === "white"
        ? "bg-warm-white"
        : "bg-off-white";

  const cardClass =
    variant === "navy"
      ? "border-white/10 bg-white/[0.03]"
      : "border-brand-border bg-white shadow-sm shadow-navy/5";

  const titleClass = variant === "navy" ? "text-white" : "text-navy";
  const bodyClass = variant === "navy" ? "text-white/70" : "text-charcoal-mid";
  const valueClass = variant === "navy" ? "text-white" : "text-navy";
  const detailClass =
    variant === "navy" ? "text-white/60" : "text-body";

  const dividerClass =
    variant === "navy" ? "border-white/10" : "border-brand-border";
  const testimonialCardClass =
    variant === "navy"
      ? "border-white/10 bg-white/[0.04]"
      : "border-brand-border bg-white shadow-sm shadow-navy/5";
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
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            {eyebrow}
          </p>
          <h2 className={`font-heading font-black text-3xl ${titleClass}`}>
            {title}
          </h2>
          {body ? (
            <p className={`mt-5 text-lg leading-relaxed ${bodyClass}`}>
              {body}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className={`border rounded-lg p-6 ${cardClass}`}
            >
              <p className="text-brand-gold text-xs font-medium mb-3">
                {item.label}
              </p>
              <p className={`font-heading font-black text-2xl ${valueClass}`}>
                {item.value}
              </p>
              <p className={`text-sm leading-relaxed mt-3 ${detailClass}`}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {testimonial ? (
          <figure
            className={`mt-12 border rounded-lg p-8 md:p-10 border-t-[3px] border-t-brand-gold ${testimonialCardClass}`}
          >
            <div className="flex items-start justify-between gap-6">
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 24"
                fill="none"
                className="text-brand-gold/30 shrink-0"
                aria-hidden
              >
                <path
                  d="M0 24V14.4C0 6.13 5.01 1.31 13.33 0l1.34 4.8C9.09 5.87 6.67 9.07 6.67 14.4H12V24H0zm18.67 0V14.4c0-8.27 5-13.09 13.33-14.4l1.33 4.8C27.76 5.87 25.33 9.07 25.33 14.4h5.34V24H18.67z"
                  fill="currentColor"
                />
              </svg>
              {testimonial.portrait ? (
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shrink-0 ${
                    variant === "navy" ? "border-white/15" : "border-brand-border"
                  }`}
                >
                  <Image
                    src={testimonial.portrait.src}
                    alt={testimonial.portrait.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
            <blockquote
              className={`mt-5 font-sans italic text-lg md:text-xl leading-relaxed max-w-3xl ${quoteClass}`}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption
              className={`mt-6 pt-5 border-t ${dividerClass} space-y-1`}
            >
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
                      className="font-sans font-semibold text-brand-gold text-sm"
                    >
                      {line}
                    </p>
                  );
                }
                return (
                  <p
                    key={line}
                    className={`text-sm ${attributionSecondaryClass}`}
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
