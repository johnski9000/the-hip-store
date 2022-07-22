import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
      </SessionProvider>
        
  )
}

export default MyApp
