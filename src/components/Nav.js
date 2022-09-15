import "../styles/componentStyles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-component-div">
      <div id="nav-component-logo-div">
        <Link>
          <img src="https://i.imgur.com/24OS1J3.png" alt="Skully Rogers Logo" />
        </Link>
        <Link>Skully Rogers</Link>
      </div>
      {/* <div>
        <nav>
          <button>Home</button>
          <button>New Arrivals</button>
          <button>About</button>
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
      </div> */}
    </div>
  );
};

export default Nav;
