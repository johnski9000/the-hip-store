import styles from "./wfl.module.css";

function WFL(props) {
  return (
    <main className={styles.main}>
      <div className={styles.spotWrapper}>
        <div className={styles.spotItem}>
          <a href="sdf" className={styles.womens} >
            <img src="/Womens.png"/>
            </a>
        </div>
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
    </main>
  );
}

export default WFL;
