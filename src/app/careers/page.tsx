import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="Careers introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative colleagues developing professional skills together"
          className="PageBanner-module__C7wuVW__image"
          src="/business-learning.webp"
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
            <span aria-current="page">Careers</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">Careers</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Explore the kinds of work and services represented across the
              Workhour Business group.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <section className="career-groups">
          <article>
            <p className="eyebrow teal">Across the group</p>
            <h2>Different disciplines. Shared momentum.</h2>
            <p>
              Explore the seven businesses to understand the work behind each
              service area.
            </p>
            <ul>
              <li>Business planning and operations</li>
              <li>Recruitment and workforce administration</li>
              <li>Payroll and employee processes</li>
              <li>Travel, learning, and event coordination</li>
              <li>Flexible workspace services</li>
            </ul>
            <Link className="button button-dark" href="/businesses/">
              Explore the businesses <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </section>

        <p className="empty-note">There are no current openings listed here.</p>

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
