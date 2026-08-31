import type { Metadata } from "next";
import { Alt8 } from "@/components/alt/Alt8";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 8 | CRC PR homepage concepts",
};

export default function Alt8Page() {
  return <Alt8 />;
}
