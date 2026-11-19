import Link from "next/link";
import Image from "next/image";

const regions = [
  {
    name: "Asia",
    countries: ["India (Headquarters - New Delhi)", "Malaysia"],
  },
  {
    name: "Oceania",
    countries: ["Australia"],
  },
  {
    name: "Middle East",
    countries: ["United Arab Emirates"],
  },
  {
    name: "Africa",
    countries: ["Kenya", "Zimbabwe", "Malawi", "Rwanda"],
  },
  {
    name: "North America",
    countries: ["Canada", "Mexico"],
  },
];

export default function GlobalPresencePage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="Global presence introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative global footprint and international business relationships"
          className="PageBanner-module__C7wuVW__image"
          src="/about-presence-v2.webp"
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
            <span aria-current="page">Global presence</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">Global presence</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Markets named in the supplied Workhour Business planning material.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">Markets named in planning material</p>
          <h2>Global presence</h2>
          <p style={{ maxWidth: "700px", color: "#526a72", fontSize: "17px", lineHeight: "1.8", marginTop: "12px" }}>
            These country groupings reflect supplied planning material,
            representing international footprint and collaborative partnerships
            worldwide.
          </p>

          <div
            style={{
              marginTop: "40px",
              padding: "32px",
              background: "var(--paper)",
              borderRadius: "16px",
              border: "1px solid var(--line)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span style={{ fontSize: "24px" }}>📍</span>
              <div>
                <strong style={{ fontSize: "18px", color: "var(--ink)", display: "block" }}>
                  New Delhi, India — Global Headquarters
                </strong>
                <span style={{ color: "var(--teal)", fontSize: "14px" }}>
                  Primary executive coordination and corporate operations
                </span>
              </div>
            </div>

            <div className="services-index" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {regions.map((region) => (
                <div
                  key={region.name}
                  style={{
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "12px",
                    border: "1px solid #edf1f0",
                  }}
                >
                  <p className="eyebrow teal" style={{ marginBottom: "12px" }}>
                    {region.name}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
                    {region.countries.map((c) => (
                      <li key={c} style={{ color: "#334155", fontSize: "15px" }}>
                        • {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
