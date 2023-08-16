import styles from "./footer.module.css";
import Image from "next/image";

import wfmark from "../../public/images/Winston_Francois_Primary_Logo_Signature_Teal.svg";
import arrowIcon from "../../public/images/arrow.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="innerContainer">
        <section>
          <div className={`${styles.footerColumn} ${styles.footerColumnLogo}`}>
            <h3>
              We take a custom approach to your growth goals by assembling and
              leading the best-in-class marketing team to support your next
              stage
            </h3>
            <Image
              src={wfmark}
              className={styles.footerWfMark}
              width="74"
              height="72"
              alt=""
            />
          </div>

          <div className={styles.footerColumn}>
            <h5>Get In Touch</h5>
            <h4>
              <a
                href="mailto:hello@winstonfrancois.com"
                target="_blank"
                rel="noreferrer"
              >
                hello@winstonfrancois.com
              </a>
            </h4>
            <h4>(415) 937-7703</h4>

            <h5 className={styles.footerNewsletterTitle}>Newsletter</h5>

            <div className={styles.footerNewsletterForm}>
              <input
                aria-invalid="false"
                id="footerEmail"
                placeholder="you@example.com"
                type="email"
              />
              <button
                type="button"
                aria-label="submit email address"
                className={styles.footerSubmitButton}
              >
                <Image src={arrowIcon} alt="arrow icon" />
              </button>

              <label htmlFor="footerEmail">Enter your email address</label>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.footerCopyright}>
        <h6>&copy; 2023 Winston Francois, LLC. All rights reserved.</h6>
      </div>
    </footer>
  );
}
