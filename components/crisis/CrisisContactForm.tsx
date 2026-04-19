"use client";

import { useState } from "react";
import { Check, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { submitEnquiry } from "@/lib/actions";
import type { FormState } from "@/types";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

const initialFormState: FormState = {
  status: "idle",
  message: "",
};

const inputClassName =
  "w-full border border-brand-border bg-white rounded-[4px] px-4 py-3 text-sm font-sans text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition";

const trustItems = [
  "Direct access to senior advisers",
  "Complete confidentiality guaranteed",
  "Response within the hour during business hours",
] as const;

export function CrisisContactForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormState(initialFormState);
    const formData = new FormData(e.currentTarget);
    const result = await submitEnquiry(initialFormState, formData);
    setIsSubmitting(false);
    setFormState(result);
  }

  const showSuccess = formState.status === "success";

  return (
    <section className="bg-warm-white py-20" id="contact-form">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-heading font-black text-navy text-2xl">
              Send a confidential message
            </h3>
            <p className="text-text-body text-sm italic mt-1 mb-4">
              Everything you share is treated with absolute discretion. This page includes a detailed FAQ on confidentiality if you need the full policy context.
            </p>

            {showSuccess ? (
              <div className="mt-6 space-y-4">
                <CheckCircle
                  className="text-green-600 mx-auto size-12"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <p className="text-text-body text-[15px] leading-relaxed text-center lg:text-left">
                  Thank you. A CRC Public Relations adviser will be in touch shortly: within the
                  hour during business hours, or first thing in the morning for
                  after-hours messages.
                </p>
              </div>
            ) : (
              <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="crisis-enquiry-name"
                    className="block text-sm font-sans font-medium text-navy mb-1"
                  >
                    Full name <span className="text-text-caption">(required)</span>
                  </label>
                  <input
                    id="crisis-enquiry-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="crisis-enquiry-organisation"
                    className="block text-sm font-sans font-medium text-navy mb-1"
                  >
                    Organisation{" "}
                    <span className="text-text-caption">(required)</span>
                  </label>
                  <input
                    id="crisis-enquiry-organisation"
                    name="organisation"
                    type="text"
                    required
                    autoComplete="organization"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="crisis-enquiry-phone"
                    className="block text-sm font-sans font-medium text-navy mb-1"
                  >
                    Phone number{" "}
                    <span className="text-text-caption">(required)</span>
                  </label>
                  <input
                    id="crisis-enquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="crisis-enquiry-email"
                    className="block text-sm font-sans font-medium text-navy mb-1"
                  >
                    Email <span className="text-text-caption">(required)</span>
                  </label>
                  <input
                    id="crisis-enquiry-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="crisis-enquiry-message"
                    className="block text-sm font-sans font-medium text-navy mb-1"
                  >
                    Nature of situation{" "}
                    <span className="text-text-caption">(optional)</span>
                  </label>
                  <textarea
                    id="crisis-enquiry-message"
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your situation (optional)"
                    className={inputClassName}
                  />
                </div>
                {formState.status === "error" ? (
                  <p className="text-sm text-red-600" role="alert">
                    {formState.message}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-gold text-navy font-heading font-black text-sm w-full py-4 rounded-[4px] mt-4 hover:bg-gold-light transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </div>

          <div>
            <PortraitPlaceholder
              size="sm"
              imageSrc="/images/crisis/lyall-mercer-portrait.png"
              imageAlt="Lyall Mercer, CRC Public Relations co-founder"
              imageObjectClassName="object-[center_18%]"
            />
            <p className="mt-6 text-text-body text-[15px] leading-relaxed">
              You will deal directly with Lyall Mercer or a senior CRC Public Relations adviser,
              not an account manager.
            </p>
            <p className="mt-4">
              <a
                href={siteConfig.phone.href}
                className="text-link-teal font-heading font-black text-xl hover:text-navy hover:underline underline-offset-2"
              >
                {siteConfig.phone.display}
              </a>
            </p>
            <ul className="mt-6 space-y-3">
              {trustItems.map((text) => (
                <li key={text} className="flex items-center gap-3 text-text-body text-sm">
                  <Check
                    className="text-brand-gold shrink-0"
                    size={18}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
