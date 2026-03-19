import type { Metadata } from "next";
import { CrisisContactForm } from "@/components/crisis/CrisisContactForm";
import { CrisisHero } from "@/components/crisis/CrisisHero";
import { CrisisServices } from "@/components/crisis/CrisisServices";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: {
    absolute: "Crisis Communications | CRC Public Relations | 24/7 Response",
  },
  description:
    "24/7 crisis communications support. When a crisis breaks, the first 15 minutes define the outcome. CRC PR provides immediate, confidential, experienced crisis response across Australia and internationally.",
};

export default function CrisisPage() {
  return (
    <>
      <CrisisHero />
      <CrisisServices />
      <CrisisContactForm />
      <LeadMagnetBanner magnet="crisisPlanTemplate" />
    </>
  );
}
