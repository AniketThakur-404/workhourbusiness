import Image from "next/image";
import type { ReactNode } from "react";
import type { CompanyImage } from "./company-catalog";
import { BrandHeroArt, BrandHeroCopy } from "./BrandHeroMotion";
import styles from "./CompanySite.module.css";

export default function BrandHero({
  title,
  description,
  image,
  label,
  compact = false,
  artwork = false,
  children,
}: {
  title: string;
  description: string;
  image: CompanyImage;
  label: string;
  compact?: boolean;
  artwork?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={styles.hero} data-compact={compact} aria-label={title}>
      <Image src={image.src} alt="" fill preload sizes="100vw" />
      {artwork && <BrandHeroArt />}
      <BrandHeroCopy>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children && <div className={styles.bannerActions}>{children}</div>}
      </BrandHeroCopy>
    </section>
  );
}
