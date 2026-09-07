import { redirect } from "next/navigation";

/**
 * Concept 8 "Amplitude" was withdrawn from the client review set
 * (Alex, 7 Sep 2026). The component survives at components/alt/Alt8.tsx;
 * restore the original page.tsx from git history to bring it back.
 */
export default function Alt8Redirect() {
  redirect("/alt");
}
