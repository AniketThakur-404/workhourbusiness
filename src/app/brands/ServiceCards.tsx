import Image from "next/image";
import Link from "next/link";
import { servicePath, type CompanyService } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function ServiceCards({
  category,
  services,
}: {
  category: string;
  services: CompanyService[];
}) {
  return (
    <ul className={styles.cards}>
      {services.map(({ id, title, description, image, photo, current }) => (
        <li className={styles.card} id={id} key={id}>
          <Link className={styles.serviceCard} href={servicePath(category, id)}>
            <div className={styles.cardPhoto}>
              <Image {...(photo ?? image)} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 950px) 45vw, 25vw" />
            </div>
            <h3>{title}</h3>
            <p>{current?.[0]?.paragraphs?.[0] ?? description}</p>
            <span className="text-link">View details</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
