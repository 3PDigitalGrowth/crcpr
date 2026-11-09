import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PrivateOfficeLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt14">{children}</KitLayout>;
}
