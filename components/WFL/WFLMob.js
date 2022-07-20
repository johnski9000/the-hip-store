import styles from "./wflmob.module.css";

function WFLMob(props) {
  return (
    <main className={styles.mainMob}>
      <div className={styles.spotWrapper}>
        <div className={styles.spotItem}>
          <a href="asdgf" className={styles.footwear}>
          <img src="/Footwear.png"/>
            </a>
        </div>
        <div className={styles.spotItem}>
          <a href="asdgf" className={styles.living}>
          <img src="/Living.png"/>
            </a>
        </div>
      </div>
      <div className={styles.spotButtonWrapper}>
        <button className={styles.button}>Show All Latest Arrivals</button>
      </div>
    </main>
  );
}

export default WFLMob;
