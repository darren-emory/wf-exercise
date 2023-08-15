import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import WFLogo from "../_utils/wflogo";

interface HeaderProps {
  pageTitle: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className="innerContainer">
        <section className={styles.mainNav}>
          <div className="styles.navLogoContainer">
            <Link href="/">
              <WFLogo className={styles.navLogo} />
            </Link>
          </div>

          <nav>
            <ul>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Products/Services</Link>
              </li>
              <li>
                <Link href="#">People</Link>
              </li>
              <li>
                <Link href="#">Verticals</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li className={styles.buttonCta}>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className={styles.pageTitleContainer}>
          <h2>Blog Section Title</h2>
        </section>
      </div>
    </header>
  );
}
