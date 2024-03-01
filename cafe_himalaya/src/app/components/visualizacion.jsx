"use client";
import React, { useState } from "react";
import productos from "../productos.json";
import "../styles/cafeHimalaya.css";

export default function CafeHimalaya() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      // Si ya está en el carrito, incrementar la cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si no está en el carrito, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    // Actualizar el total
    setTotal(total + producto.precio);
  };

  const eliminarDelCarrito = (producto) => {
    // Filtrar el producto del carrito
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);

    // Actualizar el total
    setTotal(total - producto.precio * producto.cantidad);

    // Actualizar el estado del carrito
    setCarrito(nuevoCarrito);
  };

  const actualizarCantidad = (producto, nuevaCantidad) => {
    // Actualizar la cantidad del producto en el carrito
    const nuevoCarrito = carrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: nuevaCantidad } : item
    );

    // Actualizar el total
    setTotal(
      total +
        producto.precio * (nuevaCantidad - (producto.cantidad || 0))
    );

    // Actualizar el estado del carrito
    setCarrito(nuevoCarrito);
  };

  return (
    <div className="container">
      {/* Aquí va el header y las cartas de productos */}
      <div className="izquierda">
        <h2>Detalles de Compra</h2>
        {/* Aquí va la información del carrito */}
        <div className="carrito">
          <h3>Carrito de Compra</h3>
          {/* Aquí mapeas los productos en el carrito */}
          {carrito.map((producto) => (
            <div key={producto.id} className="item-carrito">
              <p>{producto.nombre}</p>
              <div>
                <button onClick={() => actualizarCantidad(producto, producto.cantidad - 1)}>-</button>
                <span>{producto.cantidad}</span>
                <button onClick={() => actualizarCantidad(producto, producto.cantidad + 1)}>+</button>
              </div>
              <p>${(producto.precio * producto.cantidad).toFixed(2)}</p>
              <button onClick={() => eliminarDelCarrito(producto)}>Eliminar</button>
            </div>
          ))}
          <div className="total">
            <h4>Total a Pagar: ${total.toFixed(2)}</h4>
          </div>
        </div>
      </div>
      
      <div className="derecha">
        <h2>Productos</h2>
        {/* Aquí mapeas los productos disponibles */}
        <div className="productos">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio.toFixed(2)}</p>
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
