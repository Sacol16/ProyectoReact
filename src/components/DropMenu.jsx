import React from 'react';
import '../styles/components/DropMenu.css';

// Datos de cada sección de menú
const menuData = {
  LIVING: [
    {
      title: 'SEATING',
      items: [
        { name: 'Sofas', id: 'sofas' },
        { name: 'Chairs', id: 'chairs' },
        { name: 'Sunroom', id: 'sunroom' },
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        { name: 'Coffee Tables', id: 'coffee-tables' },
        { name: 'Console Tables', id: 'console-tables' },
        { name: 'End Tables', id: 'end-tables' },
      ],
    },
    {
      image: {
        src: 'https://maisoncorbeil.com/media/cache/dakzilla_intervention/62059bcf85d52cea16eb85102c6fbeb8/3000x2000-blog-img-117784.jpg',
        alt: 'Accent Chair',
        linkText: 'SHOP ACCENT CHAIRS',
        id: 'chairs',
      },
    },
    {
      image: {
        src: 'https://www.ikea.com/co/es/images/products/linanaes-sofa-3-puestos-vissle-beige__1013895_pe829449_s5.jpg',
        alt: 'Sofas',
        linkText: 'SHOP SOFAS',
        id: 'sofas',
      },
    },
  ],
  DINING: [
    {
      title: 'SEATING',
      items: [
        { name: 'Dining Chairs', id: 'dining-chairs' },
        { name: 'Dining Benches', id: 'dining-benches' },
        { name: 'Bar & Counter Stools', id: 'bar-counter-stools' },
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        { name: 'Dining Tables', id: 'dining-tables' },
        { name: 'Buffets & Sideboards', id: 'buffets-sideboards' },
        { name: 'Bar & Counter Tables', id: 'bar-counter-tables' },
      ],
    },
    {
      title: 'TABLETOP',
      items: [
        { name: 'Dinnerware', id: 'dinnerware'},
        { name: 'Flatware', id: 'flatware'},
        { name: 'Glassware', id: 'glassware'},
      ],
    },
    {
      image: {
        src: 'https://img.koalaliving.com.au/products/127285/60839cd1-5db2-49b0-bc96-ded802d85274.png',
        alt: 'Dining Chair',
        linkText: 'SHOP DINING CHAIRS',
        id: 'dining-chairs',
      },
    },
  ],
  BEDROOM: [
    {
      title: 'BEDROOM FURNITURE',
      items: [
        { name: 'Beds', id: 'beds' },
        { name: 'Dressers & Chests', id: 'dressers-chests' },
        { name: 'Nightstands', id: 'nightstands' },
      ],
    },
    {
      title: 'BEDDING',
      items: [
        { name: 'Duvet Covers', id: 'duvet-covers' },
        { name: 'Quilts and Bed Blankets', id: 'quilts-bed-blankets' },
        { name: 'Pillow Shams', id: 'pillow-shams' },
      ],
    },
    {
      image: {
        src: 'https://bedsbydesignuk.com/wp-content/uploads/2021/04/COGB46STE.1-Medium.jpg',
        alt: 'Beds',
        linkText: 'SHOP BEDS',
        id: 'beds',
      },
    },
    {
      image: {
        src: 'https://cdn.arhaus.com/product/StandardV2/45PEARN32LNT_C201120.jpg',
        alt: 'Nightstands',
        linkText: 'SHOP NIGHTSTANDS',
        id: 'nightstands',
      },
    },
  ],
  OUTDOOR: [
    {
      title: 'LIGHTING',
      items: [
        { name: 'Chandeliers', id: 'chandeliers' },
        { name: 'Pendant', id: 'pendant' },
        { name: 'Table Lamps', id: 'table-lamps' },
      ],
    },
    {
      image: {
        src: 'https://cdn.arhaus.com/product/StandardV2/662036H353_EL220418.jpg',
        alt: 'Chandeliers',
        linkText: 'SHOP CHANDELIERS',
        id: 'chandeliers',
      },
    },
    {
      image: {
        src: 'https://cdn.arhaus.com/product/StandardV2/760LOLTBKT.jpg',
        alt: 'Table Lamps',
        linkText: 'SHOP TABLE LAMPS',
        id: 'table-lamps',
      },
    },
  ],
};

const DropdownMenu = ({ menu }) => {
  const sections = menuData[menu] || [];

  const handleClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="dropdown_content">
      {sections.map((section, index) => (
        <div className="dropdown_section" key={index}>
          {section.title && <h4>{section.title}</h4>}
          {section.items && (
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" onClick={() => handleClick(item.id)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <div className="image-wrapper">
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="dropdown_image"
                onClick={() => handleClick(section.image.id)}
              />
              <a href="#" onClick={() => handleClick(section.image.id)}>
                {section.image.linkText}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;