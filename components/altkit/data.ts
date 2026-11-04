/**
 * Shared content and asset map for the concept sites. All copy here is the
 * approved wording from docs/alt-redesign/BRIEF.md or the live site pages.
 *
 * Photo rule (Lyall, 1 and 4 Nov 2026): far fewer photos, and far fewer of
 * Lyall and Barbara. Each home page shows them once in the hero and once as
 * small portraits; inner pages lean on office shots or no photo at all. No
 * AI video anywhere.
 */

import type { LeadMagnetKey } from "@/types";
import { routesFor } from "./concepts";

/** Resources whose PDF already sits in /public/downloads. */
export const DOWNLOADABLE: LeadMagnetKey[] = [
  "crisisReadinessChecklist",
  "corpCommsChecklist",
  "publicVoiceSteps",
];

const P = "/images/crc-2026/photos";

/** Real photography from the CRC Public Relations 2026 shoot (front-on frames only). */
export const PHOTOS = {
  lyallNavyClose: `${P}/lyall-navy-close.jpg`,
  barbaraBrownClose: `${P}/barbara-brown-close.jpg`,
  foundersStudio: `${P}/founders-studio-crop.jpg`,
  foundersStudio2: `${P}/founders-studio-2.jpg`,
  foundersOffice: `${P}/founders-office.jpg`,
  lyallPhoneLaptop: `${P}/lyall-phone-laptop.jpg`,
  officeBoardroom: `${P}/office-boardroom.jpg`,
  officeLounge: `${P}/office-lounge.jpg`,
  officeBooth: `${P}/office-booth.jpg`,
  officePlant: `${P}/office-plant.jpg`,
} as const;

export const FOUNDERS_ALT = "Lyall Mercer and Barbara Gorogh of CRC Public Relations";

export type NavItem = { label: string; href: string };

export function practices(base: string) {
  return [
    {
      title: "Corporate Communications",
      href: "/services/corporate-communications",
      blurb:
        "Strategic internal and external messaging, stakeholder communications, and media relations.",
      icon: "Building2",
    },
    {
      title: "Reputation Management",
      href: "/services/reputation-management",
      blurb:
        "Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny.",
      icon: "ShieldCheck",
    },
    {
      title: "Crisis Communications",
      href: routesFor(base).crisis,
      blurb:
        "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
      icon: "Siren",
    },
  ] as const;
}

export const SPECIALIST = [
  {
    title: "Media relations & strategy",
    blurb: "Proactive presence and trusted relationships",
    href: "/services/media-strategy",
  },
  {
    title: "Issues management",
    blurb: "Get ahead before issues become crises",
    href: "/services/issues-management",
  },
  {
    title: "Digital media",
    blurb: "Online reputation and social strategy",
    href: "/services/digital-media",
  },
] as const;

export function navLinks(base: string): NavItem[] {
  return [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: routesFor(base).insights },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];
}

export const PILLARS = [
  {
    title: "Experienced counsel, every time",
    body: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    title: "We know how media thinks",
    body: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
  },
  {
    title: "There when it matters",
    body: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
] as const;

export const BOUTIQUE_QUOTE =
  "As a boutique PR firm, you deal directly with experienced advisers who take a genuine, long-term interest in your organisation. It is a partnership, and it makes a huge difference to outcomes.";

export const STATS = [
  { value: "15+", label: "years advising leaders" },
  { value: "100%", label: "client retention" },
  { value: "500+", label: "professionals trained" },
  { value: "221", label: "placements in one month" },
] as const;

export const SECTORS = [
  { label: "Companies & family businesses" },
  { label: "Local & state government" },
  { label: "Industry & professional associations", href: "/clients/industry-associations" },
  { label: "Independent & faith-based schools" },
  { label: "Legal & professional services" },
  { label: "Child care, aged care & health" },
  { label: "Pacific islands", href: "/pacific" },
  { label: "Faith-based organisations" },
  { label: "Hospitality" },
  { label: "High profile individuals" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    who: "CEO, national industry association with 14,000 members",
  },
  {
    quote:
      "CRC Public Relations developed a crisis communications plan for our schools and has assisted many of our member schools across Australia to communicate effectively when issues have arisen.",
    who: "Executive Officer, Christian schools sector",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    who: "Director, hospitality sector",
  },
] as const;

export const SURVEY_LINE = "100% of our consulting clients would recommend CRC Public Relations to a peer.";

export const FOUNDERS = {
  lyall: {
    name: "Lyall Mercer",
    role: "Co-founder & principal adviser",
    photo: PHOTOS.lyallNavyClose,
    bio: [
      "Lyall began his career as a journalist, writing for some of Australia's leading newspapers and magazines. That foundation, understanding exactly how media thinks, moves and decides what becomes a story, led him into a 25 year public relations career spanning every continent.",
      "When you choose CRC Public Relations, you will deal with various members of our team, but Lyall will always be available for you. This level of expertise is why our clients choose us.",
    ],
  },
  barbara: {
    name: "Barbara Gorogh",
    // Lyall, 20 Oct 2026: Barbara's role is Director of Operations.
    role: "Director of Operations",
    photo: PHOTOS.barbaraBrownClose,
    bio: [
      "Barbara has worked across Australia and the Pacific region for more than a decade, dealing with companies, organisations and governments in the area of corporate communications and reputation management.",
      "Barbara's work in the media monitoring space ensures our clients are ahead of the stories that matter.",
    ],
  },
} as const;

export const HERO = {
  eyebrow: "Boutique corporate PR · Australia · New Zealand · Pacific",
  lead: "Whatever your communications objectives, you need experienced counsel you can trust.",
  second: "We are your trusted adviser and advocate, and we believe in you.",
  direct: "You deal directly with an experienced adviser, not an account manager.",
} as const;

export const CTA_COPY = {
  eyebrow: "Ready to work with us",
  title: "Trust is your most valuable asset. Let us help you build it.",
  body: "Whether you need experienced advice on a complex issue, help building your public profile, a communications strategy, or trusted counsel during a crisis, we are your adviser and advocate. We believe in you, and we have your back.",
} as const;

export const ASSESSMENT = {
  title: "How exposed is your organisation's reputation?",
  body: "Used by CEOs, communications directors and board chairs across Australia. 20 questions across 5 risk areas.",
  note: "Three minutes. No commitment. Results delivered by email.",
} as const;
