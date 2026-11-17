import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Chambers capability statement card: hairline frame, one action. */
export function CapabilityDownload() {
  const { available, fileName, requestUrl } = siteConfig.capabilityStatement;

  return (
    <div className="kit-r flex items-start gap-4 border border-line p-6">
      <FileText className="h-7 w-7 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
      <div>
        <h3 className="kit-display text-[15px] uppercase leading-snug">
          {available ? "Download our Capability Statement" : "Request our Capability Statement"}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          A comprehensive overview of CRC Public Relations&apos; services, team, and approach for procurement teams,
          boards, and executive evaluation.
        </p>
        {available ? (
          <>
            <a
              href={`/downloads/${fileName}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
            >
              Download PDF
            </a>
            <p className="mt-2 text-xs text-muted">No form required.</p>
          </>
        ) : (
          <Link href={requestUrl} className="btn btn-primary mt-4">
            Request capability statement
          </Link>
        )}
      </div>
    </div>
  );
}
