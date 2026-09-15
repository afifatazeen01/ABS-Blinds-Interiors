import styles from "./Hero.module.css";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image / Overlay */}
      <div className={styles.background}>
        {/* Placeholder for high-res interior image */}
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.overlay}></div>
      </div>

      <Container className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Transform Your Space With Timeless Style
          </h1>
          <p className={styles.subhead}>
            Premium blinds, curtains, and interior solutions designed beautifully around your space.
          </p>
          <div className={styles.actions}>
            <Button href="/products" variant="primary">
              Explore Collection
            </Button>
            <Button href="/contact" variant="outline" className={styles.secondaryBtn}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
