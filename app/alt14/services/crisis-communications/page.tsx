import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt14");

export default function PrivateOfficeCrisisPage() {
  return <CrisisPage id="alt14" />;
}
