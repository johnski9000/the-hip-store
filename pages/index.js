import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog/Blog'
import FL from '../components/FL/FL'
import Klarna from '../components/Klarna/Klarna'
import Spot from '../components/Spot-Section/Spot'
import WFL from '../components/WFL/WFL'
import WFLMob from '../components/WFL/WFLMob'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>
          The Hip Store
        </title>
      </Head>
      <Klarna/>
      <Spot/>
      <WFL/>
      <WFLMob/>
      <FL/>
      <Blog/>
    </div>
    
  )
}
