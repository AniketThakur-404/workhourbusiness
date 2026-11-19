import Link from "next/link";
import Image from "next/image";

export default function HomeServices() {
  return (
    <section className="home-services section-pad">
      <p className="eyebrow teal">Workhour Business services</p>
      <h2>Expertise for the next step.</h2>
      <p className="home-services-intro">
        Explore digital design, animation, and marketing support for your
        business.
      </p>

      <div className="home-service-grid">
        {/* Website Designing */}
        <Link className="home-service-card" href="/services/website-designing/">
          <span className="home-service-image">
            <Image
              alt="Website Designing illustrative artwork"
              src="/service-web-design.webp"
              fill
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </span>
          <span className="home-service-content">
            <svg
              aria-hidden="true"
              className="home-service-icon"
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
            <strong>Website Designing</strong>
            <span className="home-service-cta">
              Explore service <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>

        {/* Content Animation Studio */}
        <Link className="home-service-card" href="/services/content-animation/">
          <span className="home-service-image">
            <Image
              alt="Content Animation Studio illustrative artwork"
              src="/service-content-motion.webp"
              fill
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </span>
          <span className="home-service-content">
            <svg
              aria-hidden="true"
              className="home-service-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="9" />
              <path d="M50 14c10 14 10 58 0 72M14 50c14-10 58-10 72 0M25 25c19 2 48 31 50 50M75 25c-2 19-31 48-50 50" />
            </svg>
            <strong>Content Animation Studio</strong>
            <span className="home-service-cta">
              Explore service <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>

        {/* SEO & Marketing */}
        <Link className="home-service-card" href="/services/seo-marketing/">
          <span className="home-service-image">
            <Image
              alt="SEO & Marketing illustrative artwork"
              src="/service-search-growth.webp"
              fill
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </span>
          <span className="home-service-content">
            <svg
              aria-hidden="true"
              className="home-service-icon"
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
            <strong>SEO &amp; Marketing</strong>
            <span className="home-service-cta">
              Explore service <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
