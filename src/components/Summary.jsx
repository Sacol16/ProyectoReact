import React from 'react';

const Summary = ({ products }) => {
  const subtotal = products.reduce((acc, product) => {
    const price = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0; // Convierte el precio a número
    return acc + price; // Asume quantity = 1
  }, 0);

  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <h2>Total: ${subtotal.toFixed(2)}</h2>
      <button className="checkout-button">CHECKOUT</button>
    </div>
  );
};

export default Summary;
