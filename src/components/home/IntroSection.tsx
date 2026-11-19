import Link from "next/link";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section aria-labelledby="approach-heading" className="intro section-pad">
      <div className="intro-copy">
        <h2 className="intro-heading" id="approach-heading">
          The Workhour Approach
        </h2>
        <p className="intro-statement-heading">
          Together
          <br />
          <em>We Thrive</em>
        </p>
        <p className="intro-statement">
          Workhour Business – we power your complete business journey.
        </p>
        <Link className="text-link" href="/about/">
          Discover our approach <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="intro-visual">
        <Image
          alt="Professionals sharing ideas in a collaborative office conversation"
          src="/business-employaa.webp"
          fill
          style={{ objectFit: "cover", position: "absolute" }}
        />
        <div className="intro-brand">
          <Image
            alt="Workhour Business"
            src="/workhour-business-logo.png"
            width={534}
            height={135}
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
