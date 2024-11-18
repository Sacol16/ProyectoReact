import React from 'react';
import '../styles/components/MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Hero Section for Living */}
      <div className="hero-section">
        <img
          src="https://www.cielohome.co.uk/154477-large_default/peyton-acacia-wood-coffee-table.jpg"
          alt="Living Room"
          className="hero-image"
        />
        <div className="hero-overlay">
          <p className="hero-subtitle">COZYLUXE QUALITY WOOD</p>
          <h1 className="hero-title">STYLE FOR THE SEASON</h1>
          <button className="hero-button">SHOP LIVING</button>
        </div>
      </div>

      {/* Hero Section for Dining */}
      <div className="hero-section">
        <img
          src="https://www.robeys.co.uk/wp-content/uploads/2022/09/la-rochere.jpg"
          alt="Dining Room"
          className="hero-image"
        />
        <div className="hero-overlay">
          <p className="hero-subtitle">ELEVATE YOUR DINING</p>
          <h1 className="hero-title">DINING IN STYLE</h1>
          <button className="hero-button">SHOP DINING</button>
        </div>
      </div>

      {/* Hero Section for Bedroom */}
      <div className="hero-section">
        <img
          src="https://www.decorilla.com/online-decorating/wp-content/uploads/2023/06/Bedroom-interior-design-ideas-for-relaxation.jpg"
          alt="Bedroom"
          className="hero-image"
        />
        <div className="hero-overlay">
          <p className="hero-subtitle">REST IN LUXURY</p>
          <h1 className="hero-title">YOUR DREAM BEDROOM</h1>
          <button className="hero-button">SHOP BEDROOM</button>
        </div>
      </div>

      {/* Hero Section for Outdoor */}
      <div className="hero-section">
        <img
          src="https://highemporium.com/cdn/shop/articles/a_hallway_with_recessed_lighting.webp?v=1710682261&width=1100"
          alt="<lighting> Space"
          className="hero-image"
        />
        <div className="hero-overlay">
          <p className="hero-subtitle">ENJOY THE LIGHTING</p>
          <h1 className="hero-title">GOOD LIGHTING, GREAT DESIGN</h1>
          <button className="hero-button">SHOP LIGHTING</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;