import { Container, Card, Button, Table } from "react-bootstrap";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const OrdenConfirmadaPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.orden) {
    return <Navigate to="/" replace />;
  }

  const { orden } = state;

  // =============================
  // Helper local
  // =============================
  const formatearPrecio = (valor) =>
    `$${valor.toLocaleString("es-AR")}`;

  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <Card className="shadow">
        <Card.Body>
          <h2 className="text-success mb-3">✅ Pago confirmado</h2>

          <p>
            Gracias por tu compra. Hemos recibido tu pago correctamente.
          </p>

          <hr />

          <p><strong>Método de pago:</strong> {orden.metodoPago}</p>
          <p><strong>Fecha:</strong> {new Date(orden.fecha).toLocaleString()}</p>

          <Table bordered size="sm" className="mt-3">
            <thead>
              <tr>
                <th>Terreno</th>
                <th className="text-end">Precio</th>
              </tr>
            </thead>
            <tbody>
              {orden.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.ubicacion}</td>
                  <td className="text-end">
                    {formatearPrecio(item.precio)}
                  </td>
                </tr>
              ))}

              <tr className="fw-bold">
                <td>Total</td>
                <td className="text-end">
                  {formatearPrecio(orden.total)}
                </td>
              </tr>
            </tbody>
          </Table>

          <Button
            className="w-100 mt-3"
            onClick={() => navigate("/", { replace: true })}
          >
            Volver al inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrdenConfirmadaPage;
