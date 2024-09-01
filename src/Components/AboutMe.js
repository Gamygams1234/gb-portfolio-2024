import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/images/profile2.jpg'; // Replace with the path to your image

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <section id="about" className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-image" data-aos="fade-right">
          <img src={profileImage} alt="Your Name" />
        </div>
        <div className="about-me-content text-black" data-aos="fade-left">
          <h2>About Me</h2>
          <p>
            Hey there! I'm a passionate developer who loves crafting engaging and interactive web experiences. Whether it's designing a sleek interface or writing clean, efficient code, I'm always up for a challenge. When I'm not coding, you can find me exploring new tech trends, binge-watching my favorite series, or trying out the latest coffee blend. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
