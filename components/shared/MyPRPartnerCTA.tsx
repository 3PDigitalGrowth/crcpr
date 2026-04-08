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
      className={`rounded-xl border p-5 ${
        isDark
          ? "border-white/10 bg-white/[0.04]"
          : "border-brand-border bg-white shadow-sm shadow-navy/5"
      } ${className}`}
    >
      <p
        className={`text-xs font-medium mb-3 ${
          isDark ? "text-brand-teal" : "text-brand-teal"
        }`}
      >
        {eyebrow}
      </p>
      <p
        className={`font-heading font-black ${
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
        className={`inline-flex items-center justify-center gap-2 font-heading font-black text-xs rounded-[4px] px-5 py-3 mt-4 transition ${
          isDark
            ? "border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08]"
            : "bg-brand-teal text-white hover:bg-link-teal"
        }`}
      >
        {buttonLabel}
        <ArrowRight size={14} aria-hidden />
      </a>
    </div>
  );
}
