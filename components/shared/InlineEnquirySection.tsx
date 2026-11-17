import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MT } from "@/components/editable";
import { EnquiryForm } from "@/components/altkit/forms";
import { Container, Eyebrow, H2 } from "@/components/altkit/primitives";

interface InlineEnquirySectionProps {
  /** Page-scoped id making this section's copy editable in /admin/editor. */
  copyId?: string;
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  defaultMessage?: string;
  submitLabel?: string;
  /** "white" sits on the canvas; "off-white" (default) frames the copy on the pale band. */
  variant?: "white" | "off-white";
  disclaimer?: string;
}

/** Chambers enquiry: framed two-panel block, copy and direct line left, the kit enquiry form right. */
export function InlineEnquirySection({
  eyebrow = "Enquiry",
  title,
  body,
  bullets = [],
  defaultMessage,
  submitLabel = "Send message",
  variant = "off-white",
  disclaimer = "Confidential and reviewed by an experienced adviser.",
  copyId,
}: InlineEnquirySectionProps) {
  const cid = (suffix: string) => (copyId ? `${copyId}.enquiry.${suffix}` : undefined);

  return (
    <section className="tone-base relative py-11 md:py-14" aria-label={title}>
      <Container>
        <div className="kit-r grid overflow-hidden border border-line lg:grid-cols-[0.95fr,1.05fr]">
          <div className={`${variant === "white" ? "tone-base" : "tone-deep"} p-6 md:p-10`}>
            <Eyebrow>
              <MT id={cid("eyebrow")}>{eyebrow}</MT>
            </Eyebrow>
            <H2 className="mt-3 max-w-xl">
              <MT id={cid("title")}>{title}</MT>
            </H2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              <MT id={cid("body")}>{body}</MT>
            </p>

            {bullets.length > 0 ? (
              <ul className="mt-7 space-y-3">
                {bullets.map((bullet, bulletIndex) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15px] leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>
                      <MT id={cid(`bullets.${bulletIndex}`)}>{bullet}</MT>
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 border-t border-line pt-6">
              <a href={siteConfig.phone.href} className="kit-display text-2xl text-accent">
                {siteConfig.phone.display}
              </a>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                If the matter is active or time-sensitive, call rather than wait for a form reply.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <EnquiryForm defaultMessage={defaultMessage} submitLabel={submitLabel} disclaimer={disclaimer} />
          </div>
        </div>
      </Container>
    </section>
  );
}
