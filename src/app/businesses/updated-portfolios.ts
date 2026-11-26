import type { CompanySection } from "../brands/company-catalog";
import source from "./updated-portfolio-source.json";

const trainingIds = {
  tech: "tech-and-digital-skills",
  devops: "dev-ops-and-agile",
  pmp: "project-and-program-management",
  sixsigma: "six-sigma-and-process-excellence",
  softskills: "communication-and-soft-skills",
  mindfulness: "mindfulness",
} satisfies Record<keyof typeof source.training, string>;

const travelIds = {
  corp: "corporate-and-business-travel",
  visa: "visa-assistance-and-documentation",
  intl: "domestic-and-intl-tours",
  dom: "domestic-india-travel",
  mice: "mice-offsites-and-founder-roadshows",
} satisfies Record<keyof typeof source.travel, string>;

type ProfileSection = CompanySection & { id: string; paragraphs: string[] };

export const elevatrainSections = [
  {
    id: "about",
    title: "Training led by industry practitioners",
    paragraphs: [
      "Elevatrain builds skills around the work people already do. Engineering leads, DevOps architects, Six Sigma practitioners, and executive coaches bring live scenarios into workshops for corporate teams, startups, and individual professionals.",
      "Programmes cover new-hire integration, role-based technical and process skills, leadership development, and communication, emotional intelligence, and resilience.",
    ],
  },
  {
    id: "trainings",
    title: "Six capability programmes",
    paragraphs: ["Explore the syllabus, intended audience, and learning goals for each training track."],
    offerings: Object.entries(trainingIds).map(([key, id]) => {
      const track = source.training[key as keyof typeof trainingIds];
      return {
        id,
        title: track.title,
        description: track.tagline,
        profile: {
          title: "Curriculum and learning goals",
          bullets: track.modules,
          points: [
            { title: "Who it’s for", description: track.audience },
            { title: "Expected outcome", description: track.outcome },
          ],
        },
      };
    }),
  },
  ...source.delivery.map((section, index) => ({
    ...section,
    id: ["needs-assessment", "delivery-formats", "measuring-impact"][index],
    paragraphs: [],
  })),
  {
    id: "partnerships",
    title: "Training partnerships for growing teams",
    paragraphs: [
      "Elevatrain develops scale-up academies, programmes for incubator and venture portfolios, and retained learning and development support. Workhour Business sister company Go Travel Global can support international travel, visas, and leadership offsites.",
    ],
  },
];

const travelOfferings = Object.entries(travelIds).map(([key, id]) => {
  const service = source.travel[key as keyof typeof travelIds];
  return {
    id,
    title: service.title,
    description: service.summary,
    profile: {
      title: "What the travel desk can coordinate",
      bullets: service.deliverables,
      paragraphs: [service.outcome],
    },
  };
});

export const travelSections = [
  {
    id: "about",
    title: "One travel partner from planning to return",
    paragraphs: [
      "Go Travel Global grew from a corporate visa and executive stay practice into a travel desk that coordinates documentation, flights, accommodation, transfers, and on-trip support.",
      "The team works with vetted destination partners to plan business trips and tailor leisure itineraries across Europe, Asia, Africa, Nepal, and India.",
    ],
    points: [
      { title: "Founders and expanding teams", description: "Multi-city roadshows, market-entry visits, and extended stays for new branches." },
      { title: "Corporates and SMEs", description: "Policy-aligned booking, duty-of-care planning, and clear travel costing." },
      { title: "Individuals, families and institutions", description: "Personalized holidays, group departures, and educational travel." },
    ],
  },
  {
    id: "services",
    title: "Travel and mobility services",
    paragraphs: ["Plan business travel, visa applications, domestic and international holidays, or group movements with one travel desk."],
    offerings: [
      ...travelOfferings,
      {
        id: "customized-travel-planning",
        title: "Customized Travel Planning",
        description: "Build an itinerary around your dates, group size, budget, and travel preferences.",
        profile: {
          title: "Plan around your brief",
          paragraphs: ["Combine destinations, stays, transfers, and activities in one itinerary, with local partners and a single point of contact."],
        },
      },
    ],
  },
  {
    id: "travel-workflow",
    title: "How the travel desk works",
    paragraphs: ["The team agrees the brief, budget, and timings before it recommends routes or makes bookings."],
    points: [
      { title: "Capture the requirements", description: "Define your goals, traveller preferences, budget, and deadlines." },
      { title: "Check visa and route feasibility", description: "Review lead times, transit rules, and connections for the proposed itinerary." },
      { title: "Prepare costing", description: "Confirm itinerary costs and choose destination partners." },
      { title: "File and book", description: "Coordinate visa documentation and confirm flights, accommodation, and transfers." },
      { title: "Brief travellers", description: "Share travel documents, booking details, and local contacts before departure." },
      { title: "Support the trip", description: "Coordinate with ground partners and help travellers manage changes during active trips." },
    ],
  },
  {
    id: "partnerships",
    title: "Support for international expansion",
    paragraphs: ["Engage the travel desk for founder and investor roadshows, team relocation, market entry, or retained travel coordination. Go Travel Global also works with coworking providers and other startup ecosystem partners."],
  },
];

export const workspaceMarkets = source.workspaceMarkets.map((market, index) => ({
  ...market,
  id: ["india-metros", "regional-hubs", "international-gateways"][index],
}));

export const workspaceSections = [
  {
    id: "about",
    title: "Flexible workspaces for teams at every stage",
    paragraphs: [
      "ThinkRunSpace helps founders and enterprises set up in new markets with virtual offices, serviced offices, coworking, and managed floors.",
      "Choose the fit-out, IT infrastructure, and admin support your team needs. Start with a virtual presence and move into physical space as your requirements grow.",
    ],
  },
  {
    id: "services",
    title: "Workspace solutions",
    paragraphs: ["Explore options for establishing a business address, setting up a team office, or booking space by the day."],
    offerings: [
      {
        id: "virtual-office-solutions",
        title: "Virtual Offices",
        description: "Establish a business address with mail handling and support for registration documentation.",
        profile: { title: "Virtual office options", bullets: ["Business address and mail handling", "GST/KYC documentation support", "On-demand meeting rooms"] },
      },
      {
        id: "serviced-and-managed-offices",
        title: "Serviced & Managed Offices",
        description: "Set up in a private, furnished suite or configure a dedicated floor around your team.",
        profile: { title: "Fit-out and operational support", bullets: ["Bare-shell, semi-furnished, or fully furnished fit-out", "Managed IT and building access options", "Reception, pantry, and onsite support options"] },
      },
      {
        id: "co-working-spaces",
        title: "Coworking Spaces",
        description: "Book dedicated desks or collaborative team pods as your headcount changes.",
        profile: { title: "Flexible workspace", bullets: ["Dedicated desks and team pods", "Shared facilities and meeting access", "Options for individual founders and distributed teams"] },
      },
      {
        id: "meeting-rooms-and-business-infra",
        title: "Meeting & Business Suites",
        description: "Book rooms for client meetings, interviews, and team sessions, with AV and onsite support options.",
        profile: { title: "Meeting infrastructure", bullets: ["Private meeting rooms and boardrooms", "Audiovisual equipment and guest access", "Reception and support options"] },
      },
    ],
  },
  {
    id: "global-presence",
    title: "From India’s metros to international gateways",
    paragraphs: ["ThinkRunSpace’s expansion programme covers flagship Indian metros, regional hubs, and international business gateways. Ask the Delhi team about the workspace formats available in your target city."],
  },
  {
    id: "partnerships",
    title: "Workspace and expansion partnerships",
    paragraphs: ["Programmes cover startup and venture scale-up, cross-border market entry and Global Capability Center launches, and partnerships with commercial landlords and channel providers."],
  },
  {
    id: "leadership",
    title: "Leadership",
    paragraphs: [],
    points: [
      { title: "Dr. Shobhit Gupta", description: "Leads enterprise strategy, multi-city expansion, and institutional partnerships." },
      { title: "Abhay Singh", description: "Leads workspace architecture, modular infrastructure, and service-level governance." },
      { title: "Shivani Sangwan", description: "Leads client experience, community hospitality, and virtual office compliance." },
    ],
  },
] satisfies (ProfileSection & { offerings?: unknown[] })[];

export const travelDestinations = source.destinations;
