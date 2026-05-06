import "server-only";
import { Resend } from "resend";
import { render } from "@react-email/render";
import {
  AssessmentEmail,
  type AssessmentEmailProps,
  ASSESSMENT_CATEGORIES,
  type AssessmentCategory,
} from "./assessmentEmail";

export interface SendAssessmentEmailInput {
  firstName: string;
  email: string;
  totalScore: number;
  breakdown: Record<AssessmentCategory, number>;
}

export interface SendAssessmentEmailResult {
  ok: boolean;
  error?: string;
  recipientId?: string;
  internalId?: string;
}

const FALLBACK_FROM = "CRC Public Relations <onboarding@resend.dev>";
const INTERNAL_NOTIFICATION_TO = "info@crcpr.com.au";

let resendClient: Resend | null = null;

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

function buildBreakdownLines(
  breakdown: Record<AssessmentCategory, number>,
): string {
  return ASSESSMENT_CATEGORIES.map(
    (cat) => `  ${cat}: ${breakdown[cat] ?? 0} / 8`,
  ).join("\n");
}

export async function sendAssessmentEmail(
  input: SendAssessmentEmailInput,
): Promise<SendAssessmentEmailResult> {
  const resend = getResend();
  if (!resend) {
    console.warn(
      "[assessment] RESEND_API_KEY not set, skipping email send. Submission still recorded.",
    );
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  const fromAddress = process.env.ASSESSMENT_FROM_EMAIL ?? FALLBACK_FROM;
  const replyTo = process.env.ASSESSMENT_REPLY_TO ?? "info@crcpr.com.au";

  const props: AssessmentEmailProps = {
    firstName: input.firstName,
    totalScore: input.totalScore,
    breakdown: input.breakdown,
  };

  const html = await render(<AssessmentEmail {...props} />);
  const text = await render(<AssessmentEmail {...props} />, {
    plainText: true,
  });

  // 1. Send the report to the lead.
  const recipientResp = await resend.emails.send({
    from: fromAddress,
    to: [input.email],
    replyTo: [replyTo],
    subject: "Your Reputation Vulnerability Report",
    html,
    text,
  });

  if (recipientResp.error) {
    console.error("[assessment] failed to send report to lead", {
      email: input.email,
      error: recipientResp.error,
    });
    return {
      ok: false,
      error: recipientResp.error.message ?? "Resend send failed",
    };
  }

  // 2. Internal notification (best-effort, do not fail the lead pipeline if this fails).
  let internalId: string | undefined;
  try {
    const internalResp = await resend.emails.send({
      from: fromAddress,
      to: [INTERNAL_NOTIFICATION_TO],
      replyTo: [input.email],
      subject: `New assessment completed: ${input.firstName} (${input.totalScore}/40)`,
      text: [
        "A new Reputation Vulnerability Assessment has been completed.",
        "",
        `Name:   ${input.firstName}`,
        `Email:  ${input.email}`,
        `Score:  ${input.totalScore} / 40`,
        "",
        "Category breakdown:",
        buildBreakdownLines(input.breakdown),
        "",
        "The lead has been sent the full report.",
      ].join("\n"),
    });
    internalId = internalResp.data?.id;
    if (internalResp.error) {
      console.warn("[assessment] internal notification send failed", {
        error: internalResp.error,
      });
    }
  } catch (err) {
    console.warn("[assessment] internal notification threw", err);
  }

  return {
    ok: true,
    recipientId: recipientResp.data?.id,
    internalId,
  };
}
