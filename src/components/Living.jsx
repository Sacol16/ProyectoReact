import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from './firebase';  // Asegúrate de tener la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import '../styles/components/Menus.css';
import Footer from './Footer';

function Living() {
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
    {
      title: "Malta Leather Sofa",
      price: "399",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/20SPDGRSBC_BD220921.jpg?preset=Product1920x1440",
      altText: "Malta Leather Sofa",
      category: "sofa",
    },
    {
      title: "Bianca Sofa",
      price: "349",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/10VBISLXLC_D231018.jpg?preset=Product1920x1440",
      altText: "Bianca Sofa",
      category: "sofa",
    },
    {
      title: "Kipton Wide Arm Leather Sofa",
      price: "299",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/20893SFSTP_N240925.jpg?preset=Product1920x1440",
      altText: "Kipton Wide Arm Leather Sofa",
      category: "sofa",
    },
    {
      title: "Rudy Leather Swivel Chair",
      price: "199",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/101129SWBLP_A210412.jpg?preset=Product1920x1440",
      altText: "Rudy Leather Swivel Chair",
      category: "chair",
    },
    {
      title: "Kipton Motion Recliner",
      price: "249",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/10633R2PL_D240126.jpg?preset=Product1920x1440",
      altText: "Kipton Motion Recliner",
      category: "chair",
    },
    {
      title: "Deacon Leather Swivel Recliner",
      price: "279",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/20NONSIBGPH_I211109.jpg?preset=Product1920x1440",
      altText: "Deacon Leather Swivel Recliner",
      category: "chair",
    },
    // Productos Sunroom
    {
      title: "Zoya Sunroom Coffee Table",
      price: "259",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/70ZOY3SN5CF_C231228.jpg?preset=Product1920x1440",
      altText: "Zoya Sunroom Coffee Table",
      category: "sunroom",
    },
    {
      title: "Valencia Sunroom Lounge Chair",
      price: "179",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/70VALE3ELCKT_BG240110.jpg?preset=Product1920x1440",
      altText: "Valencia Sunroom Lounge Chair",
      category: "sunroom",
    },
    {
      title: "Nantucket Sunroom Ottoman",
      price: "189",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/70NANTESOTKT_R231228.jpg?preset=Product1920x1440",
      altText: "Nantucket Sunroom Ottoman",
      category: "sunroom",
    },
    {
      title: "Finnley Coffee Table",
      price: "499",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35FNHB64CFK_C230821.jpg?preset=Product1920x1440",
      altText: "Finnley Coffee Table",
      category: "coffee-table",
    },
    {
      title: "Ubud Coffee Table",
      price: "449",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/34UBUD67COF_U220426.jpg?preset=Product1920x1440",
      altText: "Ubud Coffee Table",
      category: "coffee-table",
    },
    {
      title: "Bertogne Coffee Table",
      price: "399",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35BEREB60COF_L210224.jpg?preset=Product1920x1440",
      altText: "Bertogne Coffee Table",
      category: "coffee-table",
    },
    {
      title: "Vesuvius Console Table",
      price: "279",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35VESVSCNDEK_BH230508.jpg?preset=Product1920x1440",
      altText: "Vesuvius Console Table",
      category: "console-table",
    },
    {
      title: "Malone Console Table",
      price: "229",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35MALCMSMCN_A230110.jpg?preset=Product1920x1440",
      altText: "Malone Console Table",
      category: "console-table",
    },
    {
      title: "Telluride Console Table",
      price: "249",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35TELLCON_I230615.jpg?preset=Product1920x1440",
      altText: "Telluride Console Table",
      category: "console-table",
    },
    {
      title: "Bertogne End Table",
      price: "89",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35BERHNY24EN_M240614.jpg?preset=Product1920x1440",
      altText: "Bertogne End Table",
      category: "end-table",
    },
    {
      title: "Sullivan Waterfall End Table",
      price: "119",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35SULSWFEND_BJ211206.jpg?preset=Product1920x1440",
      altText: "Sullivan Waterfall End Table",
      category: "end-table",
    },
    {
      title: "Felton End Table",
      price: "99",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/35FELT22WEND_BL230927.jpg?preset=Product1920x1440",
      altText: "Felton End Table",
      category: "end-table",
    },
    // Añadir más productos aquí si es necesario
  ];

  return (
    <div className="Living">
      <NavBar />
      <h1 className="main-title reveal">LIVING</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">SEATING</h2>

          <div className="subgenre" id="sofas">
            <h3 className="subgenre-title">SOFAS</h3>
            <div className="images">
              {products.filter(product => product.category === "sofa").map((product, index) => (
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
          <div className="subgenre" id="chairs">
            <h3 className="subgenre-title">CHAIRS</h3>
            <div className="images">
              {products.filter(product => product.category === "chair").map((product, index) => (
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
          <div className="subgenre" id="sunroom">
            <h3 className="subgenre-title">SUNROOM</h3>
            <div className="images">
              {products.filter(product => product.category === "sunroom").map((product, index) => (
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
          <h2 className="subtitle">TABLES & STORAGE</h2>

          <div className="subgenre" id="coffee-table">
            <h3 className="subgenre-title">COFFEE TABLES</h3>
            <div className="images">
              {products.filter(product => product.category === "coffee-table").map((product, index) => (
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
          <div className="subgenre" id="console-table">
            <h3 className="subgenre-title">CONSOLE TABLE</h3>
            <div className="images">
              {products.filter(product => product.category === "console-table").map((product, index) => (
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
          <div className="subgenre" id="end-table">
            <h3 className="subgenre-title">END TABLES</h3>
            <div className="images">
              {products.filter(product => product.category === "end-table").map((product, index) => (
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

export default Living;
