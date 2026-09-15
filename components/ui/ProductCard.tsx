import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { Button } from "./Button";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  href: string;
  category?: string;
};

export function ProductCard({ name, description, image, href, category }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.overlay}>
          <Button href={href} variant="primary" className={styles.viewBtn}>
            Explore
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
