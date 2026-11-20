import type { CompanyImage, CompanySection } from "../brands/company-catalog";

type ProfileSection = CompanySection & { id: string; slide: number; paragraphs: string[] };
type ServiceSlide = ProfileSection & { description: string; image: CompanyImage };

export const employaaCover: ProfileSection = {
  slide: 1,
  id: "employaa",
  title: "Employaa",
  paragraphs: [
    "A Subsidiary of WorkHour Business"
  ]
};

export const employaaAbout: ProfileSection[] = [
  {
    slide: 2,
    id: "about",
    title: "About Employaa",
    paragraphs: [
      "Employaa is a modern recruitment and staffing partner helping organizations build and scale high-performing teams. We work with clients across industries, supporting talent needs through permanent hiring and flexible outsourced staffing models, from entry-level roles to senior leadership and CXO positions.",
      "Powered by a hands-on team of experienced recruiters and structured, tech-enabled processes, Employaa focuses on speed, precision, and cultural fit. We move fast without compromising on quality—ensuring our clients get the right talent, at the right time.",
      "Our dual engagement model includes direct recruitment (recruit-only) as well as end-to-end staffing on Employaa’s payroll. This gives businesses the flexibility to scale teams quickly, control costs, stay compliant, and reduce hiring timelines—without operational complexity.",
      "At Employaa, we believe talent is a growth engine. We partner closely with our clients to deliver practical, scalable, and future-ready workforce solutions."
    ],
    image: {
      src: "/employaa/about-portrait.webp",
      alt: "Glass office building viewed from street level"
    },
    imagePlacement: "portrait-left"
  },
  {
    slide: 3,
    id: "vision-and-mission",
    title: "Our Philosophy",
    paragraphs: [],
    groups: [
      {
        title: "Vision",
        bullets: [
          "Trusted Growth Partner",
          "Speed, Quality & Cultural Assignment",
          "Agile, Compliant & Future Ready",
          "Learn, Grow and Lead"
        ]
      },
      {
        title: "Mission",
        bullets: [
          "Smart, Flexible Recruitment & Staffing",
          "Human Expertise with structured processes",
          "Long term Partnerships",
          "Ahead of Talent Curve"
        ]
      }
    ],
    image: {
      src: "/employaa/philosophy.webp",
      alt: "Recruitment and talent selection illustrations"
    }
  },
  {
    slide: 5,
    id: "approach",
    title: "Why Choose Employaa",
    paragraphs: [],
    bullets: [
      "Built for Speed Without Compromise",
      "End-to-End Ownership",
      "Quality-First Mindset",
      "Flexible Hiring Models",
      "Compliance-Led Execution",
      "Partnership, Not Transactions",
      "Scalable & Future-Ready"
    ],
    image: {
      src: "/employaa/recruitment-process.webp",
      alt: "A recruiter using a digital hiring interface"
    }
  },
  {
    slide: 6,
    id: "what-makes-employaa-different",
    title: "What Makes Employaa Different?",
    paragraphs: [
      "We combine speed, structure, and accountability—without losing the human touch."
    ],
    bullets: [
      "Human Centric, Tech Enabled",
      "Hands on Senior Involvement",
      "Quality Beyond Resumes",
      "Speed through Structure",
      "Dual Model Advantage",
      "Built as a Talent Partner, Not a Vendor"
    ],
    image: {
      src: "/employaa/what-makes-employaa-different.webp",
      alt: "Shared workstations in an open-plan office"
    }
  },
  {
    slide: 7,
    id: "team",
    title: "Our Team",
    paragraphs: [
      "Over the years, our company has achieved significant milestones that reflect our growth and commitment to excellence.",
      "Our team consists of experienced professionals from diverse backgrounds who bring creativity, expertise, and dedication to every project."
    ],
    subtitle: "The People Behind Our Success",
    image: {
      src: "/employaa/team-collaboration.webp",
      alt: "Members of a business team standing together"
    },
    groups: [
      {
        title: "We encourage",
        bullets: [
          "Open communication",
          "Collaboration and teamwork",
          "Professional growth and learning",
          "Leadership development"
        ]
      }
    ]
  }
];

export const employaaServicesOverview = {
  slide: 4,
  id: "services",
  title: "Our Services",
  paragraphs: [],
  image: {
    src: "/employaa/services-overview.webp",
    alt: "A world map and network of businesspeople"
  }
};

export const employaaServiceSlides: ServiceSlide[] = [
  {
    slide: 8,
    id: "permanent-hiring",
    title: "Permanent Hiring",
    paragraphs: [
      "Employaa goes beyond resume matching. We focus on role clarity, capability assessment, and cultural alignment, ensuring every hire contributes meaningfully from day one.",
      "With access to deep talent networks and a structured evaluation framework, we help clients reduce hiring risks and improve retention."
    ],
    points: [
      {
        title: "Quality driven hiring",
        description: "Candidates are assessed on skills, mindset, and cultural fit—resulting in better on-the-job performance and lower attrition."
      },
      {
        title: "Industry-aligned expertise",
        description: "Recruiters with domain knowledge understand role nuances, compensation benchmarks, and talent availability."
      },
      {
        title: "End-to-end ownership",
        description: "From brief intake to joining follow-ups, we take full accountability—simplifying the hiring process for clients."
      },
      {
        title: "Scalable support",
        description: "Whether hiring for a single role or building entire teams, our model adapts to changing business needs."
      }
    ],
    description: "Domain-specialist recruiters help define the role, assess capability and workplace fit, and guide the search from the initial brief through joining. Support scales from a single hire to a full team.",
    image: {
      src: "/employaa/permanent-hiring.webp",
      alt: "Recruitment specialist selecting a candidate profile"
    }
  },
  {
    slide: 9,
    id: "contract-staffing",
    title: "Contract Staffing",
    paragraphs: [],
    points: [
      {
        title: "1. On-demand skilled professionals",
        description: "Immediate access to pre-vetted specialists across technology, AI, data, engineering, and digital roles for short- and mid-term needs."
      },
      {
        title: "2. Speed without hiring overhead",
        description: "Rapid onboarding to meet project deadlines, seasonal demand, or transformation spikes—without permanent headcount commitments"
      },
      {
        title: "3. Outcome-driven deployments",
        description: "Contract resources aligned to delivery milestones, ensuring productivity from day one and continuity across project phases."
      },
      {
        title: "4. End-to-end workforce management",
        description: "Payroll, compliance, contracts, and performance oversight handled seamlessly to reduce operational and legal complexity."
      },
      {
        title: "5. Cost-optimized & scalable model",
        description: "Pay-for-use staffing that improves budget control, accelerates execution, and enables quick scale-up or scale-down as business needs evolve."
      }
    ],
    description: "Bring in pre-vetted technology, data, AI, engineering, and digital specialists for project milestones or short-term demand. Employaa manages contracts, payroll, compliance support, and performance oversight.",
    image: {
      src: "/employaa/contract-staffing.webp",
      alt: "Open-plan office workstations"
    }
  },
  {
    slide: 10,
    id: "temporary-staffing",
    title: "Temporary Staffing",
    paragraphs: [],
    points: [
      {
        title: "01 Rapid Deployment, Zero Downtime",
        description: "Job-ready professionals deployed quickly to manage peak demand, urgent needs, or workforce gaps—ensuring business continuity."
      },
      {
        title: "02 End-to-End Workforce Management",
        description: "Complete ownership of hiring, payroll, compliance, and administration, freeing clients from operational complexity."
      },
      {
        title: "03 Flexible, Low-Risk Engagement Model",
        description: "Scale workforce up or down without long-term commitments, fixed costs, or compliance exposure."
      },
      {
        title: "04 Quality Talent, Immediate Productivity",
        description: "Pre-vetted resources aligned to role requirements and work environments, delivering value from day one."
      }
    ],
    description: "Fill urgent gaps or seasonal peaks with job-ready professionals. Employaa handles hiring, payroll, and administration, with the flexibility to adjust staffing as demand changes.",
    image: {
      src: "/employaa/temporary-staffing.webp",
      alt: "Silhouettes of professionals in an office"
    }
  },
  {
    slide: 11,
    id: "executive-search",
    title: "Executive Search",
    paragraphs: [
      "The priority positions are identified based on the company’s immediate operational needs and long-term growth strategy. These roles are critical to strengthening core functions, improving efficiency, and supporting business expansion. By filling these key positions, the company aims to close existing capability gaps, enhance team performance, and ensure sustainable growth aligned with organizational objectives."
    ],
    bullets: [
      "Q1 · Precision-Led Leadership Identification",
      "Q2 · Deep Market Mapping & Discreet Outreach",
      "Q3 · Rigorous Evaluation Beyond the Resume",
      "Q4 · End-to-End Search Stewardship"
    ],
    subtitle: "Building Teams That Build Success.",
    description: "Identify senior leaders through market mapping, discreet outreach, and structured evaluation. The search is shaped around the client’s immediate capability needs and long-term growth plans.",
    image: {
      src: "/employaa/executive-search.webp",
      alt: "Professional working at a computer"
    }
  },
  {
    slide: 12,
    id: "gig-workforce",
    title: "Gig Workforce Management",
    paragraphs: [],
    points: [
      {
        title: "On-Demand Access to Skilled GIG Talent",
        description: "Rapid engagement of freelancers and project-based professionals for short-term, specialized, or outcome-driven work"
      },
      {
        title: "Centralized Control & Compliance",
        description: "Unified management of onboarding, contracts, payouts, and statutory requirements—ensuring transparency and risk mitigation."
      },
      {
        title: "Scalable, Outcome-Focused Workforce Model",
        description: "Flex workforce up or down instantly, pay for results, and accelerate project delivery without long-term overheads."
      }
    ],
    description: "Engage freelancers and project specialists for defined outcomes. Employaa coordinates onboarding, agreements, payouts, and statutory administration as project needs change.",
    image: {
      src: "/employaa/gig-workforce.webp",
      alt: "Professional reviewing workforce charts"
    }
  },
  {
    slide: 13,
    id: "tech-hiring",
    title: "IT Staffing / Tech Staffing",
    paragraphs: [
      "Priority tech positions are identified based on immediate project demands and long-term digital growth strategy. These roles are critical to strengthening core technology functions, accelerating delivery timelines, and enabling scalable innovation. By onboarding the right tech talent, organizations close skill gaps, enhance engineering performance, and build future-ready capabilities aligned with overall business objectives."
    ],
    bullets: [
      "Software Development",
      "Cloud Infra & DevOps",
      "Data/AI/Emerging Tech",
      "Testing/Quality Assurance",
      "Product/Digital/UX",
      "IT Support / Operations"
    ],
    subtitle: "Building Teams That Build Success.",
    description: "Recruit across software development, cloud infrastructure and DevOps, data and AI, quality assurance, product and UX, and IT support. Searches reflect both immediate delivery needs and longer-term skills gaps.",
    image: {
      src: "/employaa/tech-hiring.webp",
      alt: "Technology professional working at a computer"
    }
  },
  {
    slide: 14,
    id: "industry-specific-hiring",
    title: "Industry-Specific Hiring",
    paragraphs: [],
    bullets: [
      "Sales/BD",
      "Tech/IT",
      "Operations",
      "Human Resource",
      "Marketing",
      "Executives"
    ],
    description: "Tailor the search to your sector and function, including sales and business development, technology, operations, human resources, marketing, and executive roles.",
    image: {
      src: "/employaa/industry-hiring.webp",
      alt: "Digital network of candidate profiles"
    }
  },
  {
    slide: 15,
    id: "bulk-hiring",
    title: "Bulk Hiring",
    paragraphs: [],
    points: [
      {
        title: "01 Demand-Led Workforce Planning",
        description: "Hiring volumes aligned to business ramps, go-live timelines, and capacity forecasts—not guesswork"
      },
      {
        title: "02 Multi-Channel Talent Activation",
        description: "Simultaneous sourcing across digital platforms, talent communities, and referral ecosystems to unlock scale quickly."
      },
      {
        title: "03 Structured Mass Assessment Frameworks",
        description: "Role-specific screening, standardized evaluations, and batch interviews ensure consistency without compromising quality."
      },
      {
        title: "04 Speed-to-Productivity Onboarding",
        description: "Pre-joining engagement, documentation readiness, and coordinated onboarding enable faster operational readiness"
      },
      {
        title: "05 Quality Governance at Volume",
        description: "Centralized tracking, real-time dashboards, and drop-off controls to maintain hire quality even at scale."
      },
      {
        title: "06 Flexible Hiring Models",
        description: "Bulk hiring across permanent, contract, and temp models—adapted to business risk, cost, and growth strategy."
      }
    ],
    description: "Plan hiring volumes around launch dates and capacity forecasts. Employaa uses multiple sourcing channels, standardized batch assessments, candidate tracking, and coordinated onboarding across permanent, contract, or temporary roles.",
    image: {
      src: "/employaa/bulk-hiring.webp",
      alt: "Candidates waiting in a line"
    }
  },
  {
    slide: 16,
    id: "campus-hiring",
    title: "Campus Hiring",
    paragraphs: [
      "Welcoming new hires is an important part of building a strong and engaged team. Through a structured onboarding and integration process, new employees are introduced to the company’s culture, values, and expectations."
    ],
    subtitle: "Building Teams That Build Success.",
    bullets: [
      "Orientation session",
      "Team introduction",
      "Training workshops",
      "Performance check-ins"
    ],
    description: "Bring early-career hires into the team with a structured onboarding plan that includes orientation, team introductions, training workshops, and performance check-ins.",
    image: {
      src: "/employaa/campus-hiring.webp",
      alt: "Group taking part in a training session"
    }
  },
  {
    slide: 17,
    id: "global-hiring",
    title: "Remote / Global Hiring",
    paragraphs: [],
    subtitle: "Talent Without Border",
    points: [
      {
        title: "Access to Global Skill Pools",
        description: "Source specialized talent across geographies, unlocking expertise unavailable or scarce in local markets."
      },
      {
        title: "Timezone-Aligned & Distributed Teams",
        description: "Build remote teams optimized for productivity, collaboration, and round-the-clock business continuity."
      },
      {
        title: "Cross-Border Compliance Simplified",
        description: "End-to-end management of contracts, payroll, statutory obligations, and local labor regulations."
      },
      {
        title: "Scalable, Cost-Optimized Workforce Models",
        description: "Expand globally without entity setup, fixed overheads, or long-term hiring risk."
      }
    ],
    description: "Source specialist talent across markets and build timezone-aligned teams. Employaa supports cross-border contracts, payroll, and local statutory obligations.",
    image: {
      src: "/employaa/global-hiring.webp",
      alt: "Glass office towers viewed from below"
    }
  },
  {
    slide: 18,
    id: "rpo",
    title: "Recruitment Process Outsourcing",
    paragraphs: [],
    points: [
      {
        title: "Embedded Hiring Partnership",
        description: "Recruiters operate as an extension of your team, aligned to business goals, culture, and workforce plans"
      },
      {
        title: "End-to-End Talent Operations Ownership",
        description: "Full management of sourcing, screening, coordination, offers, and onboarding with defined SLAs and outcomes."
      },
      {
        title: "Speed, Quality & Cost Efficiency",
        description: "Reduced time-to-hire, improved candidate experience, and predictable hiring costs—without compromising talent quality"
      }
    ],
    description: "Embed recruiters within your hiring operation. They manage sourcing, screening, interviews, offers, and onboarding against agreed service levels and workforce plans.",
    image: {
      src: "/employaa/recruitment-outsourcing.webp",
      alt: "Recruiters reviewing documents together"
    }
  }
];

export const employaaContact: ProfileSection = {
  slide: 19,
  id: "contact",
  title: "Thank You",
  paragraphs: []
};
