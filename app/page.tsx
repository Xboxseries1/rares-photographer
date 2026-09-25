import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { portfolioCategories } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <Image
          src="/portfolio/drone/DJI_0429.jpg"
          alt="Rareș Pușcașu Photographer"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />

        <div className="hero-darken" />

        <div className="hero-content">
          <p className="hero-location">
            Photographer · Ploiești · România
          </p>

          <h1>
            <span>RAREȘ</span>
            <span>PUȘCAȘU</span>
          </h1>

          <div className="hero-footer">
            <p>
              People, moments,
              <br />
              atmosphere and visual stories.
            </p>

            <Link
              href="/#portfolio"
              className="hero-link"
            >
              <span>Vezi portofoliul</span>
              <span className="hero-arrow">↓</span>
            </Link>
          </div>
        </div>

        <div className="hero-side-text">
          PHOTOGRAPHER / 2026
        </div>
      </section>

      <section className="manifesto">
        <div className="section-index">
          01
        </div>

        <div className="manifesto-content">
          <p className="eyebrow">
            Photography portfolio
          </p>

          <h2>
            Imagini care păstrează
            <br />
            <em>momentul.</em>
          </h2>

          <p className="manifesto-text">
            Fotografie de eveniment, automotive,
            portret, comercială, fotografie aeriană
            și street photography.
          </p>
        </div>
      </section>

      <section
        className="portfolio-section"
        id="portfolio"
      >
        <div className="portfolio-heading">
          <div>
            <p className="eyebrow">
              Selected Work
            </p>

            <h2>Portofoliu</h2>
          </div>

          <span>06 categorii</span>
        </div>

        <div className="portfolio-grid">
          {portfolioCategories.map(
            (category, index) => (
              <Link
                href={`/portfolio/${category.slug}`}
                className="portfolio-card"
                key={category.slug}
              >
                <Image
                  src={category.cover}
                  alt={category.title}
                  fill
                  className="portfolio-card-image"
                  sizes="(max-width: 800px) 50vw, 33vw"
                />

                <div className="portfolio-card-overlay" />

                <span className="portfolio-card-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div className="portfolio-card-content">
                  <p>{category.subtitle}</p>
                  <h3>{category.title}</h3>
                </div>

                <span className="portfolio-card-arrow">
                  ↗
                </span>
              </Link>
            )
          )}
        </div>
      </section>

      <section
        className="about-section"
        id="about"
      >
        <div className="section-index">
          02
        </div>

        <div className="about-grid">
          <div className="about-title">
            <p className="eyebrow">
              Despre mine
            </p>

            <h2>
              Behind
              <br />
              the camera.
            </h2>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              Sunt Rareș Pușcașu, fotograf
              pasionat de imagini care transmit
              atmosferă, energie și emoție.
            </p>

            <p>
              Pasiunea mea pentru fotografie a
              început din curiozitate și s-a
              transformat treptat într-un mod de a
              surprinde oameni, locuri și momente
              care merită păstrate.
            </p>

            <p>
              De la primele cadre realizate cu
              telefonul până la evenimente,
              fotografie automotive, portrete,
              proiecte comerciale și fotografie
              aeriană, fiecare experiență a
              contribuit la stilul meu de astăzi.
            </p>

            <Link
              href="/despre-mine"
              className="text-link"
            >
              Citește povestea mea
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
      >
        <div className="contact-top">
          <p className="eyebrow">
            Contact
          </p>

          <span>03</span>
        </div>

        <h2>
          Ai un proiect
          <br />
          <em>în minte?</em>
        </h2>

        <div className="contact-bottom">
          <p>
            Pentru evenimente, ședințe foto,
            <br />
            colaborări și proiecte comerciale.
          </p>

          <div className="contact-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a href="mailto:contact@raresphotographer.com">
              Email ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>RAREȘ</strong>
          <span>PHOTOGRAPHER</span>
        </div>

        <p>
          © 2026 Rareș Pușcașu
        </p>

        <a href="#">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}