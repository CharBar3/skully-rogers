import "../styles/componentStyles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <div id="navbar-logo">
        <Link to="/">
          <div id="logo">
            <img
              src="https://i.imgur.com/24OS1J3.png"
              alt="Skully Rogers Logo"
            />
          </div>
        </Link>
        <Link id="navbar-title" to="/">
          Skully Rogers
        </Link>
      </div>
      <div id="navbar-navigation-socials">
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/NewArrivals">
            <button>New Arrivals</button>
          </Link>
          <Link>
            <button>About</button>
          </Link>
        </nav>
        <div>
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
    </div>
  );
};

export default NavBar;
