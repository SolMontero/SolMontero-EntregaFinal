import { useEffect } from "react";
import { useCarritoContext } from "../context/CarritoContext";
import ProductList from "./ProductList";

const Catalogo = () => {
  const { desactivarBusqueda } = useCarritoContext();

  useEffect(() => {
    desactivarBusqueda();
  }, [desactivarBusqueda]);

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Catalogo;