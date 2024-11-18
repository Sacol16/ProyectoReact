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
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/662036H353_EL220418.jpg?preset=Product1920x1440"
                    alt="Luxury Sofa"
                  />
                  <p className="image-text">Apollo Round Chandelier</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/66594H216_A210507.jpg?preset=Product1920x1440"
                    alt="Modern Sofa"
                  />
                  <p className="image-text">Paloma Chandelier</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/652082H0401.jpg?preset=Product1920x1440"
                    alt="Classic Sofa"
                  />
                  <p className="image-text">Laila Rectangular Chandelier</p>
                </div>
              </div>
            </div>
            <div className="subgenre" id="pendant">
              <h3 className="subgenre-title">PENDANT</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/661081H242KT_BM210512.jpg?preset=Product1920x1440"
                    alt="In Stock Living 1"
                  />
                  <p className="image-text">Recycled Metal Dome Pendant</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/652036L046.jpg?preset=Product1920x1440"
                    alt="In Stock Living 2"
                  />
                  <p className="image-text">Lanister Mesh Pendant</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/660101H184KT_BR210301.jpg?preset=Product1920x1440"
                    alt="In Stock Living 3"
                  />
                  <p className="image-text">Latigo Pendant</p>
                </div>
              </div>
            </div>
            <div className="subgenre" id="table-lamps">
              <h3 className="subgenre-title">TABLE LAMPS</h3> 
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/66627L567KT_W220623.jpg?preset=Product1920x1440"
                    alt="Sectionals 1"
                  />
                  <p className="image-text">Santiago Table Lamp</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/760LOLTBKT.jpg?preset=Product1920x1440"
                    alt="Sectionals 2"
                  />
                  <p className="image-text">Lola Teardrop Table Lamp</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/663928L103_BL230821.jpg?preset=Product1920x1440"
                    alt="Sectionals 3"
                  />
                  <p className="image-text">Ira Striped Table Lamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default Lighting