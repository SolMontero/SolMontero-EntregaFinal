import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Spinner } from "react-bootstrap";
import sideBarFiltros from "./Filtros";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://690e1595bd0fefc30a036535.mockapi.io/Terrenos";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "40px",
        backgroundColor: "#4e614eff",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Zonas</h3>
        <div>
          <label>
            <input type="radio" name="zona" /> San Antonio de Padua
          </label>
          <br />
          <label>
            <input type="radio" name="zona" /> Pilar
          </label>
        </div>
        <h3>Precios</h3>
        <div>
          <label>
            <input type="radio" name="precio" /> $15.000
          </label>
          <br />
          <label>
            <input type="radio" name="precio" /> $18.500
          </label>
          <br />
          <label>
            <input type="radio" name="precio" /> $20.000
          </label>
        </div>
        <h3>Medidas</h3>
        <div>
          <label>
            <input type="radio" name="medida" /> 30x100
          </label>
          <br />
          <label>
            <input type="radio" name="medida" /> 60x200
          </label>
        </div>
      </div>

      {/* Listado de productos */}
      <div style={{ flex: 1 }}>
        <Row xs={1} md={2} className="g-4">
          {products.map((product, index) => (
            <Col key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
