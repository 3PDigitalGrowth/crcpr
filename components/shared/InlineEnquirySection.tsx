"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { submitEnquiry } from "@/lib/actions";
import type { FormState } from "@/types";
import { siteConfig } from "@/config/site";

const initialState: FormState = {
  status: "idle",
  message: "",
};

interface InlineEnquirySectionProps {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  defaultMessage?: string;
  submitLabel?: string;
  variant?: "white" | "off-white";
}

export function InlineEnquirySection({
  eyebrow = "Confidential enquiry",
  title,
  body,
  bullets = [],
  defaultMessage,
  submitLabel = "Send confidential enquiry",
  variant = "off-white",
}: InlineEnquirySectionProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className={variant === "white" ? "bg-warm-white py-16 md:py-20" : "bg-off-white py-16 md:py-20"}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] border border-brand-border rounded-lg overflow-hidden bg-white shadow-sm shadow-navy/5">
          <div className="p-8 md:p-10 bg-navy text-white">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              {eyebrow}
            </p>
            <h2 className="font-heading font-black text-3xl max-w-xl">{title}</h2>
            <p className="text-white/72 text-base leading-relaxed mt-5 max-w-xl">
              {body}
            </p>

            {bullets.length > 0 ? (
              <ul className="space-y-3 mt-8">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-white/78 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="border-t border-white/10 mt-8 pt-6">
              <a
                href={siteConfig.phone.href}
                className="block font-heading font-black text-brand-gold text-2xl hover:text-gold-light transition-colors"
              >
                {siteConfig.phone.display}
              </a>
              <p className="text-white/50 text-sm mt-2">
                If the matter is active or time-sensitive, call rather than wait
                for a form reply.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            {formState.status === "success" ? (
              <div className="bg-warm-white border border-brand-border rounded-lg p-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-brand-gold w-7 h-7 flex-shrink-0" />
                  <h3 className="font-heading font-black text-navy text-xl">
                    Message received.
                  </h3>
                </div>
                <p className="text-text-body text-base leading-relaxed">
                  {formState.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formState.status === "error" ? (
                  <p className="text-sm text-red-700" role="alert">
                    {formState.message}
                  </p>
                ) : null}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={`${title}-name`}
                      className="block text-xs font-medium text-navy mb-1.5"
                    >
                      Full name <span className="text-brand-teal">*</span>
                    </label>
                    <input
                      id={`${title}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-[4px] border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`${title}-organisation`}
                      className="block text-xs font-medium text-navy mb-1.5"
                    >
                      Organisation
                    </label>
                    <input
                      id={`${title}-organisation`}
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      className="w-full rounded-[4px] border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                      placeholder="Organisation"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`${title}-email`}
                      className="block text-xs font-medium text-navy mb-1.5"
                    >
                      Email <span className="text-brand-teal">*</span>
                    </label>
                    <input
                      id={`${title}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-[4px] border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`${title}-phone`}
                      className="block text-xs font-medium text-navy mb-1.5"
                    >
                      Phone <span className="text-brand-teal">*</span>
                    </label>
                    <input
                      id={`${title}-phone`}
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full rounded-[4px] border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                      placeholder="Best number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`${title}-message`}
                    className="block text-xs font-medium text-navy mb-1.5"
                  >
                    Brief context
                  </label>
                  <textarea
                    id={`${title}-message`}
                    name="message"
                    rows={5}
                    defaultValue={defaultMessage}
                    className="w-full rounded-[4px] border border-brand-border bg-white px-4 py-3 text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal resize-y min-h-[120px]"
                    placeholder="Tell us what is happening and what you need help with."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] py-4 hover:bg-gold-light transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : `${submitLabel} →`}
                </button>
                <p className="text-text-body text-sm leading-relaxed">
                  Confidential and reviewed by a senior adviser. No junior
                  handoff.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
