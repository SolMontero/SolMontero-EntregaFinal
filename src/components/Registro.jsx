import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "./AuthLayout";

const Registro = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      setError("El usuario ya está registrado");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <AuthLayout title="Registro">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repita la contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="w-100 mb-3">
          Registrarse
        </Button>

        {error && (
          <div className="text-danger text-center mt-2">
            {error}
          </div>
        )}

        <div className="text-center mt-3">
          <span>¿Ya tenés cuenta? </span>
          <Link to="/login" className="register-link">
            Iniciar sesión
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Registro;
