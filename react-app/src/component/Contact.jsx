import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="contact-input"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="contact-input"
      />

      <input
        type="text"
        placeholder="Subject"
        className="contact-input"
      />

      <textarea
        placeholder="Your Message"
        className="contact-textarea"
      ></textarea>

      <button className="contact-button">Send Message</button>
    </div>
  )
}

export default Contact
