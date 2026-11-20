import Image from "next/image";
import Link from "next/link";
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

const groupMarkets: CompanySection[] = [
  { title: "Asia", bullets: ["India", "Malaysia"] },
  { title: "Oceania", bullets: ["Australia"] },
  { title: "Middle East", bullets: ["United Arab Emirates"] },
  { title: "Africa", bullets: ["Kenya", "Zimbabwe", "Malawi", "Rwanda"] },
  { title: "North America", bullets: ["Canada", "Mexico"] },
];

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
    return { ...catalog.about, image, description: company.description };
  }
  if (page === catalog.category) {
    return { title: catalog.label, description: catalog.introduction, image: company.image };
  }
  if (page === "contact") {
    return { title: `Contact ${company.title}`, description: "Tell us about your goals and the support you’re looking for.", image };
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
      <h2>Contact {title}</h2>
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
          <Link className="button button-light" href="/contact/">Contact us</Link>
        )}
      </BrandHero>
      <div className={styles.content}>
        {page === "about" && <AboutContent slug={slug} image={content.image} />}
        {page === catalog.category && (
          <ServiceCards category={catalog.category} services={catalog.services} />
        )}
        {page === "our-global-reach" && (
          <>
            <CompanySections sections={globalDetails} />
            <p className={styles.scopeNote}>These group planning markets are indicative. Contact the company to discuss service availability in a specific location.</p>
            <CompanySections sections={groupMarkets} />
          </>
        )}
        {page === "industries" && <CompanySections sections={industrySections} />}
        {page === "events-and-insights" && <CompanySections sections={eventSections} />}
        <CompanyContact slug={slug} />
      </div>
    </CompanyFrame>
  );
}
