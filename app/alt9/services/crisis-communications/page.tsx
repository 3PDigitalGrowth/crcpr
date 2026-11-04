import type { Metadata } from "next";
import { CrisisPage, crisisMetadata } from "@/components/altkit/pages/CrisisPage";

export const metadata: Metadata = crisisMetadata("alt9");

export default function GalleryCrisisPage() {
  return <CrisisPage id="alt9" />;
}
