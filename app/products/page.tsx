import { Container } from "../../components/layout/Container";
import { categories } from "../../data/categories";
import { ProductCard } from "../../components/ui/ProductCard";
import styles from "./Products.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | ABS Blinds & Interiors",
  description: "Explore our premium collection of blinds, curtains, wallpapers, and interior solutions.",
};

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <Container>
          <h1 className={styles.title}>Our Collections</h1>
          <p className={styles.subtitle}>
            Explore our curated range of premium interior solutions designed to elevate your space.
          </p>
        </Container>
      </section>

      <section className={styles.gridSection}>
        <Container>
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
    </main>
  );
}
