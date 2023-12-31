"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import styles from "./header.module.css";
import WFLogo from "../_utils/wflogo";

interface HeaderProps {
  pageTitle: string;
}

export default function Header(props: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // if window scrolls, set scrolled to true
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header className={styles.header}>
      <section
        className={`${styles.mainNav} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.innerNavContainer}>
          <Link href="/">
            <WFLogo className={styles.navLogo} />
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/products-services">Products/Services</Link>
              </li>
              <li>
                <Link href="/people">People</Link>
              </li>
              <li>
                <Link href="/verticals">Verticals</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li className={styles.buttonCta}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <div className="innerContainer">
        <section className={styles.pageTitleContainer}>
          <h2>{props.pageTitle}</h2>
        </section>
      </div>
    </header>
  );
}
