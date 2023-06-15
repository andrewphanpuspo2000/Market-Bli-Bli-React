import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Navigation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { Drink } from "./Components/Drink";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drink" element={<Drink />} />
      </Routes>
    </div>
  );
}

export default App;
