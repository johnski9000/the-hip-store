import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog/Blog'
import FL from '../components/FL/FL'
import Spot from '../components/Spot-Section/Spot'
import WFL from '../components/WFL/WFL'
import WFLMob from '../components/WFL/WFLMob'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data : session} = useSession();
  console.log(session)
  return (
    <div className={styles.home}>
      <Head>
        <title>
          The Hip Store
        </title>
      </Head>
      {/* <Klarna/> */}
      <Spot/>
      <WFL/>
      <WFLMob/>
      <FL/>
      <Blog/>
    </div>
    
  )
}
