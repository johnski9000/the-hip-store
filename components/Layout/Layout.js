import Navbar from "../Header/Header"
import MobileNavbar from "../Header/HeaderMobile"
import Footer from "../Footer/Footer"


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MobileNavbar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}