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
      "ABC",
      "The Australian",
      "The Daily Telegraph",
      "AFR",
      "Sky News",
      "Associated Press",
      "Australian Associated Press",
    ],
    mediaLinks: [
      // TODO: replace each href with specific article URL when confirmed
      // tone: "mono" silhouettes the logo (good for text-shaped marks).
      //       "color" preserves brand colors (good for fill-block logos).
      {
        name: "ABC",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/abc.png",
        tone: "mono" as const,
      },
      {
        name: "The Australian",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/the-australian.png",
        tone: "mono" as const,
      },
      {
        name: "The Daily Telegraph",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/daily-telegraph.png",
        tone: "mono" as const,
      },
      {
        name: "AFR",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/afr.png",
        tone: "color" as const,
      },
      {
        name: "Sky News",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/sky-news.png",
        tone: "color" as const,
      },
      {
        name: "Associated Press",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/ap.png",
        tone: "mono" as const,
      },
      {
        name: "Australian Associated Press",
        href: "https://lyallmercer.com",
        logoSrc: "/images/media-outlets/aap.png",
        tone: "color" as const,
      },
    ],
  },

  stats: {
    yearsTrading: "15+",
    continents: "Worldwide",
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
      available: true,
    },
    crisisPlanTemplate: {
      title:
        "Does your organisation have a crisis plan that has actually been tested?",
      description:
        "Most organisations have a crisis plan they approved and filed. Very few have exercised it under simulated pressure with their actual team. Download the CRC Public Relations Crisis Communications Plan Template, the same framework we use with clients across Australia to build plans that work when everything else is under pressure.",
      fileName: "crcpr-crisis-communications-plan-template.pdf",
      available: true,
    },
    mediaInterviewGuide: {
      title: "Media Interview Preparation Guide",
      description:
        "Pre-interview checklist and briefing framework for executives and spokespeople.",
      fileName: "crcpr-media-interview-guide.pdf",
      available: true,
    },
    associationCrisisGuide: {
      title: "Industry Association Crisis Guide",
      description:
        "For association CEOs and executive officers facing regulatory crisis, member controversy, or board governance pressure.",
      fileName: "crcpr-association-crisis-guide.pdf",
      available: true,
    },
    schoolsPlaybook: {
      title: "School Crisis Communications Playbook",
      description:
        "Covers parent communications, media management, board governance, and social media incidents for school leaders.",
      fileName: "crcpr-schools-crisis-playbook.pdf",
      available: true,
    },
    pacificGuide: {
      title: "Pacific Stakeholder Engagement Guide",
      description:
        "Practical guide to cross-cultural communications and stakeholder engagement across Pacific island nations.",
      fileName: "crcpr-pacific-stakeholder-guide.pdf",
      available: true,
    },
    corpCommsChecklist: {
      title: "10 Point Corporate Communications Checklist",
      description:
        "Is your organisation's communications strategy ready for scrutiny? The CRC Public Relations 10 point communications checklist sets out 10 key areas that, together, ensure your communication isn't random, but is strategically planned with the aim of building ongoing trust with your stakeholders. Applies to companies, non-profits, governments, professional services firms, schools and associations.",
      fileName: "crcpr-corporate-communications-checklist.pdf",
      available: true,
    },
    publicVoiceSteps: {
      title: "5 Steps to Becoming a Trusted Public Voice",
      description:
        "Are you ready to raise your public profile and be the trusted voice of authority for your area of expertise? Download the CRC Public Relations '5 steps to becoming a trusted public voice', and drive new clients and staff through the credibility this brings. Applies to companies, non-profits, governments, professional services firms, schools and associations.",
      fileName: "crcpr-5-steps-public-voice.pdf",
      available: true,
    },
    crisisReadinessChecklist: {
      title: "The Essential Crisis Readiness Checklist",
      description:
        "Is your organisation prepared for a crisis? Help future-proof your organisation by identifying areas of vulnerability and risk that can lead to reputational damage. This is by no means an exhaustive list but it's a great start. Used by Australian communications teams, HR managers, and executive leaders. 30 questions to assess your organisation's real crisis readiness, with an action plan for every gap.",
      fileName: "crcpr-crisis-readiness-checklist.pdf",
      available: true,
    },
    associationsPRChecklist: {
      title: "PR and Communication Strategy Checklist for Associations",
      description:
        "Is your industry or professional association communicating in a way that builds member trust, supports your advocacy, and builds trust with stakeholders including government and regulators? Are you the voice the media seeks out for regular expert commentary? This checklist is created from 15+ years of association experience and is a great place to start.",
      fileName: "crcpr-associations-pr-checklist.pdf",
      available: false,
    },
  },

  capabilityStatement: {
    title: "CRC Public Relations Capability Statement",
    available: false, // TODO: set to true and add fileName when PDF provided
    fileName: "crcpr-capability-statement.pdf",
    requestUrl: "/contact?source=capability-statement",
  },

  mediaReachSnapshot: {
    period: "April",
    clientDescriptor:
      "mid-sized, Brisbane-based professional services firm with national reach",
    storyCount: 4,
    total: 221,
    breakdown: [
      { label: "Online articles", value: 93 },
      { label: "Newspaper print articles", value: 2 },
      { label: "Radio stories", value: 67 },
      { label: "TV stories (via syndication)", value: 59 },
    ],
    clientLed: {
      total: 175,
      note: "stories led by the client (client as the focus of the story)",
      items: [
        { label: "Online", value: 48 },
        { label: "Print", value: 1 },
        { label: "Radio (incl. long-form ABC Sydney interview)", value: 67 },
        { label: "TV", value: 59 },
      ],
    },
    expertComment: {
      total: 46,
      note: "stories where the client featured as an expert voice",
    },
    source:
      "Independently verified via Isentia media monitoring. Coverage spanned every major Australian television network and most national newspaper, digital and radio brands.",
    intro: {
      eyebrow: "Snapshot of expertise",
      headline:
        "What proactive media relations can produce in a single month.",
      body: [
        "Four media stories developed for one client across April generated 221 placements nationally — across television, radio, print and digital.",
        "Reach of this scale is not the standard outcome of every campaign. Coverage depends on the story, the strategy, and the news cycle. It is shown here as evidence of what disciplined media relations is capable of producing when those elements align.",
      ],
    },
    caveat:
      "Anonymised. Indicative of capability, not a guaranteed result.",
  },

  caseStudies: [
    {
      id: "legal-firm-class-action",
      sector: "International legal firm",
      context:
        "A legal firm based overseas was weeks away from a statute of limitations deadline for an Australian incident, and their usual approach to generate new clients wasn't working.",
      challenge:
        "In only a few weeks, potential claimants in a major class action who resided across many locations had to be found, and the company looked to media exposure for the first time. The problem? It wasn't an obvious media story.",
      approach:
        "CRC Public Relations created an innovative media angle and storyline, and a strategy focused on national exposure and a call to action. The campaign, that had never been done in Australia, hit the mark and achieved outstanding results.",
      outcome: "New clients generated.",
      outcomeSub:
        "With a deadline approaching, 100 new claimants were added to a class action. More people were supported financially and company revenue increased by millions of dollars.",
      icon: "Scale",
    },
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
        "At CRC Public Relations, every client engagement is led directly by experienced advisers, not delegated to account managers or junior staff. You work with a team with deep practical experience and a genuine, long-term interest in your organisation. We are boutique by design, which means you get direct access to the people who actually do the work. That personal approach is the reason clients choose us, including national and international clients.",
    },
    {
      question: "How quickly can CRC Public Relations respond to a crisis?",
      answer:
        "We are available 24/7. For active crisis situations, our target is to have an adviser engaged within the hour of first contact during business hours, or at the start of the next business day for after-hours enquiries. Call 1300 182 186 for immediate crisis support.",
    },
    {
      question: "In what geographical areas do you operate?",
      answer:
        "CRC Public Relations works with local and national clients based in every Australian state, New Zealand and across the Pacific Islands. Some of our clients have branches across the world and we have travelled to assist them in many countries. We deal with a wide range of media outlets, from local, rural, regional, and national through to international media across the globe. We also work with specialist industry publications, and new media including podcasts in any location. We can assist you whatever your size, wherever you are. Geography is not a barrier.",
    },
    {
      question:
        "What types of organisations does CRC Public Relations work with?",
      answer:
        "We work with CEOs, directors, and executives across companies, charities, not-for-profits, family businesses, industry associations and peak bodies, independent and faith-based schools, health and aged care organisations, legal and professional services firms, Pacific governments and NGOs, and faith-based organisations. What our clients share is a preference for working directly with experienced advisers rather than through large agency structures.",
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
