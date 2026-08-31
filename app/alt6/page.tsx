import type { Metadata } from "next";
import { Alt6 } from "@/components/alt/Alt6";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 6 | CRC PR homepage concepts",
};

export default function Alt6Page() {
  return <Alt6 />;
}
