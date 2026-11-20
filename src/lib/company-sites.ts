export const companySlugs = [
  "inceptura",
  "leaders-pinnacle",
  "employaa",
  "elevatrain",
  "go-travel-global",
  "remunerax",
  "thinkrunspace",
] as const;

export type CompanySlug = (typeof companySlugs)[number];

export function isCompanySlug(value: string): value is CompanySlug {
  return companySlugs.some((slug) => slug === value);
}

export function companyUrl(slug: CompanySlug, path = "/") {
  return `https://workhourbusiness-${slug}.vercel.app${path}`;
}

export const workhourUrl = (
  process.env.NEXT_PUBLIC_WORKHOUR_URL || "https://workhourbusiness.vercel.app"
).replace(/\/+$/, "");

export const companyDetailPaths = {
  "leaders-pinnacle": "/services/bespoke-corporate-events/",
  elevatrain: "/trainings/mindfulness/",
} as const;
