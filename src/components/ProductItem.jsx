import React from 'react';

const ProductItem = ({ product }) => {
  const priceValue = parseFloat(product.price.replace('$', '')); // Convertir el precio a número

  return (
    <div className="product-item">
      <img src={product.imgSrc} alt={product.altText} className="product-image1" />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p className="price">
          <span>${priceValue.toFixed(2)}</span>
        </p>
        <div className="product-actions">
          <p>Qty: {product.quantity || 1}</p>
          <a href="#save-for-later">Save for later</a> | <a href="#remove">Remove</a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
