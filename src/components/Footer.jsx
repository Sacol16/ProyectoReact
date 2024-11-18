import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            In Cozyluxe, we focus on delivering the finest in luxury furniture. 
            Our carefully curated collections provide timeless designs and are 
            crafted to perfection to elevate your living spaces with style and personality.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@cozyluxe.com</li>
            <li>Phone: +1 234 567 890</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Cozyluxe, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
