import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components/Menus.css';
import Footer from './Footer';

function Lighting(){
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
      { threshold: 0.1 } // Activa el efecto cuando el 20% del elemento es visible
    );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);

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
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/662036H353_EL220418.jpg?preset=Product1920x1440"
                  alt="Apollo Round Chandelier"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Apollo Round Chandelier</p>
                    <p className="product-price">$879</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/652082H0401.jpg?preset=Product1920x1440"
                  alt="Laila Rectangular Chandelier"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Laila Rectangular Chandelier</p>
                    <p className="product-price">$679</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/66594H216_A210507.jpg?preset=Product1920x1440"
                  alt="Paloma Chandelier"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Paloma Chandelier</p>
                    <p className="product-price">$799</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="pendant">
            <h3 className="subgenre-title">PENDANT</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/660101H184KT_BR210301.jpg?preset=Product1920x1440"
                  alt="Latigo Pendant"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Latigo Pendant</p>
                    <p className="product-price">$599</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/663507H291_Q211026.jpg?preset=Product1920x1440"
                  alt="Watley Cone Pendant"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Watley Cone Pendant</p>
                    <p className="product-price">$620</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/6610204H99KT_CZ240718.jpg?preset=Product1920x1440"
                  alt="Casen Pendant"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Casen Pendant</p>
                    <p className="product-price">$579</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="table-lamps">
            <h3 className="subgenre-title">TABLE LAMPS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/66627L567KT_W220623.jpg?preset=Product1920x1440"
                  alt="Santiago Table Lamp"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Santiago Table Lamp</p>
                    <p className="product-price">$989</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/663289L111KT_K200716.jpg?preset=Product1920x1440"
                  alt="Thornton Table Lamp"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Thornton Table Lamp</p>
                    <p className="product-price">$969</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/793209L113_BE230405.jpg?preset=Product1920x1440"
                  alt="Anita Table Lamp"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Anita Table Lamp</p>
                    <p className="product-price">$879</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
      <Footer />
    </div>
  );
}

export default Lighting