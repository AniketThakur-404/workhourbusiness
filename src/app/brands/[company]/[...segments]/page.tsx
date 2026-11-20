import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { activeCompany } from "@/lib/company-site-config";
import { isCompanySlug } from "@/lib/company-sites";
import BrandDetail from "../../BrandDetail";
import CompanyPage, { companyPageContent } from "../../CompanyPage";
import { findCompanyService, getCompanyCatalog, getCompanyRouteSegments } from "../../company-catalog";

type RouteParams = { company: string; segments: string[] };
type Props = { params: Promise<RouteParams> };

function resolvePage({ company, segments }: RouteParams) {
  if (!isCompanySlug(company) || company !== activeCompany) notFound();
  const [category, id] = segments;
  if (segments.length === 1) {
    const page = companyPageContent(company, category);
    if (page) return { company, category, page };
  }
  if (segments.length === 2 && category === getCompanyCatalog(company).category) {
    const service = findCompanyService(company, id);
    if (service) return { company, category, service };
  }
  notFound();
}

export function generateStaticParams(): RouteParams[] {
  const company = activeCompany;
  return company
    ? getCompanyRouteSegments(company).map((segments) => ({ company, segments }))
    : [{ company: "employaa", segments: ["about"] }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = resolvePage(await params);
  const { title, description } = route.page ?? route.service;
  return { title, description };
}

export default async function Page({ params }: Props) {
  const route = resolvePage(await params);
  if (route.service) return <BrandDetail brand={route.company} service={route.service} />;
  return <CompanyPage slug={route.company} page={route.category} content={route.page} />;
}
