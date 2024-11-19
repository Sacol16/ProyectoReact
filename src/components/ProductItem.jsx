import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Asegúrate de que la ruta sea correcta

const ProductItem = ({ product, onProductRemove }) => {
  const priceValue = parseFloat(product.price.replace('$', '')); // Convertir el precio a número

  const handleRemove = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error('Usuario no autenticado');
        return;
      }

      const productRef = doc(db, `Users/${user.uid}/Favorites`, product.id);

      await deleteDoc(productRef);
      console.log('Producto eliminado correctamente');
      onProductRemove(); // Notificar al componente padre para recargar
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

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
          <a
            href="#remove"
            onClick={(e) => {
              e.preventDefault(); // Evitar comportamiento predeterminado del enlace
              handleRemove(); // Llamar a la función de eliminación
            }}
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
