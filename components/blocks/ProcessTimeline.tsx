import styles from "./ProcessTimeline.module.css";
import { Container } from "../layout/Container";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Understand your unique requirements and style preferences."
    },
    {
      num: "02",
      title: "Measurement",
      desc: "Confirm dimensions and space requirements with absolute precision."
    },
    {
      num: "03",
      title: "Selection",
      desc: "Choose from our curated designs, materials, and finishes."
    },
    {
      num: "04",
      title: "Customization",
      desc: "Prepare and tailor the selected solution specifically for you."
    },
    {
      num: "05",
      title: "Installation",
      desc: "Professional installation ensuring a flawless finish."
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>From Idea to Installation</h2>
          <p className={styles.subtitle}>
            A seamless journey to transform your space.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.number}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {idx !== steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
