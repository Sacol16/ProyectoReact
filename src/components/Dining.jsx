import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components/Living.css';

function Dining(){
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
        <h1 className="main-title reveal">DINING</h1>
  
        <div className="content">
          {/* Subtítulo y Sección Seating */}
          <div className="section reveal">
            <h2 className="subtitle">SEATING</h2>
            <div className="subgenre">
              <h3 className="subgenre-title">DINING CHAIRS</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30AIMCHBKDF_H220509.jpg?preset=Product1920x1440"
                    alt="Luxury Sofa"
                  />
                  <p className="image-text">Aimee Dining Arm Chair</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30AIMCHPEMCH_N240423.jpg?preset=Product1920x1440"
                    alt="Modern Sofa"
                  />
                  <p className="image-text">Aimee Dining Arm Chair in Mocha</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30CANTSMKCHR_H221102.jpg?preset=Product1920x1440"
                    alt="Classic Sofa"
                  />
                  <p className="image-text">Canterbury Dining Chair in Top Grain Smoke</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">DINING BENCHES</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30JAGDWSNBNC_D210824.jpg?preset=Product1920x1440"
                    alt="In Stock Living 1"
                  />
                  <p className="image-text">Jagger Dining Bench in Black with Antique Brass</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30GTELPCCRN2_I210629.jpg?preset=Product1920x1440"
                    alt="In Stock Living 2"
                  />
                  <p className="image-text">Gates Leather Corner</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/XEOFSEB_A210804.jpg?preset=Product1920x1440"
                    alt="In Stock Living 3"
                  />
                  <p className="image-text">Eaton Tufted Settee without Pillows</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">BAR & COUNTER STOOLS</h3> 
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30NOACDBSNS_H220629.jpg?preset=Product1920x1440"
                    alt="Sectionals 1"
                  />
                  <p className="image-text">Noa Stool in Cinder</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30LNDSWCTCA_D230731.jpg?preset=Product1920x1440"
                    alt="Sectionals 2"
                  />
                  <p className="image-text">Lunden Faux Leather Swivel Stool</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30HNRYLTHCS_P210409.jpg?preset=Product1920x1440"
                    alt="Sectionals 3"
                  />
                  <p className="image-text">Henry Stool</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Subtítulo y Sección Tables & Storage */}
          <div className="section reveal">
            <h2 className="subtitle">TABLES & STORAGE</h2>
            <div className="subgenre">
              <h3 className="subgenre-title">DINING TABLES</h3> 
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30KENE60HNKT_B210409.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 1"
                  />
                  <p className="image-text">Kensington Dining Table</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30ACAC84OVKT_B220414.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 2"
                  />
                  <p className="image-text">Acacius Oval Dining Table</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30DAN96OCSKT_M240722.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 3"
                  />
                  <p className="image-text">Danae Oval Stone Dining Table</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">BUFFETS & SIDEBOARDS</h3> 

              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/40KEN75WBEMB_CC231128.jpg?preset=Product1920x1440"
                    alt="Console Tables 1"
                  />
                  <p className="image-text">Kensington Buffet</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/40DAN72SECAK_C240606.jpg?preset=Product1920x1440"
                    alt="Console Tables 2"
                  />
                  <p className="image-text">Danny Sideboard</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/40MALSPSMD2_I200327.jpg?preset=Product1920x1440"
                    alt="Console Tables 3"
                  />
                  <p className="image-text">Malone Sideboard</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">BAR & COUNTER TABLES</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30BRAL36WDBAR_A200728.jpg?preset=Product1920x1440"
                    alt="End Tables 1"
                  />
                  <p className="image-text">Recycled Metal Bar Table with Wade Base</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWC_BZ220403.jpg?preset=Product1920x1440"
                    alt="End Tables 2"
                  />
                  <p className="image-text">Jacob Counter Table with Wade Base</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/30JCB42WLBWB_BV220403.jpg?preset=Product1920x1440"
                    alt="End Tables 3"
                  />
                  <p className="image-text">Jacob Bistro Table with Wade Base</p>
                </div>
              </div>
            </div>
          </div>

        {/* Subtítulo y Sección Tables & Storage */}
         <div className="section reveal">
            <h2 className="subtitle">TABLETOP</h2> 
            <div className="subgenre">
              <h3 className="subgenre-title">DINNERWARE</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73NAKACB16WH_G230810.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 1"
                  />
                  <p className="image-text">Naka Dinner Set with Cereal Bowls (Set of 16)</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73GALKT16_V200128.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 2"
                  />
                  <p className="image-text">Gallatin Dinnerware (Set of 16)</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73LUNAPBKT16_B230622.jpg?preset=Product1920x1440"
                    alt="Coffee Tables 3"
                  />
                  <p className="image-text">Luna Dinnerware with Pasta Bowls (Set of 16)</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">FLATWARE</h3> 

              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73STAGFORK_O220811.jpg?preset=Product1920x1440"
                    alt="Console Tables 1"
                  />
                  <p className="image-text">Stag Appetizer Forks (Set of 4)</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73MADDOX_A240521.jpg?preset=Product1920x1440"
                    alt="Console Tables 2"
                  />
                  <p className="image-text">Maddox Five Piece Place Setting</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73MURRBLK_A230626.jpg?preset=Product1920x1440"
                    alt="Console Tables 3"
                  />
                  <p className="image-text">Murray Five Piece Place Setting</p>
                </div>
              </div>
            </div>
            <div className="subgenre">
              <h3 className="subgenre-title">GLASSWARE</h3>
              <div className="images">
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73SERENKT_B240419.jpg?preset=Product1920x1440"
                    alt="End Tables 1"
                  />
                  <p className="image-text">Seren Wine Glasses (Set of 4)</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73NAKAMGWHK_E221104.jpg?preset=Product1920x1440"
                    alt="End Tables 2"
                  />
                  <p className="image-text">Naka Mugs (Set of 4)</p>
                </div>
                <div className="image-container reveal">
                  <img
                    src="https://cdn.arhaus.com/product/StandardV2/73ROSECT_B230807.jpg?preset=Product1920x1440"
                    alt="End Tables 3"
                  />
                  <p className="image-text">Rosalie Cocktail Glasses (Set of 4)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dining