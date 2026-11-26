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
import { employaaCover } from "./employaa-presentation";
import EmployaaHome from "../brands/EmployaaHome";
import IncepturaHome from "../brands/IncepturaHome";
import LeadersPinnacleHome from "../brands/LeadersPinnacleHome";
import { DestinationExplorer, WorkspacePlanner } from "../brands/PortfolioTools";
import { travelDestinations } from "./updated-portfolios";

export default function CompanyProfile({ slug }: { slug: CompanySlug }) {
  const company = businesses[slug];
  const catalog = getCompanyCatalog(slug);
  const overview = company.sections[0];
  const catalogueInfo = company.sections.find(({ id, offerings }) =>
    id === catalog.category || id === "services" || Boolean(offerings)
  );
  const moreSections = company.sections.filter(({ id }) =>
    id !== overview.id && id !== catalogueInfo?.id
  );
  const intro = {
    ...overview,
    image: overview.image ?? (
      company.supportImage?.src !== company.image.src
        ? company.supportImage ?? undefined
        : undefined
    ),
  };

  return (
    <CompanyFrame slug={slug}>
      <BrandHero
        title={company.updatedProfile?.headline ?? company.title}
        description={company.description}
        image={company.image}
        label={company.updatedProfile ? company.title : slug === "employaa" ? employaaCover.paragraphs[0] : catalog.tagline}
        artwork
      >
        <Link className="button button-light" href={catalog.href}>Explore {catalog.label.toLowerCase()}</Link>
        <Link className={`text-link ${styles.bannerLink}`} href="/contact/">
          {slug === "leaders-pinnacle" ? "Plan an event" : "Contact us"}
        </Link>
      </BrandHero>
      {(slug === "leaders-pinnacle" || slug === "employaa") && (
        <div className={styles.statsStrip}>
          {slug === "leaders-pinnacle" ? (
            <>
              <div className={styles.statItem}>
                <b>3</b>
                <span>Regions</span>
              </div>
              <div className={styles.statItem}>
                <b>14</b>
                <span>Hub Cities</span>
              </div>
              <div className={styles.statItem}>
                <b>5</b>
                <span>Event Formats</span>
              </div>
              <div className={styles.statItem}>
                <b>1</b>
                <span>Accountable Partner</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.statItem}>
                <b>2</b>
                <span>Engagement Models</span>
              </div>
              <div className={styles.statItem}>
                <b>Entry–CXO</b>
                <span>Talent Spectrum</span>
              </div>
              <div className={styles.statItem}>
                <b>9</b>
                <span>Hiring Practices</span>
              </div>
              <div className={styles.statItem}>
                <b>100%</b>
                <span>Compliance-Led</span>
              </div>
            </>
          )}
        </div>
      )}
      <div className={styles.content}>
        {slug === "employaa" ? (
          <EmployaaHome />
        ) : slug === "inceptura" ? (
          <IncepturaHome />
        ) : slug === "leaders-pinnacle" ? (
          <LeadersPinnacleHome />
        ) : (
          <>
            <CompanySections sections={[intro]}>
              <div className={styles.overviewLink}>
                <Link className="text-link" href="/about/">About {company.title}</Link>
              </div>
            </CompanySections>
            <section className={styles.section} id={catalogueInfo?.id ?? catalog.category}>
              <div className={styles.sectionCopy}>
                <h2>{catalogueInfo?.title ?? catalog.label}</h2>
                {catalogueInfo?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <Link className="text-link" href={catalog.href}>View all {catalog.label.toLowerCase()}</Link>
              </div>
              <ServiceCards category={catalog.category} services={catalog.services} />
            </section>
            {slug === "go-travel-global" && <div className={styles.section}><DestinationExplorer destinations={travelDestinations} /></div>}
            {slug === "thinkrunspace" && <div className={styles.section}><WorkspacePlanner /></div>}
            {moreSections.map((section) => (
              <CompanySections key={section.id} sections={[section]}>
                {slug === "thinkrunspace" && section.id === "global-presence" &&
                  <Link className="text-link" href="/our-global-reach/">Explore the workspace network</Link>}
              </CompanySections>
            ))}
          </>
        )}
        <CompanyContact slug={slug} />
      </div>
    </CompanyFrame>
  );
}
