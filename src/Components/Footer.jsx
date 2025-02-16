
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p style={{color:"black"}}>&copy; 2025 Portfolio . All rights reserved.</p>
        <div className="footer-links">
          <a style={{color:"black"}}href="mailto:iamnk1000@gmail.com">Email</a>
          <a style={{color:"black"}} href="https://www.linkedin.com/in/naveen-kumar-n-90378127b">LinkedIn</a>
          <a style={{color:"black"}} href="https://github.com/nk-2003">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
