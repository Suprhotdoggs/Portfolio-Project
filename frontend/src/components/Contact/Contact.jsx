import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service call
    emailjs
      .send(
        "service_yd7eyaw", // Your EmailJS service ID
        "template_8ne38ag", // Your EmailJS template ID
        formData, // Form data that will be sent to the template
        "Rol2lw6W-O0xjoaYo" // Your EmailJS public API key
      )
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);
        setStatus("There was an error. Please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="horizontal-form">
          <div className="input-row">
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
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>} {/* Show status message */}
      </div>
    </section>
  );
}
