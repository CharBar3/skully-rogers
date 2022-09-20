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
  const [navButtonBorders, setNavButtonBorders] = useState({
    home: "2px solid black",
    newArrivals: "",
    about: "",
  });
  return (
    <div className="App">
      <Navbar
        navButtonBorders={navButtonBorders}
        setNavButtonBorders={setNavButtonBorders}
      />
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
        <Route
          path="/"
          element={
            <Home images={images} setNavButtonBorders={setNavButtonBorders} />
          }
        />
        <Route
          path="/NewArrivals"
          element={
            <NewArrivals
              navButtonBorders={navButtonBorders}
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
