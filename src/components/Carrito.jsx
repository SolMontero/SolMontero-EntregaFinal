import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useCarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CarritoPage = () => {
  const {isAuthenticated}=useAuth();
  const { items, removeTerreno, clearCart, isEmpty } = useCarritoContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
  navigate("/login");
  return null;
  }

  if (isEmpty) {
    return (
      <Container className="py-5 text-center">
        <h2>No tenés terrenos guardados</h2>
        <p>Explorá el catálogo y guardá los que te interesen.</p>
        <Button onClick={() => navigate("/")}>
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Mis terrenos guardados</h2>

      <Row className="g-4">
        {items.map((t) => (
          <Col md={4} key={t.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={t.imagen} />
              <Card.Body>
                <Card.Title>{t.ubicacion}</Card.Title>
                <Card.Text>
                  Superficie: {t.superficie} m² <br />
                  Precio: ${t.precio}
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeTerreno(t.idTerreno)}
                  >
                    Quitar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-end mt-4">
        <Button variant="secondary" onClick={clearCart}>
          Vaciar lista
        </Button>
        <Button variant="secondary" onClick={()=>navigate("/checkout")}>
          Continuar Compra
        </Button>
      </div>
    </Container>
  );
};

export default CarritoPage;
