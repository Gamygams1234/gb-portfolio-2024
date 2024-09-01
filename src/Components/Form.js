import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
  // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section className="contact-section" data-aos="fade-up">
      <h2 className="text-black" data-aos="fade-right">
        Let's Keep In Touch!
      </h2>
      <p className="text-black" data-aos="fade-left">
        Whether you have a new idea or need help bringing your vision to life, I'm here to collaborate. Let's combine our skills and creativity to make something amazing.
      </p>
      <form className="contact-form" data-aos="fade-up">
        <input type="email" placeholder="Enter Your Email" className="email-input" required />
        <button type="submit" className="contact-button fw-700">
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
