import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CapabilityDownload() {
  const { available, fileName, requestUrl } = siteConfig.capabilityStatement;

  return (
    <div className="rounded-[1.5rem] border border-dashed border-brand-gold bg-warm-white/70 p-6 backdrop-blur flex items-start gap-4">
      <FileText
        className="text-brand-gold shrink-0"
        size={28}
        strokeWidth={1.75}
        aria-hidden
      />
      <div>
        <h4 className="font-heading text-navy text-lg">
          {available
            ? "Download our Capability Statement"
            : "Request our Capability Statement"}
        </h4>
        <p className="text-charcoal-mid text-sm mt-1">
          A comprehensive overview of CRC Public Relations&apos; services, team, and approach
          for procurement teams, boards, and executive evaluation.
        </p>
        {available ? (
          <>
            <a
              href={`/downloads/${fileName}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 mt-4 transition-colors hover:bg-gold-light"
            >
              Download PDF →
            </a>
            <p className="text-charcoal-mid text-xs mt-2">
              No form required.
            </p>
          </>
        ) : (
          <Link
            href={requestUrl}
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 mt-4 transition-colors hover:bg-gold-light"
          >
            Request capability statement →
          </Link>
        )}
      </div>
    </div>
  );
}
