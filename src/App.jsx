import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Registro from "./components/Registro";
import ProtectedRoute from "./components/ProtectedRoute"
import { CarritoProvider } from "./context/CarritoContext";
import CarritoPage from "./components/Carrito";
import CheckoutPage from "./components/Checkout";
import OrdenConfirmada from "./components/OrdenConfirmada";

function App() {
  return (
   <AuthProvider>
    <CarritoProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/catalogo" element={<ProductList />} />
          <Route path="/carrito"
            element={
              <ProtectedRoute>
                <CarritoPage />
              </ProtectedRoute>
            }
          />
          <Route path="/confirmarCompra" element={<OrdenConfirmada/>}></Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>   
                  <CheckoutPage/>
              </ProtectedRoute>
            }
          />
          
        </Routes>

        <Footer />
      </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
