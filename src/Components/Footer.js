// src/components/Footer.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whiteProfile from "../assets/images/logoWhite.svg";
import profileImage from "../assets/images/logo.svg";


const Footer = (props) => {
  const { darkMode } = props;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo" data-aos="fade-in">
          {darkMode ? <img src={whiteProfile} alt="Logo" /> : <img src={profileImage} alt="Logo" />}
        </div>
        <nav className="footer-nav" data-aos="fade-in">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="#!">
            <i className="fab fa-github"></i>
          </a>
          <a href="#!">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
