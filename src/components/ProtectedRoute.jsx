import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // 🔒 No autenticado
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // 🧩 (roles los dejamos preparados, no activos aún)
  return children;
};

export default ProtectedRoute;
