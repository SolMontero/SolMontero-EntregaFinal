// components/Filtros.jsx
import React from "react";

const Filtros = ({ filtros, onChange }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-sm w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-3">Filtrar por:</h3>

      <input
        type="text"
        name="Ubicacion"
        placeholder="Ubicación"
        value={filtros.Ubicacion}
        onChange={(e) => onChange({ ...filtros, [e.target.name]: e.target.value })}
        className="block w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        name="PrecioMax"
        placeholder="Precio máximo"
        value={filtros.PrecioMax}
        onChange={(e) => onChange({ ...filtros, [e.target.name]: e.target.value })}
        className="block w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        name="MedidaSuperficieMin"
        placeholder="Superficie mínima (m²)"
        value={filtros.MedidaSuperficieMin}
        onChange={(e) => onChange({ ...filtros, [e.target.name]: e.target.value })}
        className="block w-full mb-3 p-2 border rounded"
      />
    </div>
  );
};

export default Filtros;
