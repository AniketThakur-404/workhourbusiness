"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./InteractiveBrand.module.css";

const eventFormats = [
  {
    id: "strategic-conferences",
    num: "01",
    tag: "Conferences",
    title: "Strategic Conferences",
    headline: "CXO-level forums with research-led agendas and purposeful networking.",
    bullets: [
      "CXO-level speakers, keynotes, and expert debate panels",
      "Research-driven, curated agendas grounded in real executive challenges",
      "Focused VIP roundtables and high-ROI sponsor integration",
    ],
    href: "/services/strategic-conferences/",
  },
  {
    id: "trade-expos-and-exhibitions",
    num: "02",
    tag: "Expos",
    title: "Trade Expos & Exhibitions",
    headline: "Platforms where products are seen, tested, and discussed by qualified buyers.",
    bullets: [
      "Comprehensive exhibitor, sponsor, and pavilion packaging",
      "Live demonstration stages and interactive partner zones",
      "Targeted visitor acquisition, hosted buyers, and verified lead capture",
    ],
    href: "/services/trade-expos-and-exhibitions/",
  },
  {
    id: "bespoke-corporate-events",
    num: "03",
    tag: "Bespoke",
    title: "Bespoke Corporate Events",
    headline: "Experiences tailored entirely to your people, message, and pivotal moments.",
    bullets: [
      "Annual leadership meets, strategic offsites, and global town halls",
      "Prestigious award ceremonies and milestone recognition evenings",
      "Partner, dealer, and marquee customer summits",
    ],
    href: "/services/bespoke-corporate-events/",
  },
  {
    id: "webinars-and-virtual-events",
    num: "04",
    tag: "Virtual",
    title: "Webinars & Virtual Events",
    headline: "Digital programmes built to generate leads and deepen relationships at scale.",
    bullets: [
      "Studio-grade webinar series and virtual product launches",
      "Integrated registration, CRM synchronization, and attendee analytics",
      "Hybrid extensions uniting in-person and global digital audiences",
    ],
    href: "/services/webinars-and-virtual-events/",
  },
  {
    id: "podcast-and-content-series",
    num: "05",
    tag: "Content",
    title: "Podcasts & Content Series",
    headline: "Keep the conversation going long after the stage lights go down.",
    bullets: [
      "Executive interviews and industry knowledge series",
      "Branded shows with full studio production and distribution",
      "Summit highlights repurposed into evergreen thought leadership",
    ],
    href: "/services/podcast-and-content-series/",
  },
] as const;

const processSteps = [
  { step: "01", title: "Discover", desc: "Clear business objectives, target audience profiles, and agreed KPIs." },
  { step: "02", title: "Concept", desc: "Creative direction, agenda framework, and transparent budget sign-off." },
  { step: "03", title: "Plan", desc: "Operational timelines, vendor charters, and stakeholder responsibilities." },
  { step: "04", title: "Curate", desc: "Research-backed content themes and senior speaker recruitment." },
  { step: "05", title: "Communicate", desc: "Event branding, creative assets, and multi-channel delegate outreach." },
  { step: "06", title: "Rehearse", desc: "Technical dry runs, speaker briefings, and on-site risk reviews." },
  { step: "07", title: "Deliver", desc: "Rehearsed, monitored live execution—on-site, virtual, or hybrid." },
  { step: "08", title: "Review", desc: "Post-event analytics, lead scoring, and strategic next-step advice." },
] as const;

const regions = [
  {
    id: "india",
    label: "Region 01 · India",
    summary: "Corporate conferences, expos, national annual meets, and leadership offsites.",
    cities: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad"],
  },
  {
    id: "asia",
    label: "Region 02 · Asia",
    summary: "Regional summits, pan-Asian partner conferences, and cross-border industry forums.",
    cities: ["Singapore", "Bangkok", "Kuala Lumpur", "Jakarta"],
  },
  {
    id: "mea",
    label: "Region 03 · Middle East & Africa",
    summary: "Government and enterprise summits, sector conferences, and executive roadshows.",
    cities: ["Dubai", "Riyadh", "Doha", "Nairobi", "Zimbabwe", "South Africa"],
  },
] as const;

const industries = [
  { name: "Technology & SaaS", desc: "Demand generation, customer forums, and launches for a fast-moving market." },
  { name: "BFSI", desc: "Dialogue on regulation, fintech innovation, and trust among institutions." },
  { name: "Manufacturing", desc: "Expos and summits connecting suppliers, engineers, and procurement leaders." },
  { name: "Healthcare", desc: "Forums where clinical, operational, and healthcare policy voices meet." },
  { name: "Energy & Infrastructure", desc: "Platforms for investment, sustainability, and energy transition conversations." },
  { name: "Government & Associations", desc: "Policy dialogues, outreach programmes, and civic knowledge platforms." },
] as const;

const capabilities = [
  "Concept & design",
  "Agenda & speakers",
  "Branding & creative",
  "Venues & logistics",
  "Audience & registration",
  "Stage & production",
  "Virtual & hybrid tech",
  "Sponsorship",
  "Reporting & follow-up",
] as const;

export default function LeadersPinnacleHome() {
  const [formatIdx, setFormatIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [regionId, setRegionId] = useState<string>(regions[0].id);
  const [participation, setParticipation] = useState("Host a Custom Event");

  const activeFormat = eventFormats[formatIdx];
  const activeStep = processSteps[stepIdx];
  const activeRegion = regions.find((r) => r.id === regionId) ?? regions[0];

  return (
    <div
      className={styles.wrap}
      style={
        {
          "--brand-primary": "#0a1f44",
          "--brand-on-primary": "#e3c477",
          "--brand-accent": "#c8a24a",
          "--brand-on-accent": "#0a1f44",
          "--brand-accent-light": "#e3c477",
          "--brand-ink": "#0a1f44",
          "--brand-muted": "#4b5b76",
          "--brand-surface": "#f3f5f9",
          "--brand-border": "#e1e6ef",
          "--brand-dark-bg": "#0a1f44",
          "--brand-badge-bg": "rgba(200, 162, 74, 0.16)",
          "--brand-badge-ink": "#8c6b1f",
          "--brand-heading-font": "var(--serif)",
        } as React.CSSProperties
      }
    >
      {/* 1. Interactive 5-Format Solution Explorer */}
      <section className={styles.band} id="services">
        <div className={styles.head}>
          <span className={styles.eyebrow}>What We Create</span>
          <h2 className={styles.h2}>Every Format a Leader Needs, Under One Roof</h2>
          <p className={styles.lead}>
            From boardroom-level forums to expansive trade platforms, select a format to inspect deliverables and
            expected outcomes.
          </p>
        </div>

        <div className={styles.split12}>
          <div className={styles.tabList} role="group" aria-label="Leaders Pinnacle Event Formats">
            {eventFormats.map((fmt, idx) => {
              const active = idx === formatIdx;
              return (
                <button
                  key={fmt.id}
                  type="button"
                  onClick={() => setFormatIdx(idx)}
                  aria-pressed={formatIdx === idx}
                  className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ""}`}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span className={styles.tabNum}>{fmt.num}</span>
                    <span className={styles.tabLabel}>{fmt.title}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div className={styles.detailPanel}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <span className={styles.badge}>
                {activeFormat.num} · {activeFormat.tag}
              </span>
              <Link href={activeFormat.href} className={styles.eyebrow} style={{ margin: 0 }}>
                Open full solution page ↗
              </Link>
            </div>
            <div>
              <h3 className={styles.h2} style={{ fontSize: "26px", marginBottom: "6px" }}>
                {activeFormat.title}
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#13306a", margin: 0 }}>{activeFormat.headline}</p>
            </div>
            <ul className={styles.checkList}>
              {activeFormat.bullets.map((b) => (
                <li key={b}>
                  <span className={styles.checkDot}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className={styles.pillRow}>
              <Link href={activeFormat.href} className={styles.primaryBtn}>
                Explore {activeFormat.title}
              </Link>
              <Link href="/contact/" className={styles.secondaryBtn}>
                Plan This Format
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Leaders Choose Us + Interactive 8-Step Execution Process */}
      <section className={styles.bandDark} id="process">
        <div className={styles.head} style={{ marginBottom: "24px" }}>
          <span className={styles.eyebrow}>Why Leaders Choose Us</span>
          <h2 className={styles.h2}>Events Built to Be Measured, Not Merely Remembered</h2>
        </div>

        <div className={styles.grid4} style={{ marginBottom: "36px" }}>
          {[
            { t: "Outcome-first", d: "Clear objectives and agreed KPIs before a single design decision." },
            { t: "Content-led", d: "Themes grounded in research and the real questions leaders face." },
            { t: "Hybrid by design", d: "In-person and digital audiences in one connected experience." },
            { t: "Regionally rooted", d: "Local networks that handle culture, regulation, and logistics." },
          ].map((pillar) => (
            <div
              key={pillar.t}
              className={styles.card}
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(200,162,74,0.28)", color: "#fff" }}
            >
              <h3 className={styles.cardTitle} style={{ color: "#e3c477", fontSize: "17px" }}>
                {pillar.t}
              </h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.8)" }}>
                {pillar.d}
              </p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "28px" }}>
          <span className={styles.eyebrow}>Our 8-Step Process</span>
          <h3 className={styles.h2} style={{ fontSize: "24px" }}>
            Eight Steps, No Surprises
          </h3>
          <div className={styles.pillRow} style={{ marginTop: "16px", marginBottom: "18px" }}>
            {processSteps.map((s, idx) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setStepIdx(idx)}
                aria-pressed={stepIdx === idx}
                className={styles.pill}
                style={
                  stepIdx === idx
                    ? { background: "#c8a24a", color: "#0a1f44", borderColor: "#c8a24a" }
                    : { background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }
                }
              >
                {s.step} · {s.title}
              </button>
            ))}
          </div>
          <div className={styles.card} style={{ background: "rgba(19, 48, 106, 0.7)", borderColor: "#c8a24a", color: "#fff" }}>
            <span className={styles.eyebrow} style={{ margin: 0 }}>
              Stage {activeStep.step} of 08
            </span>
            <h4 className={styles.cardTitle} style={{ fontSize: "20px" }}>
              {activeStep.title}
            </h4>
            <p className={styles.cardText} style={{ color: "#d6deee" }}>
              {activeStep.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. End-to-End Capabilities & Industry Fluency */}
      <section className={styles.bandWhite} id="industries">
        <div className={styles.head}>
          <span className={styles.eyebrow}>End-to-End Delivery</span>
          <h2 className={styles.h2}>Everything Handled, Start to Finish</h2>
          <div className={styles.chips} style={{ marginTop: "16px" }}>
            {capabilities.map((cap) => (
              <span key={cap} className={styles.chip}>
                {cap}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "36px" }}>
          <span className={styles.eyebrow}>Industries We Serve</span>
          <h3 className={styles.h2} style={{ fontSize: "24px" }}>
            Fluent in Your Sector
          </h3>
          <div className={styles.grid3} style={{ marginTop: "16px" }}>
            {industries.map((ind) => (
              <article key={ind.name} className={styles.card} style={{ background: "#f3f5f9" }}>
                <h4 className={styles.cardTitle}>{ind.name}</h4>
                <p className={styles.cardText}>{ind.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Regional Hub Explorer & Event Roadmap Builder */}
      <section className={styles.band} id="global-presence">
        <div className={styles.split75}>
          <div style={{ display: "grid", gap: "18px" }}>
            <div>
              <span className={styles.eyebrow}>Global Presence · 3 Regions · 14 Hub Cities</span>
              <h2 className={styles.h2}>Local Insight. Global Standards.</h2>
              <p className={styles.lead}>
                Select a region to explore our hub cities and local execution capabilities.
              </p>
            </div>
            <div className={styles.pillRow}>
              {regions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRegionId(r.id)}
                  aria-pressed={regionId === r.id}
                  className={`${styles.pill} ${regionId === r.id ? styles.pillActive : ""}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <div className={styles.detailPanel}>
              <span className={styles.badge}>{activeRegion.label}</span>
              <p className={styles.lead}>{activeRegion.summary}</p>
              <div className={styles.chips}>
                {activeRegion.cities.map((city) => (
                  <span key={city} className={styles.chip}>
                    {city}
                  </span>
                ))}
              </div>
              <Link href="/our-global-reach/" className={styles.eyebrow} style={{ margin: 0 }}>
                Explore full global reach ↗
              </Link>
            </div>
          </div>

          <div className={styles.detailPanel}>
            <span className={styles.eyebrow} style={{ margin: 0 }}>
              Interactive Event Roadmap
            </span>
            <h3 className={styles.cardTitle} style={{ fontSize: "20px" }}>
              Plan Your Next Gathering
            </h3>
            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                How Would You Like to Engage?
              </p>
              <div className={styles.pillRow}>
                {["Host a Custom Event", "Speak at a Summit", "Sponsor", "Partner"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setParticipation(mode)}
                    aria-pressed={participation === mode}
                    className={`${styles.pill} ${participation === mode ? styles.pillAccentActive : ""}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.card} style={{ background: "#f3f5f9", boxShadow: "none" }}>
              <span className={styles.badge}>Your Event Brief</span>
              <p className={styles.cardText} style={{ color: "#0a1f44" }}>
                <strong>Engagement:</strong> {participation}
                <br />
                <strong>Format:</strong> {activeFormat.title}
                <br />
                <strong>Region:</strong> {activeRegion.label} ({activeRegion.cities.slice(0, 3).join(", ")})
              </p>
            </div>
            <Link href="/contact/" className={styles.primaryBtn}>
              Start Conversation with Leaders Pinnacle →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
