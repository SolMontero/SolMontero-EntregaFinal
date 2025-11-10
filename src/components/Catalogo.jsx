import Filtros from "./Filtros";
import ProductList from "./ProductList";

const Catalogo = () => {
  <div className="flex gap-6">
    <Filtros />
    <ProductList />
  </div>;
};

export default Catalogo;
