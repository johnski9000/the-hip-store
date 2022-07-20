import PlaceHolder from '../components/Header/HeaderPlaceHolder'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
        <Layout>

          <Component {...pageProps} /> 
        </Layout>
  )
}

export default MyApp
