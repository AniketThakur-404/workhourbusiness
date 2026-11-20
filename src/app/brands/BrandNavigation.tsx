"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CompanySlug } from "@/lib/company-sites";
import CompanyWordmark from "./CompanyWordmark";
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
  const [catalogOpen, setCatalogOpen] = useState<"hover" | "activation" | null>(null);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const catalogToggle = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => () => clearTimeout(hoverTimer.current ?? undefined), []);

  useEffect(() => {
    if (!open && !catalogOpen) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
        setCatalogOpen(null);
      }
    }

    function dismissHover(event: KeyboardEvent) {
      if (event.key === "Escape" && !header.current?.contains(document.activeElement)) {
        setCatalogOpen(null);
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissHover);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissHover);
    };
  }, [open, catalogOpen]);

  function closeMenu() {
    clearTimeout(hoverTimer.current ?? undefined);
    setOpen(false);
    setCatalogOpen(null);
  }

  return (
    <header
      className={styles.header}
      ref={header}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (catalogOpen) {
          clearTimeout(hoverTimer.current ?? undefined);
          setCatalogOpen(null);
          catalogToggle.current?.focus();
        } else if (open) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className={styles.headerInner}>
        <Link className={styles.logo} href="/" aria-label={`${name} home`} onClick={closeMenu}>
          <CompanyWordmark slug={slug} name={name} />
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
          <details
            className={styles.dropdown}
            open={catalogOpen !== null}
            onPointerEnter={(event) => {
              clearTimeout(hoverTimer.current ?? undefined);
              if (event.pointerType === "mouse" && window.matchMedia("(min-width: 981px)").matches) {
                setCatalogOpen((current) => current ?? "hover");
              }
            }}
            onPointerLeave={(event) => {
              if (event.pointerType !== "mouse") return;
              const dropdown = event.currentTarget;
              hoverTimer.current = setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) {
                  setCatalogOpen((current) => current === "hover" ? null : current);
                }
              }, 140);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget) && !event.currentTarget.matches(":hover")) {
                setCatalogOpen(null);
              }
            }}
          >
            <summary
              ref={catalogToggle}
              aria-controls="company-catalog-links"
              aria-expanded={catalogOpen !== null}
              onClick={(event) => {
                event.preventDefault();
                clearTimeout(hoverTimer.current ?? undefined);
                const keyboard = event.detail === 0;
                setCatalogOpen((current) =>
                  current === "activation" || (keyboard && current) ? null : "activation"
                );
              }}
            >
              {catalog.label}
            </summary>
            <div
              id="company-catalog-links"
              className={styles.dropdownLinks}
              data-columns={serviceLinks.length > 6}
            >
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
            {slug === "leaders-pinnacle" ? "Plan an Event" : "Contact Us"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
