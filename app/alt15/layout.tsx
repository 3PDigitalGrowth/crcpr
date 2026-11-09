import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LineworkLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt15">{children}</KitLayout>;
}
