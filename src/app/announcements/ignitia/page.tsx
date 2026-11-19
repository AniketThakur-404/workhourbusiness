import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "IGNITIA" };

export default function IgnitiaPage() {
  return (
    <div className="page-module__4IW5Gq__page">
      <section
        className="page-module__4IW5Gq__hero"
        aria-labelledby="ignitia-title"
      >
        <Image
          src="/ignitia-auditorium.webp"
          alt="Illustrative leadership gathering in a contemporary auditorium with a speaker on stage"
          className="page-module__4IW5Gq__heroImage"
          fill
          preload
          sizes="100vw"
        />
        <div className="page-module__4IW5Gq__heroShade" />
        <div className="page-module__4IW5Gq__heroInner">
          <nav
            className="page-module__4IW5Gq__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/announcements/">Announcements</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">IGNITIA</span>
          </nav>
          <div className="page-module__4IW5Gq__heroCopy">
            <p className="page-module__4IW5Gq__eyebrow">
              <span className="page-module__4IW5Gq__spark" aria-hidden="true">
                ✳
              </span>{" "}
              A platform for possibility
            </p>
            <h1 id="ignitia-title">
              IGNITIA<span aria-hidden="true">.</span>
            </h1>
            <p className="page-module__4IW5Gq__heroStatement">
              Where vision meets opportunity.
              <br />
              <span>And ideas ignite change.</span>
            </p>
            <p className="page-module__4IW5Gq__heroIntro">
              Bringing visionary leaders, industry pioneers and changemakers
              together to shape what comes next.
            </p>
            <div className="page-module__4IW5Gq__actions">
              <Link className="page-module__4IW5Gq__button" href="#vision">
                Discover the vision <span aria-hidden="true">↓</span>
              </Link>
              <Link className="page-module__4IW5Gq__quietLink" href="/contact/">
                Connect with us <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="page-module__4IW5Gq__heroFoot">
            <span>Africa’s potential. A global perspective.</span>
            <span>Leadership   /   Innovation   /   Collaboration</span>
          </div>
        </div>
      </section>
      <div className="page-module__4IW5Gq__container">
        <section
          className="page-module__4IW5Gq__vision"
          id="vision"
          aria-labelledby="vision-heading"
        >
          <div>
            <p className="page-module__4IW5Gq__eyebrow">The IGNITIA vision</p>
            <h2 id="vision-heading">
              A meeting of minds.
              <br />
              <span>A world of possibility.</span>
            </h2>
          </div>
          <div className="page-module__4IW5Gq__prose">
            <p className="page-module__4IW5Gq__lead">
              A powerful convergence of visionary leaders, global
              decision-makers, industry pioneers and changemakers.
            </p>
            <p>
              IGNITIA is a premier platform dedicated to leadership, innovation,
              collaboration and global impact. Bringing together influential
              voices across business, government and technology, it creates
              opportunities to exchange transformative ideas, forge strategic
              partnerships, and shape the future of industries and economies.
            </p>
          </div>
        </section>
        <section
          className="page-module__4IW5Gq__connection"
          aria-labelledby="connection-heading"
        >
          <div className="page-module__4IW5Gq__connectionImage">
            <Image
              src="/ignitia-connections.webp"
              alt="Illustrative African and international professionals exchanging ideas in a conference foyer"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span>Ideas become stronger in conversation.</span>
          </div>
          <div className="page-module__4IW5Gq__connectionCopy">
            <p className="page-module__4IW5Gq__eyebrow">
              Rooted in potential. Open to the world.
            </p>
            <h2 id="connection-heading">
              Connecting Africa.
              <br />
              <span>Inspiring the world.</span>
            </h2>
            <p>
              With its presence in Africa, IGNITIA celebrates the continent’s
              immense potential while connecting Africa with the world to
              inspire progress, unlock opportunities, and drive lasting impact.
            </p>
            <div className="page-module__4IW5Gq__connections">
              <span>Business</span>
              <span>Government</span>
              <span>Technology</span>
            </div>
          </div>
        </section>
        <section
          className="page-module__4IW5Gq__themes"
          aria-labelledby="themes-heading"
        >
          <div className="page-module__4IW5Gq__sectionHeading">
            <div>
              <p className="page-module__4IW5Gq__eyebrow">
                What brings us together
              </p>
              <h2 id="themes-heading">
                Different perspectives.
                <br />
                Shared ambition.
              </h2>
            </div>
            <p>Four connected themes at the heart of IGNITIA.</p>
          </div>
          <div className="page-module__4IW5Gq__themeGrid">
            <article>
              <span className="page-module__4IW5Gq__number">01</span>
              <h3>Leadership</h3>
              <p>
                Bringing visionary leaders, global decision-makers and
                changemakers into the same conversation.
              </p>
            </article>
            <article>
              <span className="page-module__4IW5Gq__number">02</span>
              <h3>Innovation</h3>
              <p>
                Exchanging transformative ideas that help shape the future of
                industries and economies.
              </p>
            </article>
            <article>
              <span className="page-module__4IW5Gq__number">03</span>
              <h3>Collaboration</h3>
              <p>
                Creating opportunities for strategic partnerships across
                business, government and technology.
              </p>
            </article>
            <article>
              <span className="page-module__4IW5Gq__number">04</span>
              <h3>Global impact</h3>
              <p>
                Connecting Africa with the world to inspire progress and unlock
                opportunities.
              </p>
            </article>
          </div>
        </section>
        <section
          className="page-module__4IW5Gq__closing"
          aria-labelledby="closing-heading"
        >
          <div className="page-module__4IW5Gq__closingMark" aria-hidden="true">
            ✳
          </div>
          <div>
            <p className="page-module__4IW5Gq__eyebrow">
              The conversation starts here
            </p>
            <h2 id="closing-heading">
              Igniting ideas. Uniting leaders.
              <br />
              <span>Shaping tomorrow.</span>
            </h2>
            <Link className="page-module__4IW5Gq__button" href="/contact/">
              Connect about IGNITIA <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <span className="page-module__4IW5Gq__signature" aria-hidden="true">
            IGNITIA.
          </span>
        </section>
        <div className="page-module__4IW5Gq__endnote">
          <p>
            Imagery is illustrative and does not depict an actual IGNITIA event
            or confirmed participants.
          </p>
          <Link href="/announcements/">
            All announcements <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
