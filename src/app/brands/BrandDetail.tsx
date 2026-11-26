import Link from "next/link";
import type { CompanySlug } from "@/lib/company-sites";
import BrandHero from "./BrandHero";
import CompanyFrame from "./CompanyFrame";
import CompanySections from "./CompanySections";
import { getCompanyCatalog, servicePath, type CompanyService } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function BrandDetail({ brand, service }: { brand: CompanySlug; service: CompanyService }) {
  const catalog = getCompanyCatalog(brand);
  const current = service.current ?? [];
  const photo = service.photo ?? service.image;
  const content = [...current, ...service.sections];
  const sections = content.length ? content : [{ title: service.title, paragraphs: [service.description] }];

  return (
    <CompanyFrame slug={brand} currentPath={servicePath(catalog.category, service.id)}>
      <BrandHero title={service.title} description={service.description} image={photo} label={catalog.tagline} compact>
        <Link className="button button-light" href={catalog.href}>Explore {catalog.label.toLowerCase()}</Link>
        <Link className={`text-link ${styles.bannerLink}`} href="/contact/">Contact us</Link>
      </BrandHero>
      <div className={styles.content}>
        <CompanySections sections={sections} />
        <div className={styles.contact}>
          <h2>Discuss {service.title}</h2>
          <div className={styles.actions}>
            <Link className="button button-dark" href="/contact/">Contact us about this service</Link>
            <Link className="text-link" href={catalog.href}>All {catalog.label.toLowerCase()}</Link>
          </div>
        </div>
      </div>
    </CompanyFrame>
  );
}
