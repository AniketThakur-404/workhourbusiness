import Link from "next/link";
import Image from "next/image";

export default function NewsMediaPage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="News &amp; Media introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative exchange of ideas between business professionals"
          className="PageBanner-module__C7wuVW__image"
          src="/ignitia-connections.webp"
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
            <span aria-current="page">News &amp; Media</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">News &amp; Media</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Explore the topics and service areas highlighted across Workhour
              Business.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <div className="review-media-list media-archive">
          {/* Article 1: IGNITIA */}
          <article id="ignita">
            <div className="media-visual sunset">
              <Image
                alt="Illustrative gathering of leaders at an African innovation summit"
                src="/ignitia-leadership.webp"
                fill
                style={{ objectFit: "cover", position: "absolute" }}
              />
            </div>
            <p className="eyebrow teal">Featured announcement</p>
            <h2>IGNITIA</h2>
            <p>
              Where vision meets opportunity and ideas ignite change.
            </p>
            <Link className="text-link" href="/announcements/ignitia/">
              View announcement <span aria-hidden="true">↗</span>
            </Link>
          </article>

          {/* Article 2: Mindfulness */}
          <article id="mindfulness">
            <div className="media-visual mint">
              <Image
                alt="Calm teal glass forms and soft daylight suggesting reflection"
                src="/feature-mindfulness.webp"
                fill
                style={{ objectFit: "cover", position: "absolute" }}
              />
            </div>
            <p className="eyebrow teal">Editorial focus</p>
            <h2>Podcast of Mindfulness</h2>
            <p>
              Mindfulness learning themes: attention, reflection, and wellbeing
              at work.
            </p>
            <Link className="text-link" href="/about/">
              Explore learning <span aria-hidden="true">↗</span>
            </Link>
          </article>

          {/* Article 3: ARC SNU */}
          <article id="arc-snu">
            <div className="media-visual blue">
              <Image
                alt="Illustrative empty conference auditorium with navy and teal lighting"
                src="/feature-business-events.webp"
                fill
                style={{ objectFit: "cover", position: "absolute" }}
              />
            </div>
            <p className="eyebrow teal">Editorial focus</p>
            <h2>Joint event with ARC, SNU</h2>
            <p>
              Planning and coordination for conferences, talks, and
              professional gatherings.
            </p>
            <Link className="text-link" href="/businesses/">
              Explore event services <span aria-hidden="true">↗</span>
            </Link>
          </article>
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
