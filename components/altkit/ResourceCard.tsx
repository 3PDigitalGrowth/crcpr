"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { LeadMagnetKey } from "@/types";
import { LeadMagnetForm } from "./forms";

/** A downloadable resource: details first, the short form opens on request. */
export function ResourceCard({
  magnet,
  featured = false,
  wide = false,
}: {
  magnet: LeadMagnetKey;
  featured?: boolean;
  /** Only wide cards put the form fields on one row. */
  wide?: boolean;
}) {
  const [open, setOpen] = useState(featured);
  const meta = siteConfig.leadMagnets[magnet];
  const headline = "headline" in meta ? meta.headline : null;

  return (
    <div className={`glass kit-r flex h-full flex-col p-6 ${featured ? "md:p-8" : ""}`}>
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
        <FileText className="h-3.5 w-3.5 text-accent" aria-hidden />
        Free download
      </p>
      <h3 className={`mt-4 font-bold leading-snug ${featured ? "kit-display text-[clamp(1.35rem,2.2vw,1.8rem)] leading-[1.12]" : "text-lg"}`}>
        {headline ?? meta.title}
      </h3>
      {headline ? <p className="mt-2 text-sm font-semibold text-accent">{meta.title}</p> : null}
      <p className={`mt-3 text-sm leading-relaxed text-muted ${featured ? "md:text-base" : "line-clamp-4"}`}>
        {meta.description}
      </p>
      <div className="mt-auto pt-6">
        {open ? (
          <LeadMagnetForm magnet={magnet} layout={wide ? "row" : "stack"} />
        ) : (
          <button type="button" onClick={() => setOpen(true)} className="btn btn-quiet">
            <Download className="h-4 w-4 text-accent" aria-hidden />
            Download
          </button>
        )}
      </div>
    </div>
  );
}
