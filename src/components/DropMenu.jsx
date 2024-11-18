import React from 'react';
import '../styles/components/DropMenu.css';

// Datos de cada sección de menú
const menuData = {
  LIVING: [
    {
      title: 'SEATING',
      items: [
        'Sofa',
        'Chairs',
        'Sunroom',
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        'Coffee Tables',
        'Console Tables',
        'End Tables',
      ],
    },
    {
      image: {
        src: 'https://maisoncorbeil.com/media/cache/dakzilla_intervention/62059bcf85d52cea16eb85102c6fbeb8/3000x2000-blog-img-117784.jpg',
        alt: 'Accent Chair',
        linkText: 'SHOP ACCENT CHAIRS',
      },
    },
    {
      image: {
        src: 'https://www.ikea.com/co/es/images/products/linanaes-sofa-3-puestos-vissle-beige__1013895_pe829449_s5.jpg',
        alt: 'Sofas',
        linkText: 'SHOP SOFAS',
      },
    },
  ],
  DINING: [
    {
      title: 'SEATING',
      items: [
        'Dining Chairs',
        'Dining Benches',
        'Bar & Counter Stools',
      ],
    },
    {
      title: 'TABLES & STORAGE',
      items: [
        'Dining Tables',
        'Buffets & Sideboards',
        'Bar & Counter Tables',
      ],
    },
    {
      title: 'TABLETOP',
      items: [
        'Dinnerware',
        'Flatware',
        'Glassware',
      ],
    },
    {
      image: {
        src: 'https://img.koalaliving.com.au/products/127285/60839cd1-5db2-49b0-bc96-ded802d85274.png',
        alt: 'Dining Chair',
        linkText: 'SHOP DINING CHAIRS',
      },
    },
  ],
  BEDROOM: [
    {
      title: 'BEDROOM FURNITURE',
      items: [
        'Beds',
        'Dressers & Chests',
        'Nightstands',
      ],
    },
    {
      title: 'BEDDING',
      items: [
        'Duvet Covers',
        'Quilts and Bed Blankets',
        'Pillow Shams',
      ],
    },
    {
      image: {
        src: 'https://bedsbydesignuk.com/wp-content/uploads/2021/04/COGB46STE.1-Medium.jpg',
        alt: 'Beds',
        linkText: 'SHOP BEDS',
      },
    },
    {
      image: {
        src: 'https://www.westinstore.com/images/products/lrg/westin-hotel-timeless-bedding-set-HB-1260-02-BE_lrg.webp',
        alt: 'Bedding',
        linkText: 'SHOP BEDDING',
      },
    },
  ],
  OUTDOOR: [
    {
      title: 'LIGHTING',
      items: [
        'Chandeliers',
        'Pendats',
        'Table Lamps'
      ],
    },
    {
      image: {
        src: 'https://m.media-amazon.com/images/I/71N6-chX2LL.jpg',
        alt: 'Chand',
        linkText: 'SHOP CHANDELIERS',
      },
    },
    {
      image: {
        src: 'https://m.media-amazon.com/images/I/61xxhaeUKIL.jpg',
        alt: 'lamps',
        linkText: 'SHOP TABLE LAMPS',
      },
    },
  ],
};

const DropdownMenu = ({ menu }) => {
  const sections = menuData[menu] || [];

  return (
    <div className="dropdown_content">
      {sections.map((section, index) => (
        <div className="dropdown_section" key={index}>
          {section.title && <h4>{section.title}</h4>}
          {section.items && (
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <>
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="dropdown_image"
              />
              <a href="#">{section.image.linkText}</a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
