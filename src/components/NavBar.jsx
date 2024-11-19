import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropMenu.jsx';
import NavButton from './NavButton.jsx';
import { Link } from "react-router-dom";
//import '../styles/styles.css';
import "../styles/styles.css"

import { auth, db } from './firebase'; // Importa Firebase
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("User");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);

      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const unsubscribeUser = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserName(userData.firstName);
          } else {
            console.log("User document does not exist!");
          }
        }, (error) => {
          console.error("Error fetching user data in real-time:", error);
        });

        // Cleanup Firestore listener when the user logs out
        return () => unsubscribeUser();
      } else {
        setUserName("User"); // Default value if no user is authenticated
      }
    });

    // Cleanup Auth listener
    return () => unsubscribeAuth();
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
          <a href="/dining">DINING</a>
          <DropdownMenu menu="DINING" />
        </li>
        <li>
          <a href="/bedroom">BEDROOM</a>
          <DropdownMenu menu="BEDROOM" />
        </li>
        <li>
          <a href="/lighting">LIGHTING</a>
          <DropdownMenu menu="OUTDOOR" />
        </li>
      </ul>
      <div className="nav_btns">
        <Link to={isAuthenticated ? "/cart" : "/login"}>
        <NavButton
          defaultIcon="ri-shopping-bag-line"
          hoverIcon="ri-shopping-bag-fill"
          className="btn_sho"
        />
        </Link>
        <h6>{userName}</h6> {/* Aquí se muestra el nombre del usuario */}
        <Link to={isAuthenticated ? "/profile" : "/login"}>
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
