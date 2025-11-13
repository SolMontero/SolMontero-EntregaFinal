import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filtros from "./Filtros";
import { Spinner } from "react-bootstrap";
import "../ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtros, setFiltros] = useState({
    Ubicacion: "",
    PrecioMax: "",
    MedidaSuperficieMin: ""
  });

  const API_URL = "https://690e1595bd0fefc30a036535.mockapi.io/Terrenos";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  const productosFiltrados = products.filter((p) => {
    const coincideUbicacion =
      filtros.Ubicacion === "" ||
      p.Ubicacion.toLowerCase().includes(filtros.Ubicacion.toLowerCase());
    const coincidePrecio =
      filtros.PrecioMax === "" || p.Precio <= parseFloat(filtros.PrecioMax);
    const coincideSuperficie =
      filtros.MedidaSuperficieMin === "" ||
      p.MedidaSuperficie >= parseFloat(filtros.MedidaSuperficieMin);
    return coincideUbicacion && coincidePrecio && coincideSuperficie;
  });

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Panel de filtros */}
        <aside className="filters">
          <Filtros filtros={filtros} onChange={setFiltros} />
        </aside>

        {/* Grilla de productos */}
        <main className="grid-container">
          {productosFiltrados.map((p) => (
            <ProductCard key={p.idTerreno} product={p} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default ProductList;
