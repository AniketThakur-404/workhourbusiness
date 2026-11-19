import ServiceDetail from "../ServiceDetail";
import { services } from "../services";

export const metadata = { title: services["website-designing"].title };

export default function WebsiteDesigningPage() {
  return <ServiceDetail slug="website-designing" />;
}
