import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt3");

export default function EmberCrisisPage() {
  return <CrisisPage id="alt3" />;
}
