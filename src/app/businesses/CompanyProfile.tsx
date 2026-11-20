import Link from "next/link";
import type { CompanySlug } from "@/lib/company-sites";
import BrandHero from "../brands/BrandHero";
import CompanyFrame from "../brands/CompanyFrame";
import { CompanyContact } from "../brands/CompanyPage";
import CompanySections from "../brands/CompanySections";
import ServiceCards from "../brands/ServiceCards";
import { getCompanyCatalog } from "../brands/company-catalog";
import styles from "../brands/CompanySite.module.css";
import { businesses } from "./businesses";

export default function CompanyProfile({ slug }: { slug: CompanySlug }) {
  const company = businesses[slug];
  const catalog = getCompanyCatalog(slug);
  const overview = company.sections[0];
  const catalogueInfo = company.sections.find(({ id }) =>
    id === "services" || id === "trainings"
  );
  const moreSections = company.sections.filter(({ id }) =>
    id !== overview.id && id !== catalogueInfo?.id
  );
  const intro = {
    ...overview,
    image: company.supportImage?.src !== company.image.src
      ? company.supportImage ?? undefined
      : undefined,
  };

  return (
    <CompanyFrame slug={slug}>
      <BrandHero title={company.title} description={company.description} image={company.image} label={catalog.tagline}>
        <Link className="button button-light" href={catalog.href}>Explore {catalog.label.toLowerCase()}</Link>
        <Link className={`text-link ${styles.bannerLink}`} href="/contact/">Contact us</Link>
      </BrandHero>
      <div className={styles.content}>
        <CompanySections sections={[intro]} />
        <div className={styles.overviewLink}>
          <Link className="text-link" href="/about/">About {company.title}</Link>
        </div>
        <section className={styles.section} id={catalogueInfo?.id ?? catalog.category}>
          <div className={styles.sectionCopy}>
            <h2>{catalogueInfo?.title ?? catalog.label}</h2>
            {catalogueInfo?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" href={catalog.href}>View all {catalog.label.toLowerCase()}</Link>
          </div>
          <ServiceCards category={catalog.category} services={catalog.services} />
        </section>
        <CompanySections sections={moreSections} />
        <CompanyContact slug={slug} />
      </div>
    </CompanyFrame>
  );
}
