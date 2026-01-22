import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-page">

      {/* ===== HERO ===== */}
      <div className="contact-hero">
        <h1>CONTACT US</h1>
        <h2>We’d love to hear from you</h2>
        <p>
          Have a question, suggestion, or need help accessing content?
          Our team is always ready to support your learning journey.
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Type your message here..." />
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>support@nursingmadeeasy.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+254 700 000 000</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Kenya · Serving students nationwide</p>
            </div>
          </div>

        </div>

      </div>

      {/* ===== SUPPORT CTA ===== */}
      <div className="contact-cta">
        <h2>Your success matters to us</h2>
        <p>
          Nursing Made Easy is committed to helping every nursing student
          access quality, reliable, and exam-focused learning materials.
        </p>
      </div>

    </section>
  );
};

export default Contact;
