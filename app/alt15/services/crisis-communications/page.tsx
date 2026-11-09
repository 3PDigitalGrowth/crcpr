import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt15");

export default function LineworkCrisisPage() {
  return <CrisisPage id="alt15" />;
}
