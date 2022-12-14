import "./App.css";
import Home from "./pages/Home/Home";
import Legends from "./pages/Legends/Legends";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import MobileNavBarMenu from "./components/TopNavBar/MobileNavBarMenu";

import images from "./images";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import TheArtist from "./pages/TheArtist/TheArtist";

function App() {
  const [mobileNavMenuStatus, setMobileNavMenuStatus] = useState(false);

  const openCloseMobileNavMenu = (mobileNavMenuStatus) => {
    const navMenu = document.querySelector("#mobile-nav-bar-menu");
    if (mobileNavMenuStatus === false) {
      navMenu.style.display = "block";
      setMobileNavMenuStatus(true);
    } else {
      navMenu.style.display = "none";
      setMobileNavMenuStatus(false);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setMobileNavMenuStatus(false);
      openCloseMobileNavMenu();
    }
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);

  const [navButtonBorders, setNavButtonBorders] = useState({
    home: "3px solid black",
    legends: "",
    theArtist: "",
  });

  return (
    <div className="App">
      <TopNavBar
        openCloseMobileNavMenu={openCloseMobileNavMenu}
        mobileNavMenuStatus={mobileNavMenuStatus}
        navButtonBorders={navButtonBorders}
      />
      <MobileNavBarMenu
        openCloseMobileNavMenu={openCloseMobileNavMenu}
        mobileNavMenuStatus={mobileNavMenuStatus}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home images={images} setNavButtonBorders={setNavButtonBorders} />
          }
        />
        <Route
          path="/Legends"
          element={
            <Legends
              setNavButtonBorders={setNavButtonBorders}
              images={images}
            />
          }
        />
        <Route
          path="/TheArtist"
          element={<TheArtist setNavButtonBorders={setNavButtonBorders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
