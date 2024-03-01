import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  return (
    <div className="product-list">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Todas las categorías</option>
        <option value="bebida-fria">Bebida fría</option>
        <option value="bebida-caliente">Bebida caliente</option>
        <option value="postres-cafe">Postres de café</option>
        <option value="te">Té</option>
        <option value="sandwich">Sándwiches</option>
      </select>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
