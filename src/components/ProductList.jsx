import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filtros from "./Filtros";
import { Spinner } from "react-bootstrap";
import { useCarritoContext } from "../context/CarritoContext";
import "../ProductList.css";

const ProductList = () => {
  // ============================
  // ESTADOS
  // ============================
  const { busquedaActiva, textoBusqueda, desactivarBusqueda} = useCarritoContext();

  useEffect(() => {
    desactivarBusqueda();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filtros, setFiltros] = useState({
    Ubicacion: "",
    PrecioMax: "",
    MedidaSuperficieMin: "",
  });

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // ============================
  // API
  // ============================
  const API_URL = "https://690e1595bd0fefc30a036535.mockapi.io/Terrenos";

  // ============================
  // FETCH
  // ============================
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

  // ============================
  // FILTRADO
  // ============================
  const productosFiltrados = products.filter((p) => {
    const coincideUbicacion =
      filtros.Ubicacion === "" ||
      p.Ubicacion.toLowerCase().includes(filtros.Ubicacion.toLowerCase());

    const coincidePrecio =
      filtros.PrecioMax === "" || p.Precio <= parseFloat(filtros.PrecioMax);

    const coincideSuperficie =
      filtros.MedidaSuperficieMin === "" ||
      p.MedidaSuperficie >= parseFloat(filtros.MedidaSuperficieMin);

    // ============================
    // FILTRADO POR BUSQUEDA NAVBAR
    // ============================
    let coincideBusqueda = true;
    if (busquedaActiva && textoBusqueda.trim() !== "") {
      const txt = textoBusqueda.toLowerCase().trim();
      coincideBusqueda =
        p.Ubicacion.toLowerCase().includes(txt) ||
        (p.Nombre && p.Nombre.toLowerCase().includes(txt));
    }

    return coincideUbicacion && coincidePrecio && coincideSuperficie && coincideBusqueda;
  });

  // ============================
  // PAGINADO
  // ============================
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const productosPaginados = productosFiltrados.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productosFiltrados.length / productsPerPage);

  // Reset página cuando cambian filtros o búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [filtros, busquedaActiva, textoBusqueda]);

  // ============================
  // LOADING
  // ============================
  if (loading) {
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  }

  // ============================
  // RENDER
  // ============================
  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* ======================
            FILTROS
        ====================== */}
        <aside className="filters">
          <Filtros filtros={filtros} onChange={setFiltros} />
        </aside>

        {/* ======================
            PRODUCTOS
        ====================== */}
        <div>
          <main className="grid-container">
            {productosPaginados.length > 0 ? (
              productosPaginados.map((p) => (
                <ProductCard key={p.idTerreno} product={p} />
              ))
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </main>

          {/* ======================
              PAGINADO
          ====================== */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`page-btn ${
                      page === currentPage ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
