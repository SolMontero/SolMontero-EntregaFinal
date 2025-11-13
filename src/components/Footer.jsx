// Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../Footer.css"; // Creamos un CSS aparte

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo / Información */}
          <Col md={3} className="mb-4">
            <h2 className="footer-title">Mi Empresa</h2>
            <p className="footer-text">
              Nos dedicamos a ofrecer los mejores servicios inmobiliarios, con
              compromiso y confianza.
            </p>
          </Col>

          {/* Enlaces */}
          <Col md={3} className="mb-4">
            <h5 className="footer-subtitle">Enlaces</h5>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Propiedades</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </Col>

          {/* Contacto */}
          <Col md={3} className="mb-4">
            <h5 className="footer-subtitle">Contacto</h5>
            <p className="footer-text">Calle Falsa 123, Ciudad, País</p>
            <p className="footer-text">Email: info@miempresa.com</p>
            <p className="footer-text">Tel: +54 9 11 1234-5678</p>
          </Col>

          {/* Redes sociales */}
          <Col md={3} className="mb-4">
            <h5 className="footer-subtitle">Síguenos</h5>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4 footer-bottom">
            &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
