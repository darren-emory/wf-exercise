import styles from "./page.module.css";
import Image from "next/image";
import thumbnail from "../public/images/josh-soriano-UmNl827g6AE-unsplas.jpg";

import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header pageTitle="Blog Section Title" />
      <main className={styles.subpageContainer}>
        <div className="innerContainer">
          <section>
            <h3>The Latest</h3>
            <article className={styles.featured}>
              <Image
                src={thumbnail}
                width={1000}
                height={800}
                alt="Thumbnail Image"
              />
            </article>
            <article>
              <Image
                src={thumbnail}
                width={1000}
                height={800}
                alt="Thumbnail Image"
              />
            </article>
          </section>
          <section>
            <h3>Recommended</h3>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
