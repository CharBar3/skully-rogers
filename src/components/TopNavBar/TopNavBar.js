import "./TopNavBar.css";
import { Link } from "react-router-dom";
const TopNavBar = ({ openCloseMobileNavMenu, mobileNavMenuStatus }) => {
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
              <button>
                <span>Home</span>
              </button>
            </Link>
            <Link to="/Legends">
              <button>
                <span>Legends</span>
              </button>
            </Link>
            <Link>
              <button>
                <span>The Artist</span>
              </button>
            </Link>
          </nav>
          <div id="top-nav-bar-socials">
            {/* <a href="https://www.instagram.com/liminsquare/"> */}
            <img
              src="https://img.icons8.com/ios/500/000000/instagram-new--v1.png"
              alt="Instagram Logo"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
