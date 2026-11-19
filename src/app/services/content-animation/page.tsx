import ServiceDetail from "../ServiceDetail";
import { services } from "../services";

export const metadata = { title: services["content-animation"].title };

export default function ContentAnimationPage() {
  return <ServiceDetail slug="content-animation" />;
}
