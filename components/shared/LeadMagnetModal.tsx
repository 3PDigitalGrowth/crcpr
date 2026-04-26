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
  "w-full border border-brand-border bg-white rounded-[4px] px-4 py-3 text-sm font-sans text-text-body placeholder:text-text-caption focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition mb-3";

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
        className="bg-warm-white rounded-lg max-w-md w-full p-8 relative shadow-sm shadow-navy/10"
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

        <p className="text-brand-teal text-xs font-medium">
          Free download
        </p>
        <h3
          id="lead-magnet-modal-title"
          className="font-heading font-black text-navy text-2xl mt-2"
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
            <p className="text-text-body text-center">
              Check your inbox. {meta.title} is on its way.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-brand-teal text-white font-heading font-black text-sm py-3 rounded-[4px] hover:bg-link-teal transition"
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
              className="bg-brand-teal text-white font-heading font-black text-sm w-full py-3 rounded-[4px] mt-4 hover:bg-link-teal transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send me the resource
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
        <p className="mt-2 text-xs text-text-caption italic">
          Prepared by CRC Public Relations: specialist Australian PR expertise.
        </p>
      </div>
    </div>
  );
}
