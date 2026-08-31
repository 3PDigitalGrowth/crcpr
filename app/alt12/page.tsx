import type { Metadata } from "next";
import { Alt12 } from "@/components/alt/Alt12";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 12 | CRC PR homepage concepts",
};

export default function Alt12Page() {
  return <Alt12 />;
}
