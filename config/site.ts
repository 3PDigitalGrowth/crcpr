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
    title: "Co-founder & Principal Adviser",
    yearsExperience: "25+",
    origin:
      "Former journalist and Australasia's leading crisis communications adviser.",
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
      // TODO: replace each href with specific article URL when confirmed
      {
        name: "ABC News",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/abc-news.png",
      },
      {
        name: "The Australian",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/the-australian.png",
      },
      {
        name: "Sky News",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/sky-news.png",
      },
      {
        name: "AFR",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/afr.png",
      },
      {
        name: "ABC Radio",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/abc-radio.png",
      },
    ],
  },

  stats: {
    yearsTrading: "25+",
    continents: "Every continent",
    clientRetention: "100%",
    professionsTrained: "500+",
  },

  sectors: [
    "Companies and family businesses",
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
        "Most organisations have a crisis plan they approved and filed. Very few have exercised it under simulated pressure with their actual team. Download the CRC Public Relations Crisis Communications Plan Template, the same framework we use with clients across Australia to build plans that work when everything else is under pressure.",
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
        "Practical guide to cross-cultural communications and stakeholder engagement across Pacific island nations.",
      fileName: "crcpr-pacific-stakeholder-guide.pdf",
    },
  },

  capabilityStatement: {
    title: "CRC Public Relations Capability Statement",
    available: false, // TODO: set to true and add fileName when PDF provided
    fileName: "crcpr-capability-statement.pdf",
    requestUrl: "/contact?source=capability-statement",
  },

  caseStudies: [
    {
      id: "legislation-amended",
      sector: "National industry association",
      context:
        "A national peak body faced a government proposal that would have fundamentally and detrimentally altered the operating environment for more than 20,000 businesses.",
      challenge:
        "The association needed to mount a coordinated public affairs campaign while managing fractured member sentiment, competing media narratives, and a tight legislative timeline.",
      approach:
        "CRC Public Relations developed a national media and stakeholder communications strategy that supported the organisation's parliamentary engagement, and managed proactive media engagement across the campaign period.",
      outcome: "Legislation scrapped.",
      outcomeSub:
        "Recommendations unfavourable to the industry that were initially supported by government were dropped. Media coverage shifted from hostile to measured within five days.",
      icon: "Building2",
    },
    {
      id: "zero-enrolment-loss",
      sector: "Independent school",
      context:
        "A prominent independent school faced a serious safeguarding incident that became public before the school had the opportunity to communicate proactively with its community.",
      challenge:
        "Parent confidence was at risk. Media interest was intense. Legal obligations constrained what could be said. The board and principal needed to communicate with compassion, clarity, and legal precision, all simultaneously.",
      approach:
        "CRC Public Relations provided immediate crisis counsel, drafted a coordinated parent communications plan, prepared the principal for media enquiries, and worked alongside legal counsel to ensure all messaging was defensible and empathetic.",
      outcome: "Zero enrolment loss.",
      outcomeSub:
        "No students withdrew following the incident. Parent trust surveys conducted six months later showed confidence in leadership had increased.",
      icon: "GraduationCap",
    },
    {
      id: "funding-secured",
      sector: "Government",
      context:
        "A national government was seeking a significant development funding commitment from an international partner agency, competing against multiple other regional priorities.",
      challenge:
        "The government needed to communicate the case for funding with clarity and cultural authority, in a multilateral environment with competing voices, limited media access, and an antagonistic media narrative.",
      approach:
        "CRC Public Relations developed the communications strategy, created impacting messaging that cut across the false narrative, and managed the international media engagement.",
      outcome: "Funding secured.",
      outcomeSub:
        "Full funding commitment received. The communications approach was subsequently adopted as a model for future engagement with international development partners.",
      icon: "Landmark",
    },
  ],

  faqs: [
    {
      question:
        "What makes CRC Public Relations different from a larger PR agency?",
      answer:
        "At CRC Public Relations, every client engagement is led directly by a senior adviser, not delegated to account managers or junior staff. You work with people who have decades of experience and take a genuine, long-term interest in your organisation. We are boutique by design, which means you get direct access to the people who actually do the work. That personal, senior approach is the reason clients choose us, including national and international clients.",
    },
    {
      question: "How quickly can CRC Public Relations respond to a crisis?",
      answer:
        "We are available 24/7. For active crisis situations, our target is to have a senior adviser engaged within the hour of first contact during business hours, or at the start of the next business day for after-hours enquiries. Call 1300 182 186 for immediate crisis support.",
    },
    {
      question: "In what geographical areas do you operate?",
      answer:
        "CRC Public Relations works with clients in every Australian state, New Zealand and across the Pacific Islands. Geography is not a barrier.",
    },
    {
      question: "What industries does CRC Public Relations specialise in?",
      answer:
        "We have deep experience across companies and family businesses, Federal and State government departments, industry associations and peak bodies, independent and faith-based schools, health and aged care organisations, legal and professional services firms, and Pacific governments and NGOs.",
    },
    {
      question: "Is everything I share with CRC Public Relations confidential?",
      answer:
        "Absolutely. Everything shared with CRC Public Relations is treated with strict confidentiality. Our advisers operate with exceptional and professional discretion.",
    },
    {
      question:
        "What is a crisis communications plan and does my organisation need one?",
      answer:
        "A crisis communications plan is a documented framework that prepares your organisation to respond effectively when a serious issue or crisis occurs. It covers who is responsible for what, how decisions get made under pressure, how you communicate with different stakeholder groups, and how you engage with media. If your organisation has not tested a crisis plan in the last 12 months, you need one.",
    },
    {
      question: "How does CRC Public Relations charge for its services?",
      answer:
        "CRC Public Relations works with clients on retainer arrangements or on an hourly rate basis. Every engagement starts with a conversation about your situation and individual needs. We do not operate with fixed packages. Contact us to discuss what is right for your organisation.",
    },
  ],
} as const;
