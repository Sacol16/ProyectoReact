import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components/Menus.css';
import Footer from './Footer';

function Bedroom(){
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
      <h1 className="main-title reveal">BEDROOM</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">BEDROOM FURNITURE</h2>

          <div className="subgenre" id="beds">
            <h3 className="subgenre-title">BEDS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45FINHEXMBQN_BA230522.jpg?preset=Product1920x1440"
                  alt="Finnley Extended Headboard Bed"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Finnley Bed</p>
                    <p className="product-price">$680</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/10VBISLXLC_D231018.jpg?preset=Product1920x1440"
                  alt="Wyller Bed"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Wyller Bed</p>
                    <p className="product-price">$720</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45LENNSRLKKT_A230907.jpg?preset=Product1920x1440"
                  alt="Lennon Bed"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Lennon Bed</p>
                    <p className="product-price">$699</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="dressers-chests">
            <h3 className="subgenre-title">DRESSERS AND CHESTS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45FINEB6DRKT_C240315.jpg?preset=Product1920x1440"
                  alt="Finnley Six Drawer Dresser"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Finnley Six Drawer Dresser</p>
                    <p className="product-price">$800</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45PEARF11DR2_P210224.jpg?preset=Product1920x1440"
                  alt="Pearson Eleven Drawer Dresser"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Pearson Eleven Drawer Dresser</p>
                    <p className="product-price">$789</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45BROCKT7DR_S201202.jpg?preset=Product1920x1440"
                  alt="Brock Seven Drawer Dresser"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Brock Seven Drawer Dresser</p>
                    <p className="product-price">$769</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="nightstands">
            <h3 className="subgenre-title">NIGHTSTANDS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45DARE26CNT_K240515.jpg?preset=Product1920x1440"
                  alt="Darwyn Nightstand"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Darwyn Nightstand</p>
                    <p className="product-price">$979</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45AST32HENT_C240621.jpg?preset=Product1920x1440"
                  alt="Astor Nightstand"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Astor Nightstand</p>
                    <p className="product-price">$879</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/45STMARSONT_BQ220817.jpg?preset=Product1920x1440"
                  alt="St. Martin Open Nightstand"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">St. Martin Open Nightstand</p>
                    <p className="product-price">$899</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtítulo y Sección Tables & Storage */}
        <div className="section reveal">
          <h2 className="subtitle">BEDDING</h2>

          <div className="subgenre" id="duvet-covers">
            <h3 className="subgenre-title">DUVET COVERS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61BCLDNQDSKT_D231208.jpg?preset=Product1920x1440"
                  alt="Boucle Duvet Set"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Boucle Duvet Set</p>
                    <p className="product-price">$356</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61LAVMINKDQ_B240820.jpg?preset=Product1920x1440"
                  alt="Laviss Stripe Duvet"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Laviss Stripe Duvet</p>
                    <p className="product-price">$301</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61TEGNTQDSKT_D231208.jpg?preset=Product1920x1440"
                  alt="Tegan Duvet Set"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Tegan Duvet Set</p>
                    <p className="product-price">$315</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="quilts-bed-blankets">
            <h3 className="subgenre-title">QUILTS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61MIRAWHTQQ_B231208.jpg?preset=Product1920x1440"
                  alt="Mira Voile Quilt"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Mira Voile Quilt</p>
                    <p className="product-price">$139</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61SELVASKYBQ_G231127.jpg?preset=Product1920x1440"
                  alt="Selva Bed Blanket"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Selva Bed Blanket</p>
                    <p className="product-price">$159</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61MIHALWHTQK_B231208.jpg?preset=Product1920x1440"
                  alt="Mihali Matelasse Quilt"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Mihali Matelasse Quilt</p>
                    <p className="product-price">$100</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="pillow-shams">
            <h3 className="subgenre-title">PILLOW SHAMS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61AMALINDSS_C231127.jpg?preset=Product1920x1440"
                  alt="Amal Linen Sham"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Amal Linen Sham</p>
                    <p className="product-price">$119</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61BOUCLEDNSS_B231213.jpg?preset=Product1920x1440"
                  alt="Boucle Sham"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Boucle Sham</p>
                    <p className="product-price">$120</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/61COSNATSS_BK240522.jpg?preset=Product1920x1440"
                  alt="Cosette Sham"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Cosette Sham</p>
                    <p className="product-price">$99</p>
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

export default Bedroom