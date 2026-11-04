import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt1");

export default function SignalCrisisPage() {
  return <CrisisPage id="alt1" />;
}
