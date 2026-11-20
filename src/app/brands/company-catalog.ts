import type { CompanySlug } from "@/lib/company-sites";
import { businesses } from "../businesses/businesses";
import originals from "./original-companies.json";

export type CompanyImage = { src: string; alt: string };

export type CompanySection = {
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
  points?: { title: string; description: string }[];
  image?: CompanyImage;
  imagePlacement?: "portrait-left";
  groups?: { title: string; bullets: string[] }[];
};

export type CompanyService = {
  id: string;
  title: string;
  description: string;
  image: CompanyImage;
  photo?: CompanyImage;
  sections: CompanySection[];
  current?: CompanySection[];
};

type OriginalCompany = {
  category: string;
  hasGlobalReach: boolean;
  tagline: string;
  introduction: string;
  about: Omit<CompanyService, "id">;
  services: CompanyService[];
};

const originalCompanies: Record<CompanySlug, OriginalCompany> = originals;

const categories: Record<string, string> = {
  services: "Services",
  offerings: "Offerings",
  trainings: "Training",
};

const employaaIds: Record<string, string> = {
  "contract-hiring": "contract-staffing",
  "it-tech-staffing": "tech-hiring",
};

export const leadersExtraPages = {
  industries: "Industries",
  "events-and-insights": "Events & Insights",
};

export function getCompanyCatalog(slug: CompanySlug) {
  const original = originalCompanies[slug];
  const business = businesses[slug];
  const updated = business.sections.flatMap(({ offerings }) => offerings ?? []);
  const used = new Set<string>();
  const services: CompanyService[] = original.services.map((service) => {
    const updatedIds = slug === "employaa"
      ? service.id === "gig-industry-specific"
        ? ["gig-workforce", "industry-specific-hiring"]
        : [employaaIds[service.id] ?? service.id]
      : [service.id];
    const matches = updated.filter(({ id }) => updatedIds.includes(id));
    const match = matches.length === 1 ? matches[0] : undefined;
    if (match) used.add(match.id);

    return {
      ...service,
      title: match?.profile?.title ?? service.title,
      photo: match?.image,
      current: matches.flatMap(({ title, description, details, profile }) =>
        profile ? [profile] : description ? [{ title, paragraphs: [description], bullets: details }] : []
      ),
    };
  });

  for (const offering of updated) {
    if (used.has(offering.id) || !offering.description) continue;
    services.push({
      id: offering.id,
      title: offering.title,
      description: offering.description,
      image: offering.image ?? business.image,
      current: offering.profile ? [offering.profile] : [],
      sections: offering.details ? [{ title: "What’s included", bullets: offering.details }] : [],
    });
  }

  return {
    ...original,
    label: categories[original.category],
    href: `/${original.category}/`,
    services,
  };
}

export function servicePath(category: string, id: string) {
  return `/${category}/${id}/`;
}

export function getCompanyRouteSegments(slug: CompanySlug) {
  const { category, hasGlobalReach, services } = getCompanyCatalog(slug);
  return [
    ["about"],
    ["contact"],
    [category],
    ...services.map(({ id }) => [category, id]),
    ...(hasGlobalReach ? [["our-global-reach"]] : []),
    ...(slug === "leaders-pinnacle" ? Object.keys(leadersExtraPages).map((id) => [id]) : []),
    ...(slug === "employaa" ? Object.values(employaaIds).map((id) => [category, id]) : []),
  ];
}

export function findCompanyService(slug: CompanySlug, id: string) {
  const { services } = getCompanyCatalog(slug);
  const oldId = slug === "employaa"
    ? Object.keys(employaaIds).find((key) => employaaIds[key] === id) ?? id
    : id;
  return services.find((service) => service.id === oldId);
}
