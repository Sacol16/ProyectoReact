import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from './firebase';  // Asegúrate de tener la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import '../styles/components/Menus.css';
import Footer from './Footer';

function Bedroom() {
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
    // Beds
  {
    title: "Finnley Bed",
    price: "680",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45FINHEXMBQN_BA230522.jpg?preset=Product1920x1440",
    altText: "Finnley Extended Headboard Bed",
    category: "beds",
  },
  {
    title: "Wyller Bed",
    price: "720",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/10VBISLXLC_D231018.jpg?preset=Product1920x1440",
    altText: "Wyller Bed",
    category: "beds",
  },
  {
    title: "Lennon Bed",
    price: "699",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45LENNSRLKKT_A230907.jpg?preset=Product1920x1440",
    altText: "Lennon Bed",
    category: "beds",
  },
  // Dressers and Chests
  {
    title: "Finnley Six Drawer Dresser",
    price: "800",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45FINEB6DRKT_C240315.jpg?preset=Product1920x1440",
    altText: "Finnley Six Drawer Dresser",
    category: "dressers-chests",
  },
  {
    title: "Pearson Eleven Drawer Dresser",
    price: "789",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45PEARF11DR2_P210224.jpg?preset=Product1920x1440",
    altText: "Pearson Eleven Drawer Dresser",
    category: "dressers-chests",
  },
  {
    title: "Brock Seven Drawer Dresser",
    price: "769",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45BROCKT7DR_S201202.jpg?preset=Product1920x1440",
    altText: "Brock Seven Drawer Dresser",
    category: "dressers-chests",
  },
  {
    title: "Darwyn Nightstand",
    price: "979",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45DARE26CNT_K240515.jpg?preset=Product1920x1440",
    altText: "Darwyn Nightstand",
    category: "nightstands",
  },
  {
    title: "Astor Nightstand",
    price: "879",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45AST32HENT_C240621.jpg?preset=Product1920x1440",
    altText: "Astor Nightstand",
    category: "nightstands",
  },
  {
    title: "St. Martin Open Nightstand",
    price: "899",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/45STMARSONT_BQ220817.jpg?preset=Product1920x1440",
    altText: "St. Martin Open Nightstand",
    category: "nightstands",
  },
  // Duvet Covers
  {
    title: "Boucle Duvet Set",
    price: "356",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61BCLDNQDSKT_D231208.jpg?preset=Product1920x1440",
    altText: "Boucle Duvet Set",
    category: "duvet-covers",
  },
  {
    title: "Laviss Stripe Duvet",
    price: "301",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61LAVMINKDQ_B240820.jpg?preset=Product1920x1440",
    altText: "Laviss Stripe Duvet",
    category: "duvet-covers",
  },
  {
    title: "Tegan Duvet Set",
    price: "315",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61TEGNTQDSKT_D231208.jpg?preset=Product1920x1440",
    altText: "Tegan Duvet Set",
    category: "duvet-covers",
  },
    // Quilts
  {
    title: "Mira Voile Quilt",
    price: "139",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61MIRAWHTQQ_B231208.jpg?preset=Product1920x1440",
    altText: "Mira Voile Quilt",
    category: "quilts",
  },
  {
    title: "Selva Bed Blanket",
    price: "159",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61SELVASKYBQ_G231127.jpg?preset=Product1920x1440",
    altText: "Selva Bed Blanket",
    category: "quilts",
  },
  {
    title: "Mihali Matelasse Quilt",
    price: "100",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61MIHALWHTQK_B231208.jpg?preset=Product1920x1440",
    altText: "Mihali Matelasse Quilt",
    category: "quilts",
  },
  // Pillow Shams
  {
    title: "Amal Linen Sham",
    price: "119",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61AMALINDSS_C231127.jpg?preset=Product1920x1440",
    altText: "Amal Linen Sham",
    category: "pillow-shams",
  },
  {
    title: "Boucle Sham",
    price: "120",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61BOUCLEDNSS_B231213.jpg?preset=Product1920x1440",
    altText: "Boucle Sham",
    category: "pillow-shams",
  },
  {
    title: "Cosette Sham",
    price: "99",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/61COSNATSS_BK240522.jpg?preset=Product1920x1440",
    altText: "Cosette Sham",
    category: "pillow-shams",
  },
    // Añadir más productos aquí si es necesario
  ];

  return (
    <div className="Living">
      <NavBar />
      <h1 className="main-title reveal">BEDROOM</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">BEDROOM FURNITURE</h2>

          <div className="subgenre" id="beds">
            <h3 className="subgenre-title">BEDS</h3>
            <div className="images">
              {products.filter(product => product.category === "beds").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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
          <div className="subgenre" id="dressers-chests">
            <h3 className="subgenre-title">DRESSERS AND CHESTS</h3>
            <div className="images">
              {products.filter(product => product.category === "dressers-chests").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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
          <div className="subgenre" id="nightstands">
            <h3 className="subgenre-title">NIGHTSTANDS</h3>
            <div className="images">
              {products.filter(product => product.category === "nightstands").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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

        <div className="section reveal">
          <h2 className="subtitle">BEDDING</h2>

          <div className="subgenre" id="duvet-covers">
            <h3 className="subgenre-title">DUVET COVERS</h3>
            <div className="images">
              {products.filter(product => product.category === "duvet-covers").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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
          <div className="subgenre" id="quilts">
            <h3 className="subgenre-title">QUILTS</h3>
            <div className="images">
              {products.filter(product => product.category === "quilts").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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
          <div className="subgenre" id="pillow-shams">
            <h3 className="subgenre-title">PILLOW SHAMS</h3>
            <div className="images">
              {products.filter(product => product.category === "pillow-shams").map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    className="product-image"
                    src={product.imgSrc}
                    alt={product.altText}
                  />
                  <div className="product-info">
                    <div>
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
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

export default Bedroom;
