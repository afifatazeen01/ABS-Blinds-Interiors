import { Container } from "../../components/layout/Container";
import styles from "./Gallery.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | ABS Blinds & Interiors",
  description: "View our portfolio of recent interior transformations.",
};

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, type: "landscape" },
    { id: 2, type: "portrait" },
    { id: 3, type: "landscape" },
    { id: 4, type: "square" },
    { id: 5, type: "square" },
    { id: 6, type: "landscape" },
    { id: 7, type: "portrait" },
    { id: 8, type: "landscape" },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <Container>
          <h1 className={styles.title}>Gallery [PLACEHOLDER]</h1>
          <p className={styles.subtitle}>
            [PLACEHOLDER TEXT: The images below are structural placeholders. They will be replaced with actual photos of ABS Blinds & Interiors' completed projects.]
          </p>
        </Container>
      </section>

      <section className={styles.gallerySection}>
        <Container>
          <div className={styles.masonry}>
            {galleryItems.map((item) => (
              <div key={item.id} className={`${styles.galleryItem} ${styles[item.type]}`}>
                {/* Image Placeholder */}
                <div className={styles.imagePlaceholder}>
                  {/* <Image src={`/images/gallery/item-${item.id}.jpg`} alt={`Gallery item ${item.id}`} fill className={styles.image} /> */}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
