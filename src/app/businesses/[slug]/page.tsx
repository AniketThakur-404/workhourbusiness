import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { businesses } from "../businesses";

type BusinessPageProps = { params: Promise<{ slug: string }> };

function getBusiness(slug: string) {
  if (!Object.hasOwn(businesses, slug)) notFound();
  return businesses[slug];
}

export function generateStaticParams() {
  return Object.keys(businesses).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BusinessPageProps) {
  const { title, description } = getBusiness((await params).slug);
  return { title, description };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const { title, description, image, supportImage, sections, url } =
    getBusiness(slug);

  return (
    <div className="review-page banner-page">
      <PageBanner
        title={title}
        description={description}
        image={image}
        parent={{ href: "/businesses/", label: "Portfolio" }}
      />
      <div className="review-inner">
        {supportImage && (
          <div className="portfolio-support-image">
            <Image
              {...supportImage}
              fill
              sizes="(max-width: 700px) 100vw, 40vw"
            />
          </div>
        )}
        {sections.map(({ title, paragraphs, bullets }) => (
          <section className="about-content business-copy-section" key={title}>
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {bullets && (
              <ul className="brand-bullets">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="about-content">
          <h2>Explore the group</h2>
          <div className="brand-switcher">
            {Object.entries(businesses)
              .filter(([key]) => key !== slug)
              .map(([key, business]) => (
                <a href={business.url} key={key}>
                  {business.title} <span aria-hidden="true">↗</span>
                </a>
              ))}
          </div>
        </section>
        <section className="about-content brand-contact-cta">
          <h2>Explore {title}.</h2>
          <p>
            Visit the dedicated brand experience to review its services and
            offerings.
          </p>
          <a className="button button-dark" href={url}>
            Visit {title} <span aria-hidden="true">↗</span>
          </a>
        </section>
        <Link className="text-link" href="/businesses/">
          All businesses <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
