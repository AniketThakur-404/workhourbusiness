import BrandDetail from "../../../BrandDetail";
import { brandDetails } from "../../../brand-details";

const brand = brandDetails["elevatrain"];

export const metadata = { title: brand.title, description: brand.description };

export default function Page() {
  return <BrandDetail brand={"elevatrain"} />;
}
