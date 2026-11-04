import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SignalLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt1">{children}</KitLayout>;
}
