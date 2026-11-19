import Link from "next/link";
import Image from "next/image";

export default function ContentAnimationPage() {
  return (
    <div className="review-page service-detail-page banner-page">
      <section
        aria-label="Content Animation Studio introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative motion designer working with three-dimensional forms in a design studio"
          className="PageBanner-module__C7wuVW__image"
          src="/digital-motion.webp"
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
            <span aria-current="page">Content Animation Studio</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">
              Content Animation Studio
            </h1>
            <p className="PageBanner-module__C7wuVW__description">
              We create 2D, 3D, and motion-graphic content to make complex
              subjects easier to follow and visually engaging.
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
              <circle cx="50" cy="50" r="9" />
              <path d="M50 14c10 14 10 58 0 72M14 50c14-10 58-10 72 0M25 25c19 2 48 31 50 50M75 25c-2 19-31 48-50 50" />
            </svg>
          </div>
          <div className="ServiceDetail-module__PK8x7q__copy">
            <h2>Content Animation Studio</h2>
            <p>
              Detailed processes, policies, and learning materials can be
              difficult to absorb in a text-only format. A carefully planned
              visual story can give an audience another way to understand the key
              ideas.
            </p>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section style={{ marginTop: "60px" }}>
          <p className="eyebrow teal">Built for Enterprises</p>
          <h2>Visuals That Drive Alignment &amp; Action</h2>
          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <h3>Product Explainers &amp; Demos</h3>
              <p>
                Present software, equipment, or service concepts through a clear
                visual narrative that supports audience understanding.
              </p>
            </article>

            <article>
              <h3>Corporate L&amp;D and Onboarding</h3>
              <p>
                Adapt training information into shorter visual modules that help
                learners follow key concepts and steps.
              </p>
            </article>

            <article>
              <h3>Internal Comms &amp; Change Management</h3>
              <p>
                Present company initiatives, security guidance, and policy
                information through visual narratives suited to the intended
                audience.
              </p>
            </article>

            <article>
              <h3>Data &amp; Infographic Animation</h3>
              <p>
                Convert dense financial reports, annual reviews, and market data
                into clean, dynamic animated infographics for board meetings and
                investor decks.
              </p>
            </article>
          </div>
        </section>

        {/* Education Solutions */}
        <section style={{ marginTop: "60px" }}>
          <p className="eyebrow teal">Purpose-Built for Education</p>
          <h2>Visual Learning That Sticks</h2>
          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <h3>Curriculum-Aligned STEM &amp; Humanities</h3>
              <p>
                Bring abstract concepts to life—from molecular biology and
                physics mechanics to historical events—making difficult subjects
                approachable for students.
              </p>
            </article>

            <article>
              <h3>EdTech &amp; LMS-Ready Assets</h3>
              <p>
                Modular animated videos built specifically to integrate into
                Learning Management Systems (LMS), mobile learning apps, and
                digital classrooms.
              </p>
            </article>

            <article>
              <h3>Interactive Micro-Lessons</h3>
              <p>
                Short animated lessons that focus on a single topic or learning
                objective and fit smoothly into a larger curriculum sequence.
              </p>
            </article>
          </div>
        </section>

        {/* Collaborative Process */}
        <section style={{ marginTop: "60px" }}>
          <p className="eyebrow teal">A Simple, Collaborative Process</p>
          <h2>How we bring your animations to life</h2>
          <div className="services-index" style={{ marginTop: "32px" }}>
            <article>
              <span>01</span>
              <h3>Discovery &amp; Scriptwriting</h3>
              <p>
                Align on your core goals, target audience, and key learning
                outcomes to write a visual-first script.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Storyboarding &amp; Visual Style</h3>
              <p>
                Review full visual storyboards and style frames before animation
                starts, ensuring complete alignment on tone and aesthetic.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Animation &amp; Sound Design</h3>
              <p>
                Our animators bring the graphics to life, combining professional
                voiceover, custom audio, and sound effects.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Delivery &amp; LMS Export</h3>
              <p>
                Receive optimized, high-resolution video files ready for web,
                broadcast, mobile apps, or direct LMS deployment.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link className="button button-dark" href="/contact/">
            Explore animation projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
