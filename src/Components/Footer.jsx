import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer bg-light py-3">
      <div className="container text-center">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:iamnk1000@gmail.com" className="btn btn-link">
            <i className="fas fa-envelope"></i> 
          </a>
          <a href="https://www.linkedin.com/in/naveen-kumar-n-90378127b" className="btn btn-link">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="https://github.com/nk-2003" className="btn btn-link">
            <i className="fab fa-github"></i> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
