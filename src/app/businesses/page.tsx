import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { companySlugs, companyUrl } from "@/lib/company-sites";
import BusinessLogo from "./BusinessLogo";
import { businesses } from "./businesses";

export const metadata = { title: "Our businesses" };

export default function BusinessesPage() {
  return (
    <div className="review-page banner-page">
      <PageBanner
        title="Our businesses"
        description="Seven specialist brands offer focused support across business setup, people, payroll, travel, learning, workspaces, and events."
        image={{
          src: "/about-story-v2.webp",
          alt: "Illustrative specialists collaborating across business disciplines",
        }}
      />
      <div className="review-inner">
        <div className="review-business-list">
          {companySlugs.map((slug) => {
            const business = businesses[slug];
            return (
              <article key={slug} id={slug}>
                <div className="business-list-image">
                  <Image
                    {...business.image}
                    fill
                    sizes="(max-width: 700px) 100vw, 40vw"
                  />
                </div>
                <div>
                  <BusinessLogo slug={slug} name={business.title} />
                  <h2>{business.title}</h2>
                  <p>{business.description}</p>
                  <Link className="text-link" href={companyUrl(slug)}>
                    Visit {business.title}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
