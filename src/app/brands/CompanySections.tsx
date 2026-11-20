import Image from "next/image";
import type { CompanySection } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function CompanySections({
  sections,
}: {
  sections: (CompanySection & { id?: string })[];
}) {
  return sections.map(({ title, paragraphs, bullets, image, id }) => (
    <section className={styles.section} id={id} key={id ?? title}>
      <div className={image ? styles.feature : styles.sectionIntro}>
        <div className={styles.sectionCopy}>
          <h2>{title}</h2>
          {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {bullets && (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </div>
        {image && (
          <div className={styles.featurePhoto}>
            <Image {...image} fill sizes="(max-width: 760px) 100vw, 40vw" />
          </div>
        )}
      </div>
    </section>
  ));
}
