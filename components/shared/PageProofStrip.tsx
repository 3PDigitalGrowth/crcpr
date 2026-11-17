import { MT } from "@/components/editable";
import { Container, Eyebrow, H2 } from "@/components/altkit/primitives";

interface ProofItem {
  label: string;
  value: string;
  detail: string;
}

interface ProofTestimonial {
  quote: string;
  attribution: string[];
  highlightLastLine?: boolean;
  /** Kept for call-site compatibility; the Chambers design runs no portrait here. */
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
  /** "navy" renders on the pale band; the others on the white canvas. */
  variant?: "white" | "off-white" | "navy";
  testimonial?: ProofTestimonial;
  /** Page-scoped id making this strip editable in /admin/editor. */
  copyId?: string;
}

/** Chambers proof ledger: heading, then hairline columns of label, value and detail. */
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

  return (
    <section className={`${variant === "navy" ? "tone-deep" : "tone-base"} relative py-11 md:py-14`}>
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr] lg:items-end lg:gap-14">
          <div>
            <Eyebrow>
              <MT id={cid("eyebrow")}>{eyebrow}</MT>
            </Eyebrow>
            <H2 className="mt-3 max-w-3xl">
              <MT id={cid("title")}>{title}</MT>
            </H2>
          </div>
          {body ? (
            <p className="max-w-xl text-[15px] leading-relaxed text-muted lg:pb-1">
              <MT id={cid("body")}>{body}</MT>
            </p>
          ) : null}
        </div>

        <div className={`ledger mt-8 ${items.length > 3 ? "ledger-wide" : ""}`}>
          {items.map((item, itemIndex) => (
            <div key={`${item.label}-${item.value}`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                <MT id={cid(`items.${itemIndex}.label`)}>{item.label}</MT>
              </p>
              <p className="kit-display mt-2 text-[clamp(1.2rem,1.9vw,1.5rem)] uppercase leading-tight">
                <MT id={cid(`items.${itemIndex}.value`)}>{item.value}</MT>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <MT id={cid(`items.${itemIndex}.detail`)}>{item.detail}</MT>
              </p>
            </div>
          ))}
        </div>

        {testimonial ? (
          <figure className="mt-10 max-w-3xl border-l-[3px] border-[var(--k-blue)] pl-5 md:pl-6">
            <blockquote className="text-[clamp(1.05rem,1.6vw,1.3rem)] font-medium leading-[1.45]">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <figcaption className="mt-4 space-y-0.5">
              {testimonial.attribution.map((line, idx) => {
                const isLast = idx === testimonial.attribution.length - 1;
                if (idx === 0) {
                  return (
                    <p key={line} className="text-sm font-semibold">
                      {line}
                    </p>
                  );
                }
                return (
                  <p
                    key={line}
                    className={
                      testimonial.highlightLastLine && isLast
                        ? "text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
                        : "text-xs text-muted"
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </figcaption>
          </figure>
        ) : null}
      </Container>
    </section>
  );
}
