import type { Metadata } from "next";
import { CrisisPage } from "@/components/altkit/pages/CrisisPage";

/* The approved Chambers crisis page (built at /alt2/services/crisis-communications
   from this page's copy), now served at the live route. */

export const metadata: Metadata = {
  title: "Crisis Communications PR Australia | CRC Public Relations",
  description:
    "Crisis communications counsel and 24/7 crisis response for organisations across Australia. Crisis plans, simulation exercises, spokesperson preparation, and immediate support. Call 1300 182 186.",
};

export default function CrisisCommunicationsPage() {
  return <CrisisPage id="site" />;
}
