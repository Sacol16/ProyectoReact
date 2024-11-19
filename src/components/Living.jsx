import React, { useEffect } from 'react';
import NavBar from './NavBar';
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
      { threshold: 0.1 } // Activa el efecto cuando el 20% del elemento es visible
    );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);

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
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/20SPDGRSBC_BD220921.jpg?preset=Product1920x1440"
                  alt="Malta Leather Sofa"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Malta Leather Sofa</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/10VBISLXLC_D231018.jpg?preset=Product1920x1440"
                  alt="Bianca Sofa"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bianca Sofa</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/20893SFSTP_N240925.jpg?preset=Product1920x1440"
                  alt="Kipton Wide Arm Leather Sofa"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Kipton Wide Arm Leather Sofa</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="chairs">
            <h3 className="subgenre-title">CHAIRS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/101129SWBLP_A210412.jpg?preset=Product1920x1440"
                  alt="Rudy Leather Swivel Chair"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Rudy Leather Swivel Chair</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/10633R2PL_D240126.jpg?preset=Product1920x1440"
                  alt="Kipton Motion Recliner"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Kipton Motion Recliner</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/20NONSIBGPH_I211109.jpg?preset=Product1920x1440"
                  alt="Deacon Leather Swivel Recliner"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Deacon Leather Swivel Recliner</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="sunroom">
            <h3 className="subgenre-title">SUNROOM</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/70ZOY3SN5CF_C231228.jpg?preset=Product1920x1440"
                  alt="Zoya Sunroom Coffee Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Zoya Sunroom Coffee Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/70VALE3ELCKT_BG240110.jpg?preset=Product1920x1440"
                  alt="Valencia Sunroom Lounge Chair"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Valencia Sunroom Lounge Chair</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/70NANTESOTKT_R231228.jpg?preset=Product1920x1440"
                  alt="Nantucket Sunroom Ottoman"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Nantucket Sunroom Ottoman</p>
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
          <h2 className="subtitle">TABLES & STORAGE</h2>

          <div className="subgenre" id="coffee-tables">
            <h3 className="subgenre-title">COFFEE TABLES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35FNHB64CFK_C230821.jpg?preset=Product1920x1440"
                  alt="Finnley Coffee Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Finnley Coffee Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/34UBUD67COF_U220426.jpg?preset=Product1920x1440"
                  alt="Ubud Coffee Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Ubud Coffee Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35BEREB60COF_L210224.jpg?preset=Product1920x1440"
                  alt="Bertogne Coffee Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bertogne Coffee Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="console-tables">
            <h3 className="subgenre-title">CONSOLE TABLES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35VESVSCNDEK_BH230508.jpg?preset=Product1920x1440"
                  alt="Vesuvius Console Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Vesuvius Console Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35MALCMSMCN_A230110.jpg?preset=Product1920x1440"
                  alt="Malone 48 Console Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Malone Console Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35TELLCON_I230615.jpg?preset=Product1920x1440"
                  alt="Telluride Console Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Telluride Console Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="end-tables">
            <h3 className="subgenre-title">END TABLES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35BERHNY24EN_M240614.jpg?preset=Product1920x1440"
                  alt="Bertogne End Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bertogne End Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35SULSWFEND_BJ211206.jpg?preset=Product1920x1440"
                  alt="Sullivan Waterfall End Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Sullivan Waterfall End Table</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/35FELT22WEND_BL230927.jpg?preset=Product1920x1440"
                  alt="Felton End Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Felton End Table</p>
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

export default Living;
