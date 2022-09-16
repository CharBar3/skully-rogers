import "../styles/componentStyles/MobileNavBarMenu.css";
import { Link } from "react-router-dom";

const MobileNavBarMenu = ({ openCloseMenu, setMenuStatus, menuStatus }) => {
  return (
    <div id="MobileNavBarMenu">
      <div id="mobile-navbar-menu-links">
        <Link to="/" onClick={() => openCloseMenu(menuStatus)}>
          Home
        </Link>
        <Link to="/NewArrivals" onClick={() => openCloseMenu(menuStatus)}>
          New Arrivals
        </Link>
        {/* <Link>About</Link> */}
      </div>
      <div id="mobile-navbar-menu-socials">
        <img
          src="https://img.icons8.com/ios-filled/500/000000/instagram-new--v1.png"
          alt="Instagram Logo"
        />
        <img
          src="https://img.icons8.com/ios-filled/500/000000/twitter.png"
          alt="Twitter Logo"
        />
        <img
          src="https://img.icons8.com/ios-filled/500/000000/discord--v1.png"
          alt="Discord Logo"
        />
      </div>
    </div>
  );
};

export default MobileNavBarMenu;
