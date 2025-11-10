import { Card } from "react-bootstrap";
import "../ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.UrlImagen}
        alt={product.titulo}
        className="product-card-img"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-card-title">{product.titulo}</Card.Title>

        <Card.Text className="product-card-price">
          <strong>${product.Precio}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
