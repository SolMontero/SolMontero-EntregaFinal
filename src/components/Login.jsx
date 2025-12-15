import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "./AuthLayout";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const redirectPath = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();
  setError("");

  if (!email || !password) {
    setError("Todos los campos son obligatorios");
    return;
  }

  // ADMIN
  if (email === "admin@admin.com" && password === "Admin123") {
    login(email, "admin");
    navigate("/admin");
    return;
  }

  // USUARIOS
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userFound = users.find((u) => u.email === email);

  if (!userFound) {
    setError("Usuario no registrado");
    return;
  }

  if (userFound.password !== password) {
    setError("Contraseña incorrecta");
    return;
  }

  login(userFound.email, "user");
  navigate(redirectPath);
};


  return (
    <AuthLayout title="Login">
       <Form onSubmit={handleLogin}>
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
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="w-100 mb-3">
          Iniciar Sesión
        </Button>

        {error && (
          <div className="text-danger text-center mt-2">
            {error}
          </div>
        )}

        <div className="text-center mt-3">
          <span>No estás registrado? </span>
          <Link as={Link} to="/registro" className="register-link">
            Regístrate
          </Link>
        </div>
      </Form>
    </AuthLayout>
     
      
  );
};

export default Login;
