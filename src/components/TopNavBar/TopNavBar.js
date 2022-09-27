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
          <div id="top-nav-bar-logo-div">
            <img src="https://imgur.com/wubJyoi.png" />
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
                Home
              </button>
            </Link>
            <Link to="/Legends">
              <button
                style={{
                  border: navButtonBorders.legends,
                }}
              >
                Legends
              </button>
            </Link>
            <Link to="/TheArtist">
              <button
                style={{
                  border: navButtonBorders.theArtist,
                }}
              >
                The Artist
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
