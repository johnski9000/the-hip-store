import Navbar from "../Header/Header"
import MobileNavbar from "../Header/HeaderMobile"
import Footer from "../Footer/Footer"
import Klarna from "../Klarna/Klarna"
import PlaceHolder from "../Header/HeaderPlaceHolder"


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MobileNavbar/>
      <Klarna/>
      <PlaceHolder/>
      <main>{children}</main>
      <Footer />
    </>
  )
}