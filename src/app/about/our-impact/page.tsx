import Link from "next/link";
import Image from "next/image";

export default function OurImpactPage() {
  return (
    <div className="AboutExperience-module__VGeTdW__page">
      <div className="AboutExperience-module__VGeTdW__container">
        <nav aria-label="Breadcrumb" className="AboutExperience-module__VGeTdW__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/about/">About Us</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Our Impact</span>
        </nav>

        <section className="AboutExperience-module__VGeTdW__hero">
          <div className="AboutExperience-module__VGeTdW__heroCopy">
            <p className="AboutExperience-module__VGeTdW__eyebrow">Workhour Business / About us</p>
            <h1>Our Impact</h1>
            <p className="AboutExperience-module__VGeTdW__heroMessage">
              Focused expertise.
              <br />
              <span>Practical progress.</span>
            </p>
            <p className="AboutExperience-module__VGeTdW__heroIntro">
              Connecting organizations with the right capabilities at each stage of the business journey.
            </p>
            <Link className="AboutExperience-module__VGeTdW__button" href="/contact/">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="AboutExperience-module__VGeTdW__heroVisual">
            <Image
              alt="Illustrative scene representing impact and business milestones"
              src="/about-impact-v2.webp"
              fill
              priority
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div className="AboutExperience-module__VGeTdW__imageLabel">
              <span aria-hidden="true" />
              Turning capability into possibility
            </div>
          </div>
        </section>

        <section style={{ margin: "60px 0" }}>
          <p className="eyebrow teal">The value of focused expertise</p>
          <h2>Making complex needs easier to navigate.</h2>
          <p style={{ maxWidth: "780px", fontSize: "17px", lineHeight: "1.8", color: "#526a72", marginTop: "16px" }}>
            Our aim is to make complex business needs easier to navigate by connecting organizations with proven services. Whether that is helping a company scale its team with Employaa, managing seamless compliance with Remunerax, or hosting flagship conferences with Leaders Pinnacle, our impact is measured by the progress our clients achieve.
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
