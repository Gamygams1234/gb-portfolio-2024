import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import htmlIcon from '../assets/images/icons/html.png'; 
import cssIcon from '../assets/images/icons/css.png';
import bootstrapIcon from '../assets/images/icons/bootstrap.png';
import javascriptIcon from '../assets/images/icons/js.png';
import phpIcon from '../assets/images/icons/php.png';
import javaIcon from '../assets/images/icons/java.png';
import pythonIcon from '../assets/images/icons/python.png';
import reactIcon from '../assets/images/icons/react.png';
import nodeIcon from '../assets/images/icons/node.png';
import sqlIcon from '../assets/images/icons/sql.png';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container text-black">
        <h3 className="skills-heading" data-aos="fade-up">Skills</h3>
        <h2 className="skills-subheading" data-aos="fade-up">What I am capable of?</h2>
        <div className="skills-icons">
          <img src={htmlIcon} alt="HTML" className="skill-icon" data-aos="zoom-in" />
          <img src={cssIcon} alt="CSS" className="skill-icon" data-aos="zoom-in" />
          <img src={bootstrapIcon} alt="Bootstrap" className="skill-icon" data-aos="zoom-in" />
          <img src={javascriptIcon} alt="JavaScript" className="skill-icon" data-aos="zoom-in" />
          <img src={phpIcon} alt="PHP" className="skill-icon" data-aos="zoom-in" />
          <img src={javaIcon} alt="Java" className="skill-icon" data-aos="zoom-in" />
          <img src={pythonIcon} alt="Python" className="skill-icon" data-aos="zoom-in" />
          <img src={reactIcon} alt="React" className="skill-icon" data-aos="zoom-in" />
          <img src={nodeIcon} alt="Node.js" className="skill-icon" data-aos="zoom-in" />
          <img src={sqlIcon} alt="SQL" className="skill-icon" data-aos="zoom-in" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
