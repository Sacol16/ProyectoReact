import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from './firebase';  // Asegúrate de tener la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import '../styles/components/Menus.css';
import Footer from './Footer';

function Lighting() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 } // Activa el efecto cuando el 10% del elemento es visible
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  const handleAddToFavorites = async (product) => {
    try {
      const user = auth.currentUser; // Obtén el usuario autenticado
  
      if (!user) {
        console.error("No hay usuario autenticado");
        return;
      }
  
      const userId = user.uid; // Obtén el UID del usuario
  
      // Referencia a la subcolección "Favorites" dentro del documento del usuario
      const favoritesCollectionRef = collection(db, "Users", userId, "Favorites");
  
      // Agrega el producto como un nuevo documento en la subcolección
      await addDoc(favoritesCollectionRef, product);
  
      console.log("Producto añadido a favoritos en la subcolección");
    } catch (e) {
      console.error("Error al agregar a favoritos: ", e);
    }
  };

  // Un solo array para todos los productos
  const products = [
    // Chandeliers
  {
    title: "Apollo Round Chandelier",
    price: "$879",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/662036H353_EL220418.jpg?preset=Product1920x1440",
    altText: "Apollo Round Chandelier",
    category: "chandeliers",
  },
  {
    title: "Laila Rectangular Chandelier",
    price: "$679",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/652082H0401.jpg?preset=Product1920x1440",
    altText: "Laila Rectangular Chandelier",
    category: "chandeliers",
  },
  {
    title: "Paloma Chandelier",
    price: "$799",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/66594H216_A210507.jpg?preset=Product1920x1440",
    altText: "Paloma Chandelier",
    category: "chandeliers",
  },
  // Pendant Lights
  {
    title: "Latigo Pendant",
    price: "$599",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/660101H184KT_BR210301.jpg?preset=Product1920x1440",
    altText: "Latigo Pendant",
    category: "pendant",
  },
  {
    title: "Watley Cone Pendant",
    price: "$620",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/663507H291_Q211026.jpg?preset=Product1920x1440",
    altText: "Watley Cone Pendant",
    category: "pendant",
  },
  {
    title: "Casen Pendant",
    price: "$579",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/6610204H99KT_CZ240718.jpg?preset=Product1920x1440",
    altText: "Casen Pendant",
    category: "pendant",
  },
  // Table Lamps
  {
    title: "Santiago Table Lamp",
    price: "$989",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/66627L567KT_W220623.jpg?preset=Product1920x1440",
    altText: "Santiago Table Lamp",
    category: "table-lamps",
  },
  {
    title: "Thornton Table Lamp",
    price: "$969",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/663289L111KT_K200716.jpg?preset=Product1920x1440",
    altText: "Thornton Table Lamp",
    category: "table-lamps",
  },
  {
    title: "Anita Table Lamp",
    price: "$879",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/793209L113_BE230405.jpg?preset=Product1920x1440",
    altText: "Anita Table Lamp",
    category: "table-lamps",
  },
    // Añadir más productos aquí si es necesario
  ];

  return (
    <div className="Living">
      <NavBar />
      <h1 className="main-title reveal">LIGHTING</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">LIGHTING</h2>

          <div className="subgenre" id="chandeliers">
            <h3 className="subgenre-title">CHANDELIERS</h3>
            <div className="images">
              {products.filter(product => product.category === "chandeliers").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToFavorites(product)}
                    >
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Chairs */}
          <div className="subgenre" id="pendant">
            <h3 className="subgenre-title">PENDANT</h3>
            <div className="images">
              {products.filter(product => product.category === "pendant").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToFavorites(product)}
                    >
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Sunroom */}
          <div className="subgenre" id="table-lamps">
            <h3 className="subgenre-title">TABLE LAMPS</h3>
            <div className="images">
              {products.filter(product => product.category === "table-lamps").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToFavorites(product)}
                    >
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
}

export default Lighting;
