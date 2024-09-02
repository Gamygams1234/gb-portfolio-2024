// src/components/Header.js

import React, { useState } from "react";
import profileImage from "../assets/images/logo.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import whiteProfile from "../assets/images/logoWhite.svg";
import cv from "../assets/documents/resume.pdf"; // Adjust the path as needed

const Header = (props) => {
  const { toggleDarkMode, darkMode } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">{darkMode ? <img src={whiteProfile} alt="Logo" /> : <img src={profileImage} alt="Logo" />}</div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            About Me
          </a>

          <a href="#projects" className="nav-link" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </a>
          <div className="dark-icon" onClick={toggleDarkMode}>
            {darkMode ? <img src={moon} alt="Moon" /> : <img src={sun} alt="Sun" />}
          </div>
        </nav>
        <div className="download-cv">
          <a href={cv} className="btn-download" download>
            Download CV
          </a>
        </div>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
