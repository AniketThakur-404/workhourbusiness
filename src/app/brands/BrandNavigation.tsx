"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const catalogMenu = useRef<HTMLDetailsElement>(null);
  const primary = [{ href: "/", label: "Home" }, { href: "/about/", label: "About" }];
  const contact = { href: "/contact/", label: slug === "leaders-pinnacle" ? "Plan an event" : "Contact us" };

  useEffect(() => {
    function closeCatalog(event: PointerEvent) {
      const menu = catalogMenu.current;
      if (menu && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    const closeSheet = () => { if (desktop.matches) setMobileOpen(false); };
    document.addEventListener("pointerdown", closeCatalog);
    desktop.addEventListener("change", closeSheet);
    return () => {
      document.removeEventListener("pointerdown", closeCatalog);
      desktop.removeEventListener("change", closeSheet);
    };
  }, []);

  const current = (href: string) => currentPath === href ? "page" : undefined;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.logo} href="/" aria-label={`${name} home`}>
          <CompanyWordmark slug={slug} name={name} />
        </Link>
        <nav className={styles.navigation} aria-label={`${name} navigation`}>
          {primary.map(({ href, label }) => <Link key={href} href={href} aria-current={current(href)}>{label}</Link>)}
          <details className={styles.dropdown} ref={catalogMenu} onKeyDown={(event) => {
            if (event.key !== "Escape" || !event.currentTarget.open) return;
            event.currentTarget.open = false;
            event.currentTarget.querySelector("summary")?.focus();
          }}>
            <summary>{catalog.label}</summary>
            <div className={styles.dropdownLinks} data-columns={serviceLinks.length > 6}>
              <Link href={catalog.href} aria-current={current(catalog.href)} onClick={() => { if (catalogMenu.current) catalogMenu.current.open = false; }}>
                All {catalog.label.toLowerCase()}
              </Link>
              {serviceLinks.map(({ href, label }) => (
                <Link href={href} key={href} aria-current={current(href)} onClick={() => { if (catalogMenu.current) catalogMenu.current.open = false; }}>{label}</Link>
              ))}
            </div>
          </details>
          {sectionLinks.map(({ href, label }) => <Link href={href} key={href} aria-current={current(href)}>{label}</Link>)}
          <Link className={`contact-button ${styles.headerContact}`} href={contact.href} aria-current={current(contact.href)}>{contact.label}</Link>
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className={styles.menuToggle} type="button">Menu</SheetTrigger>
          <SheetContent className={styles.mobileSheet} data-company={slug} aria-describedby={undefined}>
            <SheetTitle className={styles.mobileTitle}>{name}</SheetTitle>
            <nav className={styles.mobileNav} aria-label={`${name} mobile navigation`}>
              {[...primary, catalog, ...sectionLinks, contact].map(({ href, label }) => (
                <SheetClose key={href} asChild><Link href={href} aria-current={current(href)}>{label}</Link></SheetClose>
              ))}
              <details className={styles.mobileServices}>
                <summary>Browse {catalog.label.toLowerCase()} by topic</summary>
                {serviceLinks.map(({ href, label }) => (
                  <SheetClose key={href} asChild><Link href={href} aria-current={current(href)}>{label}</Link></SheetClose>
                ))}
              </details>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
