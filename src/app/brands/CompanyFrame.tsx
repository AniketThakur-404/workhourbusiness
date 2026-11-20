import Link from "next/link";
import type { ReactNode } from "react";
import { workhourUrl, type CompanySlug } from "@/lib/company-sites";
import BusinessLogo from "../businesses/BusinessLogo";
import { businesses } from "../businesses/businesses";
import BrandNavigation from "./BrandNavigation";
import { getCompanyCatalog, leadersExtraPages, servicePath } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function CompanyFrame({
  slug,
  currentPath = "/",
  children,
}: {
  slug: CompanySlug;
  currentPath?: string;
  children: ReactNode;
}) {
  const { title } = businesses[slug];
  const catalog = getCompanyCatalog(slug);
  const sectionLinks = [
    ...(catalog.hasGlobalReach ? [{ href: "/our-global-reach/", label: "Our Global Reach" }] : []),
    ...(slug === "leaders-pinnacle"
      ? Object.entries(leadersExtraPages).map(([id, label]) => ({ href: `/${id}/`, label }))
      : []),
  ];

  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#company-main">Skip to content</a>
      <BrandNavigation
        slug={slug}
        name={title}
        currentPath={currentPath}
        catalog={{ href: catalog.href, label: catalog.label }}
        serviceLinks={catalog.services.map(({ id, title }) => ({
          href: servicePath(catalog.category, id),
          label: title,
        }))}
        sectionLinks={sectionLinks}
      />
      <main id="company-main" tabIndex={-1}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link className={styles.logo} href="/" aria-label={`${title} home`}>
            <BusinessLogo slug={slug} name={title} />
          </Link>
          <nav aria-label="Footer navigation">
            <Link href="/about/">About</Link>
            <Link href={catalog.href}>{catalog.label}</Link>
            {sectionLinks.map(({ href, label }) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
            <Link href="/contact/">Contact</Link>
            <a href={`${workhourUrl}/businesses/`}>Workhour Business portfolio</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
