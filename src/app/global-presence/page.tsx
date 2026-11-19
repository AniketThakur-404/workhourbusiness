import PageBanner from "@/components/PageBanner";
import PresenceMap from "./PresenceMap";

export const metadata = { title: "Global presence" };

export default function GlobalPresencePage() {
  return (
    <div className="review-page banner-page">
      <PageBanner
        title="Global presence"
        description="Markets named in the supplied Workhour Business planning material."
        image={{
          src: "/about-presence-v2.webp",
          alt: "Illustrative airport scene representing business travel across regions",
        }}
      />
      <div className="review-inner">
        <section className="global-presence-content">
          <p className="eyebrow teal">Markets named in planning material</p>
          <h2>Global presence</h2>
          <p>These country groupings reflect supplied planning material.</p>
          <PresenceMap />
        </section>
      </div>
    </div>
  );
}
