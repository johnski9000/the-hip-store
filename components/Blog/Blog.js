import styles from "./blog.module.css"

function Blog() {
    return (
      <div className={styles.blogWrapper}>
        <h3>BLOG</h3>
        <div className={styles.blogItems}>
          <div className={styles.blogLeft}>
            <a className={styles.blog1Wrapper}/>
            <h2>New Balance - Created For Everyone - Exclusively at HIP</h2>
            <p>
              Introducing an elevated essentials apparel collection that pays
              homage to New Balance’s sporting heritage through a new contemporary
              viewpoint. Arriving as a versatile 10-piece collection interpreted
              in subtle brown and navy custom tonal colourways for HIP, each piece
              features minimal co-branding throughout to ensure wearability and
              versatility - whilst timelessness is kept in mind.
            </p>
            <a href="asda">Read More</a>
          </div>
  
          <div className={styles.blogRight}>
            <a className={styles.blog2Wrapper}/>
            <h2>New To HIP: SOAR Running</h2>
            <p>
              Founded in 2015 in Hackney, London by designer and runner Tim Soar –
              SOAR Running focus on design and production of specialist running
              apparel that matches the high-level commitment and passion of
              runners globally. . Merging a considered balance of textile
              innovation, pioneering design technology, sports science and the
              real-world experiences of runners, SOAR creates an expansive
              collection of modern goods expertly engineered
            </p>
            <a href="asda">Read More</a>
          </div>
        </div>
        <div className={styles.buttonWrapper}><button className={styles.button}>VISIT BLOG</button></div>
        
      </div>
    );
  };
  
  export default Blog;
  