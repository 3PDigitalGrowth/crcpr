import type { Metadata } from "next";
import { RedesignHomeV2 } from "@/components/redesign/v2/RedesignHomeV2";

export const metadata: Metadata = {
  title: {
    absolute: "Home redesign concept | CRC Public Relations",
  },
  description:
    "New-age visual concept for the CRC Public Relations home page. Internal preview.",
  robots: { index: false, follow: false },
};

export default function RedesignPreviewPage() {
  return <RedesignHomeV2 />;
}
