import styles from "../page.module.css";

import Header from "../_components/header";
import AllBlogPosts from "../_components/allblogposts";
import Footer from "../_components/footer";

export default function People() {
  return (
    <>
      <Header pageTitle="People" />
      <main className={styles.subpageContainer}>
        <div className="innerContainer">
          <div className="contentContainer">
            <h3>People Page Content</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quaerat debitis labore inventore tenetur aliquid, aspernatur quis
              illum iure voluptates, pariatur obcaecati earum quo nemo impedit
              odio reiciendis, iusto maxime!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quaerat debitis labore inventore tenetur aliquid, aspernatur quis
              illum iure voluptates, pariatur obcaecati earum quo nemo impedit
              odio reiciendis, iusto maxime!
            </p>

            <h4>Subhead Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quaerat debitis labore inventore tenetur aliquid, aspernatur quis
              illum iure voluptates, pariatur obcaecati earum quo nemo impedit
              odio reiciendis, iusto maxime!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quaerat debitis labore inventore tenetur aliquid, aspernatur quis
              illum iure voluptates, pariatur obcaecati earum quo nemo impedit
              odio reiciendis, iusto maxime!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
