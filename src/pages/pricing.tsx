// src/pages/Pricing.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing: React.FC = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Pricing</h1>
        <p>Choose a plan that fits your learning needs.</p>
      </section>

      <section className="plans">
        <div className="plan-card">
          <h2>Free</h2>
          <p>Access limited notes and quizzes</p>
          <p>Price: Free</p>
        </div>
        <div className="plan-card">
          <h2>Premium</h2>
          <p>Full access to all notes, quizzes, and analytics</p>
          <p>Price: $10/month</p>
          <Link to="/contact" className="cta-btn">Subscribe</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
