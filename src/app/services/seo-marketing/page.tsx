import Link from "next/link";
import Image from "next/image";

export default function SeoMarketingPage() {
  return (
    <div className="review-page service-detail-page banner-page">
      <section
        aria-label="SEO &amp; Marketing introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative digital marketer analyzing data charts in a bright office studio"
          className="PageBanner-module__C7wuVW__image"
          src="/digital-marketing.webp"
          fill
          priority
          style={{ objectFit: "cover", position: "absolute" }}
        />
        <div aria-hidden="true" className="PageBanner-module__C7wuVW__shade" />
        <div className="PageBanner-module__C7wuVW__inner">
          <nav
            aria-label="Breadcrumb"
            className="PageBanner-module__C7wuVW__breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">SEO &amp; Marketing</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">SEO &amp; Marketing</h1>
            <p className="PageBanner-module__C7wuVW__description">
              We shape search, paid media, and content activity around audience
              needs and the business goals each organization sets.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <section className="ServiceDetail-module__PK8x7q__section">
          <div className="ServiceDetail-module__PK8x7q__icon">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              viewBox="0 0 100 100"
            >
              <path d="M16 78h68M24 68l17-19 14 11 24-31" />
              <path d="M62 29h17v17" />
              <circle cx="24" cy="68" r="4" />
              <circle cx="41" cy="49" r="4" />
              <circle cx="55" cy="60" r="4" />
            </svg>
          </div>
          <div className="ServiceDetail-module__PK8x7q__copy">
            <h2>SEO &amp; Marketing</h2>
            <p>
              Digital marketing works best when the audience, message, channel,
              and measurement plan fit together. A clear strategy helps teams
              prioritize activity and learn from the results they observe.
            </p>
          </div>
        </section>

        {/* Growth Solutions */}
        <section style={{ marginTop: "60px" }}>
          <p className="eyebrow teal">Marketing Services Built Around Your Bottom Line</p>
          <h2>Data-driven campaigns that convert</h2>
          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>
                Improve how clearly a site communicates its subject to people and
                search engines through relevant content, sound page structure,
                and useful technical foundations.
              </p>
            </article>

            <article>
              <h3>Targeted Paid Search &amp; Social Ads</h3>
              <p>
                Plan paid search and social campaigns around defined audiences,
                messages, budgets, and a measurement approach that can be
                reviewed and refined.
              </p>
            </article>

            <article>
              <h3>Conversion-Focused Content Marketing</h3>
              <p>
                Your website needs to do more than look nice—it needs to sell. We
                write clear, persuasive website copy, service pages, and guides
                that answer customer questions and earn trust fast.
              </p>
            </article>

            <article>
              <h3>Local Brand &amp; Reputation Management</h3>
              <p>
                Keep business information consistent, make it easier for
                customers to find relevant details, and develop a considered
                approach to responding to public feedback.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link className="button button-dark" href="/contact/">
            Start a marketing conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
