import { Container } from "../../components/layout/Container";
import styles from "./About.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ABS Blinds & Interiors",
  description: "Learn about ABS Blinds & Interiors, our commitment to quality, and our bespoke interior solutions in Hyderabad.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <Container>
          <h1 className={styles.title}>About ABS Blinds & Interiors</h1>
        </Container>
      </section>

      <Container className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2>Our Story</h2>
            <p>
              Based in Hyderabad, ABS Blinds & Interiors was founded on a simple premise: 
              that every space deserves to be beautiful, functional, and uniquely yours. 
              We specialize in providing premium window treatments, bespoke wallpapers, 
              and elegant flooring solutions tailored to your exacting standards.
            </p>
            <p>
              We believe that the right interior elements can completely transform a room. 
              That's why we source only the finest materials and employ expert craftsmen 
              to ensure that every product we install is of the highest quality.
            </p>

            <h2>Our Approach</h2>
            <p>
              From the initial consultation to the final installation, our process is 
              designed around you. We take the time to understand your lifestyle, aesthetic 
              preferences, and functional needs, ensuring a seamless and satisfying journey.
            </p>
          </div>
          <div className={styles.imageCol}>
            {/* Placeholder for an interior workshop or team image */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
