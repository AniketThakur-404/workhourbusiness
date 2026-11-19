import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
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
          {Object.entries(businesses).map(([slug, business], index) => (
            <article key={slug} id={slug}>
              <div className="business-list-image">
                <Image
                  {...business.image}
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </div>
              <div>
                <p className="eyebrow teal">Business 0{index + 1} / 07</p>
                <h2>{business.title}</h2>
                <p>{business.description}</p>
                <Link className="text-link" href={`/businesses/${slug}/`}>
                  Explore {business.title} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <section className="page-next-step">
          <h2>Explore the Workhour Business group.</h2>
          <Link className="button button-dark" href="/businesses/">
            Explore businesses <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
