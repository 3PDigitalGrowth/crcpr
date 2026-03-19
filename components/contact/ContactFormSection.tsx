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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gold rounded-lg p-4 flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Zap className="text-navy w-5 h-5 flex-shrink-0" />
            <p className="text-navy font-medium text-sm">
              <span className="font-black">Facing an active crisis?</span>{" "}
              Call us now, available 24 hours, 7 days.
            </p>
          </div>
          <a
            href="tel:1300182186"
            className="bg-navy text-white font-heading font-black text-xs tracking-widest uppercase px-4 py-2 rounded flex-shrink-0 hover:bg-navy-mid transition-colors"
          >
            1300 182 186
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-black text-navy text-2xl">
              Send us a message
            </h2>

            {isCapabilityRequest && formState.status !== "success" && (
              <div className="mt-6 rounded-lg border-2 border-brand-gold/60 bg-brand-gold/5 p-4">
                <p className="text-charcoal text-sm leading-relaxed">
                  You&apos;re requesting our Capability Statement. We&apos;ll
                  send it directly to your inbox.
                </p>
              </div>
            )}

            {formState.status === "success" ? (
              <div className="mt-8 bg-off-white border border-brand-gold/30 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-brand-gold w-7 h-7 flex-shrink-0" />
                  <h3 className="font-heading font-black text-navy text-xl">
                    Message received.
                  </h3>
                </div>
                <p className="text-charcoal-mid text-base leading-relaxed mb-4">
                  Thank you for reaching out. A CRC PR adviser will be in touch
                  shortly: within the hour during business hours, or first thing
                  in the morning for after-hours messages.
                </p>
                <p className="text-charcoal-mid text-sm">
                  If your situation is urgent, call us now:{" "}
                  <a
                    href="tel:1300182186"
                    className="text-brand-gold font-medium hover:underline"
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
                    className="block text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-1.5"
                  >
                    Full name <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-[4px] border border-brand-border px-4 py-3 text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-organisation"
                    className="block text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-1.5"
                  >
                    Organisation
                  </label>
                  <input
                    id="contact-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-[4px] border border-brand-border px-4 py-3 text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                    placeholder="Company or organisation"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-1.5"
                  >
                    Email <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-[4px] border border-brand-border px-4 py-3 text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-1.5"
                  >
                    Phone number <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-[4px] border border-brand-border px-4 py-3 text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                    placeholder="Including area code"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-1.5"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="w-full rounded-[4px] border border-brand-border px-4 py-3 text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal resize-y min-h-[120px]"
                    placeholder="Briefly describe your situation or enquiry"
                    defaultValue={
                      isCapabilityRequest
                        ? "I'd like to request a copy of the CRC PR Capability Statement."
                        : undefined
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] py-4 hover:bg-gold-light transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING…" : "SEND MESSAGE →"}
                </button>
                <p className="text-charcoal-mid text-sm italic">
                  For general enquiries and new business conversations. For
                  active crises, please call.
                </p>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-heading font-black text-navy text-xl">
              Other ways to reach us
            </h3>
            <ul className="mt-6 space-y-4 text-charcoal-mid text-sm leading-relaxed">
              <li>
                <span className="block text-charcoal text-xs font-medium uppercase tracking-wide mb-1">
                  Phone
                </span>
                <a
                  href={siteConfig.phone.href}
                  className="text-brand-gold font-medium hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <span className="block text-charcoal text-xs font-medium uppercase tracking-wide mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="text-brand-gold font-medium hover:underline"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li>
                <span className="block text-charcoal text-xs font-medium uppercase tracking-wide mb-1">
                  Address
                </span>
                <span className="text-charcoal">{addressLine}</span>
              </li>
            </ul>
            <div className="rounded-lg overflow-hidden border border-brand-border h-64 w-full mt-6">
              <iframe
                src="https://maps.google.com/maps?q=320+Adelaide+Street,+Brisbane+QLD+4000,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CRC Public Relations, 320 Adelaide Street Brisbane"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
