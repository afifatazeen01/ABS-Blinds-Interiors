import styles from "./WhyAbs.module.css";
import { Container } from "../layout/Container";

export function WhyAbs() {
  const reasons = [
    {
      title: "Uncompromising Quality",
      desc: "Only the finest materials and craftsmanship go into our products."
    },
    {
      title: "Bespoke Solutions",
      desc: "Every window is unique; we tailor our solutions to fit perfectly."
    },
    {
      title: "Expert Installation",
      desc: "Our seasoned professionals ensure flawless integration into your space."
    }
  ];

  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.content}>
          <h2 className={styles.title}>Why ABS Blinds & Interiors?</h2>
          <p className={styles.subtitle}>
            A commitment to excellence that transforms ordinary spaces into extraordinary environments.
          </p>
          <div className={styles.list}>
            {reasons.map((r, i) => (
              <div key={i} className={styles.item}>
                <h4 className={styles.itemTitle}>{r.title}</h4>
                <p className={styles.itemDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageCol}>
          {/* A large, beautiful interior shot placeholder */}
          <div className={styles.imagePlaceholder}></div>
        </div>
      </Container>
    </section>
  );
}
