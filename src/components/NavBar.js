import "../styles/componentStyles/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ navButtonBorders, setNavButtonBorders }) => {
  return (
    <div id="navbar">
      <div id="navbar-inner">
        <div id="navbar-logo">
          <Link
            to="/"
            onClick={() =>
              setNavButtonBorders({
                home: "2px solid black",
                newArrivals: "",
                about: "",
              })
            }
          >
            <div id="logo">
              <img
                src="https://i.imgur.com/24OS1J3.png"
                alt="Skully Rogers Logo"
              />
            </div>
          </Link>
          <Link
            id="navbar-title"
            to="/"
            onClick={() =>
              setNavButtonBorders({
                home: "2px solid black",
                newArrivals: "",
                about: "",
              })
            }
          >
            Skully Rogers
          </Link>
        </div>
        <div id="navbar-navigation-socials">
          <nav>
            <Link to="/">
              <button
                style={{ border: navButtonBorders.home }}
                onClick={() =>
                  setNavButtonBorders({
                    home: "2px solid black",
                    newArrivals: "",
                    about: "",
                  })
                }
              >
                Home
              </button>
            </Link>
            <Link to="/NewArrivals">
              <button
                style={{ border: navButtonBorders.newArrivals }}
                onClick={() =>
                  setNavButtonBorders({
                    home: "",
                    newArrivals: "2px solid black",
                    about: "",
                  })
                }
              >
                New Arrivals
              </button>
            </Link>
            <Link>
              <button
                style={{ border: navButtonBorders.about }}
                onClick={() =>
                  setButtonBorders({
                    home: "",
                    newArrivals: "",
                    about: "2px solid black",
                  })
                }
              >
                About
              </button>
            </Link>
          </nav>
          <div id="socails-div">
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
    </div>
  );
};

export default NavBar;
