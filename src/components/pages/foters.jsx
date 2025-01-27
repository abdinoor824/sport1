import React from 'react';
import "./foters.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100075192279802" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
        <p>&copy; 2025 Galaxy 11 football. All rights reserved.</p>
      </div>
    
  );
};

export default Footer;
