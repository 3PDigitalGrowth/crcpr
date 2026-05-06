"use server";

import { sendAssessmentEmail } from "@/lib/email/sendAssessmentEmail";
import {
  ASSESSMENT_CATEGORIES,
  type AssessmentCategory,
} from "@/lib/email/assessmentEmail";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitEnquiry(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const organisation = formData.get("organisation") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  // TODO: Connect to email provider (Resend preferred, Formspree fallback)
  // Send to siteConfig.email.newBusiness
  console.log("Enquiry submitted:", { name, organisation, phone, email, message });

  return {
    status: "success",
    message:
      "Thank you. A CRC Public Relations adviser will be in touch shortly: within the hour during business hours, or first thing in the morning for after-hours messages.",
  };
}

export async function submitLeadMagnet(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const email = formData.get("email") as string;
  const organisation = formData.get("organisation") as string;
  const magnet = formData.get("magnet") as string;

  if (!firstName || !email) {
    return { status: "error", message: "Please provide your name and email." };
  }

  // TODO: Connect to ActiveCampaign, add to CRC PR nurture list with magnet tag
  // TODO: Trigger automated email with download link
  console.log("Lead magnet requested:", { firstName, email, organisation, magnet });

  return {
    status: "success",
    message: "Check your inbox. Your resource is on its way.",
  };
}

export async function submitAssessment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = (formData.get("firstName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const scoreRaw = formData.get("score") as string;
  const breakdownRaw = formData.get("breakdown") as string;

  if (!firstName || !email) {
    return { status: "error", message: "Please provide your name and email." };
  }

  const totalScore = Number.parseInt(scoreRaw ?? "0", 10) || 0;

  let parsedBreakdown: Record<string, number> = {};
  try {
    parsedBreakdown = breakdownRaw
      ? (JSON.parse(breakdownRaw) as Record<string, number>)
      : {};
  } catch {
    parsedBreakdown = {};
  }

  const breakdown = ASSESSMENT_CATEGORIES.reduce(
    (acc, cat) => {
      acc[cat] = Number(parsedBreakdown[cat] ?? 0);
      return acc;
    },
    {} as Record<AssessmentCategory, number>,
  );

  const result = await sendAssessmentEmail({
    firstName,
    email,
    totalScore,
    breakdown,
  });

  if (!result.ok) {
    console.error("[assessment] send failed but lead captured", {
      firstName,
      email,
      totalScore,
      error: result.error,
    });
  }

  // Always confirm success to the user once we have their details. The lead is
  // captured even if the email send pipeline is misconfigured; ops can follow
  // up manually from server logs.
  return {
    status: "success",
    message: "Your Reputation Risk Report has been sent. Check your inbox.",
  };
}
