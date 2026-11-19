"use client";

import Image from "next/image";
import { useState } from "react";
import "./PresenceMap.css";

const regions = [
  {
    name: "Asia",
    countries: [
      {
        name: "India",
        label: "New Delhi, India - Head Quarters",
        left: 71.4469,
        top: 34.1033,
      },
      { name: "Malaysia", left: 78.3333, top: 47.7778 },
    ],
  },
  {
    name: "Oceania",
    countries: [{ name: "Australia", left: 87.2222, top: 63.8889 }],
  },
  {
    name: "Middle East",
    countries: [{ name: "United Arab Emirates", left: 65, top: 36.6667 }],
  },
  {
    name: "Africa",
    countries: [
      { name: "Kenya", left: 60.5556, top: 49.4444 },
      { name: "Zimbabwe", left: 58.3333, top: 60.5556 },
      { name: "Malawi", left: 59.4444, top: 57.2222 },
      { name: "Rwanda", left: 58.3333, top: 51.1111 },
    ],
  },
  {
    name: "North America",
    countries: [
      { name: "Canada", left: 20.5556, top: 18.3333 },
      { name: "Mexico", left: 21.6667, top: 36.6667 },
    ],
  },
];

const countries = regions.flatMap(({ countries }) => countries);

export default function PresenceMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = countries.find(
    ({ name }) => name === (hovered ?? focused ?? selected),
  );

  function countryButton(name: string) {
    return {
      type: "button" as const,
      "aria-pressed": selected === name,
      onClick: () => setSelected((current) => (current === name ? null : name)),
      onFocus: () => setFocused(name),
      onBlur: () => setFocused(null),
      onPointerEnter: () => setHovered(name),
      onPointerLeave: () => setHovered(null),
    };
  }

  return (
    <section className="presence-map" aria-label="World map and country list">
      <div className="presence-map__visual">
        <div className="presence-map__map-canvas">
          <Image
            src="/presence-world-map.svg"
            alt="World map showing ten countries referenced in Workhour Business planning material"
            width={960}
            height={480}
            className="presence-map__world-image"
          />
          {countries.map(({ name, label, left, top }) => (
            <button
              key={name}
              {...countryButton(name)}
              className={
                label
                  ? "presence-map__pin presence-map__india-pin"
                  : "presence-map__pin"
              }
              style={{ left: `${left}%`, top: `${top}%` }}
              aria-label={label ?? name}
              data-active={active?.name === name}
            >
              <svg viewBox="0 0 24 32" aria-hidden="true">
                <path d="M12 31S1 18 1 12a11 11 0 0 1 22 0c0 6-11 19-11 19Z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              {active?.name === name && (
                <span className="presence-map__pin-label" aria-hidden="true">
                  {label ?? name}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="presence-map__key">
          <span aria-hidden="true" /> New Delhi, India - Head Quarters
        </div>
        <p className="presence-map__tooltip" role="status">
          {active ? (
            <strong>{active.label ?? active.name}</strong>
          ) : (
            "Hover, focus, or tap a pin to see the country name."
          )}
        </p>
      </div>
      <div className="presence-map__country-list">
        <div className="presence-map__list-heading">
          <p className="eyebrow teal">Planning references</p>
          <h3>Countries named in the supplied material</h3>
        </div>
        {regions.map((region) => (
          <div className="presence-map__region" key={region.name}>
            <h4>{region.name}</h4>
            <ul>
              {region.countries.map(({ name }) => (
                <li key={name}>
                  <button
                    {...countryButton(name)}
                    className="presence-map__country-button"
                    data-active={active?.name === name}
                  >
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
