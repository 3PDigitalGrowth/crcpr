/**
 * Shared content and asset map for the Alt 1 build. All copy here is the
 * approved wording from docs/alt-redesign/BRIEF.md or the live site pages.
 */

import type { LeadMagnetKey } from "@/types";

/** Resources whose PDF already sits in /public/downloads. */
export const DOWNLOADABLE: LeadMagnetKey[] = [
  "crisisReadinessChecklist",
  "corpCommsChecklist",
  "publicVoiceSteps",
];

export const A1_ROUTES = {
  home: "/alt1",
  insights: "/alt1/insights",
  crisis: "/alt1/services/crisis-communications",
} as const;

const P = "/images/alt1/photos";
const V = "/images/alt1/video";

/** Real photography from the CRC Public Relations 2026 shoot (front-on frames only). */
export const PHOTOS = {
  lyallNavy: `${P}/lyall-navy.jpg`,
  lyallNavyClose: `${P}/lyall-navy-close.jpg`,
  lyallGreySeated: `${P}/lyall-grey-seated.jpg`,
  lyallBlazer: `${P}/lyall-blazer.jpg`,
  lyallGreyStanding: `${P}/lyall-grey-standing.jpg`,
  barbaraBrown: `${P}/barbara-brown.jpg`,
  barbaraBrownClose: `${P}/barbara-brown-close.jpg`,
  barbaraRedClose: `${P}/barbara-red-close.jpg`,
  barbaraSeated: `${P}/barbara-seated.jpg`,
  foundersStudio: `${P}/founders-studio.jpg`,
  foundersStudio2: `${P}/founders-studio-2.jpg`,
  foundersOffice: `${P}/founders-office.jpg`,
  foundersMeetingRoom: `${P}/founders-meeting-room.jpg`,
  lyallAdvising: `${P}/lyall-advising.jpg`,
  lyallAdvising2: `${P}/lyall-advising-2.jpg`,
  barbaraMeeting: `${P}/barbara-meeting.jpg`,
  boardroomMeeting: `${P}/boardroom-meeting.jpg`,
  lyallPhone: `${P}/lyall-phone.jpg`,
  lyallPhoneLaptop: `${P}/lyall-phone-laptop.jpg`,
  lyallPhonePortrait: `${P}/lyall-phone-portrait.jpg`,
  lyallLaptop: `${P}/lyall-laptop.jpg`,
  officeBoardroom: `${P}/office-boardroom.jpg`,
  officeLounge: `${P}/office-lounge.jpg`,
  officeLounge2: `${P}/office-lounge-2.jpg`,
  officeBooth: `${P}/office-booth.jpg`,
  officePlant: `${P}/office-plant.jpg`,
} as const;

/** Ambient loops generated from the real photos (start frame = the photo). */
export const VIDEOS = {
  pair: { src: `${V}/pair.mp4`, poster: `${V}/pair-poster.jpg`, still: PHOTOS.foundersOffice },
  meeting: { src: `${V}/meeting.mp4`, poster: `${V}/meeting-poster.jpg`, still: PHOTOS.barbaraMeeting },
  phone: { src: `${V}/phone.mp4`, poster: `${V}/phone-poster.jpg`, still: PHOTOS.lyallPhone },
  office: { src: `${V}/office.mp4`, poster: `${V}/office-poster.jpg`, still: PHOTOS.officeLounge },
} as const;

export type VideoKey = keyof typeof VIDEOS;

export type NavItem = { label: string; href: string };

export const PRACTICES = [
  {
    title: "Corporate Communications",
    href: "/services/corporate-communications",
    blurb:
      "Strategic internal and external messaging, stakeholder communications, and media relations.",
    image: PHOTOS.barbaraMeeting,
    imageAlt: "Barbara Gorogh in a client meeting at the CRC Public Relations office",
  },
  {
    title: "Reputation Management",
    href: "/services/reputation-management",
    blurb:
      "Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny.",
    image: PHOTOS.lyallAdvising2,
    imageAlt: "Lyall Mercer advising a client across the boardroom table",
  },
  {
    title: "Crisis Communications",
    href: A1_ROUTES.crisis,
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    image: PHOTOS.lyallPhoneLaptop,
    imageAlt: "Lyall Mercer taking a call at his laptop",
  },
] as const;

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

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: A1_ROUTES.insights },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

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

export const FOUNDERS = {
  lyall: {
    name: "Lyall Mercer",
    role: "Co-founder & principal adviser",
    photo: PHOTOS.lyallNavy,
    bio: [
      "Lyall began his career as a journalist, writing for some of Australia's leading newspapers and magazines. That foundation, understanding exactly how media thinks, moves and decides what becomes a story, led him into a 25 year public relations career spanning every continent.",
      "When you choose CRC Public Relations, you will deal with various members of our team, but Lyall will always be available for you. This level of expertise is why our clients choose us.",
    ],
  },
  barbara: {
    name: "Barbara Gorogh",
    role: "Co-founder and director",
    photo: PHOTOS.barbaraBrown,
    bio: [
      "Barbara has worked across Australia and the Pacific region for more than a decade, dealing with companies, organisations and governments in the area of corporate communications and reputation management.",
      "Barbara's work in the media monitoring space ensures our clients are ahead of the stories that matter.",
    ],
  },
} as const;
