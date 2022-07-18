import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
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
      <Header/>
      <HeaderMobile/>
      <Klarna/>
      <Spot/>
      <WFL/>
      <WFLMob/>
    </div>
    
  )
}
