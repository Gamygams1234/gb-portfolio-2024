import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Gamaliel,

I found your portfolio and would like to get in touch.

My email is: ${email}

`
    );

    window.location.href =
      `mailto:gamyburgos@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="contact-section"
      id="contact"
      data-aos="fade-up"
    >
      <h2
        className="text-black"
        data-aos="fade-right"
      >
        Let's Keep In Touch!
      </h2>

      <p
        className="text-black"
        data-aos="fade-left"
      >
        Whether you have a new idea or need help bringing your vision to life,
        I'm here to collaborate. Let's combine our skills and creativity to
        make something amazing.
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="contact-button fw-700"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactForm;