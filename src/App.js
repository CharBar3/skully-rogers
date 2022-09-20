import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import images from "./images";

import { Routes, Route } from "react-router-dom";
import NewArrivals from "./pages/NewArrivals";
import MobileNavBar from "./components/MobileNavBar";
import MobileNavBarMenu from "./components/MobileNavBarMenu";
import { useState } from "react";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Legends from "./pages/Legends/Legends";

function App() {
  const [mobileNavMenuStatus, setMobileNavMenuStatus] = useState(false);

  const openCloseMobileNavMenu = (mobileNavMenuStatus) => {
    const navMenu = document.querySelector("#MobileNavBarMenu");
    if (mobileNavMenuStatus === false) {
      navMenu.style.display = "block";
      setMobileNavMenuStatus(true);
    } else {
      navMenu.style.display = "none";
      setMobileNavMenuStatus(false);
    }
  };
  const [navButtonBorders, setNavButtonBorders] = useState({
    home: "2px solid black",
    legends: "",
    theArtist: "",
  });
  return (
    <div className="App">
      {/* <Navbar
        navButtonBorders={navButtonBorders}
        setNavButtonBorders={setNavButtonBorders}
      />
      <MobileNavBar
        openCloseMenu={openCloseMenu}
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      /> */}
      <TopNavBar
        openCloseMobileNavMenu={openCloseMobileNavMenu}
        mobileNavMenuStatus={mobileNavMenuStatus}
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
      </Routes>
    </div>
  );
}

export default App;
