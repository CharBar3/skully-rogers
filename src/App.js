import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import images from "./images";

import { Routes, Route } from "react-router-dom";
import NewArrivals from "./pages/NewArrivals";
import MobileNavBar from "./components/MobileNavBar";
import MobileNavBarMenu from "./components/MobileNavBarMenu";
import { useState } from "react";

function App() {
  const [menuStatus, setMenuStatus] = useState(false);

  const openCloseMenu = (menuStatus) => {
    const navMenu = document.querySelector("#MobileNavBarMenu");
    if (menuStatus === false) {
      navMenu.style.display = "block";
      setMenuStatus(true);
    } else {
      navMenu.style.display = "none";
      setMenuStatus(false);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <MobileNavBar
        openCloseMenu={openCloseMenu}
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />
      <MobileNavBarMenu
        openCloseMenu={openCloseMenu}
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/NewArrivals" element={<NewArrivals images={images} />} />
      </Routes>
    </div>
  );
}

export default App;
