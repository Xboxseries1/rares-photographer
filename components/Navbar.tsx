"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-name">RAREȘ</span>
          <span className="brand-role">PHOTOGRAPHER</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/#portfolio">
            Portofoliu
          </Link>

          <Link href="/despre-mine">
            Despre mine
          </Link>

          <Link href="/#contact">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-button ${
            open ? "menu-button-open" : ""
          }`}
          aria-label="Deschide meniul"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-menu ${
          open ? "mobile-menu-open" : ""
        }`}
      >
        <nav>
          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            Acasă
          </Link>

          <Link
            href="/#portfolio"
            onClick={() => setOpen(false)}
          >
            Portofoliu
          </Link>

          <Link
            href="/despre-mine"
            onClick={() => setOpen(false)}
          >
            Despre mine
          </Link>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="mobile-menu-meta">
          <span>Rareș Pușcașu</span>
          <span>Photographer</span>
        </div>
      </div>
    </>
  );
}