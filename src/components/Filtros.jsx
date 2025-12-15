import React from "react";

const Filtros = ({ filtros, onChange }) => {
  return (
    <div className="filters-content">
      <h4 className="filters-title">🌿 Buscá tu terreno ideal</h4>

      <input
        type="text"
        name="Ubicacion"
        placeholder="Ubicación"
        value={filtros.Ubicacion}
        onChange={(e) =>
          onChange({ ...filtros, [e.target.name]: e.target.value })
        }
      />

      <input
        type="number"
        name="PrecioMax"
        placeholder="Precio máximo"
        value={filtros.PrecioMax}
        onChange={(e) =>
          onChange({ ...filtros, [e.target.name]: e.target.value })
        }
      />

      <input
        type="number"
        name="MedidaSuperficieMin"
        placeholder="Superficie mínima (m²)"
        value={filtros.MedidaSuperficieMin}
        onChange={(e) =>
          onChange({ ...filtros, [e.target.name]: e.target.value })
        }
      />
    </div>
  );
};
export default Filtros;