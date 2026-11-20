import Image from "next/image";
import type { ReactNode } from "react";
import type { CompanyImage } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function BrandHero({
  title,
  description,
  image,
  label,
  compact = false,
  children,
}: {
  title: string;
  description: string;
  image: CompanyImage;
  label: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={styles.hero} data-compact={compact} aria-label={title}>
      <Image {...image} fill preload sizes="100vw" />
      <div className={styles.heroCopy}>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children && <div className={styles.bannerActions}>{children}</div>}
      </div>
    </section>
  );
}
