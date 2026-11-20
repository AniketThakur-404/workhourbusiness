import { companyDetailPaths, type CompanySlug } from "@/lib/company-sites";
import {
  employaaDescription,
  employaaSections,
  leadersPinnacleDescription,
  leadersPinnacleSections,
} from "./company-content";

type BusinessImage = { src: string; alt: string };

type Business = {
  title: string;
  description: string;
  image: BusinessImage;
  supportImage: BusinessImage | null;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    image?: BusinessImage;
    offerings?: {
      id: string;
      title: string;
      description?: string;
      href?: string;
      image?: BusinessImage;
    }[];
  }[];
  contact?: { email: string; phone?: { label: string; href: string } };
};

export const businesses: Record<CompanySlug, Business> = {
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
        id: "about",
        title: "Ideation to execution",
        paragraphs: [
          "Inceptura is a strategic growth partner designed to support startups and growing enterprises from the earliest spark of an idea through full execution and global expansion. Our integrated service model covers company registration and compliance, business strategy, talent acquisition and payroll, event management, travel and logistics, international expansion, and revenue optimization. By operating as an embedded extension of our clients’ founding and leadership teams, we help transform raw ideas into scalable, compliant and investor-ready businesses.",
          "With a vision of Ideation to Execution, Inceptura provides a single umbrella of mentorship, operational support, and strategic guidance so that founders can focus on innovation, customers, and product-market fit while we handle the operational backbone required for sustainable growth.",
        ],
      },
      {
        id: "services",
        title: "A partner across the business lifecycle",
        paragraphs: [
          "Inceptura is built on the belief that ambitious founders need more than ad-hoc consulting or transactional services. They need a committed partner that understands the full lifecycle of a business and can orchestrate all the critical functions required to grow.",
          "Our multidisciplinary team brings together experts in corporate law and compliance, strategy consulting, HR and payroll, event production, travel and logistics, and cross-border market entry. This allows us to offer a unified solution instead of fragmented vendor relationships, reducing friction, cost, and execution risk for our clients.",
          "Inceptura offers a modular yet integrated portfolio of services that collectively form a robust growth-enablement platform. Clients can engage us at any stage of their journey, while benefitting most when we partner from the earliest ideation stage.",
        ],
      },
      {
        id: "market-need",
        title: "Problem statement and market need",
        paragraphs: [
          "Startups and scaling businesses face a complex, fragmented landscape of operational requirements. Founders are forced to juggle multiple vendors while trying to build products, raise capital, and win customers. This often leads to costly mistakes, lost opportunities, and burnout.",
        ],
      },
    ],
  },
  "leaders-pinnacle": {
    title: "Leaders Pinnacle",
    description: leadersPinnacleDescription,
    image: {
      src: "/business-leaders-pinnacle.webp",
      alt: "Leaders Pinnacle illustrative scene",
    },
    supportImage: {
      src: "/ignitia-connections.webp",
      alt: "Illustrative professionals exchanging ideas at a conference",
    },
    sections: leadersPinnacleSections,
    contact: { email: "hello@leaderspinnacle.com" },
  },
  employaa: {
    title: "Employaa",
    description: employaaDescription,
    image: {
      src: "/employaa/recruitment-team.webp",
      alt: "Business professionals meeting around a table",
    },
    supportImage: {
      src: "/employaa/office-building.webp",
      alt: "Glass office buildings viewed from street level",
    },
    sections: employaaSections,
    contact: {
      email: "info@workhourbusiness.com",
      phone: { label: "+91 981 032 1155", href: "tel:+919810321155" },
    },
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
        id: "about",
        title: "About Elevatrain",
        paragraphs: [
          "Elevatrain is a specialist corporate training and workshop provider focused on performance-critical capability building for organizations.",
          "With deep expertise in compliance, process excellence, technology, leadership, and communication, Elevatrain designs, delivers, and scales training solutions for B2B clients across industries.",
        ],
      },
      {
        id: "trainings",
        title: "Training programmes",
        paragraphs: [],
        offerings: [
          { id: "tech-and-digital-skills", title: "Tech & Digital Skills" },
          { id: "dev-ops-and-agile", title: "DevOps & Agile" },
          { id: "six-sigma-and-process-excellence", title: "Six Sigma & Process Excellence" },
          { id: "mindfulness", title: "Mindfulness", href: companyDetailPaths.elevatrain },
          { id: "project-and-program-management", title: "Project & Program Management" },
          { id: "communication-and-soft-skills", title: "Communication & Soft Skills" },
        ],
      },
    ],
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
        id: "about",
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
        id: "services",
        title: "Corporate and leisure travel",
        paragraphs: [
          "Go Travel Global is a specialized tour and travel company focused on delivering seamless visa, travel, and stay solutions for corporate clients, while strategically expanding into the business-to-consumer (B2C) segment. The company designs and manages curated group tours, family holidays, and individual travel experiences across Europe, Nepal, key Asian destinations, African safaris, and other high-demand global hotspots.",
          "Go Travel Global is a tour and travel solutions provider with a strong foundation in corporate travel services, particularly in visa management and stay arrangements for business travellers. Building on this core expertise, the company is diversifying into curated leisure travel for individuals, families, and special interest groups.",
        ],
      },
      {
        id: "travel-experiences",
        title: "End-to-end travel experiences",
        paragraphs: [
          "Through strategic collaborations with established international tour operators and destination management companies, Go Travel Global offers end-to-end travel experiences that integrate visa processing, flight coordination, accommodation, local transfers, curated activities, and travel assistance. The company aims to become a trusted one-stop travel partner for both corporate and retail travellers, known for reliability, customization, and elevated service quality.",
          "The company operates as a high-touch service organization, combining expert travel consulting with robust partnerships across key global destinations to ensure reliability, compliance, and traveller satisfaction.",
        ],
      },
    ],
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
        id: "about",
        title: "Business overview",
        paragraphs: [
          "Remunerax is a specialized payroll and workforce outsourcing company focused on delivering accurate, compliant, and scalable payroll and team management solutions for businesses across multiple industries.",
          "By combining robust technology with expert human support, Remunerax enables organizations to reduce administrative burden, maintain regulatory compliance, and focus internal resources on strategic growth.",
        ],
      },
      {
        id: "services",
        title: "Payroll and workforce outsourcing",
        paragraphs: [
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
        id: "about",
        title: "Flexible workspace market",
        paragraphs: [
          "The global flexible workspace and coworking market continues to expand, driven by hybrid work trends, rising real estate costs, and the need for agility. India is one of the fastest-growing flexible workspace markets, with strong adoption by IT/ITeS, startups, GCCs (Global Capability Centers), and professional services firms. Internationally, gateway cities in Asia-Pacific, Europe, and North America are seeing sustained demand from enterprises consolidating or decentralizing their physical footprints.",
        ],
      },
      {
        id: "services",
        title: "Workspace solutions",
        paragraphs: [
          "ThinkRunSpace is a next-generation workspace solutions company specializing in flexible office spaces for B2B clients, offering both physical and virtual offices across multiple cities and countries. We provide configurable work environments ranging from bare-shell units to fully furnished, plug-and-play offices, supported by modular infrastructure options, cafeteria services, and professional administrative support. Our model is designed to scale rapidly across geographies while maintaining a high level of customization, service quality, and technology integration.",
        ],
      },
      {
        id: "ambition",
        title: "Positioning and ambition",
        paragraphs: [
          "The company is positioned to capture the growing global demand for flexible workspaces driven by hybrid work models, cost optimization, and business expansion into new markets. ThinkRunSpace differentiates itself from competitors in India and internationally through a highly modular product offering, strong enterprise-grade service levels, deep technology integration, and a global-yet-local operating model.",
          "We aim to establish ThinkRunSpace as the preferred workspace partner for startups, SMEs, and large enterprises seeking reliable, scalable, and customizable office solutions without the capital and operational burden of traditional leasing.",
        ],
      },
    ],
  },
};
