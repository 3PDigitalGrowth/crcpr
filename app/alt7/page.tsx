import type { Metadata } from "next";
import { Alt7 } from "@/components/alt/Alt7";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 7 | CRC PR homepage concepts",
};

export default function Alt7Page() {
  return <Alt7 />;
}
