import type { Metadata } from "next";
import { activeCompany } from "@/lib/company-site-config";
import CompanyProfile from "./businesses/CompanyProfile";
import { businesses } from "./businesses/businesses";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import BusinessesSection from "@/components/home/BusinessesSection";
import ValuesSection from "@/components/home/ValuesSection";
import IgnitiaFeature from "@/components/home/IgnitiaFeature";
import HomeServices from "@/components/home/HomeServices";

export function generateMetadata(): Metadata {
  if (!activeCompany) return {};
  const { title, description } = businesses[activeCompany];
  return { title, description };
}

export default function Home() {
  if (activeCompany) return <CompanyProfile slug={activeCompany} />;

  return (
    <>
      <HeroSection />
      <IntroSection />
      <BusinessesSection />
      <ValuesSection />
      <IgnitiaFeature />
      <HomeServices />
    </>
  );
}
