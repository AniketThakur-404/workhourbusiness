import Image from "next/image";
import type { CompanySection } from "./company-catalog";
import styles from "./CompanySite.module.css";

export default function CompanySections({
  sections,
}: {
  sections: (CompanySection & { id?: string })[];
}) {
  return sections.map(({ title, subtitle, paragraphs, bullets, image, imagePlacement, groups, points, id }) => (
    <section className={styles.section} id={id} key={id ?? title}>
      <div className={image ? styles.feature : styles.sectionIntro} data-image-placement={imagePlacement}>
        <div className={styles.sectionCopy}>
          <h2>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {bullets && (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
          {groups && (
            <div className={styles.sectionGroups}>
              {groups.map(({ title, bullets }) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <ul className={styles.bullets}>
                    {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {points && (
            <dl className={styles.points}>
              {points.map(({ title, description }) => (
                <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
              ))}
            </dl>
          )}
        </div>
        {image && (
          <figure className={styles.featureFigure}>
            <div className={styles.featurePhoto}>
              <Image {...image} fill sizes="(max-width: 800px) 100vw, 48vw" />
            </div>
          </figure>
        )}
      </div>
    </section>
  ));
}
