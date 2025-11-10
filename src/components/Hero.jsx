import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Hero.css";

function Hero() {
  return (
    <div>
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dqr3lnf49/video/upload/v1762784258/videoOp_dwrw9t.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay"></div>

      <Container className="hero-content">
        <h1>Encontrá el terreno ideal para tu próximo proyecto</h1>
        <p>Gestioná tus visitas y reservas desde un solo lugar</p>
        <Button as={Link} to="/Catalogo" variant="success" className="me-3">
          Ver catálogo
        </Button>
        <Button as={Link} to="/Login" variant="outline-success">
          Agendar cita
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
