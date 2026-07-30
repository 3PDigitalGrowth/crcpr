"use client";

import { useState } from "react";
import { CheckCircle, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { submitEnquiry } from "@/lib/actions";
import type { FormState } from "@/types";

const initialState: FormState = {
  status: "idle",
  message: "",
};

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
    const result = await submitEnquiry(initialState, formData);
    setIsSubmitting(false);
    setFormState(result);
  }

  return (
    <section className="bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gold rounded-[1.5rem] p-4 flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Zap className="text-navy w-5 h-5 flex-shrink-0" />
            <p className="text-navy font-medium text-sm">
              <span className="font-semibold">Facing an active crisis?</span>{" "}
              Call us now, available 24 hours, 7 days.
            </p>
          </div>
          <a
            href="tel:1300182186"
            className="bg-navy text-white font-sans font-semibold text-sm rounded-full px-5 py-2.5 flex-shrink-0 shadow-lg shadow-navy/20 hover:bg-navy-mid transition-colors"
          >
            1300 182 186
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl leading-[1.05] tracking-[-0.02em] text-navy">
              Send us a message
            </h2>

            {isCapabilityRequest && formState.status !== "success" && (
              <div className="mt-6 rounded-[1.5rem] border-2 border-brand-gold/60 bg-brand-gold/5 p-4">
                <p className="text-text-body text-sm leading-relaxed">
                  You&apos;re requesting our Capability Statement. We&apos;ll
                  send it directly to your inbox.
                </p>
              </div>
            )}

            {formState.status === "success" ? (
              <div className="mt-8 rounded-[1.5rem] border border-brand-border bg-warm-white/70 p-8 shadow-sm shadow-navy/5 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-brand-gold w-7 h-7 flex-shrink-0" />
                  <h3 className="font-heading text-2xl text-navy">
                    Message received.
                  </h3>
                </div>
                <p className="text-text-body text-base leading-relaxed mb-4">
                  Thank you for reaching out. A CRC Public Relations adviser will be in touch
                  shortly: within the hour during business hours, or first thing
                  in the morning for after-hours messages.
                </p>
                <p className="text-text-body text-sm">
                  If your situation is urgent, call us now:{" "}
                  <a
                    href="tel:1300182186"
                    className="text-link-teal font-medium hover:text-navy hover:underline"
                  >
                    1300 182 186
                  </a>{" "}
                  , available 24/7.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {formState.status === "error" ? (
                  <p className="text-sm text-red-700" role="alert">
                    {formState.message}
                  </p>
                ) : null}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    Full name <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-organisation"
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    Organisation
                  </label>
                  <input
                    id="contact-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60"
                    placeholder="Company or organisation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    Email <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    Phone number <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60"
                    placeholder="Including area code"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60 resize-y min-h-[120px]"
                    placeholder="Briefly describe your situation or enquiry"
                    defaultValue={
                      isCapabilityRequest
                        ? "I'd like to request a copy of the CRC Public Relations Capability Statement."
                        : undefined
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send message →"}
                </button>
                <p className="text-text-body text-sm">
                  For general enquiries and new business conversations. For
                  active crises, please call.
                </p>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-heading text-2xl text-navy">
              Other ways to reach us
            </h3>
            <ul className="mt-6 space-y-4 text-text-body text-sm leading-relaxed">
              <li>
                <span className="block text-charcoal text-xs font-medium mb-1">
                  Phone
                </span>
                <a
                  href={siteConfig.phone.href}
                  className="text-link-teal font-medium hover:text-navy hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <span className="block text-charcoal text-xs font-medium mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="text-link-teal font-medium hover:text-navy hover:underline"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li>
                <span className="block text-charcoal text-xs font-medium mb-1">
                  Address
                </span>
                <span className="text-charcoal">{addressLine}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-[1.5rem] border border-brand-border bg-warm-white/70 p-5 text-sm leading-relaxed text-charcoal-mid shadow-sm shadow-navy/5 backdrop-blur">
              We operate Australia wide in every state, New Zealand and the
              Pacific region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
