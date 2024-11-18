import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components/Menus.css';

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
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/20SPDGRSBC_BD220921.jpg?preset=Product1920x1440"
                  alt="Luxury Sofa"
                />
                <p className="image-text">Malta Leather Sofa</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/10VBISLXLC_D231018.jpg?preset=Product1920x1440"
                  alt="Modern Sofa"
                />
                <p className="image-text">Bianca Sofa</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/20893SFSTP_N240925.jpg?preset=Product1920x1440"
                  alt="Classic Sofa"
                />
                <p className="image-text">Kipton Wide Arm Leather Sofa</p>
              </div>
            </div>
          </div>
          <div className="subgenre" id="chairs">
            <h3 className="subgenre-title">CHAIRS</h3>
            <div className="images">
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/101129SWBLP_A210412.jpg?preset=Product1920x1440"
                  alt="In Stock Living 1"
                />
                <p className="image-text">Rudy Leather Swivel Chair</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/10633R2PL_D240126.jpg?preset=Product1920x1440"
                  alt="In Stock Living 2"
                />
                <p className="image-text">Kipton Motion Recliner</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/20NONSIBGPH_I211109.jpg?preset=Product1920x1440"
                  alt="In Stock Living 3"
                />
                <p className="image-text">Deacon Leather Swivel Recliner</p>
              </div>
            </div>
          </div>
          <div className="subgenre" id="sunroom">
            <h3 className="subgenre-title">SUNROOM</h3>
            <div className="images">
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/70ZOY3SN5CF_C231228.jpg?preset=Product1920x1440"
                  alt="Sectionals 1"
                />
                <p className="image-text">Zoya Sunroom Coffee Table</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/70VALE3ELCKT_BG240110.jpg?preset=Product1920x1440"
                  alt="Sectionals 2"
                />
                <p className="image-text">Valencia Sunroom Lounge Chair</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/70NANTESOTKT_R231228.jpg?preset=Product1920x1440"
                  alt="Sectionals 3"
                />
                <p className="image-text">Nantucket Sunroom Ottoman</p>
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
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35FNHB64CFK_C230821.jpg?preset=Product1920x1440"
                  alt="Coffee Tables 1"
                />
                <p className="image-text">Finnley Coffee Table</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/34UBUD67COF_U220426.jpg?preset=Product1920x1440"
                  alt="Coffee Tables 2"
                />
                <p className="image-text">Ubud Coffee Table</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35BEREB60COF_L210224.jpg?preset=Product1920x1440"
                  alt="Coffee Tables 3"
                />
                <p className="image-text">Bertogne Coffee Table</p>
              </div>
            </div>
          </div>
          <div className="subgenre" id="console-tables">
            <h3 className="subgenre-title">CONSOLE TABLES</h3>
            <div className="images">
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35KAVCON.jpg?preset=Product1920x1440"
                  alt="Console Tables 1"
                />
                <p className="image-text">Kavali Slim Console Table</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/34KAICONSOLE_F210726.jpg?preset=Product1920x1440"
                  alt="Console Tables 2"
                />
                <p className="image-text">Kai Console</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35MIH60VRCN_R230509.jpg?preset=Product1920x1440"
                  alt="Console Tables 3"
                />
                <p className="image-text">Mihaela Console Table</p>
              </div>
            </div>
          </div>
          <div className="subgenre" id="end-tables">
            <h3 className="subgenre-title">END TABLES</h3>
            <div className="images">
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35FIN18PEDMB_240125.jpg?preset=Product1920x1440"
                  alt="End Tables 1"
                />
                <p className="image-text">Finnley Pedestal</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35TELLEND_E210408.jpg?preset=Product1920x1440"
                  alt="End Tables 2"
                />
                <p className="image-text">Telluride End Table</p>
              </div>
              <div className="image-container reveal">
                <img
                  src="https://cdn.arhaus.com/product/StandardV2/35SULSWFEND_BJ211206.jpg?preset=Product1920x1440"
                  alt="End Tables 3"
                />
                <p className="image-text">Sullivan Waterfall End Table</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Living;
