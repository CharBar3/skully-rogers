import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import TestHome from "./pages/TestHome";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      <TestHome />
    </div>
  );
}

export default App;
