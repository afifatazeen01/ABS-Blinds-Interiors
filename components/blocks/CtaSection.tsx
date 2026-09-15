import styles from "./CtaSection.module.css";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <h2 className={styles.title}>Ready to Elevate Your Space?</h2>
        <p className={styles.subtitle}>
          Book a free consultation and let our experts guide you to the perfect interior solution.
        </p>
        <Button href="/contact" variant="primary">
          Contact Us Today
        </Button>
      </Container>
    </section>
  );
}
