import Image from "next/image";

import thumbnail from "../../public/images/josh-soriano-UmNl827g6AE-unsplas.jpg";
import styles from "./allblogposts.module.css";
import arrowIcon from "../../public/images/arrow.svg";

export default function AllBlogPosts() {
  return (
    <>
      <section className={styles.blogPostFilters}>
        <div className={styles.filterContainer}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" placeholder="Search" />
          <button
            className={styles.filterConfirmButton}
            aria-label="Search For Posts"
          >
            <Image src={arrowIcon} alt="arrow icon" />
          </button>
        </div>

        <div className={styles.filterContainer}>
          <label htmlFor="category">Filter By Categories</label>
          <input type="text" id="category" placeholder="Filter" />
          <button
            className={styles.filterConfirmButton}
            aria-label="Show Filtered Posts"
          >
            <Image src={arrowIcon} alt="arrow icon" />
          </button>
        </div>

        <div className={styles.filterContainer}>
          <label htmlFor="email">Get The Latest Updates</label>
          <input type="text" id="email" placeholder="Email" />
          <button
            className={styles.filterConfirmButton}
            aria-label="Subscribe For Updates"
          >
            <Image src={arrowIcon} alt="arrow icon" />
          </button>
        </div>
      </section>

      <h3 className={styles.blogPostGridHeadline}>The Latest</h3>
      <section className={styles.blogPostGrid}>
        <article className={styles.featuredBlogPost}>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
      </section>

      <h3 className={styles.blogPostGridHeadline}>Recommended</h3>
      <section className={styles.blogPostGrid}>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
      </section>

      <h3 className={styles.blogPostGridHeadline}>All articles</h3>
      <section className={styles.blogPostGrid}>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
        <article>
          <Image
            className={styles.blogPostThumbnail}
            src={thumbnail}
            width={1000}
            height={800}
            alt="Thumbnail Image"
          />
          <div className={styles.blogPostMeta}>
            <h4>Blog Post Title is Inserted Here</h4>
            <h5>Tuesday, March 18, 2009</h5>
          </div>
        </article>
      </section>
    </>
  );
}
