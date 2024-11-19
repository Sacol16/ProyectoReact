import React from 'react';

const Summary = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = products.reduce(
    (acc, product) => acc + (product.regularPrice - product.price) * product.quantity,
    0
  );
  const total = subtotal - discount;

  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Order Discount: -${discount.toFixed(2)}</p>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="checkout-button">CHECKOUT</button>
    </div>
  );
};

export default Summary;
