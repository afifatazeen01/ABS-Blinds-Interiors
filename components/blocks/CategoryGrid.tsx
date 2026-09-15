import styles from "./CategoryGrid.module.css";
import { Container } from "../layout/Container";
import { categories } from "../../data/categories";
import { ProductCard } from "../ui/ProductCard";

export function CategoryGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Explore Our Collection</h2>
          <p className={styles.subtitle}>
            Discover premium materials and bespoke solutions for every window and space.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
              href={`/products/${category.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
