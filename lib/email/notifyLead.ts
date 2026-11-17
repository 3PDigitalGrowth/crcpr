import "server-only";
import { Resend } from "resend";

/**
 * Internal notification for every website lead (enquiry forms and resource
 * downloads). Plain text, sent to CRC's inbox with reply-to set to the lead so
 * an adviser can answer straight from the email.
 *
 * Does nothing until RESEND_API_KEY is set on the deployment. Never throws:
 * a failed send must not break the visitor's form.
 *
 * Env:
 *   RESEND_API_KEY      required to send
 *   LEADS_NOTIFY_TO     comma-separated recipients (default info@crcpr.com.au)
 *   LEADS_NOTIFY_BCC    comma-separated bcc (default alex@3pdigital.com.au)
 *   LEADS_FROM_EMAIL    sender on a Resend-verified domain
 *                       (falls back to ASSESSMENT_FROM_EMAIL, then Resend's test sender)
 */

const FALLBACK_FROM = "CRC Public Relations <onboarding@resend.dev>";
const DEFAULT_TO = "info@crcpr.com.au";
export const DEFAULT_LEADS_BCC = "alex@3pdigital.com.au";

export function leadsBcc(): string[] {
  return (process.env.LEADS_NOTIFY_BCC ?? DEFAULT_LEADS_BCC)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export type LeadKind = "enquiry" | "resource";

export interface LeadNotice {
  kind: LeadKind;
  name: string;
  email: string;
  organisation?: string;
  phone?: string;
  message?: string;
  /** Resource title for downloads and waitlist signups. */
  resource?: string;
  waitlist?: boolean;
  /** Page path (and query) the form was sent from. */
  page?: string;
}

function clean(value: string | undefined): string {
  return (value ?? "").replace(/[\r\n]+/g, " ").trim();
}

export async function notifyLead(lead: LeadNotice): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(`[lead] RESEND_API_KEY not set, ${lead.kind} lead not emailed.`);
    return;
  }

  const to = (process.env.LEADS_NOTIFY_TO ?? DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.LEADS_FROM_EMAIL ?? process.env.ASSESSMENT_FROM_EMAIL ?? FALLBACK_FROM;

  const name = clean(lead.name);
  const org = clean(lead.organisation);
  const who = org ? `${name} (${org})` : name;
  const subject =
    lead.kind === "enquiry"
      ? `Website enquiry: ${who}`
      : `${lead.waitlist ? "Resource waitlist" : "Resource download"}: ${clean(lead.resource)}, ${who}`;

  const lines = [
    `Name: ${name}`,
    org ? `Organisation: ${org}` : "",
    `Email: ${clean(lead.email)}`,
    lead.phone ? `Phone: ${clean(lead.phone)}` : "",
    lead.resource ? `Resource: ${clean(lead.resource)}${lead.waitlist ? " (not yet published, waitlist)" : ""}` : "",
    lead.page ? `Page: ${clean(lead.page)}` : "",
    lead.message ? `\nMessage:\n${lead.message.trim()}` : "",
  ].filter(Boolean);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      bcc: leadsBcc(),
      replyTo: clean(lead.email),
      subject,
      text: lines.join("\n"),
    });
    if (error) console.error("[lead] Resend rejected the notification:", error);
  } catch (err) {
    console.error("[lead] notification failed:", err);
  }
}
