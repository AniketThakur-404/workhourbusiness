"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./InteractiveBrand.module.css";

const engagementModels = [
  {
    id: "direct",
    badge: "Direct Recruitment · Recruit-Only",
    accent: "#0077C8",
    title: "Permanent Hiring & Executive Search",
    summary:
      "Build long-term core teams on your own company payroll while leveraging Employaa’s domain-specialist recruiters for speed, precision, and cultural fit.",
    points: [
      "Dedicated domain recruiters calibrate role scorecards and market compensation benchmarks.",
      "Multi-stage technical and behavioral vetting before candidates reach your hiring managers.",
      "End-to-end offer management and joining follow-through from entry-level to CXO.",
    ],
    bestFor: "Core engineering, product, leadership, and permanent growth roles.",
  },
  {
    id: "payroll",
    badge: "Outsourced Staffing · Employaa Payroll",
    accent: "#F58220",
    title: "Flexible Contract, Temp & Project Staffing",
    summary:
      "Scale teams rapidly for project milestones, seasonal peaks, or cross-border expansion while Employaa handles contracts, monthly payroll, and statutory compliance.",
    points: [
      "Rapid deployment of pre-vetted IT, engineering, operational, and specialist talent.",
      "Zero administrative overhead—Employaa manages onboarding, payroll, tax, and compliance.",
      "Seamless flexibility to scale headcount up or down or convert contractors to permanent staff.",
    ],
    bestFor: "Agile tech sprints, rapid market launches, and compliant headcount scaling.",
  },
] as const;

const talentPractices = [
  {
    id: "it-tech-staffing",
    num: "01",
    title: "Technology, Data & AI",
    headline: "Pre-vetted engineers, cloud architects, and AI specialists built for velocity.",
    roles: [
      "Full-Stack & Backend Engineers",
      "Cloud & DevOps Leads",
      "Data Scientists & AI/ML Engineers",
      "Product & QA Specialists",
    ],
    rubric: "Technical architecture screening, live problem-solving calibration, and sprint-readiness checks.",
    href: "/services/it-tech-staffing/",
  },
  {
    id: "executive-search",
    num: "02",
    title: "Executive & CXO Search",
    headline: "Discreet, research-backed leadership search for pivotal business inflection points.",
    roles: [
      "Chief Technology & Product Officers",
      "VP Engineering & Heads of Sales",
      "Finance & Operations Directors",
      "Country & Regional Heads",
    ],
    rubric: "Leadership track-record mapping, board/founder alignment, and confidential headhunting.",
    href: "/services/executive-search/",
  },
  {
    id: "contract-hiring",
    num: "03",
    title: "Contract & Temporary Staffing",
    headline: "On-demand workforce agility with full statutory payroll and compliance coverage.",
    roles: [
      "Project Delivery Specialists",
      "Finance & Compliance Analysts",
      "Seasonal & Peak Operations Teams",
      "Interim Functional Leads",
    ],
    rubric: "Immediate availability verification, compliance onboarding, and continuous performance oversight.",
    href: "/services/contract-hiring/",
  },
  {
    id: "bulk-hiring",
    num: "04",
    title: "Bulk, Campus & RPO",
    headline: "High-volume, launch-ready hiring engines for multi-city teams and cohorts.",
    roles: [
      "Graduate & Campus Cohorts",
      "Customer Success & Inside Sales",
      "Multi-Site Operations Staff",
      "Embedded RPO Pods",
    ],
    rubric: "Standardized batch assessments, multi-channel sourcing, and coordinated group onboarding.",
    href: "/services/bulk-hiring/",
  },
  {
    id: "global-remote-staffing",
    num: "05",
    title: "Global Remote & Gig Teams",
    headline: "Timezone-aligned international talent without cross-border entity complexity.",
    roles: [
      "Distributed Software Teams",
      "Global Support & Operations",
      "Fractional & Gig Specialists",
      "Cross-Border Consultants",
    ],
    rubric: "Cross-border contract structuring, local statutory compliance, and seamless remote onboarding.",
    href: "/services/global-remote-staffing/",
  },
] as const;

const pipelineSteps = [
  {
    step: "01",
    title: "Role Calibration",
    detail: "Align with hiring leaders on technical depth, compensation bands, team culture, and 90-day outcomes.",
  },
  {
    step: "02",
    title: "Targeted Mapping",
    detail: "Domain-specialist recruiters tap curated talent networks, passive leadership pools, and active pipelines.",
  },
  {
    step: "03",
    title: "Precision Vetting",
    detail: "Every candidate is evaluated on skills, mindset, and cultural fit so you interview only finalists.",
  },
  {
    step: "04",
    title: "Offer & Payroll",
    detail: "Seamless offer closure, joining readiness, and—for outsourced models—full statutory payroll execution.",
  },
] as const;

export default function EmployaaHome() {
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [selectedModel, setSelectedModel] = useState<"Direct Recruitment" | "Employaa Payroll Staffing">(
    "Direct Recruitment"
  );
  const [seniority, setSeniority] = useState("Mid-to-Senior Specialists");
  const [teamScale, setTeamScale] = useState("2–10 Hires");

  const activePractice = talentPractices[practiceIdx];

  return (
    <div
      className={styles.wrap}
      style={
        {
          "--brand-primary": "#0B2545",
          "--brand-on-primary": "#ffffff",
          "--brand-accent": "#0077C8",
          "--brand-on-accent": "#ffffff",
          "--brand-accent-light": "#F58220",
          "--brand-ink": "#0B2545",
          "--brand-muted": "#475569",
          "--brand-surface": "#F2F8FD",
          "--brand-border": "#D9EAF6",
          "--brand-dark-bg": "#0B2545",
          "--brand-badge-bg": "rgba(0, 119, 200, 0.1)",
          "--brand-badge-ink": "#005f9f",
        } as React.CSSProperties
      }
    >
      {/* 1. Dual Engagement Model (Balanced 2-Column Grid) */}
      <section className={styles.band} id="engagement-models">
        <div className={styles.headCenter}>
          <span className={styles.eyebrow}>Flexible Workforce Architecture</span>
          <h2 className={styles.h2}>Two Engagement Models. One Accountable Partner.</h2>
          <p className={styles.lead}>
            Talent is a growth engine. Choose permanent hiring on your payroll, outsourced staffing on Employaa’s
            payroll, or combine both as your business scales.
          </p>
        </div>

        <div className={styles.grid2}>
          {engagementModels.map((m) => (
            <article
              key={m.id}
              className={styles.card}
              style={{
                borderTop: `4px solid ${m.accent}`,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "grid", gap: "12px" }}>
                <span
                  className={styles.badge}
                  style={
                    m.id === "payroll"
                      ? { background: "rgba(245, 130, 32, 0.14)", color: "#964400" }
                      : undefined
                  }
                >
                  {m.badge}
                </span>
                <h3 className={styles.cardTitle} style={{ fontSize: "21px" }}>
                  {m.title}
                </h3>
                <p className={styles.cardText}>{m.summary}</p>
                <ul className={styles.checkList} style={{ marginTop: "4px" }}>
                  {m.points.map((pt) => (
                    <li key={pt}>
                      <span
                        className={styles.checkDot}
                        style={
                          m.id === "payroll"
                            ? { background: "rgba(245, 130, 32, 0.14)", color: "#964400" }
                            : undefined
                        }
                      >
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid #E6F0F8",
                  fontSize: "13px",
                  color: "#475569",
                }}
              >
                <strong style={{ color: "#0B2545" }}>Best Suited For:</strong> {m.bestFor}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. Specialized Hiring Practices Explorer */}
      <section className={styles.bandWhite} id="practices">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Specialized Hiring Practices</span>
          <h2 className={styles.h2}>Precision Search Across Tech, Leadership &amp; Scale</h2>
          <p className={styles.lead}>
            Select a hiring practice to inspect target roles, evaluation criteria, and open the full service guide.
          </p>
        </div>

        <div className={styles.split12}>
          <div className={styles.tabList} role="group" aria-label="Employaa Hiring Practices">
            {talentPractices.map((practice, idx) => {
              const active = idx === practiceIdx;
              return (
                <button
                  key={practice.id}
                  type="button"
                  onClick={() => setPracticeIdx(idx)}
                  aria-pressed={practiceIdx === idx}
                  className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ""}`}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span className={styles.tabNum}>{practice.num}</span>
                    <span className={styles.tabLabel}>{practice.title}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div className={styles.detailPanel}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <span className={styles.badge}>Practice {activePractice.num} of 05</span>
              <Link href="/services/" className={styles.eyebrow} style={{ margin: 0 }}>
                View all 9 services ↗
              </Link>
            </div>
            <div>
              <h3 className={styles.h2} style={{ fontSize: "24px", marginBottom: "6px" }}>
                {activePractice.title}
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#0077C8", margin: 0 }}>
                {activePractice.headline}
              </p>
            </div>
            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "10px" }}>
                Representative Roles Placed
              </p>
              <div className={styles.chips}>
                {activePractice.roles.map((role) => (
                  <span key={role} className={styles.chip}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.card} style={{ background: "#F2F8FD", boxShadow: "none" }}>
              <span className={styles.eyebrow} style={{ margin: 0 }}>
                Evaluation &amp; Vetting Rubric
              </span>
              <p className={styles.cardText}>{activePractice.rubric}</p>
            </div>
            <div className={styles.pillRow}>
              <Link href={activePractice.href} className={styles.primaryBtn}>
                Explore {activePractice.title} →
              </Link>
              <Link href="/contact/" className={styles.secondaryBtn}>
                Request Candidate Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Stage Precision Hiring Process (Symmetric 4-Column Row) */}
      <section className={styles.bandDark} id="process">
        <div className={styles.head} style={{ marginBottom: "28px" }}>
          <span className={styles.eyebrow} style={{ color: "#F58220" }}>
            Structured, Tech-Enabled Delivery
          </span>
          <h2 className={styles.h2}>How Employaa Delivers High-Signal Shortlists</h2>
          <p className={styles.lead}>
            Built for speed without compromise—every mandate follows a transparent four-stage execution framework.
          </p>
        </div>

        <div className={styles.grid4}>
          {pipelineSteps.map((st, idx) => (
            <article
              key={st.step}
              className={styles.card}
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(255, 255, 255, 0.14)",
                borderTop: `3px solid ${idx % 2 === 0 ? "#00AEEF" : "#F58220"}`,
                color: "#fff",
              }}
            >
              <span
                className={styles.badge}
                style={{
                  background: idx % 2 === 0 ? "rgba(0, 174, 239, 0.18)" : "rgba(245, 130, 32, 0.2)",
                  color: idx % 2 === 0 ? "#7DD3FC" : "#FBB03B",
                }}
              >
                Step {st.step}
              </span>
              <h3 className={styles.cardTitle} style={{ fontSize: "17px" }}>
                {st.title}
              </h3>
              <p className={styles.cardText} style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "13.5px" }}>
                {st.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Interactive Hiring Brief Builder (Balanced 2-Column) */}
      <section className={styles.bandWhite} id="hiring-blueprint">
        <div className={styles.split75}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div>
              <span className={styles.eyebrow}>Interactive Hiring Configurator</span>
              <h2 className={styles.h2}>Configure Your Hiring Brief</h2>
              <p className={styles.lead}>
                Select your preferred engagement model, seniority band, and hiring volume to generate a tailored
                Employaa delivery recommendation.
              </p>
            </div>

            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                1. Engagement Model
              </p>
              <div className={styles.pillRow}>
                {(["Direct Recruitment", "Employaa Payroll Staffing"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedModel(m)}
                    aria-pressed={selectedModel === m}
                    className={`${styles.pill} ${selectedModel === m ? styles.pillAccentActive : ""}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                2. Role Seniority
              </p>
              <div className={styles.pillRow}>
                {["Entry & Operations", "Mid-to-Senior Specialists", "Executive & CXO"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSeniority(lvl)}
                    aria-pressed={seniority === lvl}
                    className={`${styles.pill} ${seniority === lvl ? styles.pillActive : ""}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.eyebrow} style={{ marginBottom: "8px" }}>
                3. Hiring Volume
              </p>
              <div className={styles.pillRow}>
                {["Single Critical Hire", "2–10 Hires", "10+ Bulk / Cohort"].map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setTeamScale(vol)}
                    aria-pressed={teamScale === vol}
                    className={`${styles.pill} ${teamScale === vol ? styles.pillAccentActive : ""}`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.detailPanel} style={{ background: "#F2F8FD" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.eyebrow} style={{ margin: 0 }}>
                Recommended Setup
              </span>
              <span
                className={styles.badge}
                style={{ background: "rgba(245, 130, 32, 0.16)", color: "#964400" }}
              >
                Tailored Brief
              </span>
            </div>
            <h3 className={styles.cardTitle} style={{ fontSize: "20px" }}>
              {selectedModel}
            </h3>
            <ul className={styles.checkList}>
              <li>
                <span className={styles.checkDot}>✓</span>
                <span>
                  <strong>Seniority Band:</strong> {seniority}
                </span>
              </li>
              <li>
                <span className={styles.checkDot}>✓</span>
                <span>
                  <strong>Target Volume:</strong> {teamScale}
                </span>
              </li>
              <li>
                <span className={styles.checkDot}>✓</span>
                <span>
                  <strong>Compliance &amp; Screening:</strong>{" "}
                  {selectedModel === "Employaa Payroll Staffing"
                    ? "Full statutory payroll, contracts & onboarding handled by Employaa."
                    : "Structured technical & cultural vetting with direct offer support."}
                </span>
              </li>
            </ul>
            <Link href="/contact/" className={styles.primaryBtn}>
              Launch Hiring Brief with Employaa →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
