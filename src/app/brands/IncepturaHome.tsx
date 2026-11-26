"use client";

import { useState } from "react";
import Link from "next/link";
import {
  incepturaBottlenecks,
  incepturaHeroStages,
  incepturaPillars,
  incepturaPriorities,
  incepturaQuadrants,
  incepturaRegions,
  incepturaTracks,
} from "../businesses/inceptura-content";
import styles from "./InteractiveBrand.module.css";

const trackBasePillars: Record<string, string[]> = {
  "Ideation-to-Launch Suite": [
    "Company Registration, Shareholder Agreements & Statutory Compliance",
    "Business Model Validation, Unit Economics & Investor Pitch Strategy",
    "Founding Team Hiring, Payroll Setup & Launch Demo-Day Execution",
  ],
  "Scale & Operations Suite": [
    "Milestone Talent Acquisition & Compliant Statutory Payroll",
    "Product Launches, Investor Roundtables & Leadership Offsites",
    "Policy-Governed Corporate Travel, Logistics & Board Revenue Telemetry",
  ],
  "Global Expansion Suite": [
    "Cross-Border Market Prioritization, Foreign Entity & Tax Structuring",
    "Vetted Local Partner Networks, Regional Hiring & Launch Roadshows",
    "Multi-Region Travel Governance & Executive Revenue Leak Monitoring",
  ],
};

export default function IncepturaHome() {
  const [stageId, setStageId] = useState<string>(incepturaHeroStages[0].id);
  const [compareMode, setCompareMode] = useState<"both" | "friction" | "solution">("both");
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<string>("Scale & Operations Suite");
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["India & South Asia"]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    "Entity Structuring & Compliance",
    "Fundraising & Investor Demo Days",
    "Cross-Border Market Entry & Travel",
  ]);

  const activeStage = incepturaHeroStages.find((s) => s.id === stageId) ?? incepturaHeroStages[0];
  const activePillar = incepturaPillars[activePillarIdx];

  function toggleRegion(region: string) {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.length > 1
          ? prev.filter((r) => r !== region)
          : prev
        : [...prev, region]
    );
  }

  function togglePriority(priority: string) {
    setSelectedPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority]
    );
  }

  function selectTrackAndScroll(trackName: string) {
    setSelectedTrack(trackName);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("scope-configurator")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
  }

  return (
    <div
      className={styles.wrap}
      style={
        {
          "--brand-primary": "#052242",
          "--brand-on-primary": "#ffffff",
          "--brand-accent": "#1575D1",
          "--brand-on-accent": "#ffffff",
          "--brand-accent-light": "#7BC0F8",
          "--brand-ink": "#052242",
          "--brand-muted": "#3b526b",
          "--brand-surface": "#F4F8FC",
          "--brand-border": "rgba(5, 34, 66, 0.12)",
          "--brand-dark-bg": "#052242",
          "--brand-badge-bg": "rgba(21, 117, 209, 0.12)",
          "--brand-badge-ink": "#0A4D8C",
        } as React.CSSProperties
      }
    >
      {/* 1. Quick Growth-Stage Selector & 4-Diamond Architecture */}
      <section className={styles.band} id="about">
        <div className={styles.split75}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div>
              <span className={styles.eyebrow}>One Integrated Suite — Never Sold À La Carte</span>
              <h2 className={styles.h2}>
                Great Ideas Rarely Fail From Lack of Vision. They Stall in Execution.
              </h2>
              <p className={styles.lead}>
                Most founders lose months juggling disconnected incorporation lawyers, recruitment agencies, event
                vendors, travel coordinators, and cross-border consultants. Inceptura replaces that chaos with one
                unified, embedded operational engine.
              </p>
            </div>

            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "10px" }}>
                Explore Your Growth Stage
              </p>
              <div className={styles.pillRow}>
                {incepturaHeroStages.map((stage) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setStageId(stage.id)}
                    aria-pressed={stageId === stage.id}
                    className={`${styles.pill} ${stageId === stage.id ? styles.pillAccentActive : ""}`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
              <div className={styles.card} style={{ marginTop: "14px" }}>
                <span className={styles.badge}>{activeStage.tag}</span>
                <p className={styles.cardText} style={{ color: "#052242" }}>
                  {activeStage.text}
                </p>
                <a href="#partnership-tracks" className={styles.eyebrow} style={{ margin: 0 }}>
                  View matching track →
                </a>
              </div>
            </div>
          </div>

          <div className={styles.bandWhite}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span className={styles.eyebrow} style={{ marginBottom: "2px" }}>
                  The Inceptura Architecture
                </span>
                <h3 className={styles.cardTitle}>Four Quadrants. Seven Pillars.</h3>
              </div>
              <span className={styles.badge}>Unified Model</span>
            </div>
            <div className={styles.quadGrid}>
              {incepturaQuadrants.map((q) => {
                const toneClass =
                  q.tone === "ice"
                    ? styles.quadIce
                    : q.tone === "navy"
                      ? styles.quadNavy
                      : q.tone === "azure"
                        ? styles.quadAzure
                        : styles.quadSapphire;
                return (
                  <div key={q.id} className={`${styles.quadCard} ${toneClass}`}>
                    <span className={styles.quadStep}>{q.step}</span>
                    <h3>{q.title}</h3>
                    <p>{q.summary}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bottleneck vs. Resolution Interactive Toggle */}
      <section className={styles.bandWhite} id="why-inceptura">
        <div className={styles.headCenter}>
          <span className={styles.eyebrow}>Why Founders &amp; CEOs Partner With Us</span>
          <h2 className={styles.h2}>Stop Patching Growth With Disconnected Vendors</h2>
          <p className={styles.lead}>
            Toggle below to inspect the six core bottlenecks of scaling and how Inceptura resolves each one inside a
            single operating engine.
          </p>
          <div className={styles.pillRow} style={{ justifyContent: "center", marginTop: "20px" }}>
            <button
              type="button"
              onClick={() => setCompareMode("both")}
              aria-pressed={compareMode === "both"}
              className={`${styles.pill} ${compareMode === "both" ? styles.pillActive : ""}`}
            >
              Side-by-Side Comparison
            </button>
            <button
              type="button"
              onClick={() => setCompareMode("friction")}
              aria-pressed={compareMode === "friction"}
              className={`${styles.pill} ${compareMode === "friction" ? styles.pillActive : ""}`}
            >
              The Founder Friction
            </button>
            <button
              type="button"
              onClick={() => setCompareMode("solution")}
              aria-pressed={compareMode === "solution"}
              className={`${styles.pill} ${compareMode === "solution" ? styles.pillActive : ""}`}
            >
              The Inceptura Engine
            </button>
          </div>
        </div>

        <div className={styles.grid3}>
          {incepturaBottlenecks.map((item) => (
            <article key={item.frictionTitle} className={styles.card} style={{ background: "#F4F8FC" }}>
              {compareMode !== "solution" && (
                <div
                  style={{
                    paddingBottom: compareMode === "both" ? "14px" : 0,
                    borderBottom: compareMode === "both" ? "1px solid rgba(5,34,66,0.1)" : "none",
                  }}
                >
                  <span className={`${styles.badge} ${styles.badgeDanger}`}>The Friction</span>
                  <h3 className={styles.cardTitle} style={{ marginTop: "8px", fontSize: "16px" }}>
                    {item.frictionTitle}
                  </h3>
                  <p className={styles.cardText} style={{ marginTop: "4px" }}>
                    {item.frictionText}
                  </p>
                </div>
              )}
              {compareMode !== "friction" && (
                <div>
                  <span className={styles.badge}>Inceptura Resolution</span>
                  <h4 className={styles.cardTitle} style={{ marginTop: "8px", fontSize: "16px", color: "#0A4D8C" }}>
                    {item.solutionTitle}
                  </h4>
                  <p className={styles.cardText} style={{ marginTop: "4px" }}>
                    {item.solutionText}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 3. Interactive 7-Pillar Unified Suite Explorer */}
      <section className={styles.band} id="services">
        <div className={styles.bandDark} style={{ marginBottom: "32px" }}>
          <div className={styles.split75}>
            <div>
              <span className={styles.eyebrow}>Our Core Operating Principle</span>
              <h2 className={styles.h2}>Why We Never Sell Services Individually</h2>
              <p className={styles.lead}>
                Hiring a standalone event agency when your market-entry strategy isn’t locked—or incorporating a foreign
                subsidiary without local payroll and revenue tracking—creates expensive friction.{" "}
                <strong>None of Inceptura’s seven pillars are sold à la carte.</strong>
              </p>
            </div>
            <ul className={styles.checkList}>
              <li style={{ color: "#fff" }}>
                <span className={styles.checkDot} style={{ background: "#1575D1", color: "#fff" }}>✓</span>
                One unified governance &amp; billing relationship
              </li>
              <li style={{ color: "#fff" }}>
                <span className={styles.checkDot} style={{ background: "#1575D1", color: "#fff" }}>✓</span>
                Zero context lost between strategy &amp; execution
              </li>
              <li style={{ color: "#fff" }}>
                <span className={styles.checkDot} style={{ background: "#1575D1", color: "#fff" }}>✓</span>
                Faster time-to-market across new geographies
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.head}>
          <span className={styles.eyebrow}>Interactive Suite Explorer</span>
          <h2 className={styles.h2}>Explore the 7 Interconnected Pillars of Inceptura</h2>
          <p className={styles.lead}>
            Select any pillar below to inspect its core deliverables, founder impact, and how it interlocks with the rest
            of your growth engine.
          </p>
        </div>

        <div className={styles.split12}>
          <div className={styles.tabList} role="group" aria-label="Inceptura 7 Pillars">
            {incepturaPillars.map((pillar, idx) => {
              const active = idx === activePillarIdx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarIdx(idx)}
                  aria-pressed={activePillarIdx === idx}
                  className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ""}`}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span className={styles.tabNum}>{pillar.number}</span>
                    <span className={styles.tabLabel}>{pillar.title}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div className={styles.detailPanel}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }}>
              <span className={styles.badge}>Pillar {activePillar.number} of 07 · Unified Suite</span>
              <Link href={`/offerings/${activePillar.id}/`} className={styles.eyebrow} style={{ margin: 0 }}>
                Open full pillar page ↗
              </Link>
            </div>
            <div>
              <h3 className={styles.h2} style={{ fontSize: "26px", marginBottom: "6px" }}>
                {activePillar.title}
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#1575D1", margin: 0 }}>{activePillar.tagline}</p>
            </div>
            <p className={styles.lead}>{activePillar.summary}</p>
            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "10px" }}>
                Core Execution Deliverables
              </p>
              <ul className={styles.checkList}>
                {activePillar.deliverables.map((item) => (
                  <li key={item}>
                    <span className={styles.checkDot}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.grid2}>
              <div className={styles.card} style={{ background: "#F4F8FC", boxShadow: "none" }}>
                <span className={styles.eyebrow} style={{ margin: 0 }}>
                  Founder &amp; Business Impact
                </span>
                <p className={styles.cardText}>{activePillar.impact}</p>
              </div>
              <div className={styles.card} style={{ background: "#052242", color: "#fff" }}>
                <span className={styles.eyebrow} style={{ margin: 0, color: "#7BC0F8" }}>
                  Suite Interlock
                </span>
                <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.86)" }}>
                  {activePillar.synergy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stage-Based Partnership Tracks & Scope Configurator */}
      <section className={styles.bandWhite} id="partnership-tracks">
        <div className={styles.headCenter}>
          <span className={styles.eyebrow}>Holistic Engagement Architecture</span>
          <h2 className={styles.h2}>Three Stage-Based Partnership Tracks</h2>
          <p className={styles.lead}>
            Engage Inceptura through a holistic track matched to your current inflection point—never fragmented vendor
            contracts.
          </p>
        </div>

        <div className={styles.grid3} style={{ marginBottom: "36px" }}>
          {incepturaTracks.map((track) => (
            <article
              key={track.name}
              className={`${styles.card} ${"featured" in track && track.featured ? styles.cardFeatured : ""}`}
              style={! ("featured" in track && track.featured) ? { background: "#F4F8FC" } : undefined}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <span className={`${styles.badge} ${"featured" in track && track.featured ? styles.badgeDark : ""}`}>
                  {track.badge}
                </span>
                <span style={{ fontSize: "12px", fontWeight: 700, opacity: 0.85 }}>{track.sub}</span>
              </div>
              <h3 className={styles.cardTitle} style={{ fontSize: "21px" }}>
                {track.name}
              </h3>
              <p className={styles.cardText}>{track.summary}</p>
              <ul className={styles.checkList} style={{ marginTop: "6px" }}>
                {track.highlights.map((h) => (
                  <li key={h}>
                    <span className={styles.checkDot}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => selectTrackAndScroll(track.name)}
                className={"featured" in track && track.featured ? styles.primaryBtn : styles.secondaryBtn}
                style={{ marginTop: "auto" }}
              >
                Configure {track.stageLabel} Scope
              </button>
            </article>
          ))}
        </div>

        {/* Interactive Scope Configurator */}
        <div className={styles.band} id="scope-configurator">
          <div className={styles.split75}>
            <div style={{ display: "grid", gap: "20px" }}>
              <div>
                <span className={styles.eyebrow}>Interactive Partnership Builder</span>
                <h3 className={styles.h2} style={{ fontSize: "24px" }}>
                  Build Your Custom Partnership Scope
                </h3>
                <p className={styles.lead}>
                  Select your stage, target regions, and immediate priorities to preview your unified Inceptura blueprint.
                </p>
              </div>

              <div>
                <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                  1. Current Organizational Stage
                </p>
                <div className={styles.pillRow}>
                  {incepturaTracks.map((track) => (
                    <button
                      key={track.name}
                      type="button"
                      onClick={() => setSelectedTrack(track.name)}
                      aria-pressed={selectedTrack === track.name}
                      className={`${styles.pill} ${selectedTrack === track.name ? styles.pillActive : ""}`}
                    >
                      {track.stageLabel}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                  2. Target Operating &amp; Expansion Regions
                </p>
                <div className={styles.pillRow}>
                  {incepturaRegions.map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => toggleRegion(region)}
                      aria-pressed={selectedRegions.includes(region)}
                      className={`${styles.pill} ${selectedRegions.includes(region) ? styles.pillAccentActive : ""}`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                  3. Immediate 90-Day Priorities
                </p>
                <div className={styles.grid2}>
                  {incepturaPriorities.map((priority) => (
                    <label key={priority} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedPriorities.includes(priority)}
                        onChange={() => togglePriority(priority)}
                      />
                      <span>{priority}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.detailPanel}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className={styles.eyebrow} style={{ margin: 0 }}>
                  Tailored Partnership Blueprint
                </span>
                <span className={styles.badge}>Unified Suite</span>
              </div>
              <div>
                <h4 className={styles.cardTitle} style={{ fontSize: "20px" }}>
                  {selectedTrack}
                </h4>
                <p className={styles.cardText} style={{ color: "#0A4D8C", fontWeight: 600, marginTop: "4px" }}>
                  Target Corridor: {selectedRegions.join(" • ")}
                </p>
              </div>
              <ul className={styles.checkList}>
                {(trackBasePillars[selectedTrack] ?? []).map((item) => (
                  <li key={item}>
                    <span className={styles.checkDot}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
                {selectedPriorities.length > 0 && (
                  <li>
                    <span className={styles.checkDot}>✓</span>
                    <span>Priority Focus: {selectedPriorities.join(", ")}</span>
                  </li>
                )}
              </ul>
              <div className={styles.card} style={{ background: "#F4F8FC", boxShadow: "none", padding: "14px" }}>
                <p className={styles.cardText} style={{ fontSize: "12.5px" }}>
                  <strong>Delivery Governance:</strong> Dedicated Relationship Lead, bi-weekly strategy &amp; execution
                  reviews, and shared KPI workspace backed by WorkHour Business.
                </p>
              </div>
              <Link href="/contact/" className={styles.primaryBtn}>
                Request Alignment Briefing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mentorship Umbrella Model + Vision, Mission & 5 Core Values */}
      <section className={styles.bandDark} id="vision-and-mission">
        <div className={styles.split12} style={{ marginBottom: "32px" }}>
          <div>
            <span className={styles.eyebrow}>How We Work With You</span>
            <h2 className={styles.h2}>An Embedded Growth Partner—Not a Transactional Vendor</h2>
            <p className={styles.lead}>
              Operating under a <strong>Mentorship Umbrella Model</strong>, we sit alongside founders inside strategic
              discussions, anticipate bottlenecks early, and own execution follow-through.
            </p>
          </div>
          <div className={styles.grid2}>
            <div className={styles.card} style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <span className={styles.badgeDark + " " + styles.badge}>01</span>
              <h3 className={styles.cardTitle}>Single Point of Accountability</h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.78)" }}>
                A Dedicated Relationship Lead orchestrates all seven pillars so you never chase multiple managers.
              </p>
            </div>
            <div className={styles.card} style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <span className={styles.badgeDark + " " + styles.badge}>02</span>
              <h3 className={styles.cardTitle}>Structured Execution Cadence</h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.78)" }}>
                Regular checkpoints keep registration, hiring, events, and GTM milestones on schedule.
              </p>
            </div>
            <div className={styles.card} style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <span className={styles.badgeDark + " " + styles.badge}>03</span>
              <h3 className={styles.cardTitle}>Shared Planning &amp; Telemetry</h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.78)" }}>
                Transparent progress tracking and live commercial KPIs give founders real-time visibility.
              </p>
            </div>
            <div className={styles.card} style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.14)", color: "#fff" }}>
              <span className={styles.badgeDark + " " + styles.badge}>04</span>
              <h3 className={styles.cardTitle}>Domain Specialist Network</h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.78)" }}>
                Immediate access to legal, tax, cross-border expansion, and industry advisors backed by WorkHour Business.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.card} style={{ background: "rgba(10,77,140,0.45)", borderColor: "rgba(123,192,248,0.28)", color: "#fff" }}>
            <span className={styles.eyebrow}>Our Vision</span>
            <h3 className={styles.cardTitle}>No Promising Idea Should Fail From Execution Gaps</h3>
            <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.84)" }}>
              To be the most trusted growth enabler for startups and enterprises—guiding them from initial ideation through
              execution, optimization, and global expansion.
            </p>
          </div>
          <div className={styles.card} style={{ background: "rgba(21,117,209,0.25)", borderColor: "rgba(123,192,248,0.28)", color: "#fff" }}>
            <span className={styles.eyebrow}>Our Mission</span>
            <h3 className={styles.cardTitle}>Accelerating Time-to-Market &amp; Enterprise Value</h3>
            <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.84)" }}>
              To integrate seamlessly into our partners&apos; journeys as a strategic and operational ally—delivering
              end-to-end execution that compresses time-to-market and strengthens governance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
