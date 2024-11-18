import React from 'react';
import NavBar from './NavBar';
import '../styles/components/Living.css';

function Living() {
  return (
    <div className="Living">
        <NavBar />
      <h1 className="title">SEATING</h1>
      <div className="categories">
        <div className="category">
          <img
            src="https://via.placeholder.com/300" // Reemplaza por la URL de la imagen real
            alt="Sectional Sofas"
          />
          <p>Sectional Sofas</p>
        </div>
        <div className="category">
          <img
            src="https://via.placeholder.com/300" // Reemplaza por la URL de la imagen real
            alt="Sofas"
          />
          <p>Sofas</p>
        </div>
        <div className="category">
          <img
            src="https://via.placeholder.com/300" // Reemplaza por la URL de la imagen real
            alt="Chairs"
          />
          <p>Chairs</p>
        </div>
      </div>
    </div>
  );
}

export default Living;
