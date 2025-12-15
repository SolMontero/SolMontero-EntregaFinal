import { useState } from "react";
import { Container, Card, Button, Form, Table } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const { items, clearCart } = useCarritoContext();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState("");

  // 🔒 Protección
  if (!isAuthenticated || items.length === 0) {
    return <Navigate to="/catalogo" replace />;
  }

  // =============================
  // Helpers locales
  // =============================
  const formatearPrecio = (valor) =>
    `$${valor.toLocaleString("es-AR")}`;

  const calcularResumen = (items) => {
    const subtotal = items.reduce((acc, item) => acc + item.precio, 0);
    const impuestos = subtotal * 0.21;

    return {
      subtotal,
      impuestos,
      total: subtotal + impuestos,
    };
  };

  const resumen = calcularResumen(items);

  // =============================
  // Checkout
  // =============================
  const handleCheckout = () => {
  if (!metodoPago) {
    Swal.fire(
      "Falta información",
      "Seleccioná un método de pago",
      "warning"
    );
    return;
  }

  const orden = {
    user,
    items,
    total: resumen.total,
    metodoPago,
    fecha: new Date().toISOString(),
  };

  navigate("/confirmarCompra", {
    replace: true,
    state: { orden },
  });

  // ⬅️ limpiar DESPUÉS de navegar
  clearCart();

  Swal.fire(
    "Pago simulado exitoso",
    `Total abonado: ${formatearPrecio(resumen.total)}`,
    "success"
  );
};


  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">Checkout</h2>

      <Card className="mb-4">
        <Card.Body>
          <Table borderless>
            <tbody>
              <tr>
                <td>Terrenos ({items.length})</td>
                <td className="text-end">
                  {formatearPrecio(resumen.subtotal)}
                </td>
              </tr>
              <tr>
                <td>Impuestos (21%)</td>
                <td className="text-end">
                  {formatearPrecio(resumen.impuestos)}
                </td>
              </tr>
              <tr className="fw-bold">
                <td>Total</td>
                <td className="text-end">
                  {formatearPrecio(resumen.total)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={user} disabled />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Método de pago</Form.Label>
              <Form.Select
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="mercadopago">Mercado Pago</option>
                <option value="transferencia">Transferencia</option>
                <option value="efectivo">Efectivo</option>
              </Form.Select>
            </Form.Group>

            <Button
              className="w-100"
              variant="success"
              onClick={handleCheckout}
            >
              Confirmar pago
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CheckoutPage;
