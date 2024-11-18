import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components/Living.css';

function Bedroom(){
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              } else {
                entry.target.classList.remove('active'); // Elimina la clase cuando sale del viewport
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
        <h1 className="main-title reveal">BEDROOM</h1>
  
        <div className="content">
          {/* Subtítulo y Sección Seating */}
          <div className="section reveal">
            <h2 className="subtitle">BEDROOM FURNITURE</h2>
            <div className="subgenre">
              <h3 className="subgenre-title">BEDS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45FINHEXMBQN_BA230522.jpg?preset=Product1920x1440"
                    alt="Luxury Sofa"
                  />
                  <p className="image-text">Finnley Extended Headboard Bed</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45FINGUPHKG_K230606.jpg?preset=Product1920x1440"
                    alt="Modern Sofa"
                  />
                  <p className="image-text">Finnley Bed</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45BODHIOTQCP_A230809.jpg?preset=Product1920x1440"
                    alt="Classic Sofa"
                  />
                  <p className="image-text">Bodhi Canopy Storage Bed</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">DRESSERS AND CHESTS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45FINEB6DRKT_C240315.jpg?preset=Product1920x1440"
                    alt="In Stock Living 1"
                  />
                  <p className="image-text">Finnley Six Drawer Dresser</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45DNFMB6DWD_S240712.jpg?preset=Product1920x1440"
                    alt="In Stock Living 2"
                  />
                  <p className="image-text">Danny Six Drawer Dresser</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45PALMS7DR.jpg?preset=Product1920x1440"
                    alt="In Stock Living 3"
                  />
                  <p className="image-text">Palmer Seven Drawer Dresser</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">NIGHTSTANDS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45PEARN32LNT_C201120.jpg?preset=Product1920x1440"
                    alt="Sectionals 1"
                  />
                  <p className="image-text">Pearson Side Storage Nightstand</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45SULLWOAKNT_L220412.jpg?preset=Product1920x1440"
                    alt="Sectionals 2"
                  />
                  <p className="image-text">Sullivan Closed Nightstand</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/45STMARSONT_BQ220817.jpg?preset=Product1920x1440"
                    alt="Sectionals 3"
                  />
                  <p className="image-text">St. Martin Open Nightstand</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Subtítulo y Sección Tables & Storage */}
          <div className="section reveal">
            <h2 className="subtitle">BEDDING</h2>
            <div className="subgenre">
              <h3 className="subgenre-title">DUVET COVERS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61BCLDNQDSKT_D231208.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 1"
                  />
                  <p className="image-text">Boucle Duvet Set</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61AMLOCQDSKT_C231215.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 2"
                  />
                  <p className="image-text">Amal Linen Duvet Set</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61SOLMSQDSKT_C231208.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 3"
                  />
                  <p className="image-text">Solange Linen Duvet Set</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">QUILTS AND BED BLANKETS</h3>

              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61FFSSIVYBB_A220720.jpg?preset=Product1920x1440"
                    alt="Console Tables 1"
                  />
                  <p className="image-text">Faux Sherpa Bed Blanket</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61MALEANATQQ_D240517.jpg?preset=Product1920x1440"
                    alt="Console Tables 2"
                  />
                  <p className="image-text">Malea Cotton Quilt</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61SELVASKYBQ_G231127.jpg?preset=Product1920x1440"
                    alt="Console Tables 3"
                  />
                  <p className="image-text">Selva Bed Blanket</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">PILLOW SHAMS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61LAVMINKSS_A240820.jpg?preset=Product1920x1440"
                    alt="End Tables 1"
                  />
                  <p className="image-text">Laviss Stripe Sham</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61SOLANMNKSS_I231207.jpg?preset=Product1920x1440"
                    alt="End Tables 2"
                  />
                  <p className="image-text">Solange Linen Sham</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/61AMALINDSS_C231127.jpg?preset=Product1920x1440"
                    alt="End Tables 3"
                  />
                  <p className="image-text">Amal Linen Sham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Bedroom