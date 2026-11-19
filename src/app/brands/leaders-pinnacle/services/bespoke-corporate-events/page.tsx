import BrandDetail from "../../../BrandDetail";
import { brandDetails } from "../../../brand-details";

const brand = brandDetails["leaders-pinnacle"];

export const metadata = { title: brand.title, description: brand.description };

export default function Page() {
  return <BrandDetail brand={"leaders-pinnacle"} />;
}
