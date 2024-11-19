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
                    <p className="product-price">$98</p>
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
                    <p className="product-price">$95</p>
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
                    <p className="product-price">$99</p>
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
                    <p className="product-price">$120</p>
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
                    <p className="product-price">$115</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/XRJFBEA_D200204.jpg?preset=Product1920x1440"
                  alt="Rhen Dining Bench"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Rhen Dining Bench</p>
                    <p className="product-price">$104</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="bar-counter-stools">
            <h3 className="subgenre-title">BAR AND COUNTER STOOLS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30JAGDWSNCTS_H211122.jpg?preset=Product1920x1440"
                  alt="Jagger Stool in Black"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Jagger Stool in Black</p>
                    <p className="product-price">$204</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30NOACDBSNS_J220629.jpg?preset=Product1920x1440"
                  alt="Noa Stool in Cinder"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Noa Stool in Cinder</p>
                    <p className="product-price">$230</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30BOTGTCSBLK_BG220509.jpg?preset=Product1920x1440"
                  alt="Bottoni Stool"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bottoni Stool</p>
                    <p className="product-price">$205</p>
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

          <div className="subgenre" id="dining-tables">
            <h3 className="subgenre-title">DINING TABLES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30PRTH96OKTR_H240506.jpg?preset=Product1920x1440"
                  alt="Perth Oval Dining Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Perth Oval Dining Table</p>
                    <p className="product-price">$350</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30KEN60RMCKT_M230725.jpg?preset=Product1920x1440"
                  alt="Kensington Stone"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Kensington Stone</p>
                    <p className="product-price">$306</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30ASO70BLDKT_C201119.jpg?preset=Product1920x1440"
                  alt="Asolo Dining Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Asolo Dining Table</p>
                    <p className="product-price">$367</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="buffets-sideboards">
            <h3 className="subgenre-title">BUFFETS & SIDEBOARDS</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/40HAT70BEMD_B211230.jpg?preset=Product1920x1440"
                  alt="Hattie Sideboard"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Hattie Sideboard</p>
                    <p className="product-price">$322</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/40KEN75WBEMB_CC231128.jpg?preset=Product1920x1440"
                  alt="Kensington Buffet"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Kensington Buffet</p>
                    <p className="product-price">$399</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/40POL78SDBR_S221121.jpg?preset=Product1920x1440"
                  alt="Polanco Sideboard"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Polanco Sideboard</p>
                    <p className="product-price">$387</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="bar-counter-tables">
            <h3 className="subgenre-title">BAR AND COUNTER TABLES</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30ENZO28MBKT.jpg?preset=Product1920x1440"
                  alt="Enzo Bar Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Enzo Bar Table</p>
                    <p className="product-price">$233</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWC_BZ220403.jpg?preset=Product1920x1440"
                  alt="Jacob Counter Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Jacob Counter Table</p>
                    <p className="product-price">$267</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWB_BV220403.jpg?preset=Product1920x1440"
                  alt="Jacob Bistro Table"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Jacob Bistro Table</p>
                    <p className="product-price">$300</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtítulo y Sección Tables & Storage */}
        <div className="section reveal">
          <h2 className="subtitle">TABLETOP</h2>

          <div className="subgenre" id="dinnerware">
            <h3 className="subgenre-title">DINNERWARE</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73SKYEDPKT_E210507.jpg?preset=Product1920x1440"
                  alt="Skye Dinner Plates"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Skye Dinner Plates</p>
                    <p className="product-price">$50</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73SKYESPKT_V210507.jpg?preset=Product1920x1440"
                  alt="Skye Salad Plates"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Skye Salad Plates</p>
                    <p className="product-price">$48</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73BELAKT16_T200128.jpg?preset=Product1920x1440"
                  alt="Bela Dinnerware"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bela Dinnerware</p>
                    <p className="product-price">$76</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="flatware">
            <h3 className="subgenre-title">FLATWARE</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73STAGFORK_O220811.jpg?preset=Product1920x1440"
                  alt="Stag Appetizer Forks"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Stag Appetizer Forks</p>
                    <p className="product-price">$39</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73RIDGECP_C221103.jpg?preset=Product1920x1440"
                  alt="Arber Five Piece Place"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Arber Five Piece Place</p>
                    <p className="product-price">$49</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73ESMACHOC_K240517.jpg?preset=Product1920x1440"
                  alt="Esma Five Piece Place"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Esma Five Piece Place</p>
                    <p className="product-price">$45</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          </div>

          <div className="subgenre" id="glassware">
            <h3 className="subgenre-title">GLASSWARE</h3>
            <div className="images">
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73ORGNCHBKT_F210504.jpg?preset=Product1920x1440"
                  alt="Organic Highball Glasses"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Organic Highball Glasses</p>
                    <p className="product-price">$90</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73BELAMUGKT.jpg?preset=Product1920x1440"
                  alt="Bela Mugs"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Bela Mugs</p>
                    <p className="product-price">$69</p>
                  </div>
                  <button className="add-to-cart-button">Add to Favorites</button>
                </div>
              </div>
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://cdn.arhaus.com/product/StandardV2/73SMAPITCO_BC230126.jpg?preset=Product1920x1440"
                  alt="Seema Cobalt Pitcher"
                />
                <div className="product-info">
                  <div>
                    <p className="product-title">Seema Cobalt Pitcher</p>
                    <p className="product-price">$87</p>
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