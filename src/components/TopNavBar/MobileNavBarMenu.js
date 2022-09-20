import "./MobileNavBarMenu.css";
import { Link } from "react-router-dom";

const MobileNavBarMenu = ({ openCloseMenu, menuStatus }) => {
  return (
    <div id="MobileNavBarMenu">
      <div id="MobileNavBarMenu-inner">
        <div id="mobile-navbar-menu-links">
          <Link to="/" onClick={() => openCloseMenu(menuStatus)}>
            Home
          </Link>
          <Link to="/Legends" onClick={() => openCloseMenu(menuStatus)}>
            Legends
          </Link>
        </div>
        <div id="mobile-navbar-menu-socials">
          {/* <a href="https://www.instagram.com/liminsquare/"> */}
          <img
            src="https://img.icons8.com/ios/500/000000/instagram-new--v1.png"
            alt="Instagram Logo"
          />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBarMenu;
