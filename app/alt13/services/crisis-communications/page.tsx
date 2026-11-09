import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt13");

export default function LetterheadCrisisPage() {
  return <CrisisPage id="alt13" />;
}
