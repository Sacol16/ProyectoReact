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

  useEffect(() => {
    const fetchFavorites = async () => {
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
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (favorites.length === 0) return <p>No products in your shopping bag</p>;

  return (
    <div className="shopping-bag">
      <NavBar />
      <h1>Shopping Bag</h1>
      <div className="products">
        {favorites.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Summary products={favorites} />
    </div>
  );
};

export default ShoppingBag;
