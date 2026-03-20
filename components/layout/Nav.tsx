"use client";

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
  Video,
  Globe,
  Briefcase,
  Building,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type PanelKey = "services" | "clients" | null;

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
      className="flex items-start gap-3 px-3 py-2.5 rounded hover:bg-white/[0.04] transition-colors group"
    >
      <div
        className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
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
        <p className="text-xs text-white/30 leading-snug">{desc}</p>
      </div>
    </Link>
  );
}

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.14em] uppercase text-white/30 mb-3 font-medium">
      {children}
    </p>
  );
}

function CTAColumn() {
  return (
    <div
      className="flex flex-col py-5 px-5"
      style={{
        background: "rgba(201,168,76,0.06)",
        borderLeft: "0.5px solid rgba(201,168,76,0.12)",
      }}
    >
      <ColumnHeader>GET IN TOUCH</ColumnHeader>
      <p className="text-sm font-heading font-black text-white mb-2">
        Talk to a senior advisor
      </p>
      <p className="text-xs text-white/40 leading-relaxed">
        Every conversation with CRC PR is confidential. No pitch. No junior
        staff.
      </p>
      <div className="flex-1" />
      <a
        href={siteConfig.phone.href}
        className="block font-heading font-black text-brand-gold text-lg mb-2"
      >
        {siteConfig.phone.display}
      </a>
      <Link
        href="/contact"
        className="block w-full bg-brand-gold text-navy font-bold text-xs tracking-widest uppercase text-center py-2.5 rounded-[3px] hover:bg-gold-light transition-colors"
      >
        BOOK A CONSULTATION &rarr;
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

function ServicesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-label="Services menu"
      className="max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>CORE SERVICES</ColumnHeader>
          <MegaItem
            href="/services/corporate-communications"
            icon={<Users className="w-full h-full" />}
            title="Corporate Communications"
            desc="Stakeholder engagement and executive messaging"
            onClick={onClose}
          />
          <MegaItem
            href="/services/reputation-management"
            icon={<Shield className="w-full h-full" />}
            title="Reputation Management"
            desc="Vulnerability assessments and long-term protection"
            onClick={onClose}
          />
          <MegaItem
            href="/services/issues-management"
            icon={<AlertTriangle className="w-full h-full" />}
            title="Issues Management"
            desc="Get ahead before issues become crises"
            onClick={onClose}
          />
        </div>

        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>SPECIALIST SERVICES</ColumnHeader>
          <MegaItem
            href="/services/crisis-communications"
            icon={<Zap className="w-full h-full" />}
            title="Crisis Communications"
            desc="24/7 response, call 1300 182 186"
            onClick={onClose}
          />
          <MegaItem
            href="/services/media-strategy"
            icon={<Radio className="w-full h-full" />}
            title="Media Strategy"
            desc="Proactive media presence and relationships"
            onClick={onClose}
          />
          <MegaItem
            href="/services/digital-media"
            icon={<Monitor className="w-full h-full" />}
            title="Digital Media"
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

        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>ALSO FROM CRC PR</ColumnHeader>
          <MegaItem
            href="/media-training"
            icon={<Video className="w-full h-full" />}
            title="Media Training"
            desc="Spokesperson and on-camera coaching"
            iconTeal
            onClick={onClose}
          />
          <MegaItem
            href="/pacific"
            icon={<Globe className="w-full h-full" />}
            title="Pacific Advisory"
            desc="The only Australian firm with Pacific expertise"
            iconTeal
            onClick={onClose}
          />
          <div className="h-px bg-white/[0.06] my-2 mx-3" />
          <ColumnHeader>FREE RESOURCES</ColumnHeader>
          <Link
            href="/services/reputation-management#reputation-assessment"
            onClick={onClose}
            className="block px-3 py-1 text-xs text-white/55 hover:text-white/80 transition-colors"
          >
            &rarr; Reputation Assessment
          </Link>
          <Link
            href="/crisis"
            onClick={onClose}
            className="block px-3 py-1 text-xs text-white/55 hover:text-white/80 transition-colors"
          >
            &rarr; Crisis Plan Template
          </Link>
        </div>

        <CTAColumn />
      </div>
    </div>
  );
}

function ClientsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-label="Clients menu"
      className="max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-[1fr_1fr_220px]">
        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>BY SECTOR</ColumnHeader>
          <MegaItem
            href="/clients/corporate"
            icon={<Briefcase className="w-full h-full" />}
            title="Corporate & ASX-listed"
            desc="C-suite and board-level counsel"
            onClick={onClose}
          />
          <MegaItem
            href="/clients/government"
            icon={<Building className="w-full h-full" />}
            title="Government & Public Sector"
            desc="Departments, authorities, public agencies"
            onClick={onClose}
          />
          <MegaItem
            href="/clients/industry-associations"
            icon={<Users className="w-full h-full" />}
            title="Industry Associations"
            desc="Peak bodies, member organisations"
            onClick={onClose}
          />
          <MegaItem
            href="/clients/schools-faith"
            icon={<GraduationCap className="w-full h-full" />}
            title="Schools & Faith-Based"
            desc="Independent schools, Catholic networks"
            onClick={onClose}
          />
        </div>

        <div className="py-5 px-4 border-r border-white/[0.06]">
          <ColumnHeader>CLIENT OUTCOMES</ColumnHeader>
          <div className="bg-white/[0.02] rounded p-3 mb-2">
            <p className="text-xs text-brand-gold tracking-wide uppercase font-medium">
              INDUSTRY ASSOCIATION
            </p>
            <p className="text-sm font-heading font-black text-white mt-1">
              Legislation amended.
            </p>
            <p className="text-xs text-white/30 leading-relaxed mt-1">
              National peak body campaign, regulatory provisions removed before
              the bill passed.
            </p>
          </div>
          <div className="bg-white/[0.02] rounded p-3 mb-3">
            <p className="text-xs text-brand-gold tracking-wide uppercase font-medium">
              INDEPENDENT SCHOOL
            </p>
            <p className="text-sm font-heading font-black text-white mt-1">
              Zero enrolment loss.
            </p>
            <p className="text-xs text-white/30 leading-relaxed mt-1">
              Crisis managed from disclosure to recovery, parent confidence
              improved six months on.
            </p>
          </div>
          <Link
            href="/case-studies"
            onClick={onClose}
            className="block px-1 text-xs text-white/40 hover:text-white/70 transition-colors mb-1"
          >
            &rarr; View all case outcomes
          </Link>
          <Link
            href="/clients"
            onClick={onClose}
            className="block px-1 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            &rarr; View all sectors
          </Link>
        </div>

        <CTAColumn />
      </div>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);

  return (
    <div
      className="bg-[#0F1F36] overflow-y-auto"
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
                label: "Corporate Communications",
                href: "/services/corporate-communications",
              },
              {
                label: "Reputation Management",
                href: "/services/reputation-management",
              },
              {
                label: "Issues Management",
                href: "/services/issues-management",
              },
              {
                label: "Crisis Communications",
                href: "/services/crisis-communications",
              },
              { label: "Media Strategy", href: "/services/media-strategy" },
              { label: "Digital Media", href: "/services/digital-media" },
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

      <div>
        <button
          onClick={() => setClientsOpen(!clientsOpen)}
          className="w-full flex items-center justify-between px-4 py-4 border-b border-white/[0.06]"
        >
          <span className="text-sm font-medium text-white/75 tracking-wide">
            Clients
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white/40 transition-transform duration-200 ${clientsOpen ? "rotate-180" : ""}`}
          />
        </button>
        {clientsOpen && (
          <div className="border-b border-white/[0.06]">
            {[
              {
                label: "Corporate & ASX-listed",
                href: "/clients/corporate",
              },
              {
                label: "Government & Public Sector",
                href: "/clients/government",
              },
              {
                label: "Industry Associations",
                href: "/clients/industry-associations",
              },
              {
                label: "Schools & Faith-Based",
                href: "/clients/schools-faith",
              },
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
        { label: "Crisis", href: "/crisis" },
        { label: "Pacific", href: "/pacific" },
        { label: "Media Training", href: "/media-training" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "About", href: "/about" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
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
          className="block font-heading font-black text-brand-gold text-xl mb-3"
        >
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          onClick={onClose}
          className="block w-full bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase text-center py-3 rounded"
        >
          BOOK A CONSULTATION &rarr;
        </Link>
      </div>
    </div>
  );
}

const directLinks = [
  { label: "Crisis", href: "/crisis" },
  { label: "Pacific", href: "/pacific" },
  { label: "Media Training", href: "/media-training" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

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

  const handleMouseEnter = useCallback((panel: "services" | "clients") => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openTimerRef.current = setTimeout(() => setActivePanel(panel), 200);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActivePanel(null), 300);
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
    "relative text-sm font-sans transition-colors duration-150 pb-1";
  const navItemActive = "text-white border-b-2 border-brand-gold";
  const navItemIdle = "text-white/70 hover:text-white";

  return (
    <div
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl shadow-lg shadow-navy/20"
          : "bg-navy"
      }`}
    >
      {/* Desktop nav */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="shrink-0 mr-10">
            <span className="flex flex-col leading-none">
              <span className="font-heading text-brand-gold font-black text-xl lg:text-2xl">
                CRC
              </span>
              <span className="font-sans font-medium text-white text-[10px] tracking-[0.2em] uppercase mt-0.5">
                PUBLIC RELATIONS
              </span>
            </span>
          </Link>

          <nav
            className="flex items-center gap-7 flex-1"
            aria-label="Main navigation"
          >
            {/* Services mega panel trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`${navItemBase} ${isActive("/services") ? navItemActive : navItemIdle} flex items-center gap-1`}
                aria-expanded={activePanel === "services"}
                aria-haspopup="true"
                onClick={() =>
                  setActivePanel((p) => (p === "services" ? null : "services"))
                }
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-150 ${activePanel === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {activePanel === "services" && (
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

            {/* Clients mega panel trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("clients")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`${navItemBase} ${isActive("/clients") ? navItemActive : navItemIdle} flex items-center gap-1`}
                aria-expanded={activePanel === "clients"}
                aria-haspopup="true"
                onClick={() =>
                  setActivePanel((p) => (p === "clients" ? null : "clients"))
                }
              >
                Clients
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-150 ${activePanel === "clients" ? "rotate-180" : ""}`}
                />
              </button>
              {activePanel === "clients" && (
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

            {/* Direct links */}
            {directLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`${navItemBase} ${isActive(href) ? navItemActive : navItemIdle}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={siteConfig.phone.href}
              className="font-heading font-black text-brand-gold text-sm hover:opacity-90 transition-opacity"
            >
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-gold text-navy font-heading font-black text-xs uppercase tracking-widest rounded-[4px] px-5 py-2.5 hover:bg-gold-light transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/"
            className="font-heading font-black text-sm"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-brand-gold">CRC</span>
            <span className="text-white"> PUBLIC RELATIONS</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phone.href}
              className="w-9 h-9 bg-brand-gold/10 rounded flex items-center justify-center"
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

        {mobileOpen && (
          <MobileDrawer onClose={() => setMobileOpen(false)} />
        )}
      </div>

      {/* Desktop mega panels */}
      <div
        className={`hidden md:block absolute left-0 right-0 top-full bg-[#0F1F36] border-t border-brand-gold/[0.15] z-50 transition-opacity duration-150 ${
          activePanel === "services"
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={handleMouseLeave}
      >
        <ServicesPanel onClose={closePanel} />
      </div>

      <div
        className={`hidden md:block absolute left-0 right-0 top-full bg-[#0F1F36] border-t border-brand-gold/[0.15] z-50 transition-opacity duration-150 ${
          activePanel === "clients"
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={handleMouseLeave}
      >
        <ClientsPanel onClose={closePanel} />
      </div>
    </div>
  );
}
