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
            <h2>Our Business</h2>
            <p>
              ABS Blinds & Interiors is located in Hyderabad, Telangana, India. We specialize in 
              providing premium interior products and solutions, including Blinds, Curtains, 
              Customized Wallpapers, Glass Flooring, Wooden Flooring, Glass Film, and Wooden Carpentry.
            </p>
            <p>
              Our goal is to offer high-quality materials and bespoke solutions for residential and 
              commercial spaces. [PLACEHOLDER: Please provide your actual business history and mission statement here].
            </p>
          </div>
          <div className={styles.imageCol}>
            {/* [PLACEHOLDER IMAGE: To be replaced with actual ABS team or showroom photo] */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
