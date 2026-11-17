"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { submitEnquiry } from "@/lib/actions";
import { Container, H2, Section } from "@/components/altkit/primitives";
import type { FormState } from "@/types";

const initialState: FormState = {
  status: "idle",
  message: "",
};

const labelClass = "mb-1.5 block text-xs font-semibold text-muted";

interface ContactFormSectionProps {
  source?: string;
}

export function ContactFormSection({ source }: ContactFormSectionProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCapabilityRequest = source === "capability-statement";

  const addressLine = [
    siteConfig.address.street,
    `${siteConfig.address.city} ${siteConfig.address.state} ${siteConfig.address.postcode}`,
    siteConfig.address.country,
  ].join(", ");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormState(initialState);
    const formData = new FormData(e.currentTarget);
    formData.set("page", window.location.pathname + window.location.search);
    const result = await submitEnquiry(initialState, formData);
    setIsSubmitting(false);
    setFormState(result);
  }

  return (
    <Section tone="deep" className="py-11 md:py-14">
      <Container>
        <div className="kit-r tone-base flex flex-col gap-4 border border-line p-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm font-medium">
              <span className="font-bold">Facing an active crisis?</span> Call us now, available 24 hours, 7 days.
            </p>
          </div>
          <a href="tel:1300182186" className="btn btn-primary shrink-0 self-start sm:self-auto">
            1300 182 186
          </a>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
          <div>
            <H2>Send us a message</H2>

            {isCapabilityRequest && formState.status !== "success" && (
              <div className="kit-r mt-6 border border-line border-l-[3px] border-l-[var(--k-blue)] p-4">
                <p className="text-sm leading-relaxed">
                  You&apos;re requesting our Capability Statement. We&apos;ll send it directly to your inbox.
                </p>
              </div>
            )}

            {formState.status === "success" ? (
              <div className="kit-r tone-base mt-8 border border-line p-6 md:p-8" role="status">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                  <h3 className="kit-display text-lg uppercase">Message received.</h3>
                </div>
                <p className="mb-4 text-[15px] leading-relaxed text-muted">
                  Thank you for reaching out. A CRC Public Relations adviser will be in touch shortly: within the hour
                  during business hours, or first thing in the morning for after-hours messages.
                </p>
                <p className="text-sm text-muted">
                  If your situation is urgent, call us now:{" "}
                  <a href="tel:1300182186" className="font-semibold text-accent hover:underline">
                    1300 182 186
                  </a>{" "}
                  , available 24/7.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                {formState.status === "error" ? (
                  <p className="text-sm font-semibold text-[#c2410c] sm:col-span-2" role="alert">
                    {formState.message}
                  </p>
                ) : null}
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-organisation" className={labelClass}>
                    Organisation
                  </label>
                  <input
                    id="contact-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    className="field"
                    placeholder="Company or organisation"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="field"
                    placeholder="Including area code"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className={labelClass}>
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="field min-h-[120px] resize-y"
                    placeholder="Briefly describe your situation or enquiry"
                    defaultValue={
                      isCapabilityRequest
                        ? "I'd like to request a copy of the CRC Public Relations Capability Statement."
                        : undefined
                    }
                  />
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary shrink-0 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                  <p className="text-xs text-muted">
                    For general enquiries and new business conversations. For active crises, please call.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="lg:pt-1">
            <h3 className="kit-display text-lg uppercase">Other ways to reach us</h3>
            <ul className="mt-6 divide-y divide-[var(--line)] border-y border-line text-sm leading-relaxed">
              <li className="py-4">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Phone
                </span>
                <a href={siteConfig.phone.href} className="kit-display text-xl text-accent">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="py-4">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="break-all font-semibold text-accent hover:underline"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li className="py-4">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Address
                </span>
                <span>{addressLine}</span>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              We operate Australia wide in every state, New Zealand and the Pacific region.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
