"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/altkit/primitives";

interface MyPRPartnerCTAProps {
  variant?: "light" | "dark";
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
}

/** Chambers framed aside: eyebrow, capitals title, one quiet action. */
export function MyPRPartnerCTA({
  compact = false,
  eyebrow = "My PR Partner",
  title = "Training, tools, and practical support between major advisory moments.",
  description = "My PR Partner is CRC Public Relations' training and support platform for communications teams, practitioners, and leaders who want practical guidance, workshops, and development resources.",
  buttonLabel = "Explore My PR Partner",
  className = "",
}: MyPRPartnerCTAProps) {
  return (
    <div className={`kit-r border border-line p-6 md:p-8 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <p className={`kit-display mt-4 uppercase leading-snug ${compact ? "text-[15px]" : "text-lg"}`}>{title}</p>
      <p className={`mt-3 leading-relaxed text-muted ${compact ? "text-xs" : "text-sm"}`}>{description}</p>
      <a
        href={siteConfig.myPrPartnerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-quiet mt-5 inline-flex items-center gap-2"
      >
        {buttonLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}
