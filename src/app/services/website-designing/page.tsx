import Link from "next/link";
import Image from "next/image";

export default function WebsiteDesigningPage() {
  return (
    <div className="review-page service-detail-page banner-page">
      <section
        aria-label="Website Designing introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative web designer developing a website layout in a creative studio"
          className="PageBanner-module__C7wuVW__image"
          src="/digital-design.webp"
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
            <span aria-current="page">Website Designing</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">
              Website Designing
            </h1>
            <p className="PageBanner-module__C7wuVW__description">
              We bring user experience, strategic messaging, and modern design
              together to create clear, useful digital experiences across screen
              sizes.
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
              <rect height="59" rx="5" width="78" x="11" y="16" />
              <path d="M11 31h78M40 88h20M50 75v13M20 24h1m8 0h1m8 0h1" />
            </svg>
          </div>
          <div className="ServiceDetail-module__PK8x7q__copy">
            <h2>Website Designing</h2>
            <p>
              A website often shapes a visitor’s first impression of a business.
              Clear structure, readable content, and thoughtful mobile
              navigation can help people understand an offer and decide what to
              do next.
            </p>
          </div>
        </section>

        <div className="ServiceDetail-module__PK8x7q__grid">
          <div className="ServiceDetail-module__PK8x7q__block">
            <p className="eyebrow teal">Who it serves</p>
            <h3>Start with the people and goals.</h3>
            <p>
              Businesses creating a new digital presence or improving an
              existing website for their customers.
            </p>
          </div>

          <div className="ServiceDetail-module__PK8x7q__block">
            <p className="eyebrow teal">How the work takes shape</p>
            <h3>A structured design methodology.</h3>
            <p>
              Begin with audience needs, goals, content, and required
              functionality. Shape the structure and visual direction, review
              the experience across screen sizes, then refine the implementation
              against the agreed scope.
            </p>
          </div>

          <div className="ServiceDetail-module__PK8x7q__block">
            <p className="eyebrow teal">Practical benefits</p>
            <h3>Clear user journeys.</h3>
            <p>
              A considered website gives visitors clearer routes through
              information and makes it easier for a business to present its
              offer consistently across devices.
            </p>
          </div>
        </div>

        {/* What We Build For You */}
        <section className="services-deliverables-section" style={{ marginTop: "60px" }}>
          <p className="eyebrow teal">What We Build For You</p>
          <h2>Custom digital solutions tailored to your industry.</h2>
          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <h3>Custom Web Design & UX</h3>
              <p>
                Plan visual layouts around audience needs and common tasks, with
                clear paths through the information visitors need.
              </p>
            </article>

            <article>
              <h3>Mobile-First Development</h3>
              <p>
                Create responsive layouts for phones, tablets, and desktop
                screens, with attention to legibility and touch navigation.
              </p>
            </article>

            <article>
              <h3>E-Commerce Stores</h3>
              <p>
                Design storefronts that organize product information, browsing,
                and purchase steps. Platform choices and integrations are agreed
                for each project.
              </p>
            </article>

            <article>
              <h3>Website Redesigns</h3>
              <p>
                Fresh, modern overhauls for outdated or sluggish websites that
                need a new lease on life.
              </p>
            </article>

            <article>
              <h3>SEO & Performance Tuning</h3>
              <p>
                Review page structure, content, and performance opportunities
                that support usability and discoverability.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link className="button button-dark" href="/contact/">
            Discuss your website project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
