import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "./Container";
import { business } from "../../data/business";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <div className={styles.logoArea}>
          <Link href="/" className={styles.brandGroup}>
            {/* Replace with actual logo image later */}
            <span className={styles.logoPlaceholder}>ABS</span>
            <div className={styles.brandText}>
              <span className={styles.brandName}>{business.name}</span>
              <span className={styles.brandSlogan}>{business.slogan}</span>
            </div>
          </Link>
        </div>

        <nav className={styles.navigation}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.ctaArea}>
          <Button href="/contact" variant="primary">Get a Consultation</Button>
        </div>
      </Container>
    </header>
  );
}
