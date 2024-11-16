import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="company-details">
          <h3>REAL ESTATE</h3>
          <p>1234 Street Address, Nagpur, Maharashtra, 56789</p>
          <p>Email: contact@company.com</p>
          <p>Phone: +123-456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
           <></>
          <h3 className='foot-head'>Follow Us</h3>
          <div className='social-icons'>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> 
            </a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i></a></li>
          </ul>
          </div>
        </div>

        {/* Links to Privacy Policy and Terms & Conditions */}
        <div className="legal-links">
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
