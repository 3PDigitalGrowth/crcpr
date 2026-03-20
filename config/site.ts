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
    newBusiness: "hello@crcpr.com.au", // TODO: CLIENT TO PROVIDE, confirm correct address
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
  wildjarScript: "", // TODO: CLIENT TO PROVIDE, Wildjar dynamic number insertion script

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
      title:
        "Does your organisation have a crisis plan that has actually been tested?",
      description:
        "Most organisations have a crisis plan they approved and filed. Very few have exercised it under simulated pressure with their actual team. Download the CRC PR Crisis Communications Plan Template, the same framework we use with clients across Australia to build plans that work when everything else is under pressure.",
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
    available: false, // TODO: set to true and add fileName when PDF provided
    fileName: "crcpr-capability-statement.pdf",
    requestUrl: "/contact?source=capability-statement",
  },

  caseStudies: [
    {
      id: "legislation-amended",
      sector: "Industry Association",
      context:
        "A national peak body faced a Federal Government proposal that would have fundamentally altered the operating environment for its 800+ member organisations.",
      challenge:
        "The association needed to mount a coordinated public affairs campaign while managing fractured member sentiment, competing media narratives, and a tight legislative timeline.",
      approach:
        "CRC PR developed a stakeholder communications strategy, prepared the executive officer for media and parliamentary engagement, coordinated a coalition of member voices, and managed proactive media placement across the campaign period.",
      outcome: "Legislation amended.",
      outcomeSub:
        "Key provisions unfavourable to members were removed before the bill passed. Media coverage shifted from hostile to measured within six weeks.",
      icon: "Building2",
    },
    {
      id: "zero-enrolment-loss",
      sector: "Independent School",
      context:
        "A prominent independent school faced a serious safeguarding incident that became public before the school had the opportunity to communicate proactively with its community.",
      challenge:
        "Parent confidence was at risk. Media interest was intense. Legal obligations constrained what could be said. The board and principal needed to communicate with compassion, clarity, and legal precision, all simultaneously.",
      approach:
        "CRC PR provided immediate crisis counsel, drafted a coordinated parent communications plan, prepared the principal for media enquiries, and worked alongside legal counsel to ensure all messaging was defensible and empathetic.",
      outcome: "Zero enrolment loss.",
      outcomeSub:
        "No students withdrew following the incident. Parent trust surveys conducted six months later showed confidence in leadership had increased.",
      icon: "GraduationCap",
    },
    {
      id: "funding-secured",
      sector: "Pacific Government",
      context:
        "A Pacific Island government was seeking a significant development funding commitment from an international partner agency, competing against multiple other regional priorities.",
      challenge:
        "The government needed to communicate the case for funding with clarity and cultural authority, in a multilateral environment with competing voices and limited media access.",
      approach:
        "CRC PR developed the communications strategy, prepared government representatives for stakeholder presentations, managed the narrative across regional media, and coordinated engagement with the partner agency's communications team.",
      outcome: "Funding secured.",
      outcomeSub:
        "Full funding commitment received. The communications approach was subsequently adopted as a model for future engagement with international development partners.",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "What makes CRC PR different from a larger PR agency?",
      answer:
        "At CRC PR, every client engagement is led directly by a senior advisor, not delegated to account managers or junior staff. You work with people who have decades of experience and take a genuine, long-term interest in your organisation. We are boutique by design, which means you get direct access to the people who actually do the work.",
    },
    {
      question: "How quickly can CRC PR respond to a crisis?",
      answer:
        "We are available 24/7. For active crisis situations, our target is to have a senior advisor engaged within the hour of first contact during business hours, or at the start of the next business day for after-hours enquiries. Call 1300 182 186 for immediate crisis support.",
    },
    {
      question: "Do you work with organisations outside Brisbane?",
      answer:
        "Yes. CRC PR works with clients across Australia, including Sydney, Melbourne, Canberra, and regional areas, as well as across the Pacific and internationally. We work by phone, video, and in person depending on the situation. Geography is not a barrier.",
    },
    {
      question: "What industries does CRC PR specialise in?",
      answer:
        "We have deep experience across corporate and ASX-listed companies, Federal and State government departments, industry associations and peak bodies, independent and faith-based schools, health and aged care organisations, legal and professional services firms, and Pacific governments and NGOs.",
    },
    {
      question: "Is everything I share with CRC PR confidential?",
      answer:
        "Absolutely. Everything shared with CRC PR is treated with absolute confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with the same professional discretion as legal counsel.",
    },
    {
      question:
        "What is a crisis communications plan and does my organisation need one?",
      answer:
        "A crisis communications plan is a documented framework that prepares your organisation to respond effectively when a serious issue or crisis occurs. It covers who is responsible for what, how decisions get made under pressure, how you communicate with different stakeholder groups, and how you engage with media. If your organisation has not tested a crisis plan in the last 12 months, you need one.",
    },
    {
      question: "How does CRC PR charge for its services?",
      answer:
        "CRC PR works with clients on retainer arrangements, project-based engagements, and where appropriate, crisis response agreements. Every engagement starts with a conversation about your situation and what you need. We do not operate with fixed packages. Contact us to discuss what is right for your organisation.",
    },
  ],
} as const;
