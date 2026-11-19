import Link from "next/link";
import Image from "next/image";

export default function IgnitiaDetailPage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="IGNITIA introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative gathering of leaders at an African innovation summit"
          className="PageBanner-module__C7wuVW__image"
          src="/ignitia-leadership.webp"
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
            <Link href="/announcements/">Announcements</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">IGNITIA</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              ✳ A platform for possibility
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">
              IGNITIA. Where vision meets opportunity. And ideas ignite change.
            </h1>
            <p className="PageBanner-module__C7wuVW__description">
              Bringing visionary leaders, industry pioneers, and changemakers
              together to shape what comes next.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        {/* The IGNITIA Vision */}
        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">The IGNITIA vision</p>
          <h2>A meeting of minds. A world of possibility.</h2>
          <p style={{ maxWidth: "780px", fontSize: "18px", lineHeight: "1.8", color: "#526a72", marginTop: "16px" }}>
            A powerful convergence of visionary leaders, global decision-makers,
            industry pioneers and changemakers. IGNITIA is a premier platform
            dedicated to leadership, innovation, collaboration and global impact.
            Bringing together influential voices across business, government and
            technology, it creates opportunities to exchange transformative
            ideas, forge strategic partnerships, and shape the future of
            industries and economies.
          </p>
        </section>

        {/* 4 Connected Themes */}
        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">What brings us together</p>
          <h2>Four connected themes at the heart of IGNITIA</h2>

          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <span>01</span>
              <h3>Leadership</h3>
              <p>
                Bringing visionary leaders, global decision-makers and
                changemakers into the same conversation.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Innovation</h3>
              <p>
                Exchanging transformative ideas that help shape the future of
                industries and economies.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Collaboration</h3>
              <p>
                Creating opportunities for strategic partnerships across
                business, government and technology.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Global impact</h3>
              <p>
                Connecting Africa with the world to inspire progress and unlock
                possibilities.
              </p>
            </article>
          </div>
        </section>

        {/* Auditorium Image Card */}
        <div
          style={{
            position: "relative",
            height: "400px",
            borderRadius: "16px",
            overflow: "hidden",
            margin: "60px 0",
          }}
        >
          <Image
            alt="IGNITIA conference auditorium"
            src="/ignitia-auditorium.webp"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* CTA */}
        <section className="page-next-step" style={{ textAlign: "center", margin: "60px 0" }}>
          <h2>The conversation starts here.</h2>
          <p style={{ color: "#61747b", marginBottom: "24px" }}>
            Igniting ideas. Uniting leaders. Shaping tomorrow.
          </p>
          <Link className="button button-dark" href="/contact/">
            Connect with us <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
