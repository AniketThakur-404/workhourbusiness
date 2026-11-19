import Link from "next/link";
import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div className="AboutExperience-module__VGeTdW__page">
      <div className="AboutExperience-module__VGeTdW__container">
        <nav aria-label="Breadcrumb" className="AboutExperience-module__VGeTdW__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/about/">About Us</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Our Story</span>
        </nav>

        <section className="AboutExperience-module__VGeTdW__hero">
          <div className="AboutExperience-module__VGeTdW__heroCopy">
            <p className="AboutExperience-module__VGeTdW__eyebrow">Workhour Business / About us</p>
            <h1>Our Story</h1>
            <p className="AboutExperience-module__VGeTdW__heroMessage">
              Specialist strengths.
              <br />
              <span>Shared ambition.</span>
            </p>
            <p className="AboutExperience-module__VGeTdW__heroIntro">
              Workhour Business brings together specialist services that support organizations from early planning through day-to-day operations and growth.
            </p>
            <Link className="AboutExperience-module__VGeTdW__button" href="/contact/">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="AboutExperience-module__VGeTdW__heroVisual">
            <Image
              alt="Illustrative specialists walking and talking in a contemporary shared workspace"
              src="/about-story-v2.webp"
              fill
              priority
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div className="AboutExperience-module__VGeTdW__imageLabel">
              <span aria-hidden="true" />
              Expertise, working together
            </div>
          </div>
        </section>

        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">The Workhour story</p>
          <h2>Built around the business journey.</h2>
          <p style={{ maxWidth: "780px", fontSize: "17px", lineHeight: "1.8", color: "#526a72", marginTop: "16px" }}>
            Business needs change as companies grow. From the first idea and early company formation to recruitment, payroll, corporate travel, executive events, workforce upskilling, and flexible office infrastructure—Workhour Business connects organizations with dedicated specialist capabilities at each crucial phase.
          </p>
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
