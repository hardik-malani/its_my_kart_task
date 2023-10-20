
import { useState } from "react";
import Best from "./components/Best";
import DesktopNavbar from "./components/DesktopNavbar";
import Footer from "./components/Footer";
import Heroimg from "./components/Heroimg";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Recent from "./components/Recent";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
    <div className="overflow-hidden">
     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopNav />
      <Navbar toggleSidebar={toggleSidebar}/>
      <DesktopNavbar toggleSidebar={toggleSidebar}/>
      <Heroimg />
      <Products />
      <Best />
      <Recent />
      <Newsletter />
      <Footer />
    </div>
    </>
  );
}

export default App;
