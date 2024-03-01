import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
