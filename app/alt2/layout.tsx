import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ChambersLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt2">{children}</KitLayout>;
}
