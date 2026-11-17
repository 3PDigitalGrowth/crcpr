import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Chambers capability statement card: hairline frame, one action. Runs the full
 * container width, with the button on the right from md up (it sat in a
 * narrow column before, leaving empty space beside it).
 */
export function CapabilityDownload() {
  const { available, fileName, requestUrl } = siteConfig.capabilityStatement;

  return (
    <div className="kit-r flex flex-wrap items-start gap-4 border border-line p-6 md:flex-nowrap md:items-center md:gap-6 md:p-8">
      <FileText className="h-7 w-7 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
      <div className="min-w-0 flex-1">
        <h3 className="kit-display text-[15px] uppercase leading-snug">
          {available ? "Download our Capability Statement" : "Request our Capability Statement"}
        </h3>
        <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
          A comprehensive overview of CRC Public Relations&apos; services, team, and approach for procurement teams,
          boards, and executive evaluation.
        </p>
      </div>
      <div className="w-full shrink-0 md:w-auto">
        {available ? (
          <>
            <a
              href={`/downloads/${fileName}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download PDF
            </a>
            <p className="mt-2 text-xs text-muted">No form required.</p>
          </>
        ) : (
          <Link href={requestUrl} className="btn btn-primary">
            Request capability statement
          </Link>
        )}
      </div>
    </div>
  );
}
