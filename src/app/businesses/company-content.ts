import { companyDetailPaths } from "@/lib/company-sites";

export const leadersPinnacleDescription =
  "Leaders Pinnacle creates research-led B2B conferences, trade expos, corporate events, webinars, and podcasts across India, Asia, the Middle East, and Africa.";

export const employaaDescription =
  "Employaa helps organizations build and scale teams through permanent hiring, flexible staffing, and executive search, from entry-level roles to the C-suite.";

export const leadersPinnacleSections = [
  {
    id: "about",
    title: "Where leaders convene",
    paragraphs: [
      "Leaders Pinnacle designs research-led B2B events around a clear business objective. Its team brings together strategic content, curated audiences, production, and measurement for live, virtual, and hybrid programmes.",
    ],
  },
  {
    id: "services",
    title: "Event services",
    paragraphs: [
      "Combine formats into a programme aligned with your marketing, sales, and communications goals.",
    ],
    offerings: [
      {
        id: "strategic-conferences",
        title: "Strategic Conferences",
        description: "CXO-level forums with research-led agendas, expert panels, focused networking, and sponsor integration.",
      },
      {
        id: "trade-expos-and-exhibitions",
        title: "Trade Expos & Exhibitions",
        description: "Multi-brand showcases with live demos, sponsor and exhibitor packages, targeted visitor acquisition, and lead capture.",
      },
      {
        id: "bespoke-corporate-events",
        title: "Bespoke Corporate Events",
        description: "Annual meetings, offsites, town halls, awards, and partner or customer summits shaped around your organization.",
        href: companyDetailPaths["leaders-pinnacle"],
      },
      {
        id: "webinars-and-virtual-events",
        title: "Webinars & Virtual Events",
        description: "Webinar series, virtual launches, and hybrid events with integrated registration, CRM, and analytics.",
      },
      {
        id: "podcast-and-content-series",
        title: "Podcasts & Content Series",
        description: "Executive interviews, branded shows, and event highlights, with production support from concept through release.",
      },
    ],
  },
  {
    id: "process",
    title: "How we work",
    paragraphs: [
      "We agree on goals, audiences, and success measures, then develop the format, agenda, and budget. We coordinate speakers, outreach, production, and rehearsals before delivery, then review results and recommend next steps.",
    ],
  },
  {
    id: "industries",
    title: "Industries we serve",
    paragraphs: [
      "We build programmes for technology and SaaS, banking and financial services, manufacturing, healthcare, energy and infrastructure, government, and associations.",
    ],
  },
  {
    id: "global-presence",
    title: "Global presence",
    paragraphs: [
      "Leaders Pinnacle works with regional partners across India, Asia, the Middle East, and Africa to coordinate venues, local outreach, and event delivery.",
    ],
    bullets: [
      "India — Mumbai, Delhi NCR, Bengaluru, and Hyderabad",
      "Asia — Singapore, Bangkok, Kuala Lumpur, and Jakarta",
      "Middle East and Africa — Dubai, Riyadh, Doha, Nairobi, Zimbabwe, and South Africa",
    ],
  },
  {
    id: "events-and-insights",
    title: "Events & insights",
    paragraphs: [
      "Signature summits and industry forums bring executives, policymakers, and innovators together. Get in touch to discuss speaking, sponsorship, or co-hosting a programme.",
    ],
  },
];

function employaaPhoto(name: string, alt: string) {
  return { src: `/employaa/${name}.webp`, alt };
}

export const employaaSections = [
  {
    id: "about",
    title: "About Employaa",
    paragraphs: [
      "Employaa is a recruitment and staffing subsidiary of Workhour Business. Its recruiters combine industry knowledge with structured, technology-enabled processes to assess capability, role fit, and alignment with each client’s workplace.",
      "Clients can choose direct recruitment, where they employ the successful candidate, or outsourced staffing on Employaa’s payroll. The staffing model includes contracts, payroll, workforce administration, and compliance support.",
    ],
  },
  {
    id: "services",
    title: "Recruitment and staffing services",
    paragraphs: [
      "Choose support for a single role, an expanding team, or an entire recruitment operation.",
    ],
    offerings: [
      {
        id: "permanent-hiring",
        title: "Permanent Hiring",
        description: "Domain-specialist recruiters help define the role, assess capability and workplace fit, and guide the search from the initial brief through joining. Support scales from a single hire to a full team.",
        image: employaaPhoto("permanent-hiring", "Illustration of candidate selection"),
      },
      {
        id: "contract-staffing",
        title: "Contract Staffing",
        description: "Bring in pre-vetted technology, data, AI, engineering, and digital specialists for project milestones or short-term demand. Employaa manages contracts, payroll, compliance support, and performance oversight.",
        image: employaaPhoto("contract-staffing", "Open-plan office with shared workstations"),
      },
      {
        id: "temporary-staffing",
        title: "Temporary Staffing",
        description: "Fill urgent gaps or seasonal peaks with job-ready professionals. Employaa handles hiring, payroll, and administration, with the flexibility to adjust staffing as demand changes.",
        image: employaaPhoto("temporary-staffing", "Silhouettes of professionals in an office"),
      },
      {
        id: "executive-search",
        title: "Executive Search",
        description: "Identify senior leaders through market mapping, discreet outreach, and structured evaluation. The search is shaped around the client’s immediate capability needs and long-term growth plans.",
        image: employaaPhoto("executive-search", "Professionals seated around a boardroom table"),
      },
      {
        id: "tech-hiring",
        title: "IT Staffing & Tech Hiring",
        description: "Recruit across software development, cloud infrastructure and DevOps, data and AI, quality assurance, product and UX, and IT support. Searches reflect both immediate delivery needs and longer-term skills gaps.",
        image: employaaPhoto("tech-hiring", "Software professional working at a computer"),
      },
      {
        id: "industry-specific-hiring",
        title: "Industry-Specific Hiring",
        description: "Tailor the search to your sector and function, including sales and business development, technology, operations, human resources, marketing, and executive roles.",
        image: employaaPhoto("industry-hiring", "Illustration of a network of professional profiles"),
      },
      {
        id: "bulk-hiring",
        title: "Bulk Hiring",
        description: "Plan hiring volumes around launch dates and capacity forecasts. Employaa uses multiple sourcing channels, standardized batch assessments, candidate tracking, and coordinated onboarding across permanent, contract, or temporary roles.",
        image: employaaPhoto("bulk-hiring", "Group of candidates standing in a line"),
      },
      {
        id: "rpo",
        title: "Recruitment Process Outsourcing",
        description: "Embed recruiters within your hiring operation. They manage sourcing, screening, interviews, offers, and onboarding against agreed service levels and workforce plans.",
        image: employaaPhoto("recruitment-outsourcing", "Team reviewing documents together around a table"),
      },
      {
        id: "global-hiring",
        title: "Remote & Global Hiring",
        description: "Source specialist talent across markets and build timezone-aligned teams. Employaa supports cross-border contracts, payroll, and local statutory obligations.",
        image: employaaPhoto("global-hiring", "Modern office towers"),
      },
      {
        id: "gig-workforce",
        title: "Gig Workforce Management",
        description: "Engage freelancers and project specialists for defined outcomes. Employaa coordinates onboarding, agreements, payouts, and statutory administration as project needs change.",
        image: employaaPhoto("gig-workforce", "Professional reviewing workforce charts"),
      },
      {
        id: "campus-hiring",
        title: "Campus Hiring",
        description: "Bring early-career hires into the team with a structured onboarding plan that includes orientation, team introductions, training workshops, and performance check-ins.",
        image: employaaPhoto("campus-hiring", "Group attending a training session"),
      },
    ],
  },
  {
    id: "approach",
    title: "Why choose Employaa",
    image: employaaPhoto("recruitment-process", "Digital recruitment interface displayed on a laptop"),
    paragraphs: [
      "Senior recruiters stay involved from the brief through onboarding. Structured screening and assessment help the team move quickly while keeping role fit and candidate quality in view.",
    ],
    bullets: [
      "One team takes responsibility from role intake through onboarding.",
      "Clients can choose direct hiring or outsourced staffing as workforce needs change.",
      "Recruiters consider skills, working style, and workplace fit during assessment.",
    ],
  },
  {
    id: "vision-and-mission",
    title: "Vision and mission",
    paragraphs: [
      "Our vision is to become a trusted growth partner for organizations building their teams.",
      "Our mission is to help clients hire quickly and accurately, with flexible staffing models and structured, human-led recruitment. We build long-term relationships and help teams adapt as talent needs change.",
    ],
  },
  {
    id: "team",
    title: "Our team",
    image: employaaPhoto("team-collaboration", "Business professionals in a glass corridor"),
    paragraphs: [
      "Employaa’s recruiters bring experience across industries and functions. The team values open communication, collaboration, professional development, and leadership development.",
    ],
  },
];
