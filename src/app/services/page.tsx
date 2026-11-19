import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { services } from "./services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="review-page services-page banner-page">
      <PageBanner
        title="Services"
        description="Design, motion, and marketing support shaped around your audience and business goals."
        image={services["website-designing"].image}
      />
      <div className="review-inner">
        <div className="services-index">
          {Object.entries(services).map(([slug, service], index) => (
            <article key={slug}>
              <div className="service-card-image">
                <Image
                  {...service.image}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <span>0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link className="text-link" href={`/services/${slug}/`}>
                Explore service <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <section className="services-contact">
          <p className="eyebrow teal">Explore Workhour Business</p>
          <h2>Find the right starting point for your needs.</h2>
          <p>Compare the group’s specialist businesses and service areas.</p>
          <Link className="button button-dark" href="/contact/">
            Explore contact options <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
