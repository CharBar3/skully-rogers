import "./MobileNavBarMenu.css";
import { Link } from "react-router-dom";

const MobileNavBarMenu = ({ openCloseMenu, menuStatus }) => {
  return (
    <div id="mobile-nav-bar-menu">
      <div id="mobile-nav-bar-menu-inner-div">
        <div id="mobile-nav-bar-menu-links-div">
          <Link to="/" onClick={() => openCloseMenu(menuStatus)}>
            Home
          </Link>
          <Link to="/Legends" onClick={() => openCloseMenu(menuStatus)}>
            Legends
          </Link>
          <Link to="/TheArtist" onClick={() => openCloseMenu(menuStatus)}>
            The Artist
          </Link>
        </div>
        <div id="mobile-nav-bar-menu-socials-div">
          <a href="https://www.instagram.com/liminsquare/" target="_blank">
            <img
              src="https://img.icons8.com/material-outlined/384/000000/instagram-new--v1.png"
              alt="Instagram Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBarMenu;
