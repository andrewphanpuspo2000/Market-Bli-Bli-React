import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Navigation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";

import { Drink } from "./Components/Drink";
import { About } from "./Components/About";
import { Snacks } from "./Components/Snacks";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/about" element={<About />} />
        <Route path="/snacks" element={<Snacks />} />
      </Routes>
    </div>
  );
}

export default App;
