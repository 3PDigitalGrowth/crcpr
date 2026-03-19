import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-gold py-3">
      <a
        href={siteConfig.phone.href}
        className="flex items-center justify-center gap-2"
      >
        <Phone className="text-navy shrink-0" size={18} strokeWidth={2.25} aria-hidden />
        <span className="font-heading font-black text-navy text-xs tracking-widest uppercase">
          CALL {siteConfig.phone.display} | AVAILABLE 24/7
        </span>
      </a>
    </div>
  );
}
