import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt2");

export default function ChambersCrisisPage() {
  return <CrisisPage id="alt2" />;
}
