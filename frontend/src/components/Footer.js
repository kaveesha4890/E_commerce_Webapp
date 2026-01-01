import React from 'react';

const Footer = ({ backgroundColor = '#292929', textColor = '#FFFFFF', accentColor = '#FF69B4' }) => {
  return (
    <footer style={{ backgroundColor: backgroundColor, color: textColor, padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {/* About Section */}
        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <h3 style={{ color: accentColor }}>About KM Fashion</h3>
          <p>KM Fashion offers the latest trends in clothing, accessories, and more. Discover your style with us.</p>
        </div>
        
        {/* Quick Links Section */}
        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <h3 style={{ color: accentColor }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#home" style={{ color: textColor, textDecoration: 'none' }}>Home</a></li>
            <li><a href="#shop" style={{ color: textColor, textDecoration: 'none' }}>Shop</a></li>
            <li><a href="#contact" style={{ color: textColor, textDecoration: 'none' }}>Contact</a></li>
            <li><a href="#about" style={{ color: textColor, textDecoration: 'none' }}>About Us</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <h3 style={{ color: accentColor }}>Contact Us</h3>
          <p>Email: contact@kmfashion.com</p>
          <p>Phone: 011 2456 456</p>
          <p>Address: No.23 KM Fashion , kalutara road, Dodangoda</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© 2024 KM Fashion. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

