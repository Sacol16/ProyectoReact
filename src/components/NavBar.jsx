import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropMenu.jsx';
import NavButton from './NavButton.jsx';
import { Link } from "react-router-dom";
//import '../styles/styles.css';
import "../styles/styles.css"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav_header">
        <div className="nav_logo">
          <a href="/home">Cozyluxe</a>
        </div>
        <div className="nav_menu_btn" id="menu-btn" onClick={handleMenuClick}>
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </div>
      </div>
      <ul className={`nav_links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li>
          <a href="/living">LIVING</a>
          <DropdownMenu menu="LIVING" />
        </li>
        <li>
          <a href="#">DINING</a>
          <DropdownMenu menu="DINING" />
        </li>
        <li>
          <a href="/bedroom">BEDROOM</a>
          <DropdownMenu menu="BEDROOM" />
        </li>
        <li>
          <a href="#">OUTDOOR</a>
          <DropdownMenu menu="OUTDOOR" />
        </li>
      </ul>
      <div className="nav_btns">
        <NavButton
          defaultIcon="ri-shopping-bag-line"
          hoverIcon="ri-shopping-bag-fill"
          className="btn_sho"
        />
        <Link to="/login">
        <NavButton
        defaultIcon="ri-user-line"
        hoverIcon="ri-user-fill"
        className="btn_use"
        />
        </Link>
        
      </div>
    </nav>
  );
};

export default NavBar;
