import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ServiceIcon from "./ServiceIcon";
import { services, type ServiceSlug } from "./services";

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const {
    title,
    description,
    image,
    illustration,
    lead,
    overview,
    sections,
    showSectionLinks,
  } = services[slug];

  return (
    <div className="review-page service-detail-page banner-page">
      <PageBanner
        title={title}
        description={description}
        image={image}
        parent={{ href: "/services/", label: "Services" }}
      />
      <div className="review-inner">
        <p className="service-lead">{lead}</p>
        <div className="service-detail-illustration">
          <Image
            {...illustration}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1455px) 88vw, 1280px"
          />
        </div>
        <section className="service-overview">
          <p className="eyebrow teal">Who it serves</p>
          <h2>Start with the people and goals.</h2>
          <p>{overview.audience}</p>
          <h3>How the work takes shape</h3>
          <p>{overview.process}</p>
          <h3>Practical benefits</h3>
          <p>{overview.benefits}</p>
        </section>
        {showSectionLinks && (
          <nav className="about-jumps" aria-label={`${title} scope sections`}>
            {sections.map(({ heading }, index) => (
              <a href={`#service-section-${index}`} key={heading}>
                {heading}
              </a>
            ))}
          </nav>
        )}
        <div className="service-detail-sections">
          {sections.map(({ heading, paragraphs }, index) => (
            <section
              className="about-content service-content ServiceDetail-module__PK8x7q__section"
              id={`service-section-${index}`}
              key={heading}
            >
              <div className="ServiceDetail-module__PK8x7q__icon">
                <ServiceIcon slug={slug} />
              </div>
              <div className="ServiceDetail-module__PK8x7q__copy">
                <h2>{heading}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="services-contact">
          <p className="eyebrow teal">Next step</p>
          <h2>Explore the right service area.</h2>
          <p>
            Browse Workhour Business services and brands to identify a useful
            starting point.
          </p>
          <Link className="button button-dark" href="/contact/">
            Explore contact options <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <nav className="service-switcher" aria-label="Other services">
          <Link href="/services/">All services</Link>
          {Object.entries(services)
            .filter(([otherSlug]) => otherSlug !== slug)
            .map(([otherSlug, service]) => (
              <Link href={`/services/${otherSlug}/`} key={otherSlug}>
                {service.title} <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
