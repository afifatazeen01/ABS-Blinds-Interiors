import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "../../../../data/products";
import { categories } from "../../../../data/categories";
import { Container } from "../../../../components/layout/Container";
import { Button } from "../../../../components/ui/Button";
import styles from "./ProductDetail.module.css";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = products.find(p => p.slug === slug && p.categoryId === category);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | ABS Blinds & Interiors`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.categoryId,
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  
  const categoryData = categories.find(c => c.slug === category);
  const product = products.find(p => p.slug === slug && p.categoryId === category);

  if (!product || !categoryData) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Images Gallery */}
          <div className={styles.gallery}>
            {product.images.map((img, idx) => (
              <div key={idx} className={styles.imageWrapper}>
                <Image 
                  src={img} 
                  alt={`${product.name} - View ${idx + 1}`}
                  fill
                  className={styles.image}
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div className={styles.details}>
            <div className={styles.stickyContent}>
              <span className={styles.category}>{categoryData.name}</span>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.description}>{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <div className={styles.featuresSection}>
                  <h3 className={styles.featuresTitle}>Key Features</h3>
                  <ul className={styles.featuresList}>
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.actions}>
                <Button href="/contact" variant="primary">
                  Inquire About This Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
