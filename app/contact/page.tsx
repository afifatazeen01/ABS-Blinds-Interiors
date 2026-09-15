import { Container } from "../../components/layout/Container";
import { business } from "../../data/business";
import { Button } from "../../components/ui/Button";
import styles from "./Contact.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ABS Blinds & Interiors",
  description: "Get in touch with ABS Blinds & Interiors to book your free consultation today.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <Container>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Ready to transform your space? Get in touch with our design experts today.
          </p>
        </Container>
      </section>

      <Container className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h2>Get In Touch</h2>
            <p className={styles.infoText}>
              We're here to help you find the perfect interior solutions. 
              Call us directly, send us a WhatsApp message, or drop us an email.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <strong>Location:</strong>
                <span>{business.location}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Phone:</strong>
                <a href={`tel:${business.phone.replace(/\s+/g, '')}`}>{business.phone}</a>
              </div>
              <div className={styles.detailItem}>
                <strong>WhatsApp:</strong>
                <a href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  {business.whatsapp}
                </a>
              </div>
              <div className={styles.detailItem}>
                <strong>Email:</strong>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
              <div className={styles.detailItem}>
                <strong>Business Hours:</strong>
                <span>{business.hours}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Button href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}`} variant="primary">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className={styles.mapCol}>
            {/* Visual map placeholder */}
            <div className={styles.mapPlaceholder}>
              <span className={styles.mapText}>Map Location Placeholder</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
