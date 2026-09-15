import Link from "next/link";
import styles from "./Footer.module.css";
import { Container } from "./Container";
import { business } from "../../data/business";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.col}>
            <span className={styles.logo}>{business.name}</span>
            <p className={styles.description}>
              {business.slogan}. Designing spaces with premium window and interior solutions.
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
              <li><Link href="/products/blinds">Blinds</Link></li>
              <li><Link href="/products/curtains">Curtains</Link></li>
              <li><Link href="/products/wallpapers">Wallpapers</Link></li>
              <li><Link href="/products/wooden-flooring">Flooring</Link></li>
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
