"use client";
import React, { useState } from "react";
import "../styles/visualizacion.css";

export default function Visualizacion() {
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [total, setTotal] = useState(0);
  const [categoriasIngresos, setCategoriasIngresos] = useState([
    "Salario",
    "Bonificaciones",
    "Ventas",
    "Regalías",
    "Inversiones",
    "Otros ingresos",
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const movimiento = {
      movimiento: event.target.tipo.value,
      categoria: event.target.categoria.value,
      monto: parseFloat(event.target.monto.value),
      fecha: event.target.fecha.value,
      descripcion: event.target.descripcion.value,
    };

    if (movimiento.movimiento === "gasto") {
      setGastos([...gastos, movimiento]);
      setTotal(total - movimiento.monto);
    } else {
      setIngresos([...ingresos, movimiento]);
      setTotal(total + movimiento.monto);
    }

    // Limpiar formulario
    event.target.reset();
  };

  const handleMovimientoChange = (event) => {
    // Actualizar categorías relacionadas al movimiento seleccionado
    if (event.target.value === "ingreso") {
      setCategoriasIngresos([
        "Salario",
        "Bonificaciones",
        "Ventas",
        "Regalías",
        "Inversiones",
        "Otros ingresos",
      ]);
    } else {
      // Otras categorías para gastos
      setCategoriasIngresos(["Alimentación", "Transporte", "Entretenimiento", "Otros"]);
    }
  };

  return (
    <div className="container">
      <div className="izquierda">
        <div className="izquierda-superior">
          <h2>Gastos</h2>
          <div className="container-table">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>GASTOS</th>
                  <th>Categoría</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {gastos.map((movimiento, index) => (
                  <tr key={index}>
                    <td>Gasto</td>
                    <td>{movimiento.categoria}</td>
                    <td>${movimiento.monto.toFixed(2)}</td>
                    <td>{movimiento.fecha}</td>
                    <td>{movimiento.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="izquierda-inferior">
          <h2>Ingresos</h2>
          <div className="container-table">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>INGRESOS</th>
                  <th>Categoría</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {ingresos.map((movimiento, index) => (
                  <tr key={index}>
                    <td>Ingreso</td>
                    <td>{movimiento.categoria}</td>
                    <td>${movimiento.monto.toFixed(2)}</td>
                    <td>{movimiento.fecha}</td>
                    <td>{movimiento.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="derecha">
        <h2>Total ${total.toFixed(2)}</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="tipo">Movimiento:</label>
          <select id="tipo" name="tipo" onChange={handleMovimientoChange} required>
            <option value="">Seleccione...</option>
            <option value="gasto">Gasto</option>
            <option value="ingreso">Ingreso</option>
          </select>

          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria" required>
            <option value="">Seleccione...</option>
            {categoriasIngresos.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>

          <label htmlFor="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            name="monto"
            min="0.01"
            step="0.01"
            required
          />

          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
