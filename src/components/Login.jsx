import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Hero.css"; // fondo y overlay
import "../Login.css";  // estilos específicos del login

const Login = () => {
  return (
    <div className="login-page">
      {/* Video de fondo */}
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dqr3lnf49/video/upload/v1762784258/videoOp_dwrw9t.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay"></div>

      {/* Login centrado */}
      <Container className="login-container d-flex justify-content-center align-items-center">
        <div className="login-box p-4">
          <h2 className="login-title mb-4">Iniciar Sesión</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Iniciar Sesión
            </Button>

            <div className="text-center">
              <span>No estás registrado? </span>
              <Link to="/registro" className="register-link">Regístrate</Link>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;

