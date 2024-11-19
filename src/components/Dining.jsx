import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from './firebase';  // Asegúrate de tener la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import '../styles/components/Menus.css';
import Footer from './Footer';

function Dining() {
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
      title: "Aimee Dining Arm Chair",
      price: "$98",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30AIMCHBKDF_H220509.jpg?preset=Product1920x1440",
      altText: "Aimee Dining Arm Chair",
      category: "dining-chair",
    },
    {
      title: "Mila Dining Chair",
      price: "$95",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30MLACSSNSC_H220112.jpg?preset=Product1920x1440",
      altText: "Mila Dining Chair",
      category: "dining-chair",
    },
    {
      title: "Henry Dining Side Chair",
      price: "$99",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30HRYBKSDSC_O220328.jpg?preset=Product1920x1440",
      altText: "Henry Dining Side Chair",
      category: "dining-chair",
    },
    {
      title: "Bench in Downy Snow",
      price: "$120",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30JAGDSNATBH_BH220816.jpg?preset=Product1920x1440",
      altText: "Bench in Downy Snow",
      category: "dining-bench",
    },
    {
      title: "Gates Banquette",
      price: "$115",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/X8GF110581_A230919.jpg?preset=Product1920x1440",
      altText: "Gates Banquette",
      category: "dining-bench",
    },
    {
      title: "Rhen Dining Bench",
      price: "$104",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/XRJFBEA_D200204.jpg?preset=Product1920x1440",
      altText: "Rhen Dining Bench",
      category: "dining-bench",
    },
    // Productos Sunroom
    {
      title: "Jagger Stool in Black",
      price: "$204",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30JAGDWSNCTS_H211122.jpg?preset=Product1920x1440",
      altText: "Jagger Stool in Black",
      category: "bar-counter-stool",
    },
    {
      title: "Noa Stool in Cinder",
      price: "$230",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30NOACDBSNS_J220629.jpg?preset=Product1920x1440",
      altText: "Noa Stool in Cinder",
      category: "bar-counter-stool",
    },
    {
      title: "Bottoni Stool",
      price: "$205",
      imgSrc: "https://cdn.arhaus.com/product/StandardV2/30BOTGTCSBLK_BG220509.jpg?preset=Product1920x1440",
      altText: "Bottoni Stool",
      category: "bar-counter-stool",
    },
     // Dining Tables
  {
    title: "Perth Oval Dining Table",
    price: "$350",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30PRTH96OKTR_H240506.jpg?preset=Product1920x1440",
    altText: "Perth Oval Dining Table",
    category: "dining-table",
  },
  {
    title: "Kensington Stone",
    price: "$306",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30KEN60RMCKT_M230725.jpg?preset=Product1920x1440",
    altText: "Kensington Stone",
    category: "dining-table",
  },
  {
    title: "Asolo Dining Table",
    price: "$367",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30ASO70BLDKT_C201119.jpg?preset=Product1920x1440",
    altText: "Asolo Dining Table",
    category: "dining-table",
  },

  // Buffets & Sideboards
  {
    title: "Hattie Sideboard",
    price: "$322",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/40HAT70BEMD_B211230.jpg?preset=Product1920x1440",
    altText: "Hattie Sideboard",
    category: "buffet-sideboard",
  },
  {
    title: "Kensington Buffet",
    price: "$399",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/40KEN75WBEMB_CC231128.jpg?preset=Product1920x1440",
    altText: "Kensington Buffet",
    category: "buffet-sideboard",
  },
  {
    title: "Polanco Sideboard",
    price: "$387",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/40POL78SDBR_S221121.jpg?preset=Product1920x1440",
    altText: "Polanco Sideboard",
    category: "buffet-sideboard",
  },
  {
    title: "Enzo Bar Table",
    price: "$233",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30ENZO28MBKT.jpg?preset=Product1920x1440",
    altText: "Enzo Bar Table",
    category: "bar-counter-table",
  },
  {
    title: "Jacob Counter Table",
    price: "$267",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWC_BZ220403.jpg?preset=Product1920x1440",
    altText: "Jacob Counter Table",
    category: "bar-counter-table",
  },
  {
    title: "Jacob Bistro Table",
    price: "$300",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWB_BV220403.jpg?preset=Product1920x1440",
    altText: "Jacob Bistro Table",
    category: "bar-counter-table",
  },
   // Dinnerware
  {
    title: "Skye Dinner Plates",
    price: "$50",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73SKYEDPKT_E210507.jpg?preset=Product1920x1440",
    altText: "Skye Dinner Plates",
    category: "dinnerware",
  },
  {
    title: "Skye Salad Plates",
    price: "$48",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73SKYESPKT_V210507.jpg?preset=Product1920x1440",
    altText: "Skye Salad Plates",
    category: "dinnerware",
  },
  {
    title: "Bela Dinnerware",
    price: "$76",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73BELAKT16_T200128.jpg?preset=Product1920x1440",
    altText: "Bela Dinnerware",
    category: "dinnerware",
  },
  // Flatware
  {
    title: "Stag Appetizer Forks",
    price: "$39",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73STAGFORK_O220811.jpg?preset=Product1920x1440",
    altText: "Stag Appetizer Forks",
    category: "flatware",
  },
  {
    title: "Arber Five Piece Place",
    price: "$49",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73RIDGECP_C221103.jpg?preset=Product1920x1440",
    altText: "Arber Five Piece Place",
    category: "flatware",
  },
  {
    title: "Esma Five Piece Place",
    price: "$45",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73ESMACHOC_K240517.jpg?preset=Product1920x1440",
    altText: "Esma Five Piece Place",
    category: "flatware",
  },
  // Glassware
  {
    title: "Organic Highball Glasses",
    price: "$90",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73ORGNCHBKT_F210504.jpg?preset=Product1920x1440",
    altText: "Organic Highball Glasses",
    category: "glassware",
  },
  {
    title: "Bela Mugs",
    price: "$69",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73BELAMUGKT.jpg?preset=Product1920x1440",
    altText: "Bela Mugs",
    category: "glassware",
  },
  {
    title: "Seema Cobalt Pitcher",
    price: "$87",
    imgSrc: "https://cdn.arhaus.com/product/StandardV2/73SMAPITCO_BC230126.jpg?preset=Product1920x1440",
    altText: "Seema Cobalt Pitcher",
    category: "glassware",
  },
    // Añadir más productos aquí si es necesario
  ];

  return (
    <div className="Living">
      <NavBar />
      <h1 className="main-title reveal">DINING</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">SEATING</h2>

          <div className="subgenre" id="dining-chair">
            <h3 className="subgenre-title">DINING CHAIRS</h3>
            <div className="images">
              {products.filter(product => product.category === "dining-chair").map((product, index) => (
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
          <div className="subgenre" id="dining-bench">
            <h3 className="subgenre-title">DINING BENCHES</h3>
            <div className="images">
              {products.filter(product => product.category === "dining-bench").map((product, index) => (
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
          <div className="subgenre" id="bar-counter-stool">
            <h3 className="subgenre-title">BAR & COUNTER STOOLS</h3>
            <div className="images">
              {products.filter(product => product.category === "bar-counter-stool").map((product, index) => (
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

        <div className="section reveal">
          <h2 className="subtitle">TABLES & STORAGE</h2>

          <div className="subgenre" id="dining-table">
            <h3 className="subgenre-title">DINING TABLES</h3>
            <div className="images">
              {products.filter(product => product.category === "dining-table").map((product, index) => (
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
          <div className="subgenre" id="buffet-sideboard">
            <h3 className="subgenre-title">BUFFETS & SIDEBOARDS</h3>
            <div className="images">
              {products.filter(product => product.category === "buffet-sideboard").map((product, index) => (
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
          <div className="subgenre" id="bar-counter-table">
            <h3 className="subgenre-title">BAR AND COUNTER TABLES</h3>
            <div className="images">
              {products.filter(product => product.category === "bar-counter-table").map((product, index) => (
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

        <div className="section reveal">
          <h2 className="subtitle">TABLETOP</h2>

          <div className="subgenre" id="dinnerware">
            <h3 className="subgenre-title">DINNERWARE</h3>
            <div className="images">
              {products.filter(product => product.category === "dinnerware").map((product, index) => (
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
          <div className="subgenre" id="flatware">
            <h3 className="subgenre-title">FLATWARE</h3>
            <div className="images">
              {products.filter(product => product.category === "flatware").map((product, index) => (
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
          <div className="subgenre" id="glassware">
            <h3 className="subgenre-title">GLASSWARE</h3>
            <div className="images">
              {products.filter(product => product.category === "glassware").map((product, index) => (
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

export default Dining;
