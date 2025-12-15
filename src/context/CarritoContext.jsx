// ============================================
// src/context/CartContext.jsx
// ============================================

import { createContext, useContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CART_STORAGE_KEY = "terrenos_guardados";


export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  
const [busquedaActiva, setBusquedaActiva] = useState(false);
  const [textoBusqueda, setTextoBusqueda] = useState("");
   // ============================================
  // Filtrado de productos en NavBar
  // ============================================
  const activarBusqueda = (texto) => {
    setTextoBusqueda(texto);
    setBusquedaActiva(true);
  };

  const desactivarBusqueda = () => {
    setTextoBusqueda("");
    setBusquedaActiva(false);
  };

  // ============================================
  // Persistencia
  // ============================================
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // ============================================
  // Agregar terreno (sin duplicados)
  // ============================================
  const addTerreno = (terreno) => {
    const exists = items.some((t) => t.id === terreno.idTerreno);
    if (exists) return;

    setItems((prev) => [
      ...prev,
      {
        id: terreno.idTerreno,
        ubicacion: terreno.Ubicacion,
        precio: terreno.Precio,
        superficie: terreno.MedidaSuperficie,
        image: terreno.UrlImagen,
        fechaAgregado: new Date().toISOString(),
      },
    ]);
  };

  // ============================================
  // Eliminar terreno
  // ============================================
  const removeTerreno = (id) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  };

  // ============================================
  // Limpiar carrito
  // ============================================
  const clearCart = () => {
    setItems([]);
  };

  // ============================================
  // Helpers de negocio
  // ============================================
  const isEmpty = items.length === 0;

  const formatearPrecio = (valor) =>
    `$${valor.toLocaleString("es-AR")}`;

  const calcularResumen = () => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.precio,
      0
    );
    const impuestos = subtotal * 0.21;

    return {
      subtotal,
      impuestos,
      total: subtotal + impuestos,
    };
  };

  return (
    <CarritoContext.Provider
      value={{
        items,
        addTerreno,
        removeTerreno,
        clearCart,
        isEmpty,
        formatearPrecio,
        calcularResumen,
        // búsqueda
        busquedaActiva,
        textoBusqueda,
        activarBusqueda,
        desactivarBusqueda,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export function useCarritoContext() {
  const context = useContext(CarritoContext);

  if (!context) {
    throw new Error(
      "useCarritoContext debe usarse dentro de CarritoProvider"
    );
  }

  return context;
}
