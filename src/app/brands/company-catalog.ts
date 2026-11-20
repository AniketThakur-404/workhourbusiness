import type { CompanySlug } from "@/lib/company-sites";
import { businesses } from "../businesses/businesses";
import originals from "./original-companies.json";

export type CompanyImage = { src: string; alt: string };

export type CompanySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: CompanyImage;
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
    if (matches.length === 1) used.add(matches[0].id);

    return {
      ...service,
      photo: matches.length === 1 ? matches[0].image : undefined,
      current: matches.flatMap(({ title, description }) =>
        description ? [{ title, paragraphs: [description] }] : []
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
      sections: [],
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
