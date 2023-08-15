import styles from "./page.module.css";

import Header from "./_components/header";
import AllBlogPosts from "./_components/allblogposts";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Header pageTitle="Blog Section Title" />
      <main className={styles.subpageContainer}>
        <div className="innerContainer">
          <AllBlogPosts />
        </div>
      </main>
      <Footer />
    </>
  );
}
