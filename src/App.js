import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import images from "./images";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
      </Routes>
    </div>
  );
}

export default App;
