import { employaaServiceSlides, employaaServicesOverview } from "../businesses/employaa-presentation";
import ServiceCards from "./ServiceCards";
import styles from "./CompanySite.module.css";

export function EmployaaServiceIndex() {
  const { id, title } = employaaServicesOverview;
  return (
    <section className={styles.section} id={id}>
      <h2>{title}</h2>
      <ServiceCards category={id} services={employaaServiceSlides} showDescriptions={false} />
    </section>
  );
}

