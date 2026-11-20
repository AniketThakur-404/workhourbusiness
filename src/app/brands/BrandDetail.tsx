import Image from "next/image";
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
  const sections = [...current, ...service.sections];
  const photo = service.photo ?? service.image;

  return (
    <CompanyFrame slug={brand} currentPath={servicePath(catalog.category, service.id)}>
      <BrandHero title={service.title} description={service.description} image={service.image} label={catalog.tagline}>
        <Link className="button button-light" href={catalog.href}>Explore {catalog.label.toLowerCase()}</Link>
        <Link className={`text-link ${styles.bannerLink}`} href="/contact/">Contact us</Link>
      </BrandHero>
      <div className={`${styles.content} ${styles.detailLayout}`}>
        <div>
          {sections.length > 0
            ? <CompanySections sections={sections} />
            : <CompanySections sections={[{ title: service.title, paragraphs: [service.description] }]} />}
          <div className={styles.actions}>
            <Link className="button button-dark" href="/contact/">Contact us about this service</Link>
            <Link className="text-link" href={catalog.href}>All {catalog.label.toLowerCase()}</Link>
          </div>
        </div>
        <aside className={styles.detailAside} aria-label="Service overview">
          <div className={styles.cardPhoto}>
            <Image {...photo} fill sizes="(max-width: 760px) 100vw, 30vw" />
          </div>
          <Link className="text-link" href={catalog.href}>Browse {catalog.label.toLowerCase()}</Link>
        </aside>
      </div>
    </CompanyFrame>
  );
}
