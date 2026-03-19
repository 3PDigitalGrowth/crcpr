"use client";

import { useFormState } from "react-dom";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { submitEnquiry } from "@/lib/actions";
import type { FormState } from "@/types";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactFormSection() {
  const [state, formAction] = useFormState(submitEnquiry, initialState);

  const addressLine = [
    siteConfig.address.street,
    `${siteConfig.address.city} ${siteConfig.address.state} ${siteConfig.address.postcode}`,
    siteConfig.address.country,
  ].join(", ");

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-heading font-black text-navy text-2xl">
            Send us a message
          </h2>
          {state.status === "success" ? (
            <div className="mt-8 flex gap-4 items-start rounded-lg border border-brand-border bg-off-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <p className="text-charcoal text-sm leading-relaxed pt-1.5">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="mt-8 space-y-5">
              {state.status === "error" ? (
                <p className="text-sm text-red-700" role="alert">
                  {state.message}
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
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] py-4 hover:bg-gold-light transition"
              >
                SEND MESSAGE →
              </button>
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
          <div className="bg-off-white rounded-lg h-[200px] flex items-center justify-center text-charcoal-mid/30 mt-6 text-sm">
            Map placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
