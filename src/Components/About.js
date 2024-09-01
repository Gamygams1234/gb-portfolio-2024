// src/components/About.js

import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/profile1.jpg'; // Replace with the path to your image


const titles = [
    'Web Developer',
    'Front End Developer',
    'Software Engineer',
    'Full Stack Developer'
  ];
  



const About = () => {
    const [currentTitle, setCurrentTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
          const i = loopNum % titles.length;
          const fullText = titles[i];
    
          setCurrentTitle(
            isDeleting
              ? fullText.substring(0, currentTitle.length - 1)
              : fullText.substring(0, currentTitle.length + 1)
          );
    
          setTypingSpeed(isDeleting ? 50 : 50);
    
          if (!isDeleting && currentTitle === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else if (isDeleting && currentTitle === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
        };
    
        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
      }, [currentTitle, isDeleting, loopNum, typingSpeed]);


  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content text-black">
          <p className="greeting">Hi I am</p>
          <h1 className="name">Gamaliel Burgos</h1>
          <h2 className="title">{currentTitle}</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <button className="btn-hire-me">Hire Me</button>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Gamaliel Burgos" />
          <div className="social-links">
            {/* <a href="#!"><i className="fab fa-facebook-f"></i></a> */}
            <a href="#!"><i className="fab fa-github"></i></a>
            <a href="#!"><i className="fab fa-instagram"></i></a>
            <a href="#!"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
