// src/pages/Contact.tsx
import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to the NME-App team.</p>
      </section>

      <section className="contact-details">
        <h2>Email</h2>
        <p>support@nme-app.com</p>

        <h2>Phone</h2>
        <p>+254 712 345 678</p>

        <h2>Address</h2>
        <p>Eldoret, Kenya</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
