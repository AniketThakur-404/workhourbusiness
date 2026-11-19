import Link from "next/link";
import Image from "next/image";

export default function AboutPresencePage() {
  return (
    <div className="AboutExperience-module__VGeTdW__page">
      <div className="AboutExperience-module__VGeTdW__container">
        <nav aria-label="Breadcrumb" className="AboutExperience-module__VGeTdW__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/about/">About Us</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Presence</span>
        </nav>

        <section className="AboutExperience-module__VGeTdW__hero">
          <div className="AboutExperience-module__VGeTdW__heroCopy">
            <p className="AboutExperience-module__VGeTdW__eyebrow">Workhour Business / About us</p>
            <h1>Presence</h1>
            <p className="AboutExperience-module__VGeTdW__heroMessage">
              A wider perspective.
              <br />
              <span>A connected world.</span>
            </p>
            <p className="AboutExperience-module__VGeTdW__heroIntro">
              Explore the regional market context behind the Workhour Business planning material.
            </p>
            <Link className="AboutExperience-module__VGeTdW__button" href="/contact/">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="AboutExperience-module__VGeTdW__heroVisual">
            <Image
              alt="Illustrative global footprint and international business relationships"
              src="/about-presence-v2.webp"
              fill
              priority
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div className="AboutExperience-module__VGeTdW__imageLabel">
              <span aria-hidden="true" />
              A broader business perspective
            </div>
          </div>
        </section>

        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">Regional perspective</p>
          <h2>Looking across regions and opportunities.</h2>
          <p style={{ maxWidth: "780px", fontSize: "17px", lineHeight: "1.8", color: "#526a72", marginTop: "16px" }}>
            The supplied planning material names markets across Asia, Oceania, the Middle East, Africa, and North America. Across borders and cultures, our group brings cross-border understanding to recruitment, logistics, workspace, and business execution.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Link className="text-link" href="/global-presence/">
              View all global presence markets <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="AboutExperience-module__VGeTdW__contact">
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">Start a conversation</p>
            <h2>What’s your next step?</h2>
          </div>
          <Link className="AboutExperience-module__VGeTdW__button" href="/contact/">
            Connect with Workhour <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
