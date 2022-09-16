import "../styles/componentStyles/MobileNavBar.css";

const MobileNavBar = ({ openCloseMenu, setMenuStatus, menuStatus }) => {
  return (
    <div id="MobileNavBar">
      <div id="mobile-navbar-logo">
        {/* <img src="https://i.imgur.com/24OS1J3.png" alt="Skully Rogers Logo" /> */}
        <p>Skully Rogers</p>
      </div>
      <div id="mobile-navbar-menu" onClick={() => openCloseMenu(menuStatus)}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
          alt="Menu Icon"
        />
      </div>
    </div>
  );
};

export default MobileNavBar;
