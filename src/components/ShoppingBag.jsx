import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase'; // Asegúrate de que la ruta sea correcta
import ProductItem from './ProductItem';
import Summary from './Summary';
import NavBar from './NavBar';
import '../styles/components/Shopping.css';

const ShoppingBag = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los favoritos
  const fetchFavorites = async () => {
    setLoading(true); // Mostrar indicador de carga
    try {
      const user = auth.currentUser;
      if (user) {
        const favoritesCollectionRef = collection(
          db,
          "Users",
          user.uid,
          "Favorites"
        );
        const querySnapshot = await getDocs(favoritesCollectionRef);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFavorites(products);
      } else {
        console.error("User not logged in");
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  };

  // Cargar favoritos al montar el componente
  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (favorites.length === 0)
  return (
    <div className="shopping-bag">
      <NavBar />
      <p>No products in your shopping bag</p>
    </div>
  );

  return (
    <div className="shopping-bag">
      <NavBar />
      <h1>Shopping Bag</h1>
      <div className="products">
        {favorites.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onProductRemove={fetchFavorites} // Pasar el callback para recargar los datos
          />
        ))}
      </div>
      <Summary products={favorites} />
    </div>
  );
};

export default ShoppingBag;
