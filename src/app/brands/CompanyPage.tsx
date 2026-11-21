import Link from "next/link";
import { employaaContact } from "../businesses/employaa-presentation";
import { EmployaaServiceIndex } from "./EmployaaServices";
import { workhourUrl, type CompanySlug } from "@/lib/company-sites";
import { businesses } from "../businesses/businesses";
import BrandHero from "./BrandHero";
import CompanyFrame from "./CompanyFrame";
import CompanySections from "./CompanySections";
import ServiceCards from "./ServiceCards";
import {
  getCompanyCatalog,
  leadersExtraPages,
  type CompanyImage,
  type CompanySection,
} from "./company-catalog";
import styles from "./CompanySite.module.css";

const groupMarkets = [
  { title: "Asia", bullets: ["India", "Malaysia"] },
  { title: "Oceania", bullets: ["Australia"] },
  { title: "Middle East", bullets: ["United Arab Emirates"] },
  { title: "Africa", bullets: ["Kenya", "Zimbabwe", "Malawi", "Rwanda"] },
  { title: "North America", bullets: ["Canada", "Mexico"] },
];

function PlanningMarkets() {
  return (
    <section className={styles.planningMarkets} aria-labelledby="planning-markets-title">
      <div className={styles.marketsHeader}>
        <h2 id="planning-markets-title">Group planning markets</h2>
        <p>
          Markets identified in Workhour Business’s expansion plans.
          <br />
          <Link href="/contact/">Contact us to confirm service availability.</Link>
        </p>
      </div>
      <div className={styles.marketsGrid}>
        {groupMarkets.map(({ title, bullets }) => (
          <div className={styles.marketRegion} key={title}>
            <h3>{title}</h3>
            <ul>
              {bullets.map((country) => <li key={country}>{country}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const eventSections: CompanySection[] = [
  {
    title: "Speak",
    paragraphs: ["Propose a topic or contribute your experience to a Leaders Pinnacle summit or industry forum."],
  },
  {
    title: "Sponsor",
    paragraphs: ["Discuss sponsorship packages, audience fit, and how to measure the results of your participation."],
  },
  {
    title: "Partner",
    paragraphs: ["Venues, technology providers, associations, and media can collaborate on co-branded programmes."],
  },
];

const industrySections: CompanySection[] = [
  { title: "Technology & SaaS", paragraphs: ["Customer forums, launches, and demand generation events."] },
  { title: "Banking and financial services", paragraphs: ["Industry dialogues on regulation, innovation, and trust."] },
  { title: "Manufacturing", paragraphs: ["Trade expos and summits for suppliers, engineers, and procurement teams."] },
  { title: "Healthcare", paragraphs: ["Forums for clinical, operational, and policy audiences."] },
  { title: "Energy & Infrastructure", paragraphs: ["Events focused on investment, sustainability, and the energy transition."] },
  { title: "Government & Associations", paragraphs: ["Policy dialogues, outreach programmes, and knowledge-sharing events."] },
];

export function companyPageContent(slug: CompanySlug, page: string) {
  const company = businesses[slug];
  const catalog = getCompanyCatalog(slug);
  const image = company.supportImage ?? company.image;

  if (page === "about") {
    const aboutImage = company.sections.find(({ id }) => id === "about")?.image;
    return { ...catalog.about, image: aboutImage ? company.image : image, description: company.description };
  }
  if (page === catalog.category) {
    const catalogueImage = company.sections.find(({ id }) => id === catalog.category)?.image;
    return { title: catalog.label, description: catalog.introduction, image: catalogueImage ?? company.image };
  }
  if (page === "contact") {
    return {
      title: `Contact ${company.title}`,
      description: "Tell us about your goals and the support you’re looking for.",
      image: company.contact?.image ?? image,
    };
  }
  if (page === "our-global-reach" && catalog.hasGlobalReach) {
    return {
      title: "Our Global Reach",
      description: slug === "leaders-pinnacle"
        ? "Leaders Pinnacle works with regional event partners across India, Asia, the Middle East, and Africa."
        : "Markets identified in Workhour Business’s group expansion plans.",
      image,
    };
  }
  if (slug === "leaders-pinnacle" && Object.hasOwn(leadersExtraPages, page)) {
    const section = company.sections.find(({ id }) => id === page);
    const title = leadersExtraPages[page as keyof typeof leadersExtraPages];
    return { title, description: section?.paragraphs[0] ?? company.description, image };
  }
}

export function CompanyContact({ slug }: { slug: CompanySlug }) {
  const { title, contact } = businesses[slug];
  return (
    <section className={styles.contact} id="contact">
      <div>
        <h2>Contact {title}</h2>
        {slug === "employaa" && <p className={styles.subtitle}>{employaaContact.title}</p>}
        <div className={styles.actions}>
          {contact ? (
            <>
              <a className="button button-dark" href={`mailto:${contact.email}`}>{contact.email}</a>
              {contact.phone && <a className="text-link" href={contact.phone.href}>{contact.phone.label}</a>}
            </>
          ) : (
            <a className="button button-dark" href={`${workhourUrl}/contact/`}>Contact Workhour Business</a>
          )}
        </div>
        {slug === "employaa" && <p className={styles.websiteAddress}>Website<br />www.workhourbusiness.com/employaa</p>}
      </div>
    </section>
  );
}

function AboutContent({ slug, image }: { slug: CompanySlug; image: CompanyImage }) {
  const catalog = getCompanyCatalog(slug);
  const company = businesses[slug];
  const updated = company.sections.filter(({ id }) =>
    !["services", "trainings", "global-presence", "industries", "events-and-insights"].includes(id)
  );
  const sections = updated.map((section, index) => ({
    ...section,
    image: section.image ?? (index === 0 ? image : undefined),
  }));
  const existing = new Set(updated.flatMap(({ paragraphs }) => paragraphs));
  const original = catalog.about.sections.flatMap(({ title, paragraphs, bullets }) => {
    const fresh = paragraphs?.filter((paragraph) => !existing.has(paragraph));
    if (!fresh?.length && !bullets?.length) return [];
    return [{ title, paragraphs: fresh, bullets }];
  });

  return (
    <>
      <CompanySections sections={sections} />
      {original.length > 0 && (
        <details className={styles.companyBackground}>
          <summary>Company background</summary>
          <CompanySections sections={original} />
        </details>
      )}
    </>
  );
}

export default function CompanyPage({
  slug,
  page,
  content,
}: {
  slug: CompanySlug;
  page: string;
  content: NonNullable<ReturnType<typeof companyPageContent>>;
}) {
  const company = businesses[slug];
  const catalog = getCompanyCatalog(slug);
  const globalDetails = company.sections.filter(({ id }) => id === "global-presence");

  return (
    <CompanyFrame slug={slug} currentPath={`/${page}/`}>
      <BrandHero {...content} label={company.title} compact>
        {page === "contact" ? (
          <Link className="button button-light" href={catalog.href}>Explore {catalog.label.toLowerCase()}</Link>
        ) : (
          <Link className="button button-light" href="/contact/">
            {slug === "leaders-pinnacle" ? "Plan an event" : "Contact us"}
          </Link>
        )}
      </BrandHero>
      {slug === "leaders-pinnacle" && page === catalog.category && (
        <div className={styles.statsStrip}>
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
        </div>
      )}
      <div className={styles.content}>
        {page === "about" && <AboutContent slug={slug} image={content.image} />}
        {page === catalog.category && (
          slug === "employaa"
            ? <EmployaaServiceIndex />
            : <ServiceCards category={catalog.category} services={catalog.services} />
        )}
        {page === "our-global-reach" && (
          <>
            <CompanySections sections={globalDetails} />
            {slug === "leaders-pinnacle" ? <PlanningMarkets /> : (
              <>
                <p className={styles.scopeNote}>These group planning markets are indicative. Contact the company to discuss service availability in a specific location.</p>
                <CompanySections sections={groupMarkets} />
              </>
            )}
          </>
        )}
        {page === "industries" && (
          <CompanySections
            sections={
              slug === "leaders-pinnacle"
                ? company.sections.filter(({ id }) => id === "industries")
                : industrySections
            }
          />
        )}
        {page === "events-and-insights" && (
          <CompanySections
            sections={
              slug === "leaders-pinnacle"
                ? company.sections.filter(({ id }) => id === "events-and-insights")
                : eventSections
            }
          />
        )}
        {(slug !== "employaa" || page === "contact") && <CompanyContact slug={slug} />}
      </div>
    </CompanyFrame>
  );
}
