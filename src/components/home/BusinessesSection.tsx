"use client";

import { useState } from "react";
import Image from "next/image";

const businessesData = [
  {
    id: "inceptura",
    number: "01",
    name: "Inceptura",
    strapline: "Ideation to Execution",
    image: "/business-inceptura.webp",
    href: "https://inceptura.workhourbusiness.com",
    description:
      "Inceptura is a strategic growth partner designed to support startups and growing enterprises from the earliest spark of an idea through full execution and global expansion.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <path d="M20 42 39 23l13 13 26-26" />
        <path d="M62 10h16v16" />
        <circle cx="20" cy="42" r="5" />
        <circle cx="39" cy="23" r="5" />
        <circle cx="52" cy="36" r="5" />
        <circle cx="78" cy="10" r="5" />
      </svg>
    ),
  },
  {
    id: "leaders-pinnacle",
    number: "02",
    name: "Leaders Pinnacle",
    strapline: "B2B events and market intelligence",
    image: "/business-leaders-pinnacle.webp",
    href: "https://leaderspinnacle.workhourbusiness.com",
    description:
      "Leaders Pinnacle curates executive conferences, trade expos, podcasts, and bespoke corporate events that connect decision-makers and illuminate market trends.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <rect height="63" rx="5" width="70" x="15" y="20" />
        <path d="M15 38h70M31 11v18m38-18v18M30 54h12m12 0h12M30 67h12m12 0h12" />
        <circle cx="72" cy="65" r="10" />
      </svg>
    ),
  },
  {
    id: "employaa",
    number: "03",
    name: "Employaa",
    strapline: "Recruitment and staffing",
    image: "/business-employaa.webp",
    href: "https://employaa.workhourbusiness.com",
    description:
      "Employaa connects organizations with qualified permanent, contract, and executive talent through targeted search, RPO solutions, and scalable recruitment campaigns.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="27" r="11" />
        <circle cx="24" cy="33" r="8" />
        <circle cx="76" cy="33" r="8" />
        <path d="M29 75c1-14 9-22 21-22s20 8 21 22M8 72c1-11 7-17 16-17 5 0 9 2 12 6M92 72c-1-11-7-17-16-17-5 0-9 2-12 6" />
      </svg>
    ),
  },
  {
    id: "elevatrain",
    number: "04",
    name: "Elevatrain",
    strapline: "Corporate training and workshops",
    image: "/business-elevatrain.webp",
    href: "https://elevatrain.workhourbusiness.com",
    description:
      "Elevatrain builds workforce capability with practical training programs in technology, agile methodologies, leadership, process improvement, and soft skills.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <path d="M50 23c-12-9-26-9-38-3v51c12-6 26-6 38 3 12-9 26-9 38-3V20c-12-6-26-6-38 3Z" />
        <path d="M50 24v50M23 34h15m-15 12h15m24-12h15m-15 12h15" />
      </svg>
    ),
  },
  {
    id: "go-travel-global",
    number: "05",
    name: "Go Travel Global",
    strapline: "Travel services",
    image: "/business-gotravel.webp",
    href: "https://gotravelglobal.workhourbusiness.com",
    description:
      "Go Travel Global manages corporate travel, visa documentation, itinerary planning, and MICE arrangements to keep business teams moving safely and smoothly.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <path d="m12 54 34-8-21-24 8-5 31 24 20-5c5-1 8 2 7 6L90 54 62 63 47 84l-7 1 6-21-27 8-7-5Z" />
      </svg>
    ),
  },
  {
    id: "remunerax",
    number: "06",
    name: "Remunerax",
    strapline: "Payroll and workforce outsourcing",
    image: "/business-remunerax.webp",
    href: "https://remunerax.workhourbusiness.com",
    description:
      "Remunerax delivers accurate payroll processing, statutory compliance support, employee self-service portals, and full workforce administration.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <rect height="76" rx="7" width="62" x="19" y="12" />
        <path d="M33 31h34M33 45h22M33 65l10 9 19-20" />
        <circle cx="71" cy="65" r="13" />
      </svg>
    ),
  },
  {
    id: "thinkrunspace",
    number: "07",
    name: "ThinkRunSpace",
    strapline: "Flexible workspace solutions",
    image: "/business-thinkrunspace.webp",
    href: "https://thinkrunspace.workhourbusiness.com",
    description:
      "ThinkRunSpace provides modern serviced offices, coworking memberships, virtual office addresses, and equipped meeting rooms designed for productive teams.",
    icon: (
      <svg
        aria-hidden="true"
        className="business-tab-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 100 100"
      >
        <path d="M17 86V20h66v66M8 86h84M30 34h13v13H30zm27 0h13v13H57zM30 59h13v13H30zm27 0h13v27H57z" />
      </svg>
    ),
  },
];

export default function BusinessesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = businessesData[activeTab];

  return (
    <section className="business-section section-pad" id="businesses">
      <div className="section-intro">
        <div className="section-intro-copy">
          <p className="eyebrow teal">Our businesses</p>
          <p className="section-intro-description">
            Seven specialist businesses, connected by one ambition: to make
            progress more possible for the people and organisations they serve.
          </p>
        </div>
        <h2>
          One group.
          <br />
          <em>Many ways forward.</em>
        </h2>
      </div>

      <div className="business-layout">
        <div
          aria-label="Workhour businesses"
          className="business-list"
          role="tablist"
        >
          {businessesData.map((biz, idx) => (
            <button
              key={biz.id}
              aria-controls="business-panel"
              aria-selected={activeTab === idx}
              className={`business-tab ${activeTab === idx ? "active" : ""}`}
              id={`business-tab-${biz.id}`}
              role="tab"
              tabIndex={activeTab === idx ? 0 : -1}
              onClick={() => setActiveTab(idx)}
            >
              <span className="business-tab-number">{biz.number}</span>
              {biz.icon}
              <span className="business-tab-name">{biz.name}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`business-tab-${current.id}`}
          className="business-feature"
          id="business-panel"
          role="tabpanel"
          tabIndex={0}
        >
          <a
            aria-label={`Explore ${current.name}`}
            className="business-art"
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt={`${current.name} illustrative business scene`}
              src={current.image}
              fill
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div aria-hidden="true" className="business-image-overlay" />
          </a>

          <div className="business-detail">
            <p className="eyebrow">{current.number} / 07</p>
            <h3>{current.name}</h3>
            <p>{current.description}</p>
            <a
              className="text-link"
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore {current.name} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
