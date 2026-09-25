import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import {
  getCategoryBySlug,
  portfolioCategories,
} from "@/data/portfolio";
import { getPortfolioImages } from "@/lib/portfolio";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Portofoliu",
    };
  }

  return {
    title: category.title,

    description: category.description,

    alternates: {
      canonical: `/portfolio/${category.slug}`,
    },

    openGraph: {
      type: "website",
      locale: "ro_RO",
      title: `${category.title} | Rareș Photographer`,
      description: category.description,
      url: `/portfolio/${category.slug}`,
      images: [
        {
          url: category.cover,
          alt: category.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Rareș Photographer`,
      description: category.description,
      images: [category.cover],
    },
  };
}

export default async function PortfolioCategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const images = getPortfolioImages(category.folder);

  const categoryIndex = portfolioCategories.findIndex(
    (item) => item.slug === category.slug
  );

  const nextCategory =
    portfolioCategories[
      (categoryIndex + 1) % portfolioCategories.length
    ];

  return (
    <main className={styles.page}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <strong>RAREȘ</strong>
          <span>PHOTOGRAPHER</span>
        </Link>

        <Link href="/#portfolio" className={styles.back}>
          ← PORTOFOLIU
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>
            {String(categoryIndex + 1).padStart(2, "0")} /{" "}
            {String(portfolioCategories.length).padStart(2, "0")}
          </span>

          <span>{images.length} FOTOGRAFII</span>
        </div>

        <div className={styles.heroTitle}>
          <p>{category.subtitle}</p>

          <h1>{category.title}</h1>
        </div>

        <div className={styles.heroBottom}>
          <p>{category.description}</p>

          <span>SCROLL ↓</span>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <PortfolioGallery
          images={images}
          title={category.title}
        />
      </section>

      <section className={styles.nextSection}>
        <p className={styles.nextLabel}>
          URMĂTOAREA CATEGORIE
        </p>

        <Link
          href={`/portfolio/${nextCategory.slug}`}
          className={styles.nextLink}
        >
          <span>{nextCategory.title}</span>
          <strong>↗</strong>
        </Link>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <strong>RAREȘ</strong>
          <span>PHOTOGRAPHER</span>
        </div>

        <p>© 2026 RAREȘ PUȘCAȘU</p>

        <Link href="/">ACASĂ ↑</Link>
      </footer>
    </main>
  );
}