"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { travelDestinations } from "../businesses/updated-portfolios";
import styles from "./InteractiveBrand.module.css";

export function DestinationExplorer({ destinations }: { destinations: typeof travelDestinations }) {
  const [region, setRegion] = useState("All");
  const reduced = useReducedMotion();
  const regions = ["All", ...new Set(destinations.map((destination) => destination.region))];
  const visible = destinations.filter((destination) => region === "All" || destination.region === region);

  return (
    <section className={styles.bandWhite} id="destinations" aria-labelledby="destinations-heading">
      <div className={styles.head}>
        <h2 className={styles.h2} id="destinations-heading">Explore travel destinations</h2>
        <p className={styles.lead}>Browse example itineraries for business trips, holidays, and group travel.</p>
      </div>
      <div className={styles.pillRow} role="group" aria-label="Filter by region">
        {regions.map((item) => (
          <button className={`${styles.pill} ${region === item ? styles.pillActive : ""}`}
            key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)}>{item}</button>
        ))}
      </div>
      <p className={styles.filterCount} role="status">{visible.length} {visible.length === 1 ? "itinerary" : "itineraries"}</p>
      <motion.div className={styles.grid3} key={region} initial={false}
        animate={reduced === false ? { y: [6, 0] } : { y: 0 }} transition={{ duration: .22 }}>
        {visible.map(({ name, tag, duration, description }) => (
          <article key={name} className={styles.card}>
            <p className={styles.cardMeta}>{duration} · {tag}</p>
            <h3 className={styles.cardTitle}>{name}</h3>
            <p className={styles.cardText}>{description}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

const workspaceFormats = ["Virtual office", "Coworking", "Private serviced suite", "Enterprise managed floor"];
const fitOuts = ["Fully furnished", "Semi-furnished", "Bare shell"];
const supportOptions = ["Basic infrastructure", "Enterprise IT and access"];
const addOns = ["Cafeteria or pantry", "Front-office and admin team", "Onsite IT and compliance"];

export function WorkspacePlanner() {
  const [format, setFormat] = useState(workspaceFormats[2]);
  const [seats, setSeats] = useState(12);
  const [fitOut, setFitOut] = useState(fitOuts[0]);
  const [support, setSupport] = useState(supportOptions[0]);
  const [extras, setExtras] = useState<string[]>([]);
  const physical = format !== workspaceFormats[0];
  const brief = [
    ["Format", format],
    ...(physical ? [["Seats", String(seats)], ["Fit-out", fitOut], ["Infrastructure", support]] : []),
    ["Add-ons", extras.join(", ") || "None selected"],
  ];
  const [copyStatus, setCopyStatus] = useState("");

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief.map(([label, value]) => `${label}: ${value}`).join("\n"));
      setCopyStatus("Workspace brief copied.");
    } catch {
      setCopyStatus("Select the summary text to copy your brief.");
    }
  }

  return (
    <section className={styles.band} id="workspace-planner" aria-labelledby="workspace-planner-heading">
      <div className={styles.head}>
        <h2 className={styles.h2} id="workspace-planner-heading">Build a workspace brief</h2>
        <p className={styles.lead}>Choose a workspace format, fit-out, and support to discuss with the Delhi team.</p>
      </div>
      <div className={styles.split12} onChange={() => setCopyStatus("")}>
        <div className={styles.plannerFields}>
          <label>Workspace format
            <select value={format} onChange={(event) => setFormat(event.target.value)}>
              {workspaceFormats.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          {physical && (
            <>
              <label>Seats <output>{seats}</output>
                <input type="range" min={1} max={150} value={seats} onChange={(event) => setSeats(event.target.valueAsNumber)} />
              </label>
              <label>Fit-out
                <select value={fitOut} onChange={(event) => setFitOut(event.target.value)}>
                  {fitOuts.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>Infrastructure
                <select value={support} onChange={(event) => setSupport(event.target.value)}>
                  {supportOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </>
          )}
          <fieldset className={styles.plannerExtras}>
            <legend>Add-ons</legend>
            {addOns.map((item) => (
              <label className={styles.checkboxLabel} key={item}>
                <input type="checkbox" checked={extras.includes(item)}
                  onChange={(event) => setExtras(event.target.checked ? [...extras, item] : extras.filter((option) => option !== item))} />
                {item}
              </label>
            ))}
          </fieldset>
        </div>
        <div className={styles.detailPanel}>
          <h3 className={styles.cardTitle}>Your workspace brief</h3>
          <dl className={styles.brief}>
            {brief.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <div className={styles.pillRow}>
            <button type="button" className={styles.secondaryBtn} onClick={copyBrief}>Copy brief</button>
            <Link className={styles.primaryBtn} href="/contact/">Discuss a workspace</Link>
          </div>
          {copyStatus && <p className={styles.cardText} role="status">{copyStatus}</p>}
        </div>
      </div>
    </section>
  );
}
