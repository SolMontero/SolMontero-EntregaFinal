import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Catalogo from "./components/Catalogo";
import Home from "./components/Home";
import Login from "./components/Login";
import SobreNosotros from "./components/SobreNosotros";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Catalogo" element={<ProductList/>} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
