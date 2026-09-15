import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { business } from "../../data/business";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.colBrand}>
            <Link href="/" className={styles.logoLink} aria-label="ABS Blinds & Interiors Home">
              <Image 
                src="/images/branding/logo.png" 
                alt="ABS Blinds & Interiors Logo" 
                width={150} 
                height={50} 
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.description}>
              {business.slogan}. Elevating spaces across Hyderabad with premium window treatments and bespoke interior solutions.
            </p>
          </div>

          {/* Explore Column */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Explore</h4>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Products</h4>
            <ul className={styles.list}>
              <li><Link href="/products">Blinds</Link></li>
              <li><Link href="/products">Curtains</Link></li>
              <li><Link href="/products">Wallpapers</Link></li>
              <li><Link href="/products">Flooring</Link></li>
              <li><Link href="/products">All Products</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li>{business.location}</li>
              <li>Phone: {business.phone}</li>
              <li>WhatsApp: {business.whatsapp}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
