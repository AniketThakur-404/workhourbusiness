import Link from "next/link";
import Image from "next/image";

export default function AnnouncementsPage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="Announcements introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative speaker and audience at a business gathering"
          className="PageBanner-module__C7wuVW__image"
          src="/ignitia-auditorium.webp"
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
            <span aria-current="page">Announcements</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">Announcements</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Updates and announcements from Workhour Business.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <section
          aria-labelledby="ignitia-feature-heading"
          className="IgnitiaFeature-module__X7bEhW__feature"
          id="ignita"
        >
          <Link
            aria-label="Discover IGNITIA"
            className="IgnitiaFeature-module__X7bEhW__visual"
            href="/announcements/ignitia/"
          >
            <Image
              alt="Illustrative scene of leaders exchanging ideas at an African innovation summit"
              src="/ignitia-leadership.webp"
              fill
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </Link>
          <div className="IgnitiaFeature-module__X7bEhW__copy">
            <p className="eyebrow teal">Featured announcement</p>
            <h2 id="ignitia-feature-heading">
              <Link href="/announcements/ignitia/">
                IGNITIA <span aria-hidden="true">↗</span>
              </Link>
            </h2>
            <h3>
              Where vision meets opportunity
              <br />
              and ideas ignite change.
            </h3>
            <p>
              A premier platform for leadership, innovation, collaboration, and
              global impact — connecting Africa with the world.
            </p>
            <Link className="text-link" href="/announcements/ignitia/">
              Discover IGNITIA <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

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
