export const siteConfig = {
  phone: {
    display: "1300 182 186",
    href: "tel:1300182186",
  },
  address: {
    street: "320 Adelaide Street",
    city: "Brisbane",
    state: "QLD",
    postcode: "4000",
    country: "Australia",
  },
  email: {
    general: "info@crcpr.com.au",
    media: "media@crcpr.com.au",
    newBusiness: "hello@crcpr.com.au", // TODO: CLIENT TO PROVIDE — confirm correct address
  },

  crcPrUrl: "https://crcpr.com.au",
  lyallMercerUrl: "https://lyallmercer.com",
  myPrPartnerUrl: "https://myprpartner.com",
  crisisCommsAuUrl: "https://crisiscommunicationsaustralia.vercel.app",
  linkedInUrl: "https://www.linkedin.com/company/crc-public-relation/",
  lyallLinkedIn: "https://www.linkedin.com/in/lyallmercer/",
  lyallTwitter: "https://twitter.com/Lyall_Mercer",

  abn: "", // TODO: CLIENT TO PROVIDE
  copyrightYear: "2026",
  privacyPolicyUrl: "/privacy-policy",
  termsUrl: "/terms",

  ga4MeasurementId: "G-XXXXXXXXXX", // TODO: CLIENT TO PROVIDE
  wildjarScript: "", // TODO: CLIENT TO PROVIDE — Wildjar dynamic number insertion script

  formEndpoint: "https://formspree.io/f/XXXXXXXX", // TODO: configure before go-live

  lyall: {
    fullName: "Lyall Mercer",
    title: "Founder & Principal Advisor",
    yearsExperience: "25+",
    origin:
      "Former journalist and Australasia's leading crisis communications advisor.",
    quote:
      "You have 15 minutes to respond to an emerging crisis before you start to lose control of the message.",
    mediaOutlets: [
      "ABC News",
      "The Australian",
      "Sky News",
      "AFR",
      "ABC Radio",
    ],
    mediaLinks: [
      // TODO: replace each with specific article URL when confirmed
      { name: "ABC News", href: "https://lyallmercer.com" },
      { name: "The Australian", href: "https://lyallmercer.com" },
      { name: "Sky News", href: "https://lyallmercer.com" },
      { name: "AFR", href: "https://lyallmercer.com" },
      { name: "ABC Radio", href: "https://lyallmercer.com" },
    ],
  },

  stats: {
    yearsTrading: "25+",
    continents: "Every continent",
    clientRetention: "100%",
    professionsTrained: "500+",
  },

  sectors: [
    "ASX-listed companies",
    "Federal and State Government departments",
    "Industry associations",
    "Independent schools",
    "Faith-based organisations",
    "Legal and professional services firms",
    "Health and aged care organisations",
    "Pacific governments and NGOs",
  ],

  leadMagnets: {
    reputationAssessment: {
      title: "Reputation Vulnerability Assessment",
      description:
        "20 questions across 5 risk areas. Instantly identifies where your organisation is exposed.",
      fileName: "crcpr-reputation-vulnerability-assessment.pdf",
    },
    crisisPlanTemplate: {
      title: "Crisis Communications Plan Template",
      description:
        "A working template covering crisis team roles, stakeholder map, message hierarchy, and media response protocol.",
      fileName: "crcpr-crisis-communications-plan-template.pdf",
    },
    mediaInterviewGuide: {
      title: "Media Interview Preparation Guide",
      description:
        "Pre-interview checklist and briefing framework for executives and spokespeople.",
      fileName: "crcpr-media-interview-guide.pdf",
    },
    associationCrisisGuide: {
      title: "Industry Association Crisis Guide",
      description:
        "For association CEOs and executive officers facing regulatory crisis, member controversy, or board governance pressure.",
      fileName: "crcpr-association-crisis-guide.pdf",
    },
    schoolsPlaybook: {
      title: "School Crisis Communications Playbook",
      description:
        "Covers parent communications, media management, board governance, and social media incidents for school leaders.",
      fileName: "crcpr-schools-crisis-playbook.pdf",
    },
    pacificGuide: {
      title: "Pacific Stakeholder Engagement Guide",
      description:
        "Practical guide to cross-cultural communications and stakeholder engagement across Pacific Island nations.",
      fileName: "crcpr-pacific-stakeholder-guide.pdf",
    },
  },

  capabilityStatement: {
    title: "CRC PR Capability Statement",
    fileName: "crcpr-capability-statement.pdf",
    // TODO: CLIENT TO PROVIDE PDF before go-live
  },
} as const;
