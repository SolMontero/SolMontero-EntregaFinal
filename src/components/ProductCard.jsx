import { Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "../ProductCard.css";
import { useCarritoContext } from "../context/CarritoContext";

const ProductCard = ({ product }) => {
    const { addTerreno } = useCarritoContext();
  return (
    
    <Card className="product-card h-100 shadow-sm">
      <div className="img-wrapper">
        <Card.Img
          variant="top"
          src={product.UrlImagen}
          alt={product.titulo}
          className="product-card-img"
        />

        {/* ICONO CARRITO */}
        <button className="cart-icon-btn" onClick={() => addTerreno(product)}>
            <FaShoppingCart />
        </button>
      </div>

      <Card.Body>
        <Card.Title className="product-card-title">
          {product.titulo}
        </Card.Title>

        <Card.Text className="product-card-price">
          <strong>${product.Precio}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

