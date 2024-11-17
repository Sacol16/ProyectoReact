import React, { useState } from 'react';
import '../styles/components/NavButton.css';

const NavButton = ({ defaultIcon, hoverIcon, className }) => {
  const [iconClass, setIconClass] = useState(defaultIcon);

  const handleMouseEnter = () => {
    setIconClass(hoverIcon);
  };

  const handleMouseLeave = () => {
    setIconClass(defaultIcon);
  };

  return (
    <button
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={iconClass}></i>
    </button>
  );
};

export default NavButton;
