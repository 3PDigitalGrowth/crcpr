"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MyPRPartnerCTAProps {
  variant?: "light" | "dark";
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
}

export function MyPRPartnerCTA({
  variant = "light",
  compact = false,
  eyebrow = "My PR Partner",
  title = "Training, tools, and practical support between major advisory moments.",
  description = "My PR Partner is CRC Public Relations' training and support platform for communications teams, practitioners, and leaders who want practical guidance, workshops, and development resources.",
  buttonLabel = "Explore My PR Partner",
  className = "",
}: MyPRPartnerCTAProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-[1.5rem] p-5 ${
        isDark
          ? "v2-glass-dark"
          : "border border-brand-border bg-warm-white/70 backdrop-blur shadow-sm shadow-navy/5"
      } ${className}`}
    >
      <p className="mb-3 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-link-teal">
        <span className="h-px w-8 bg-current opacity-50" aria-hidden />
        {eyebrow}
      </p>
      <p
        className={`font-heading ${
          compact ? "text-base" : "text-lg"
        } leading-snug ${isDark ? "text-white" : "text-navy"}`}
      >
        {title}
      </p>
      <p
        className={`${
          compact ? "text-xs" : "text-sm"
        } leading-relaxed mt-3 ${isDark ? "text-white/65" : "text-charcoal-mid"}`}
      >
        {description}
      </p>
      <a
        href={siteConfig.myPrPartnerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-semibold px-5 py-3 mt-4 transition ${
          isDark
            ? "border border-white/25 text-white hover:bg-white/10"
            : "bg-brand-teal text-white shadow-lg shadow-brand-teal/20 transition-colors hover:bg-link-teal"
        }`}
      >
        {buttonLabel}
        <ArrowRight size={14} aria-hidden />
      </a>
    </div>
  );
}
