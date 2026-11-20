import { isCompanySlug } from "./company-sites";

function getActiveCompany() {
  const slug = process.env.NEXT_PUBLIC_COMPANY_SLUG;
  if (!slug) return undefined;
  if (!isCompanySlug(slug)) {
    throw new Error(`Unknown NEXT_PUBLIC_COMPANY_SLUG: ${slug}`);
  }

  return slug;
}

export const activeCompany = getActiveCompany();
