import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
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
            <Nav className="ms-auto d-flex align-items-center" navbarScroll>
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/Catalogo">
                Catálogo
              </Nav.Link>
              <Nav.Link as={Link} to="/SobreNosotros">
                Sobre Nosotros
              </Nav.Link>

              <Button
                as={Link}
                to="/Login"
                variant="link"
                className="text-dark fs-3 p-0 ms-3"
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
