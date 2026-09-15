import Image from "next/image";
import styles from "./FeaturedProducts.module.css";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { products } from "../../data/products";

export function FeaturedProducts() {
  const featured = products.slice(0, 2); // Taking the first two products as featured

  return (
    <section className={styles.section}>
      <Container>
        {featured.map((product, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div key={product.id} className={`${styles.row} ${isReversed ? styles.reversed : ""}`}>
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.contentCol}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                {product.features && (
                  <ul className={styles.features}>
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <Button href={`/products/${product.categoryId}/${product.slug}`} variant="outline">
                  Explore {product.name}
                </Button>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
