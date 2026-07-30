"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Users,
  Shield,
  AlertTriangle,
  Zap,
  Radio,
  Monitor,
  Globe,
  FileText,
  Landmark,
  Building2,
  GraduationCap,
  UserRound,
  HelpCircle,
  Newspaper,
  Mail,
  MapPin,
  Mic,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/*
 * Mega navigation. Every primary item opens a glass panel with helper text
 * and an editorial still. All helper copy is reused from existing page copy
 * (hero descriptions, section blurbs) — nothing invented. Stills only, no
 * video in panels: dropdown videos cost LCP/interaction budget for no CRO
 * gain at this size.
 */

type PanelKey =
  | "services"
  | "crisis"
  | "pacific"
  | "sectors"
  | "cases"
  | "about"
  | "contact"
  | "insights"
  | null;

interface MegaItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconTeal?: boolean;
  onClick?: () => void;
}

function MegaItem({
  href,
  icon,
  title,
  desc,
  iconTeal = false,
  onClick,
}: MegaItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
          iconTeal ? "bg-brand-teal/10" : "bg-brand-gold/10"
        }`}
      >
        <div
          className={iconTeal ? "text-brand-teal" : "text-brand-gold"}
          style={{ width: 16, height: 16 }}
        >
          {icon}
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white/85 mb-0.5 leading-tight group-hover:text-brand-gold transition-colors">
          {title}
        </p>
        <p className="text-xs text-white/35 leading-snug">{desc}</p>
      </div>
    </Link>
  );
}

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold/70">
      <span className="h-px w-5 bg-current opacity-50" aria-hidden />
      {children}
    </p>
  );
}

/* Editorial still with caption linking through to the feature page. */
function FeatureTile({
  href,
  src,
  alt,
  caption,
  sub,
  onClick,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  sub: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className="group block px-4 py-5">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-white/10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="280px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
      </div>
      <p className="mt-3 font-heading text-white text-base leading-snug group-hover:text-brand-gold transition-colors">
        {caption}
      </p>
      <p className="mt-1 text-xs text-white/40 leading-snug">{sub}</p>
    </Link>
  );
}

function CTAColumn({
  header = "Get in touch",
  title = "Talk to an experienced adviser",
  body = "You reach our advisers directly. Sensitive matters are handled with professional discretion.",
}: {
  header?: string;
  title?: string;
  body?: string;
}) {
  return (
    <div
      className="flex flex-col py-5 px-5"
      style={{
        background: "rgba(201,168,76,0.06)",
        borderLeft: "0.5px solid rgba(201,168,76,0.12)",
      }}
    >
      <ColumnHeader>{header}</ColumnHeader>
      <p className="text-sm font-heading text-white mb-2">{title}</p>
      <p className="text-xs text-white/40 leading-relaxed">{body}</p>
      <div className="flex-1 min-h-4" />
      <a
        href={siteConfig.phone.href}
        className="block font-heading text-brand-gold text-xl mb-2"
      >
        {siteConfig.phone.display}
      </a>
      <Link
        href="/contact"
        className="block w-full rounded-full bg-brand-gold px-4 py-3 text-center font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
      >
        Book a consultation &rarr;
      </Link>
      <Link
        href="/contact"
        className="block text-xs text-white/35 underline text-center mt-1.5"
      >
        or send a message
      </Link>
    </div>
  );
}

function PanelShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div role="dialog" aria-label={label} className="max-w-7xl mx-auto px-6">
      {children}
    </div>
  );
}

function ServicesPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Services menu">
      <div className="grid grid-cols-[1fr_1fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Core services</ColumnHeader>
          <MegaItem
            href="/services/corporate-communications"
            icon={<Users className="w-full h-full" />}
            title="Corporate communications"
            desc="Stakeholder engagement and executive messaging"
            onClick={onClose}
          />
          <MegaItem
            href="/services/media-strategy"
            icon={<Radio className="w-full h-full" />}
            title="Media relations & strategy"
            desc="Proactive media presence and relationships"
            onClick={onClose}
          />
          <MegaItem
            href="/services/reputation-management"
            icon={<Shield className="w-full h-full" />}
            title="Reputation management"
            desc="Vulnerability assessments and long-term protection"
            onClick={onClose}
          />
          <MegaItem
            href="/media-training"
            icon={<Mic className="w-full h-full" />}
            title="Media training"
            desc="Delivered by former television and radio journalists"
            onClick={onClose}
          />
        </div>

        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Specialist services</ColumnHeader>
          <MegaItem
            href="/services/crisis-communications"
            icon={<Zap className="w-full h-full" />}
            title="Crisis communications"
            desc="24/7 response, call 1300 182 186"
            onClick={onClose}
          />
          <MegaItem
            href="/services/issues-management"
            icon={<AlertTriangle className="w-full h-full" />}
            title="Issues management"
            desc="Get ahead before issues become crises"
            onClick={onClose}
          />
          <MegaItem
            href="/services/digital-media"
            icon={<Monitor className="w-full h-full" />}
            title="Digital media"
            desc="Online reputation and social strategy"
            onClick={onClose}
          />
          <div className="h-px bg-white/[0.06] my-2 mx-3" />
          <Link
            href="/services"
            onClick={onClose}
            className="block px-3 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            &rarr; View all services
          </Link>
        </div>

        <FeatureTile
          href="/services"
          src="/images/services/hero-poster.jpg"
          alt=""
          caption="Corporate communications and PR services."
          sub="Every engagement is led by experienced advisers who work directly with you."
          onClick={onClose}
        />

        <CTAColumn />
      </div>
    </PanelShell>
  );
}

function CrisisPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Crisis menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.2fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Crisis support</ColumnHeader>
          <MegaItem
            href="/services/crisis-communications"
            icon={<Zap className="w-full h-full" />}
            title="Crisis communications"
            desc="24/7 crisis response, planning, and simulation exercises"
            onClick={onClose}
          />
          <MegaItem
            href="/services/issues-management"
            icon={<AlertTriangle className="w-full h-full" />}
            title="Issues management"
            desc="Get ahead before issues become crises"
            onClick={onClose}
          />
          <MegaItem
            href="/media-training"
            icon={<Mic className="w-full h-full" />}
            title="Media training"
            desc="Spokesperson training and hostile interview preparation"
            onClick={onClose}
          />
          <div className="h-px bg-white/[0.06] my-2 mx-3" />
          <ColumnHeader>Free resources</ColumnHeader>
          <Link
            href="/services/crisis-communications"
            onClick={onClose}
            className="block px-3 py-1 text-xs text-white/55 hover:text-white/80 transition-colors"
          >
            &rarr; Crisis readiness checklist
          </Link>
          <Link
            href="/services/reputation-management#reputation-assessment"
            onClick={onClose}
            className="block px-3 py-1 text-xs text-white/55 hover:text-white/80 transition-colors"
          >
            &rarr; Reputation assessment
          </Link>
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/services/crisis-communications"
            src="/images/services/crisis-communications/hero-poster.jpg"
            alt=""
            caption="When a crisis breaks, experience is everything."
            sub="24/7. Confidential. Decisive."
            onClick={onClose}
          />
        </div>

        <CTAColumn
          header="Facing a crisis right now?"
          title="You will speak to an adviser, not a receptionist"
          body="Call us directly, available 7 days. Every call is treated with absolute confidentiality."
        />
      </div>
    </PanelShell>
  );
}

function PacificPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Pacific menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.2fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Pacific advisory</ColumnHeader>
          <MegaItem
            href="/pacific"
            icon={<Globe className="w-full h-full" />}
            title="Pacific advisory"
            desc="Deep, sustained expertise across Pacific Island nations"
            iconTeal
            onClick={onClose}
          />
          <MegaItem
            href="/case-studies"
            icon={<FileText className="w-full h-full" />}
            title="Case studies"
            desc="Successful outcomes across sectors"
            iconTeal
            onClick={onClose}
          />
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/pacific"
            src="/images/pacific/hero-poster.jpg"
            alt=""
            caption="Deep, sustained Pacific expertise."
            sub="Assisting Pacific governments and companies to communicate effectively."
            onClick={onClose}
          />
        </div>

        <CTAColumn title="Work with us in the Pacific" />
      </div>
    </PanelShell>
  );
}

function SectorsPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Sectors menu">
      <div className="grid grid-cols-[1fr_1fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Who we work with</ColumnHeader>
          <MegaItem
            href="/clients/industry-associations"
            icon={<Users className="w-full h-full" />}
            title="Industry associations"
            desc="Specialist counsel for peak bodies and professional associations"
            onClick={onClose}
          />
          <MegaItem
            href="/clients/corporate"
            icon={<Building2 className="w-full h-full" />}
            title="Corporate"
            desc="Direct, personal counsel for owners, directors, and executives"
            onClick={onClose}
          />
        </div>

        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>More sectors</ColumnHeader>
          <MegaItem
            href="/clients/government"
            icon={<Landmark className="w-full h-full" />}
            title="Government"
            desc="Counsel that understands the unique pressures of government"
            onClick={onClose}
          />
          <MegaItem
            href="/clients/schools-faith"
            icon={<GraduationCap className="w-full h-full" />}
            title="Schools & faith-based organisations"
            desc="Crisis response, parent communications, and media management"
            onClick={onClose}
          />
          <div className="h-px bg-white/[0.06] my-2 mx-3" />
          <Link
            href="/clients"
            onClick={onClose}
            className="block px-3 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            &rarr; Deep expertise across every sector
          </Link>
        </div>

        <FeatureTile
          href="/clients/industry-associations"
          src="/images/clients/industry-associations/editorial-auditorium.png"
          alt=""
          caption="The voice of authority for your sector."
          sub="Positions you as the voice of authority, elevates your advocacy, and builds stakeholder and member trust."
          onClick={onClose}
        />

        <CTAColumn />
      </div>
    </PanelShell>
  );
}

function CasesPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Case studies menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.3fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Client outcomes</ColumnHeader>
          {siteConfig.caseStudies.slice(0, 4).map((study) => (
            <Link
              key={study.id}
              href="/case-studies"
              onClick={onClose}
              className="block px-3 py-2 rounded-xl hover:bg-white/[0.04] transition-colors group"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-gold/70">
                {study.sector}
              </p>
              <p className="text-sm font-heading text-white/90 group-hover:text-brand-gold transition-colors">
                {study.outcome}
              </p>
            </Link>
          ))}
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/case-studies"
            src="/images/case-studies/editorial-podium.png"
            alt=""
            caption="Results that speak for themselves."
            sub="When policy, reputation and stakeholder pressure converge."
            onClick={onClose}
          />
        </div>

        <CTAColumn />
      </div>
    </PanelShell>
  );
}

function AboutPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="About menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.2fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>The firm</ColumnHeader>
          <MegaItem
            href="/about"
            icon={<Users className="w-full h-full" />}
            title="About CRC Public Relations"
            desc="Boutique corporate PR firm trusted by CEOs, directors, and executives"
            onClick={onClose}
          />
          <MegaItem
            href="/about/lyall-mercer"
            icon={<UserRound className="w-full h-full" />}
            title="Lyall Mercer"
            desc="Co-founder, former journalist and trusted crisis adviser"
            onClick={onClose}
          />
          <MegaItem
            href="/faq"
            icon={<HelpCircle className="w-full h-full" />}
            title="Frequently asked questions"
            desc="Straight answers about how CRC Public Relations works"
            onClick={onClose}
          />
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/about"
            src="/images/about/editorial-advisory-chairs.png"
            alt=""
            caption="It is a partnership."
            sub="You deal directly with an experienced adviser, not an account manager."
            onClick={onClose}
          />
        </div>

        <CTAColumn />
      </div>
    </PanelShell>
  );
}

function ContactPanel({ onClose }: { onClose: () => void }) {
  const { street, city, state, postcode } = siteConfig.address;
  return (
    <PanelShell label="Contact menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.2fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Reach us</ColumnHeader>
          <a
            href={siteConfig.phone.href}
            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/85 group-hover:text-brand-gold transition-colors">
                {siteConfig.phone.display}
              </p>
              <p className="text-xs text-white/35">24/7 confidential crisis line</p>
            </div>
          </a>
          <a
            href={`mailto:${siteConfig.email.general}`}
            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/85 group-hover:text-brand-gold transition-colors">
                {siteConfig.email.general}
              </p>
              <p className="text-xs text-white/35">We will respond promptly</p>
            </div>
          </a>
          <div className="flex items-start gap-3 px-3 py-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-brand-gold" />
            </div>
            <p className="text-xs text-white/45 leading-relaxed">
              {street}
              <br />
              {city} {state} {postcode}
            </p>
          </div>
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/contact"
            src="/images/clients/corporate/mid-office.webp"
            alt=""
            caption="Let's discuss your needs."
            sub="Every conversation begins with listening."
            onClick={onClose}
          />
        </div>

        <CTAColumn header="Next step" />
      </div>
    </PanelShell>
  );
}

function InsightsPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell label="Insights menu">
      <div className="mx-auto grid max-w-4xl grid-cols-[1.3fr_300px_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>Latest thinking</ColumnHeader>
          <MegaItem
            href="/insights/the-15-minutes-principle"
            icon={<Newspaper className="w-full h-full" />}
            title="The 15 minutes principle"
            desc="Why your first response defines everything"
            onClick={onClose}
          />
          <MegaItem
            href="/insights/what-your-board-needs-to-know-about-reputation-risk"
            icon={<Shield className="w-full h-full" />}
            title="What your board needs to know about reputation risk"
            desc="From Lyall Mercer and the CRC Public Relations team"
            onClick={onClose}
          />
          <div className="h-px bg-white/[0.06] my-2 mx-3" />
          <Link
            href="/insights"
            onClick={onClose}
            className="block px-3 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            &rarr; All insights
          </Link>
        </div>

        <div className="border-r border-white/[0.06]">
          <FeatureTile
            href="/insights"
            src="/images/insights/editorial-broadsheets.png"
            alt=""
            caption="Insights. Commentary. Crisis thinking."
            sub="From Lyall Mercer and the CRC Public Relations team."
            onClick={onClose}
          />
        </div>

        <CTAColumn />
      </div>
    </PanelShell>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div
      className="bg-[#0F1F36]/95 backdrop-blur-xl overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 56px)" }}
    >
      <div>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between px-4 py-4 border-b border-white/[0.06]"
        >
          <span className="text-sm font-medium text-white/75 tracking-wide">
            Services
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white/40 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
          />
        </button>
        {servicesOpen && (
          <div className="border-b border-white/[0.06]">
            {[
              {
                label: "Corporate communications",
                href: "/services/corporate-communications",
              },
              {
                label: "Media relations & strategy",
                href: "/services/media-strategy",
              },
              {
                label: "Reputation management",
                href: "/services/reputation-management",
              },
              {
                label: "Crisis communications",
                href: "/services/crisis-communications",
              },
              { label: "Issues management", href: "/services/issues-management" },
              { label: "Digital media", href: "/services/digital-media" },
              { label: "Media training", href: "/media-training" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between pl-7 pr-4 py-3 border-b border-white/[0.04] text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                {item.label}
                <span className="text-white/20 text-xs">&rsaquo;</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {[
        { label: "Crisis", href: "/services/crisis-communications" },
        { label: "Pacific", href: "/pacific" },
        { label: "Industry Associations", href: "/clients/industry-associations" },
        { label: "Case studies", href: "/case-studies" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Insights", href: "/insights" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="flex items-center justify-between px-4 py-4 border-b border-white/[0.06] text-sm font-medium text-white/65 hover:text-white transition-colors"
        >
          {item.label}
          <span className="text-white/20 text-xs">&rsaquo;</span>
        </Link>
      ))}

      <div className="px-4 py-5 border-t border-brand-gold/[0.15]">
        <a
          href={siteConfig.phone.href}
          className="block font-heading text-brand-gold text-xl mb-3"
        >
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          onClick={onClose}
          className="block w-full rounded-full bg-brand-gold py-3.5 text-center font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
        >
          Book a consultation &rarr;
        </Link>
      </div>
    </div>
  );
}

/* Primary items: every one is a real link (click navigates) that also opens
   a mega panel on hover/focus. */
const primaryItems: {
  key: Exclude<PanelKey, null>;
  label: string;
  href: string;
}[] = [
  { key: "services", label: "Services", href: "/services" },
  { key: "crisis", label: "Crisis", href: "/services/crisis-communications" },
  { key: "pacific", label: "Pacific", href: "/pacific" },
  {
    key: "sectors",
    label: "Industry Associations",
    href: "/clients/industry-associations",
  },
  { key: "cases", label: "Case studies", href: "/case-studies" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
  { key: "insights", label: "Insights", href: "/insights" },
];

const PANELS: Record<
  Exclude<PanelKey, null>,
  (props: { onClose: () => void }) => React.ReactNode
> = {
  services: ServicesPanel,
  crisis: CrisisPanel,
  pacific: PacificPanel,
  sectors: SectorsPanel,
  cases: CasesPanel,
  about: AboutPanel,
  contact: ContactPanel,
  insights: InsightsPanel,
};

export function Nav() {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<PanelKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setActivePanel(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePanel(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActivePanel(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = useCallback((panel: Exclude<PanelKey, null>) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    openTimerRef.current = setTimeout(() => setActivePanel(panel), 180);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActivePanel(null), 280);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  const closePanel = useCallback(() => setActivePanel(null), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItemBase =
    "relative text-sm font-sans font-semibold transition-colors duration-150 pb-1";
  const navItemActive = "text-white border-b-2 border-brand-gold";
  const navItemIdle = "text-white/70 hover:text-white";

  const ActivePanelComponent = activePanel ? PANELS[activePanel] : null;

  return (
    <div
      ref={navRef}
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-navy/85 shadow-lg shadow-navy/20" : "bg-navy/95"
      }`}
    >
      {/* Desktop nav */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="shrink-0 mr-10">
            <Image
              src="/images/crc-logo.png"
              alt="CRC Public Relations"
              width={555}
              height={140}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav
            className="flex items-center gap-5 flex-1"
            aria-label="Main navigation"
          >
            {primaryItems.map(({ key, label, href }) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={href}
                  onFocus={() => handleMouseEnter(key)}
                  className={`${navItemBase} ${
                    isActive(href) ? navItemActive : navItemIdle
                  } flex items-center gap-1 whitespace-nowrap`}
                  aria-expanded={activePanel === key}
                  aria-haspopup="true"
                >
                  {label}
                  {key === "services" && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-150 ${
                        activePanel === key ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {activePanel === key && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderBottom: "6px solid #0F1F36",
                    }}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={siteConfig.phone.href}
              className="font-heading text-brand-gold text-base hover:opacity-90 transition-opacity"
            >
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/crc-logo.png"
              alt="CRC Public Relations"
              width={555}
              height={140}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phone.href}
              className="w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-4 h-4 text-brand-gold" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-white/70" />
              ) : (
                <Menu className="w-5 h-5 text-white/70" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && <MobileDrawer onClose={() => setMobileOpen(false)} />}
      </div>

      {/* Desktop mega panels */}
      <div
        className={`hidden md:block absolute left-0 right-0 top-full bg-[#0F1F36] border-t border-brand-gold/[0.15] shadow-2xl shadow-navy/40 z-50 transition-opacity duration-150 ${
          ActivePanelComponent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={handleMouseLeave}
      >
        {ActivePanelComponent && <ActivePanelComponent onClose={closePanel} />}
      </div>
    </div>
  );
}
