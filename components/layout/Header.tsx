import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { Container } from "./Container";
import { business } from "../../data/business";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink} aria-label="ABS Blinds & Interiors Home">
            <Image 
              src="/images/branding/logo.png" 
              alt="ABS Blinds & Interiors Logo" 
              width={150} 
              height={50} 
              style={{ objectFit: 'contain' }}
              priority
            />
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
