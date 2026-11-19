import Image from "next/image";
import AboutExperience from "../AboutExperience";

export const metadata = { title: "Our Impact" };

export default function OurImpactPage() {
  return (
    <AboutExperience
      topic="our-impact"
      message={["Focused expertise.", "Practical progress."]}
      intro="Connecting organizations with the right capabilities at each stage of the business journey."
      image={{
        src: "/about-impact-v2.webp",
        alt: "Illustrative corporate learning workshop with a facilitator and participants",
        label: "Turning capability into possibility",
      }}
    >
      <section className="AboutExperience-module__VGeTdW__statement">
        <p className="AboutExperience-module__VGeTdW__eyebrow">
          The value of focused expertise
        </p>
        <h2>Making complex needs easier to navigate.</h2>
        <div>
          <p>
            Our aim is to make complex business needs easier to navigate by
            connecting organizations with focused expertise across the business
            journey.
          </p>
          <p>
            Each brand concentrates on a distinct area of work, so organizations
            can explore the support relevant to their current priorities.
          </p>
        </div>
      </section>
      <section
        className="AboutExperience-module__VGeTdW__outcomes"
        aria-label="How our work helps"
      >
        <article className="AboutExperience-module__VGeTdW__outcome">
          <div className="AboutExperience-module__VGeTdW__photo">
            <Image
              src="/business-inceptura.webp"
              alt="Illustrative business planning workspace"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">
              01 / Direction
            </p>
            <h2>Plan the next step</h2>
            <p>
              Business planning and focused expertise help organizations
              consider their priorities and direction.
            </p>
            <p className="AboutExperience-module__VGeTdW__serviceNote">
              Business planning · Strategy
            </p>
          </div>
        </article>
        <article className="AboutExperience-module__VGeTdW__outcome">
          <div className="AboutExperience-module__VGeTdW__photo">
            <Image
              src="/business-remunerax.webp"
              alt="Illustrative payroll and administration work"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">
              02 / Everyday operations
            </p>
            <h2>Support everyday work</h2>
            <p>
              People, payroll, travel, and workspace services address the
              practical needs of running a business.
            </p>
            <p className="AboutExperience-module__VGeTdW__serviceNote">
              Recruitment · Payroll · Travel · Workspace
            </p>
          </div>
        </article>
        <article className="AboutExperience-module__VGeTdW__outcome">
          <div className="AboutExperience-module__VGeTdW__photo">
            <Image
              src="/business-elevatrain.webp"
              alt="Illustrative professional learning session"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">
              03 / Development
            </p>
            <h2>Create room to grow</h2>
            <p>
              Learning and professional events help organizations explore
              skills, ideas, and connections.
            </p>
            <p className="AboutExperience-module__VGeTdW__serviceNote">
              Corporate learning · Professional events
            </p>
          </div>
        </article>
      </section>
    </AboutExperience>
  );
}
