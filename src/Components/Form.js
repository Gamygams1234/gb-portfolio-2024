import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)

    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
          setSubmitted(true);
    // Send the email to Google Sheets
//     fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
//       method: "POST",
//       body: JSON.stringify({ email }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.result === "success") {

//         } else {
//           alert("There was an issue submitting your email. Please try again.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
  };

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
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="contact-button fw-700">
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactForm;