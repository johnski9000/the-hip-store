import styles from "./spot.module.css";

function Spot(props) {
  return (
    <main className={styles.main}>
      <div className={styles.spotWrapper}>
        <div className={styles.spotItem}>
          <a href="sdf" className={styles.summerSaleItem} >
            <img src="/sale-image.png"/>
            </a>
        </div>
        <div className={styles.spotItem}>
          <a href="asdgf" className={styles.launchesItem}>
          <img src="/launches-image.png"/>
            </a>
        </div>
        <div className={styles.spotItemMob}>
          <a href="asdgf" className={styles.launchesItem}>
          <img src="/Womens.png"/>
            </a>
        </div>
      </div>
    </main>
  );
}

export default Spot;
