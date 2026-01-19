// src/pages/Resources.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Resource.css";

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>Resources</h1>
        <p>Explore our collection of nursing notes and quizzes.</p>
      </section>

      <section className="library">
        <h2>Library</h2>
        <p>
          Our library contains categorized notes and quizzes to help you study efficiently.
        </p>
        <ul>
          <li>Fundamentals of Nursing</li>
          <li>Medical-Surgical Nursing</li>
          <li>Community Health Nursing</li>
          <li>Pharmacology</li>
        </ul>
      </section>

      <section className="premium-cta">
        <h2>Want full access?</h2>
        <p>Subscribe to unlock premium content and advanced quizzes.</p>
        <Link to="/pricing" className="cta-btn">Subscribe Now</Link>
      </section>
    </div>
  );
};

export default Resources;
