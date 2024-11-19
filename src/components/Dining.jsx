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
      <h1 className="main-title reveal">DINNING</h1>

      <div className="content">
        {/* Subtítulo y Sección Seating */}
        <div className="section reveal">
          <h2 className="subtitle">SEATING</h2>

          <div className="subgenre" id="dining-chairs">
            <h3 className="subgenre-title">DINING CHAIRS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30AIMCHBKDF_H220509.jpg?preset=Product1920x1440"
                  alt="Aimee Dining Arm Chair"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Aimee Dining Arm Chair</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30MLACSSNSC_H220112.jpg?preset=Product1920x1440"
                  alt="Mila Dining Chair"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Mila Dining Chair</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30HRYBKSDSC_O220328.jpg?preset=Product1920x1440"
                  alt="Henry Dining Side Chair"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Henry Dining Side Chair</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="dining-benches">
            <h3 className="subgenre-title">DINING BENCHES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30JAGDSNATBH_BH220816.jpg?preset=Product1920x1440"
                  alt="Bench in Downy Snow"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bench in Downy Snow</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/X8GF110581_A230919.jpg?preset=Product1920x1440"
                  alt="Gates Banquette"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Gates Banquette</p>
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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
                    <p className="product-price">$399</p>
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