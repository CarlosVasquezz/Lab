import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from './products.json';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Café Himalaya</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateQuantity} />
    </div>
  );

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(product) {
    setCart(cart.filter(item => item.id !== product.id));
  }

  function updateQuantity(product, quantity) {
    setCart(cart.map(item => item.id === product.id ? { ...item, quantity } : item));
  }
}

export default App;
