import Best from "./components/Best"
import DesktopNavbar from "./components/DesktopNavbar"
import Footer from "./components/Footer"
import Heroimg from "./components/Heroimg"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Products from "./components/Products"
import Recent from "./components/Recent"
import TopNav from "./components/TopNav"

function App() {

  return (
    <>
    <div className="overflow-hidden">
    <TopNav/>
    <Navbar/>
    <DesktopNavbar/>
    <Heroimg/>
    <Products/>
    <Best/>
    <Recent/>
    <Newsletter/>
    <Footer/>
    </div>
    </>
  )
}

export default App
