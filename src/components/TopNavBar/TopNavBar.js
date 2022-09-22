import "./TopNavBar.css";
import { Link } from "react-router-dom";
const TopNavBar = ({
  openCloseMobileNavMenu,
  mobileNavMenuStatus,
  navButtonBorders,
}) => {
  return (
    <div id="top-nav-bar">
      <div id="top-nav-bar-inner-div">
        <Link to="/">
          <div id="top-nav-bar-logo-and-title-div">
            <div id="top-nav-bar-logo-div">
              <img src="/liminsquare_logo.png" alt="Limin Square Logo" />
            </div>
            <div id="top-nav-bar-title-div">
              <span id="top-nav-bar-title-div-apex-friends-span">
                Apex Friends
              </span>
              <span id="top-nav-bar-title-div-by-limin-square-span">
                By Limin Square
              </span>
            </div>
          </div>
        </Link>
        <div id="top-nav-bar-mobile-nav-menu-icon-div">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
            alt="Menu Icon"
            onClick={() => openCloseMobileNavMenu(mobileNavMenuStatus)}
          />
        </div>
        <div id="top-nav-bar-navigation-and-socials">
          <nav>
            <Link to="/">
              <button
                style={{
                  border: navButtonBorders.home,
                }}
              >
                <span>Home</span>
              </button>
            </Link>
            <Link to="/Legends">
              <button
                style={{
                  border: navButtonBorders.legends,
                }}
              >
                <span>Legends</span>
              </button>
            </Link>
            <Link to="/TheArtist">
              <button
                style={{
                  border: navButtonBorders.theArtist,
                }}
              >
                <span>The Artist</span>
              </button>
            </Link>
          </nav>
          <a href="https://www.instagram.com/liminsquare/" target="_blank">
            <div id="top-nav-bar-socials">
              <img
                src="https://img.icons8.com/material-outlined/384/000000/instagram-new--v1.png"
                alt="Instagram Logo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
