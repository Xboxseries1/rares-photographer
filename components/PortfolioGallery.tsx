"use client";

import { useEffect, useState } from "react";
import styles from "./PortfolioGallery.module.css";

type PortfolioGalleryProps = {
  images: string[];
  title: string;
};

export default function PortfolioGallery({
  images,
  title,
}: PortfolioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const previousImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const nextImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return current === 0 ? images.length - 1 : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return current === images.length - 1 ? 0 : current + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={styles.item}
            onClick={() => setActiveIndex(index)}
            aria-label={`Deschide fotografia ${index + 1}`}
          >
            <img
              src={image}
              alt={`${title} — fotografia ${index + 1}`}
              className={styles.image}
              loading={index < 6 ? "eager" : "lazy"}
            />

            <div className={styles.itemOverlay}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>VIEW ↗</span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vizualizare fotografie"
          onClick={closeLightbox}
        >
          <div className={styles.counter}>
            {String(activeIndex + 1).padStart(2, "0")}
            <span>/</span>
            {String(images.length).padStart(2, "0")}
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={closeLightbox}
            aria-label="Închide fotografia"
          >
            ×
          </button>

          <button
            type="button"
            className={styles.previous}
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Fotografia anterioară"
          >
            ←
          </button>

          <div
            className={styles.lightboxImageWrapper}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`${title} — fotografia ${activeIndex + 1}`}
              className={styles.lightboxImage}
            />
          </div>

          <button
            type="button"
            className={styles.next}
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Fotografia următoare"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
