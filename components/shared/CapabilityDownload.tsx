import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CapabilityDownload() {
  const { available, fileName, requestUrl } = siteConfig.capabilityStatement;

  return (
    <div className="bg-off-white border border-dashed border-brand-gold rounded-lg p-6 flex items-start gap-4">
      <FileText
        className="text-brand-gold shrink-0"
        size={28}
        strokeWidth={1.75}
        aria-hidden
      />
      <div>
        <h4 className="font-heading font-black text-navy text-lg">
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
              className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-6 py-3 mt-4 hover:bg-gold-light transition"
            >
              Download PDF →
            </a>
            <p className="text-charcoal-mid text-xs italic mt-2">
              No form required.
            </p>
          </>
        ) : (
          <Link
            href={requestUrl}
            className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-6 py-3 mt-4 hover:bg-gold-light transition"
          >
            Request capability statement →
          </Link>
        )}
      </div>
    </div>
  );
}
