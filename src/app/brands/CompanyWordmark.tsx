import Image from "next/image";
import type { CompanySlug } from "@/lib/company-sites";
import styles from "./CompanySite.module.css";

export default function CompanyWordmark({ slug, name }: { slug: CompanySlug; name: string }) {
  return (
    <>
      <Image className={styles.mark} src={`/company-logos/marks/${slug}.webp`}
        width={72} height={72} alt="" />
      <span>{name}</span>
    </>
  );
}
