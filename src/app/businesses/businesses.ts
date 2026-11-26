import { type CompanySlug } from "@/lib/company-sites";
import type { CompanyImage, CompanySection } from "../brands/company-catalog";
import {
  employaaDescription,
  employaaSections,
  leadersPinnacleDescription,
  leadersPinnacleSections,
} from "./company-content";
import { incepturaDescription, incepturaSections } from "./inceptura-content";
import { elevatrainSections, travelSections, workspaceSections } from "./updated-portfolios";

type Business = {
  title: string;
  description: string;
  image: CompanyImage;
  supportImage: CompanyImage | null;
  updatedProfile?: { headline: string; tagline: string; contactTitle: string; contactDescription: string };
  sections: (CompanySection & {
    id: string;
    paragraphs: string[];
    offerings?: {
      id: string;
      title: string;
      description?: string;
      href?: string;
      image?: CompanyImage;
      details?: string[];
      profile?: CompanySection;
    }[];
  })[];
  contact?: {
    email?: string;
    phone?: { label: string; href: string };
    image?: CompanyImage;
  };
};

export const businesses: Record<CompanySlug, Business> = {
  inceptura: {
    title: "Inceptura",
    description: incepturaDescription,
    image: {
      src: "/business-inceptura.webp",
      alt: "Inceptura illustrative scene",
    },
    supportImage: {
      src: "/about-story-v2.webp",
      alt: "Illustrative business specialists sharing ideas in a workplace",
    },
    sections: incepturaSections,
    contact: {
      email: "inceptura@workhourbusiness.com",
      phone: { label: "+91-981 032 1155", href: "tel:+919810321155" },
    },
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
      src: "/employaa/cover.webp",
      alt: "Business planning workspace",
    },
    supportImage: {
      src: "/employaa/office-building.webp",
      alt: "Glass office buildings viewed from street level",
    },
    sections: employaaSections,
    contact: {
      email: "info@workhourbusiness.com",
      phone: { label: "+91-981 032 1155", href: "tel:+919810321155" },
      image: { src: "/employaa/contact-building.webp", alt: "Modern office towers viewed from street level" },
    },
  },
  elevatrain: {
    title: "Elevatrain",
    description: "Practitioner-led training for corporate teams, startups, and individual professionals across technical skills, operations, and leadership.",
    updatedProfile: {
      headline: "Practical training that improves everyday work",
      tagline: "Learn. Grow. Lead.",
      contactTitle: "Plan your training programme",
      contactDescription: "Talk to the New Delhi team about corporate learning, a scale-up academy, or individual training.",
    },
    image: {
      src: "/business-elevatrain.webp",
      alt: "Elevatrain illustrative scene",
    },
    supportImage: {
      src: "/business-learning.webp",
      alt: "Participants working on laptops in a skills workshop",
    },
    sections: elevatrainSections,
    contact: {
      email: "info@workhourbusiness.com",
      phone: { label: "+91-981 032 1155", href: "tel:+919810321155" },
    },
  },
  "go-travel-global": {
    title: "Go Travel Global",
    description: "Corporate mobility, visa assistance, and curated holidays, with one team coordinating flights, stays, transfers, and on-trip support.",
    updatedProfile: {
      headline: "Business travel and holidays, planned end to end",
      tagline: "Corporate mobility and curated travel",
      contactTitle: "Talk to the travel desk",
      contactDescription: "The New Delhi desk handles travel and partnership enquiries Monday to Saturday, 9:30 a.m. to 7:30 p.m. IST. On-trip support is available for active trips.",
    },
    image: {
      src: "/business-gotravel.webp",
      alt: "Go Travel Global illustrative scene",
    },
    supportImage: {
      src: "/business-travel.webp",
      alt: "A business traveller walking through an airport",
    },
    sections: travelSections,
    contact: {
      phone: { label: "+91-981 032 1155", href: "tel:+919810321155" },
    },
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
    description: "Virtual offices, serviced offices, coworking, and managed floors for teams expanding across India and international business hubs.",
    updatedProfile: {
      headline: "Flexible workspaces built around your team",
      tagline: "Physical and virtual workspaces",
      contactTitle: "Book a tour or discuss a partnership",
      contactDescription: "Contact the Delhi team about a virtual office, a move-in-ready suite, or an expansion partnership.",
    },
    image: {
      src: "/business-thinkrunspace.webp",
      alt: "ThinkRunSpace illustrative scene",
    },
    supportImage: {
      src: "/business-thinkrunspace.webp",
      alt: "Flexible workspace with shared desks and meeting areas",
    },
    sections: workspaceSections,
    contact: {
      phone: { label: "+91-981 032 1155", href: "tel:+919810321155" },
    },
  },
};
