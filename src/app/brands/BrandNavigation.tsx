"use client";

import { useState } from "react";
import type { brandDetails } from "./brand-details";

export type Brand = keyof typeof brandDetails;

export default function BrandNavigation({
  brand,
  details,
}: {
  brand: Brand;
  details: (typeof brandDetails)[Brand];
}) {
  const [open, setOpen] = useState(false);
  const { name, mark, url, category, links } = details;

  return (
    <header className="brand-site-header">
      <a className="brand-site-wordmark" href={url} aria-label={`${name} home`}>
        <span className="brand-site-mark" aria-hidden="true">
          {mark}
        </span>
        <span>{name}</span>
      </a>
      <button
        type="button"
        className="brand-menu-toggle"
        aria-controls="brand-site-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="brand-site-navigation"
        className={open ? "brand-site-nav open" : "brand-site-nav"}
        aria-label={`${name} navigation`}
      >
        <a href={url}>Home</a>
        <a href={`${url}/about`}>About</a>
        <details>
          <summary>
            {category === "trainings" ? "Trainings" : "Services"}
          </summary>
          <div className="brand-site-menu">
            {links.map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </details>
        {brand === "leaders-pinnacle" && (
          <a href={`${url}/our-global-reach`}>Our Global Reach</a>
        )}
        <a className="brand-site-contact" href={`${url}/contact`}>
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
