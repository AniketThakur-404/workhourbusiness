import ServiceDetail from "../ServiceDetail";
import { services } from "../services";

export const metadata = { title: services["seo-marketing"].title };

export default function SeoMarketingPage() {
  return <ServiceDetail slug="seo-marketing" />;
}
