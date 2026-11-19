import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const topics = {
  "our-story": "Our Story",
  "our-impact": "Our Impact",
  "responsible-business": "Responsible Business",
  presence: "Presence",
};

type AboutExperienceProps = {
  topic: keyof typeof topics;
  message: [string, string];
  intro: string;
  image: { src: string; alt: string; label: string };
  children: ReactNode;
};

export default function AboutExperience({
  topic,
  message,
  intro,
  image,
  children,
}: AboutExperienceProps) {
  const title = topics[topic];
  const heroClass =
    topic === "responsible-business"
      ? "AboutExperience-module__VGeTdW__hero AboutExperience-module__VGeTdW__responsibleHero"
      : "AboutExperience-module__VGeTdW__hero";

  return (
    <div className="AboutExperience-module__VGeTdW__page">
      <div className="AboutExperience-module__VGeTdW__container">
        <nav
          className="AboutExperience-module__VGeTdW__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/about/">About Us</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <section className={heroClass}>
          <div className="AboutExperience-module__VGeTdW__heroCopy">
            <p className="AboutExperience-module__VGeTdW__eyebrow">
              Workhour Business / About us
            </p>
            <h1>{title}</h1>
            <p className="AboutExperience-module__VGeTdW__heroMessage">
              {message[0]}
              <br />
              <span>{message[1]}</span>
            </p>
            <p className="AboutExperience-module__VGeTdW__heroIntro">{intro}</p>
            <Link
              className="AboutExperience-module__VGeTdW__button"
              href="/contact/"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="AboutExperience-module__VGeTdW__heroVisual">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(max-width: 780px) 100vw, 50vw"
            />
            <div className="AboutExperience-module__VGeTdW__imageLabel">
              <span aria-hidden="true" />
              {image.label}
            </div>
          </div>
        </section>
        {children}
        <nav
          className="AboutExperience-module__VGeTdW__related"
          aria-label="More about Workhour"
        >
          <span>More about Workhour</span>
          {Object.entries(topics)
            .filter(([slug]) => slug !== topic)
            .map(([slug, label]) => (
              <Link key={slug} href={`/about/${slug}/`}>
                {label} <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </nav>
        <section className="AboutExperience-module__VGeTdW__contact">
          <div>
            <p className="AboutExperience-module__VGeTdW__eyebrow">
              Start a conversation
            </p>
            <h2>What’s your next step?</h2>
          </div>
          <Link
            className="AboutExperience-module__VGeTdW__button"
            href="/contact/"
          >
            Connect with Workhour <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <p className="AboutExperience-module__VGeTdW__imageNote">
          Imagery illustrates our areas of work; it does not depict actual
          Workhour people or locations.
        </p>
      </div>
    </div>
  );
}
