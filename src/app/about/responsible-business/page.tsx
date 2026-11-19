import Image from "next/image";
import AboutExperience from "../AboutExperience";

export const metadata = { title: "Responsible Business" };

export default function ResponsibleBusinessPage() {
  return (
    <AboutExperience
      topic="responsible-business"
      message={["Thoughtful decisions.", "Responsible work."]}
      intro="Clear expectations, thoughtful planning, and respect for the people behind every business decision."
      image={{
        src: "/about-responsible-v2.webp",
        alt: "Illustrative colleagues in an attentive one-to-one workplace conversation",
        label: "People at the heart of the work",
      }}
    >
      <section className="AboutExperience-module__VGeTdW__statement">
        <p className="AboutExperience-module__VGeTdW__eyebrow">Our approach</p>
        <h2>Responsibility begins with how we work.</h2>
        <div>
          <p>
            Responsible work begins with clear expectations, thoughtful
            planning, and respect for the people affected by business decisions.
          </p>
          <p>
            We approach each service with attention to its context and encourage
            clients to define the outcomes, responsibilities, and safeguards
            that matter to them.
          </p>
        </div>
      </section>
      <section
        className="AboutExperience-module__VGeTdW__principles"
        aria-label="Responsible working principles"
      >
        <div className="AboutExperience-module__VGeTdW__principleIntro">
          <p className="AboutExperience-module__VGeTdW__eyebrow">
            People. Context. Clarity.
          </p>
          <h2>
            Considered decisions,
            <br />
            at every step.
          </h2>
          <p>
            Keep the people affected by business decisions in view throughout
            the process.
          </p>
          <div className="AboutExperience-module__VGeTdW__photo">
            <Image
              src="/about-responsible.webp"
              alt="Illustrative colleagues discussing work in a shared workspace"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <article className="AboutExperience-module__VGeTdW__principle">
            <span className="AboutExperience-module__VGeTdW__number">01</span>
            <div>
              <h3>Clear expectations</h3>
              <p>
                Define the outcomes and responsibilities that matter to the
                work, from the beginning.
              </p>
            </div>
          </article>
          <article className="AboutExperience-module__VGeTdW__principle">
            <span className="AboutExperience-module__VGeTdW__number">02</span>
            <div>
              <h3>Thoughtful planning</h3>
              <p>
                Consider the context of each service and the safeguards relevant
                to it.
              </p>
            </div>
          </article>
          <article className="AboutExperience-module__VGeTdW__principle">
            <span className="AboutExperience-module__VGeTdW__number">03</span>
            <div>
              <h3>Respect for people</h3>
              <p>
                Keep the people affected by business decisions in view
                throughout the process.
              </p>
            </div>
          </article>
        </div>
      </section>
    </AboutExperience>
  );
}
