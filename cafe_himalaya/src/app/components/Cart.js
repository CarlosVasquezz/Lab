import React from 'react';

function Cart({ cart, onRemoveFromCart, onUpdateQuantity }) {
  return (
    <div className="cart">
      <h2>Carrito de compra</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><input type="number" value={item.quantity} onChange={(e) => onUpdateQuantity(item, e.target.value)} /></td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td><button onClick={() => onRemoveFromCart(item)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
    </div>
  );
}

export default Cart;
