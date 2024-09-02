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
          Whether it's building responsive websites or tackling complex problems, I’m always ready for the next challenge. When I'm not immersed in coding, you'll likely find me exploring new tech trends, experimenting with the latest JavaScript frameworks, or perfecting a CSS animation. But there's more to me than just code—I’m also a huge fan of skating, and I never miss a chance to adventure the outdoors. Let’s connect and create something extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
