type Business = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  supportImage: { src: string; alt: string } | null;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  url: string;
};

export const businesses: Record<string, Business> = {
  inceptura: {
    title: "Inceptura",
    description:
      "Inceptura supports startups and growing enterprises from early ideas through business execution and global expansion.",
    image: {
      src: "/business-inceptura.webp",
      alt: "Inceptura illustrative scene",
    },
    supportImage: {
      src: "/about-story-v2.webp",
      alt: "Illustrative business specialists sharing ideas in a workplace",
    },
    sections: [
      {
        title: "Ideation to execution",
        paragraphs: [
          "Inceptura is a strategic growth partner designed to support startups and growing enterprises from the earliest spark of an idea through full execution and global expansion. Our integrated service model covers company registration and compliance, business strategy, talent acquisition and payroll, event management, travel and logistics, international expansion, and revenue optimization. By operating as an embedded extension of our clients’ founding and leadership teams, we help transform raw ideas into scalable, compliant and investor-ready businesses.",
          "With a vision of Ideation to Execution, Inceptura provides a single umbrella of mentorship, operational support, and strategic guidance so that founders can focus on innovation, customers, and product-market fit while we handle the operational backbone required for sustainable growth.",
        ],
      },
      {
        title: "A partner across the business lifecycle",
        paragraphs: [
          "Inceptura is built on the belief that ambitious founders need more than ad-hoc consulting or transactional services. They need a committed partner that understands the full lifecycle of a business and can orchestrate all the critical functions required to grow.",
          "Our multidisciplinary team brings together experts in corporate law and compliance, strategy consulting, HR and payroll, event production, travel and logistics, and cross-border market entry. This allows us to offer a unified solution instead of fragmented vendor relationships, reducing friction, cost, and execution risk for our clients.",
          "Inceptura offers a modular yet integrated portfolio of services that collectively form a robust growth-enablement platform. Clients can engage us at any stage of their journey, while benefitting most when we partner from the earliest ideation stage.",
        ],
      },
      {
        title: "Problem statement and market need",
        paragraphs: [
          "Startups and scaling businesses face a complex, fragmented landscape of operational requirements. Founders are forced to juggle multiple vendors while trying to build products, raise capital, and win customers. This often leads to costly mistakes, lost opportunities, and burnout.",
        ],
      },
    ],
    url: "https://inceptura.workhourbusiness.com",
  },
  "leaders-pinnacle": {
    title: "Leaders Pinnacle",
    description:
      "Leaders Pinnacle designs conferences, trade expos, corporate events, webinars, and podcasts for B2B audiences.",
    image: {
      src: "/business-leaders-pinnacle.webp",
      alt: "Leaders Pinnacle illustrative scene",
    },
    supportImage: {
      src: "/ignitia-connections.webp",
      alt: "Illustrative professionals exchanging ideas at a conference",
    },
    sections: [
      {
        title: "Business overview",
        paragraphs: [
          "Leaders Pinnacle focuses on B2B events and market intelligence, including conferences, summits, exhibitions, trade expos, and bespoke corporate events.",
          "Its service areas also include webinars, podcasts, and strategic market research for organizations planning professional events and audience engagement.",
          "Organizations use conferences and events to bring customers, partners, and employees together around shared topics. Online formats such as webinars can support participation across locations.",
          "Event planning can include content development, audience needs, production, and practical coordination. The right mix depends on the event purpose, format, and participants.",
          "Leaders Pinnacle focuses on knowledge-led business events and market intelligence for professional audiences.",
        ],
      },
    ],
    url: "https://leaderspinnacle.workhourbusiness.com",
  },
  employaa: {
    title: "Employaa",
    description:
      "Employaa provides permanent recruitment and outsourced staffing for roles from entry-level to senior leadership.",
    image: {
      src: "/business-employaa.webp",
      alt: "Employaa illustrative scene",
    },
    supportImage: {
      src: "/about-responsible-v2.webp",
      alt: "Illustrative one-to-one professional conversation",
    },
    sections: [
      {
        title: "Recruitment market context",
        paragraphs: [
          "The recruitment and staffing industry continues to expand, driven by factors such as increased specialization of roles, rapid business growth cycles, and the rising preference for flexible workforce models. Companies are increasingly outsourcing recruitment and staffing functions to specialized partners to gain access to wider talent pools, reduce hiring timelines, and ensure compliance with labor regulations.",
          "Outsourced staffing solutions are particularly attractive to organizations that need to manage headcount flexibility, control fixed costs, and navigate complex regulatory requirements for short-term or project-based employees.",
        ],
      },
      {
        title: "Recruitment and staffing solutions",
        paragraphs: [
          "Employaa is a specialized recruitment and staffing partner focused on delivering end-to-end talent solutions for organizations across industries. We support clients with both permanent recruitment and outsourced staffing models, covering roles from entry-level to senior leadership and CXO positions. Our strength lies in a seasoned team of recruiters, structured processes, and a commitment to speed, quality, and cultural fit.",
          "Employaa’s service portfolio includes direct hiring (recruit-only) and full-service staffing on Employaa’s payroll. This dual-model approach enables client organizations to flexibly scale their workforce while optimizing costs, mitigating compliance risks, and reducing time-to-hire.",
          "Employaa partners with multiple organizations to source, assess, and onboard talent across a wide range of functions and experience levels. The company operates with a professional delivery model driven by experienced recruiters, standardized processes, and strong client relationships.",
        ],
      },
      {
        title: "Key attributes of Employaa’s positioning",
        paragraphs: [],
        bullets: [
          "Coverage of roles from junior, mid-level, managerial to CXO and leadership positions",
          "Flexible engagement models: recruit-only and full outsourced staffing on Employaa’s payroll",
          "Sector-agnostic approach with capacity to serve multiple industries",
          "Emphasis on speed, accuracy of profiles, and long-term client partnerships",
        ],
      },
      {
        title: "Brand identity",
        paragraphs: [
          "The brand identity for Employaa is designed to reflect professionalism, reliability, and modern HR expertise. Clean typography and a corporate colour palette reinforce trust and simplicity, supporting both digital and print communication materials.",
        ],
      },
    ],
    url: "https://employaa.workhourbusiness.com",
  },
  elevatrain: {
    title: "Elevatrain",
    description:
      "Elevatrain designs and delivers corporate training and workshops across compliance, process, technology, leadership, and communication.",
    image: {
      src: "/business-elevatrain.webp",
      alt: "Elevatrain illustrative scene",
    },
    supportImage: {
      src: "/business-learning.webp",
      alt: "Illustrative professional skills workshop with participants working on laptops",
    },
    sections: [
      {
        title: "Business overview",
        paragraphs: [
          "Elevatrain is a specialist corporate training and workshop provider focused on performance-critical capability building for organizations.",
          "With deep expertise in compliance, process excellence, technology, leadership, and communication, Elevatrain designs, delivers, and scales training solutions for B2B clients across industries.",
        ],
      },
    ],
    url: "https://elevatrain.workhourbusiness.com",
  },
  "go-travel-global": {
    title: "Go Travel Global",
    description:
      "Go Travel Global provides corporate visa, travel, and stay support alongside curated leisure travel.",
    image: {
      src: "/business-gotravel.webp",
      alt: "Go Travel Global illustrative scene",
    },
    supportImage: {
      src: "/business-travel.webp",
      alt: "Illustrative business traveller walking through an airport",
    },
    sections: [
      {
        title: "Travel market trends",
        paragraphs: [
          "The global travel and tourism sector is rebounding and transforming, driven by renewed demand, hybrid work, and the blending of business and leisure travel. Corporates are increasingly seeking reliable partners that can manage complex visa and travel requirements, while retail travellers are prioritizing curated, safe, and experience-rich itineraries.",
        ],
        bullets: [
          "Rising corporate focus on travel compliance, duty of care, and cost control.",
          "Shift from mass-market tours to personalized and small-group experiences.",
          "Growing interest in nature, wellness, cultural immersion, and sustainable travel.",
          "Increased reliance on digital channels for research, booking, and traveller support.",
        ],
      },
      {
        title: "Corporate and leisure travel",
        paragraphs: [
          "Go Travel Global is a specialized tour and travel company focused on delivering seamless visa, travel, and stay solutions for corporate clients, while strategically expanding into the business-to-consumer (B2C) segment. The company designs and manages curated group tours, family holidays, and individual travel experiences across Europe, Nepal, key Asian destinations, African safaris, and other high-demand global hotspots.",
          "Go Travel Global is a tour and travel solutions provider with a strong foundation in corporate travel services, particularly in visa management and stay arrangements for business travellers. Building on this core expertise, the company is diversifying into curated leisure travel for individuals, families, and special interest groups.",
        ],
      },
      {
        title: "End-to-end travel experiences",
        paragraphs: [
          "Through strategic collaborations with established international tour operators and destination management companies, Go Travel Global offers end-to-end travel experiences that integrate visa processing, flight coordination, accommodation, local transfers, curated activities, and travel assistance. The company aims to become a trusted one-stop travel partner for both corporate and retail travellers, known for reliability, customization, and elevated service quality.",
          "The company operates as a high-touch service organization, combining expert travel consulting with robust partnerships across key global destinations to ensure reliability, compliance, and traveller satisfaction.",
        ],
      },
    ],
    url: "https://gotravelglobal.workhourbusiness.com",
  },
  remunerax: {
    title: "Remunerax",
    description:
      "Remunerax provides payroll and workforce outsourcing with technology and expert human support.",
    image: {
      src: "/business-remunerax.webp",
      alt: "Remunerax illustrative scene",
    },
    supportImage: {
      src: "/business-operations.webp",
      alt: "Illustrative payroll administrator organizing everyday office work",
    },
    sections: [
      {
        title: "Business overview",
        paragraphs: [
          "Remunerax is a specialized payroll and workforce outsourcing company focused on delivering accurate, compliant, and scalable payroll and team management solutions for businesses across multiple industries.",
          "By combining robust technology with expert human support, Remunerax enables organizations to reduce administrative burden, maintain regulatory compliance, and focus internal resources on strategic growth.",
          "Positioned within the rapidly expanding global BPO (Business Process Outsourcing) market, Remunerax addresses the increasing demand for reliable payroll outsourcing driven by complex regulatory environments, remote and distributed teams, and the need for cost-efficient operations. Our service portfolio covers end-to-end payroll outsourcing, employment administration, team staffing and management, and compliance support across jurisdictions.",
          "Remunerax is a B2B-focused payroll and workforce outsourcing provider serving small, mid-sized, and growth-stage enterprises. We operate as an extension of our clients’ HR and finance departments, delivering secure and compliant payroll processing and complete team outsourcing solutions.",
        ],
        bullets: [
          "Industry: BPO / Payroll Outsourcing / Workforce Management",
          "Business Model: Subscription-based and volume-based service contracts",
          "Target Clients: SMEs, scale-ups, and multi-entity organizations operating locally or across borders",
          "Service Delivery: Cloud-based platform complemented by regional payroll and compliance experts",
        ],
      },
    ],
    url: "https://remunerax.workhourbusiness.com",
  },
  thinkrunspace: {
    title: "ThinkRunSpace",
    description:
      "ThinkRunSpace provides flexible physical and virtual workspaces with configurable office support.",
    image: {
      src: "/business-thinkrunspace.webp",
      alt: "ThinkRunSpace illustrative scene",
    },
    supportImage: {
      src: "/business-thinkrunspace.webp",
      alt: "Illustrative flexible workspace with shared and individual work areas",
    },
    sections: [
      {
        title: "Flexible workspace market",
        paragraphs: [
          "The global flexible workspace and coworking market continues to expand, driven by hybrid work trends, rising real estate costs, and the need for agility. India is one of the fastest-growing flexible workspace markets, with strong adoption by IT/ITeS, startups, GCCs (Global Capability Centers), and professional services firms. Internationally, gateway cities in Asia-Pacific, Europe, and North America are seeing sustained demand from enterprises consolidating or decentralizing their physical footprints.",
        ],
      },
      {
        title: "Workspace solutions",
        paragraphs: [
          "ThinkRunSpace is a next-generation workspace solutions company specializing in flexible office spaces for B2B clients, offering both physical and virtual offices across multiple cities and countries. We provide configurable work environments ranging from bare-shell units to fully furnished, plug-and-play offices, supported by modular infrastructure options, cafeteria services, and professional administrative support. Our model is designed to scale rapidly across geographies while maintaining a high level of customization, service quality, and technology integration.",
        ],
      },
      {
        title: "Positioning and ambition",
        paragraphs: [
          "The company is positioned to capture the growing global demand for flexible workspaces driven by hybrid work models, cost optimization, and business expansion into new markets. ThinkRunSpace differentiates itself from competitors in India and internationally through a highly modular product offering, strong enterprise-grade service levels, deep technology integration, and a global-yet-local operating model.",
          "We aim to establish ThinkRunSpace as the preferred workspace partner for startups, SMEs, and large enterprises seeking reliable, scalable, and customizable office solutions without the capital and operational burden of traditional leasing.",
        ],
      },
    ],
    url: "https://thinkrunspace.workhourbusiness.com",
  },
};
