import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Spinner } from "react-bootstrap";

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
    <Row>
      {products.map((product) => (
        <Col xs={12} sm={6} md={4} key={product.idTerreno} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
