import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://script.google.com/macros/s/AKfycbx6fFT8wniAd3jwJTUd56oWHGPbVfri2Idm47sEQhL9aTan5W7YaJfmru09oDKqBKa7/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        if (data.result === "success") {
          setSubmitted(true);
          setLoading(false);
        } else {
          alert("There was an issue submitting your email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loading) {
    return (
      <section className="contact-section loader" id="contact">
        <Loader />
      </section>
    );
  }else{



  if (submitted) {
    return (
      <section className="contact-section" id="contact" data-aos="fade-up">
        <h2 className="text-black" data-aos="fade-right">
          Thank you!
        </h2>
        <p className="text-black" data-aos="fade-left">
          We will be in touch.
        </p>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <h2 className="text-black" data-aos="fade-right">
        Let's Keep In Touch!
      </h2>
      <p className="text-black" data-aos="fade-left">
        Whether you have a new idea or need help bringing your vision to life, I'm here to collaborate. Let's combine our skills and creativity to make something amazing.
      </p>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <input type="email" placeholder="Enter Your Email" className="email-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className="contact-button fw-700">
          Contact Me
        </button>
      </form>
    </section>
  );

}
};

export default ContactForm;
