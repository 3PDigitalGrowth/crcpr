"use server";

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
      "Thank you. A CRC PR adviser will be in touch shortly: within the hour during business hours, or first thing in the morning for after-hours messages.",
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
  const firstName = formData.get("firstName") as string;
  const email = formData.get("email") as string;
  const score = formData.get("score") as string;
  const breakdown = formData.get("breakdown") as string;

  if (!firstName || !email) {
    return { status: "error", message: "Please provide your name and email." };
  }

  // TODO: Send personalised PDF report or email with score + recommended next steps
  // TODO: Tag in ActiveCampaign with score band for appropriate nurture sequence
  console.log("Assessment submitted:", { firstName, email, score, breakdown });

  return {
    status: "success",
    message: "Your Reputation Risk Report request has been received.",
  };
}
