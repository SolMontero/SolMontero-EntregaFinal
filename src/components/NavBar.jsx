import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  const { items, activarBusqueda } = useCarritoContext();
  const { isAuthenticated } = useAuth();
  const [busqueda, setBusqueda] = useState("");

  const handleBuscar = () => {
    activarBusqueda(busqueda); // activa búsqueda con el texto
  };

  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          {/* LOGO */}
          <Navbar.Brand as={Link} to="/">
            <img
              src="/LogoSolterra.png"
              alt="Logo"
              width="100"
              height="50"
              className="d-inline-block align-top me-2"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* LINKS CENTRADOS */}
            <Nav className="mx-auto" navbarScroll>
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/catalogo">
                Catálogo
              </Nav.Link>
            </Nav>

         
             <Nav className="d-flex align-items-center gap-3">
                <InputGroup style={{ width: "200px" }}>
                  <Form.Control
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleBuscar()}
                  />
                  <Button variant="outline-secondary" onClick={handleBuscar}>
                    <FaSearch />
                  </Button>
                </InputGroup>

        
              <Nav.Link as={Link} to="/carrito" className="position-relative p-0">
                <FaShoppingCart size={18} />
                {isAuthenticated && items.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {items.length}
                  </span>
                )}
              </Nav.Link>

            
              <Button
                as={Link}
                to={isAuthenticated ? "/perfil" : "/login"}
                variant="link"
                className="text-dark fs-3 p-0"
                title={isAuthenticated ? "Mi cuenta" : "Iniciar sesión"}
              >
                <i className="bi bi-person-circle"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
