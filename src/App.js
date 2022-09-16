import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import images from "./images";

import { Routes, Route } from "react-router-dom";
import NewArrivals from "./pages/NewArrivals";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNavBar />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/NewArrivals" element={<NewArrivals images={images} />} />
      </Routes>
    </div>
  );
}

export default App;
