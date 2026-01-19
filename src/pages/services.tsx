// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Services</h1>
        <p>We offer the following services to enhance your learning experience.</p>
      </section>

      <section className="services-list">
        <h2>What We Offer</h2>
        <ul>
          <li>Free access to selected notes and quizzes</li>
          <li>Premium subscription for full access</li>
          <li>Progress tracking and analytics</li>
          <li>Student support and guidance</li>
        </ul>
      </section>

      <section className="services-cta">
        <p>Subscribe today and unlock all features!</p>
        <Link to="/pricing" className="cta-btn">Subscribe Now</Link>
      </section>
    </div>
  );
};

export default Services;
