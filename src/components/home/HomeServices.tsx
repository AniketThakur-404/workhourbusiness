import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "@/app/services/ServiceIcon";
import { services, type ServiceSlug } from "@/app/services/services";

export default function HomeServices() {
  const slugs = Object.keys(services) as ServiceSlug[];

  return (
    <section className="home-services section-pad">
      <p className="eyebrow teal">Workhour Business services</p>
      <h2>Expertise for the next step.</h2>
      <p className="home-services-intro">
        Explore digital design, animation, and marketing support for your
        business.
      </p>
      <div className="home-service-grid">
        {slugs.map((slug) => (
          <Link
            className="home-service-card"
            href={`/services/${slug}/`}
            key={slug}
          >
            <span className="home-service-image">
              <Image
                {...services[slug].illustration}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            </span>
            <span className="home-service-content">
              <ServiceIcon slug={slug} className="home-service-icon" />
              <strong>{services[slug].title}</strong>
              <span className="home-service-cta">
                Explore service <span aria-hidden="true">↗</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
