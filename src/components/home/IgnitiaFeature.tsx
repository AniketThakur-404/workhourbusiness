import Link from "next/link";
import Image from "next/image";

export default function IgnitiaFeature() {
  return (
    <section
      aria-labelledby="ignitia-feature-heading"
      className="IgnitiaFeature-module__X7bEhW__feature"
      id="ignita"
    >
      <Link
        aria-label="Discover IGNITIA"
        className="IgnitiaFeature-module__X7bEhW__visual"
        href="/announcements/ignitia/"
      >
        <Image
          alt="Illustrative scene of leaders exchanging ideas at an African innovation summit"
          src="/ignitia-leadership.webp"
          fill
          style={{ objectFit: "cover", position: "absolute" }}
        />
      </Link>

      <div className="IgnitiaFeature-module__X7bEhW__copy">
        <p className="eyebrow teal">Featured announcement</p>
        <h2 id="ignitia-feature-heading">
          <Link href="/announcements/ignitia/">
            IGNITIA <span aria-hidden="true">→</span>
          </Link>
        </h2>
        <h3>
          Where vision meets opportunity
          <br />
          and ideas ignite change.
        </h3>
        <p>
          A premier platform for leadership, innovation, collaboration, and
          global impact – connecting Africa with the world.
        </p>
        <Link className="text-link" href="/announcements/ignitia/">
          Discover IGNITIA <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
