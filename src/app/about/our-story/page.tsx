import Image from "next/image";
import Link from "next/link";
import { companyLinkProps } from "@/lib/company-sites";
import AboutExperience from "../AboutExperience";

export const metadata = { title: "Our Story" };

export default function OurStoryPage() {
  return (
    <AboutExperience
      topic="our-story"
      message={["Specialist strengths.", "Shared ambition."]}
      intro="Workhour Business brings together specialist services that support organizations from early planning through day-to-day operations and growth."
      image={{
        src: "/about-story-v2.webp",
        alt: "Illustrative specialists walking and talking in a contemporary shared workspace",
        label: "Expertise, working together",
      }}
    >
      <section className="AboutExperience-module__VGeTdW__story">
        <div className="AboutExperience-module__VGeTdW__photo">
          <Image
            src="/business-thinkrunspace.webp"
            alt="Illustrative flexible workspace with areas for individual and collaborative work"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="AboutExperience-module__VGeTdW__storyCopy">
          <p className="AboutExperience-module__VGeTdW__eyebrow">
            The Workhour story
          </p>
          <h2>
            Built around the
            <br />
            <span>business journey.</span>
          </h2>
          <p className="AboutExperience-module__VGeTdW__lead">
            Business needs change. The right expertise helps you move forward.
          </p>
          <p>
            Workhour Business brings together seven specialist businesses:
            Inceptura, Leaders Pinnacle, Employaa, Elevatrain, Go Travel Global,
            Remunerax, and ThinkRunSpace.
          </p>
          <p>
            Together, their service areas span business planning, recruitment,
            payroll administration, travel, corporate learning, flexible
            workspaces, and professional events.
          </p>
          <div className="AboutExperience-module__VGeTdW__purpose">
            <span aria-hidden="true">↗</span>
            <p>From early planning to everyday operations and growth.</p>
          </div>
        </div>
      </section>
      <section
        className="AboutExperience-module__VGeTdW__directory"
        aria-labelledby="business-heading"
      >
        <div>
          <p className="AboutExperience-module__VGeTdW__eyebrow">
            Specialists, together
          </p>
          <h2 id="business-heading">
            One group.
            <br />
            Seven areas of expertise.
          </h2>
          <p>
            Distinct businesses. Focused capabilities. Support for different
            stages of your business journey.
          </p>
          <Link
            className="AboutExperience-module__VGeTdW__textLink"
            href="/businesses/"
          >
            Explore our portfolio <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="AboutExperience-module__VGeTdW__businessList">
          <Link {...companyLinkProps("inceptura")}>
            <span className="AboutExperience-module__VGeTdW__number">01</span>
            <span>
              <strong>Inceptura</strong>
              <small>Ideation to Execution</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("leaders-pinnacle")}>
            <span className="AboutExperience-module__VGeTdW__number">02</span>
            <span>
              <strong>Leaders Pinnacle</strong>
              <small>B2B events and market intelligence</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("employaa")}>
            <span className="AboutExperience-module__VGeTdW__number">03</span>
            <span>
              <strong>Employaa</strong>
              <small>Recruitment and staffing</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("elevatrain")}>
            <span className="AboutExperience-module__VGeTdW__number">04</span>
            <span>
              <strong>Elevatrain</strong>
              <small>Corporate training and workshops</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("go-travel-global")}>
            <span className="AboutExperience-module__VGeTdW__number">05</span>
            <span>
              <strong>Go Travel Global</strong>
              <small>Travel services</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("remunerax")}>
            <span className="AboutExperience-module__VGeTdW__number">06</span>
            <span>
              <strong>Remunerax</strong>
              <small>Payroll and workforce outsourcing</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link {...companyLinkProps("thinkrunspace")}>
            <span className="AboutExperience-module__VGeTdW__number">07</span>
            <span>
              <strong>ThinkRunSpace</strong>
              <small>Flexible workspace solutions</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </AboutExperience>
  );
}
