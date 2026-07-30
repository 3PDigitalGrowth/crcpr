"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { submitLeadMagnet } from "@/lib/actions";
import type { FormState, LeadMagnetKey } from "@/types";

const initialFormState: FormState = {
  status: "idle",
  message: "",
};

export interface LeadMagnetModalProps {
  magnet: LeadMagnetKey;
  isOpen: boolean;
  onClose: () => void;
}

const inputClassName =
  "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm font-sans text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/60 transition mb-3";

export function LeadMagnetModal({
  magnet,
  isOpen,
  onClose,
}: LeadMagnetModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const meta = siteConfig.leadMagnets[magnet];
  const isComingSoon = meta.available === false;
  const eyebrowLabel = isComingSoon ? "Coming soon" : "Free download";
  const submitLabel = isComingSoon
    ? isSubmitting
      ? "Adding you to the list..."
      : "Notify me when ready"
    : isSubmitting
      ? "Sending..."
      : "Send me the resource";
  const successMessage = isComingSoon
    ? `Thanks. We will email you the moment ${meta.title} is published.`
    : `Check your inbox. ${meta.title} is on its way.`;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFirstName("");
      setEmail("");
      setOrganisation("");
      setFormState(initialFormState);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormState(initialFormState);
    const formData = new FormData(e.currentTarget);
    const result = await submitLeadMagnet(initialFormState, formData);
    setIsSubmitting(false);
    setFormState(result);
  }

  const showSuccess = formState.status === "success";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="bg-warm-white rounded-[1.75rem] max-w-md w-full p-8 relative shadow-2xl shadow-navy/20"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-magnet-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-text-caption hover:text-text-body transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="size-5" strokeWidth={2} />
        </button>

        <p className="font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-link-teal">
          <span className="h-px w-8 bg-current opacity-50" aria-hidden />
          {eyebrowLabel}
        </p>
        <h3
          id="lead-magnet-modal-title"
          className="font-heading text-navy text-2xl mt-2"
        >
          {meta.title}
        </h3>
        <p className="text-text-body text-[15px] mt-3">{meta.description}</p>

        {showSuccess ? (
          <div className="mt-6 space-y-4">
            <CheckCircle
              className="text-brand-teal mx-auto size-12"
              strokeWidth={1.75}
              aria-hidden
            />
            <p className="text-text-body text-center">{successMessage}</p>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-brand-teal text-white font-sans font-semibold text-sm py-3 rounded-full shadow-lg shadow-brand-teal/20 transition-colors hover:bg-link-teal"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-6" onSubmit={handleSubmit}>
            <input type="hidden" name="magnet" value={magnet} />
            <label className="sr-only" htmlFor="lead-magnet-firstName">
              First name
            </label>
            <input
              id="lead-magnet-firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="First name"
              className={inputClassName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="sr-only" htmlFor="lead-magnet-email">
              Work email
            </label>
            <input
              id="lead-magnet-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Work email"
              className={inputClassName}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="sr-only" htmlFor="lead-magnet-organisation">
              Organisation (optional)
            </label>
            <input
              id="lead-magnet-organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              placeholder="Organisation (optional)"
              className={inputClassName}
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
            {formState.status === "error" ? (
              <p className="text-sm text-red-600 mb-3" role="alert">
                {formState.message}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-teal text-white font-sans font-semibold text-sm w-full py-3 rounded-full mt-4 shadow-lg shadow-brand-teal/20 transition-colors hover:bg-link-teal disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitLabel}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-text-caption">
          No spam. Unsubscribe anytime.{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 text-link-teal hover:text-navy transition"
          >
            Privacy policy
          </Link>
        </p>
        <p className="mt-2 text-xs text-text-caption">
          Prepared by CRC Public Relations: specialist Australian PR expertise.
        </p>
      </div>
    </div>
  );
}
