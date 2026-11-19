import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="AboutExperience-module__VGeTdW__page">
      <div className="AboutExperience-module__VGeTdW__container">
        <nav aria-label="Breadcrumb" className="AboutExperience-module__VGeTdW__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">About Us</span>
        </nav>

        {/* Hero */}
        <section className="AboutExperience-module__VGeTdW__hero">
          <div className="AboutExperience-module__VGeTdW__heroCopy">
            <p className="AboutExperience-module__VGeTdW__eyebrow">Workhour Business / About us</p>
            <h1>About Workhour</h1>
            <p className="AboutExperience-module__VGeTdW__heroMessage">
              Specialist expertise.
              <br />
              <span>A shared perspective.</span>
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

        {/* Overview: 4 Perspectives */}
        <section className="AboutExperience-module__VGeTdW__overview">
          <p className="AboutExperience-module__VGeTdW__eyebrow">Get to know us</p>
          <h2>Four perspectives. One Workhour.</h2>

          <div>
            {/* 01 Our Story */}
            <Link href="/about/our-story/">
              <div className="AboutExperience-module__VGeTdW__photo">
                <Image
                  alt=""
                  src="/about-story-v2.webp"
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <span className="AboutExperience-module__VGeTdW__number">01</span>
              <h3>Our Story</h3>
              <p>
                Workhour Business brings together specialist services that support organizations from early planning through day-to-day operations and growth.
              </p>
              <span aria-hidden="true">↗</span>
            </Link>

            {/* 02 Our Impact */}
            <Link href="/about/our-impact/">
              <div className="AboutExperience-module__VGeTdW__photo">
                <Image
                  alt=""
                  src="/about-impact-v2.webp"
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <span className="AboutExperience-module__VGeTdW__number">02</span>
              <h3>Our Impact</h3>
              <p>
                Connecting organizations with the right capabilities at each stage of the business journey.
              </p>
              <span aria-hidden="true">↗</span>
            </Link>

            {/* 03 Responsible Business */}
            <Link href="/about/responsible-business/">
              <div className="AboutExperience-module__VGeTdW__photo">
                <Image
                  alt=""
                  src="/about-responsible-v2.webp"
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <span className="AboutExperience-module__VGeTdW__number">03</span>
              <h3>Responsible Business</h3>
              <p>
                Clear expectations, thoughtful planning, and respect for the people behind every business decision.
              </p>
              <span aria-hidden="true">↗</span>
            </Link>

            {/* 04 Presence */}
            <Link href="/about/presence/">
              <div className="AboutExperience-module__VGeTdW__photo">
                <Image
                  alt=""
                  src="/about-presence-v2.webp"
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <span className="AboutExperience-module__VGeTdW__number">04</span>
              <h3>Presence</h3>
              <p>
                Explore the regional market context behind the Workhour Business planning material.
              </p>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="AboutExperience-module__VGeTdW__contact">
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">Start a conversation</p>
            <h2>What’s your next step?</h2>
          </div>
          <Link className="AboutExperience-module__VGeTdW__button" href="/contact/">
            Connect with Workhour <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <p className="AboutExperience-module__VGeTdW__imageNote">
          Imagery illustrates our areas of work; it does not depict actual Workhour people or locations.
        </p>
      </div>
    </div>
  );
}
