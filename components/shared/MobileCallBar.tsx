import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-gold py-3 shadow-[0_-8px_24px_rgba(26,43,74,0.18)]">
      <a
        href={siteConfig.phone.href}
        className="flex items-center justify-center gap-2"
      >
        <Phone className="text-navy shrink-0" size={18} strokeWidth={1.75} aria-hidden />
        <span className="font-sans font-semibold text-navy text-xs">
          Call {siteConfig.phone.display} | Available 24/7
        </span>
      </a>
    </div>
  );
}
