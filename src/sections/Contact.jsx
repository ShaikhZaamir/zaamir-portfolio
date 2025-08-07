import React, { useState } from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaStore, FaGithub } from "react-icons/fa";
import ReactGA from "react-ga4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading

    // ✅ Google Analytics Event
    ReactGA.event({
      category: "Contact",
      action: "Form Submitted",
      label: "Contact Section Form"
    });

    try {
      const response = await fetch("https://formspree.io/f/xwpbbbrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p className="contact-text">
          Have a project in mind or just want to say hi? Reach out!
        </p>

        <div className="contact-methods">
          <a href="https://wa.me/9819240792" target="_blank" className="contact-card whatsapp">
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:shaikhzaamir04@gmail.com" className="contact-card email">
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>

          <a href="https://www.linkedin.com/in/shaikh-zaamir/" target="_blank" className="contact-card linkedin">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/ShaikhZaamir" target="_blank" className="contact-card github">
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>

          <a href="https://www.fiverr.com/zaamir_shaikh" target="_blank" className="contact-card fiverr">
            <FaStore className="icon" />
            <span>Fiverr</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : submitted ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
