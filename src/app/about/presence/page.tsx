import Link from "next/link";
import AboutExperience from "../AboutExperience";

export const metadata = { title: "Presence" };

export default function PresencePage() {
  return (
    <AboutExperience
      topic="presence"
      message={["A wider perspective.", "A connected world."]}
      intro="Explore the regional market context behind the Workhour Business planning material."
      image={{
        src: "/about-presence-v2.webp",
        alt: "Illustrative business traveller in a contemporary airport concourse",
        label: "A broader business perspective",
      }}
    >
      <section className="AboutExperience-module__VGeTdW__presence">
        <div>
          <p className="AboutExperience-module__VGeTdW__eyebrow">
            Regional perspective
          </p>
          <h2>Looking across regions and opportunities.</h2>
          <p>
            The supplied planning material names markets across Asia, Oceania,
            the Middle East, Africa, and North America.
          </p>
          <aside className="AboutExperience-module__VGeTdW__contextNote">
            <strong>Planning markets</strong>
            <p>
              These are planning references, not a directory of confirmed
              offices or service locations. Contact us to discuss the support
              available for your location.
            </p>
          </aside>
          <Link
            className="AboutExperience-module__VGeTdW__textLink"
            href="/contact/"
          >
            Discuss your location <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div
          className="AboutExperience-module__VGeTdW__regionList"
          aria-label="Markets referenced in planning"
        >
          <article>
            <span className="AboutExperience-module__VGeTdW__number">01</span>
            <div>
              <h3>Asia</h3>
              <ul>
                <li>India</li>
                <li>Malaysia</li>
              </ul>
            </div>
            <span className="AboutExperience-module__VGeTdW__regionTag">
              Planning reference
            </span>
          </article>
          <article>
            <span className="AboutExperience-module__VGeTdW__number">02</span>
            <div>
              <h3>Oceania</h3>
              <ul>
                <li>Australia</li>
              </ul>
            </div>
            <span className="AboutExperience-module__VGeTdW__regionTag">
              Planning reference
            </span>
          </article>
          <article>
            <span className="AboutExperience-module__VGeTdW__number">03</span>
            <div>
              <h3>Middle East</h3>
              <ul>
                <li>UAE</li>
              </ul>
            </div>
            <span className="AboutExperience-module__VGeTdW__regionTag">
              Planning reference
            </span>
          </article>
          <article>
            <span className="AboutExperience-module__VGeTdW__number">04</span>
            <div>
              <h3>Africa</h3>
              <ul>
                <li>Kenya</li>
                <li>Zimbabwe</li>
                <li>Malawi</li>
                <li>Rwanda</li>
              </ul>
            </div>
            <span className="AboutExperience-module__VGeTdW__regionTag">
              Planning reference
            </span>
          </article>
          <article>
            <span className="AboutExperience-module__VGeTdW__number">05</span>
            <div>
              <h3>North America</h3>
              <ul>
                <li>Canada</li>
                <li>Mexico</li>
              </ul>
            </div>
            <span className="AboutExperience-module__VGeTdW__regionTag">
              Planning reference
            </span>
          </article>
        </div>
      </section>
    </AboutExperience>
  );
}
