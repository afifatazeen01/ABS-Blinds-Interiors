import Link from "next/link";
import styles from "./GalleryPreview.module.css";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function GalleryPreview() {
  const previewImages = [
    "/images/gallery/preview-1.jpg",
    "/images/gallery/preview-2.jpg",
    "/images/gallery/preview-3.jpg",
    "/images/gallery/preview-4.jpg",
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Transformations</h2>
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>

        <div className={styles.grid}>
          {previewImages.map((src, idx) => (
            <Link href="/gallery" key={idx} className={styles.imageWrapper}>
              {/* Placeholders for gallery */}
              <div className={styles.placeholder}>
                {/* <Image src={src} alt="Gallery image" fill className={styles.image} /> */}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
