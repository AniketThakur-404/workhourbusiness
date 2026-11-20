"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CompanySlug } from "@/lib/company-sites";
import BusinessLogo from "../businesses/BusinessLogo";
import styles from "./CompanySite.module.css";

export type CompanyNavLink = { href: string; label: string };

export default function BrandNavigation({
  slug,
  name,
  currentPath,
  catalog,
  serviceLinks,
  sectionLinks,
}: {
  slug: CompanySlug;
  name: string;
  currentPath: string;
  catalog: CompanyNavLink;
  serviceLinks: CompanyNavLink[];
  sectionLinks: CompanyNavLink[];
}) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    setOpen(false);
    if (dropdown.current) dropdown.current.open = false;
  }

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (dropdown.current?.open) {
          dropdown.current.open = false;
          dropdown.current.querySelector("summary")?.focus();
        } else if (open) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className={styles.headerInner}>
        <Link className={styles.logo} href="/" aria-label={`${name} home`} onClick={closeMenu}>
          <BusinessLogo slug={slug} name={name} />
        </Link>
        <button
          ref={menuButton}
          className={styles.menuToggle}
          type="button"
          aria-controls="company-navigation"
          aria-expanded={open}
          onClick={() => open ? closeMenu() : setOpen(true)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          className={styles.navigation}
          data-open={open}
          id="company-navigation"
          aria-label={`${name} navigation`}
        >
          <Link href="/" aria-current={currentPath === "/" ? "page" : undefined} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about/" aria-current={currentPath === "/about/" ? "page" : undefined} onClick={closeMenu}>About</Link>
          <details ref={dropdown} className={styles.dropdown}>
            <summary>{catalog.label}</summary>
            <div className={styles.dropdownLinks}>
              <Link href={catalog.href} onClick={closeMenu}>
                All {catalog.label.toLowerCase()}
              </Link>
              {serviceLinks.map(({ href, label }) => (
                <Link href={href} key={href} aria-current={currentPath === href ? "page" : undefined} onClick={closeMenu}>{label}</Link>
              ))}
            </div>
          </details>
          {sectionLinks.map(({ href, label }) => (
            <Link href={href} key={href} aria-current={currentPath === href ? "page" : undefined} onClick={closeMenu}>{label}</Link>
          ))}
          <Link className={`contact-button ${styles.headerContact}`} href="/contact/" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
