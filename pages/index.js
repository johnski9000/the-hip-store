import Head from 'next/head'
import Blog from '../components/Blog/Blog'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {

  const {data : session} = useSession();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.home}>
      <Head>
        <title>
          The Hip Store
        </title>
      </Head>
      {/* <Klarna/> */}
      <div className={styles.spotWrapper}>
      {/* data-aos="flip-left" data-aos-duration="1000" */}
        <div className={styles.spotItem}>
          <a href="/mens" className={styles.summerSaleItem} >
            <img src="/sale-image.png"/>
            </a>
        </div>
        {/* data-aos="flip-right" data-aos-duration="1000" */}
        <div className={styles.spotItem} >
          <a href="asdgf" className={styles.launchesItem}>
          <img src="/launches-image.png"/>
            </a>
        </div>
        {/* <div className={styles.spotItemMob}>
          <a href="asdgf" className={styles.launchesItem}>
          <img src="/Womens.png"/>
            </a>
        </div> */}
      </div>
      <div className={styles.spotWrapper2 }>
        <div className={styles.spotItem} data-aos="zoom-in-up" data-aos-duration="500">
          <a href="/womens" className={styles.womens} >
            <img src="/Womens.png"/>
            </a>
        </div>
        <div className={styles.spotItem} data-aos="zoom-in-up" data-aos-duration="500">
          <a href="asdgf" className={styles.footwear}>
          <img src="/Footwear.png"/>
            </a>
        </div>
        <div className={styles.spotItem} data-aos="zoom-in-up" data-aos-duration="500">
          <a href="asdgf" className={styles.living}>
          <img src="/Living.png"/>
            </a>
        </div>
      </div>
      <div className={styles.spotWrapper3} >
        <div className={styles.spotItem} data-aos="zoom-in-up" data-aos-duration="500">
          <a href="sdf" className={styles.living}>
            <img src="https://i8.amplience.net/i/jpl/desktop-homepage-newestartboard-7-a1f859da8c1972ba3d17d2e3ecac4644?fmt=webp" />
          </a>
        </div>
        <div className={styles.spotItem} data-aos="zoom-in-up" data-aos-duration="500">
          <a href="asdgf" className={styles.footwear}>
            <img src="https://i8.amplience.net/i/jpl/desktop-homepage-newestartboard-6-329764818dd28ec8782c263a8ca553ac?fmt=webp" />
          </a>
        </div>
      </div>
      <Blog/>
    </div>
    
  )
}
