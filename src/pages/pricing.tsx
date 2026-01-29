import React, { useEffect } from "react";
import { FaCheckCircle, FaLock, FaStar } from "react-icons/fa";
import "./pricing.css";

const Pricing: React.FC = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up, .slide-down");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-section">

      {/* ===== HERO ===== */}
      <div className="pricing-hero">
        <div className="pricing-hero-content slide-down">

          <div className="pricing-hero-image">
            <img src="src/assets/img6.png" alt="Pricing illustration" />
          </div>

          <div className="pricing-header">
            <h1>PRICING PLANS</h1>
            <h2>Choose a plan that fits your learning journey</h2>
            <p>
              Whether you are just getting started or preparing for final exams,
              Nursing Made Easy offers flexible pricing options designed to give
              you maximum value.
            </p>
          </div>

        </div>
      </div>

      {/* ===== PRICING CARDS ===== */}
      <div className="pricing-cards">

        <div className="pricing-card slide-up">
          <h3>Free Access</h3>
          <p className="price">KES 0</p>
          <p className="plan-desc">Perfect for students exploring the platform.</p>

          <ul>
            <li><FaCheckCircle /> Limited nursing notes</li>
            <li><FaCheckCircle /> Basic quizzes</li>
            <li><FaCheckCircle /> Community access</li>
            <li className="disabled"><FaLock /> Premium content</li>
          </ul>

          <button className="outline-btn">Get Started</button>
        </div>

        <div className="pricing-card highlighted slide-up">
          <span className="badge"><FaStar /> Most Popular</span>
          <h3>Standard Plan</h3>
          <p className="price">KES 999<span>/month</span></p>
          <p className="plan-desc">Ideal for consistent learners and exam preparation.</p>

          <ul>
            <li><FaCheckCircle /> Full nursing notes</li>
            <li><FaCheckCircle /> Interactive quizzes</li>
            <li><FaCheckCircle /> Progress tracking</li>
            <li><FaCheckCircle /> Secure access</li>
          </ul>

          <button className="primary-btn">Subscribe Now</button>
        </div>

        <div className="pricing-card slide-up">
          <h3>Premium Plan</h3>
          <p className="price">KES 2,499<span>/semester</span></p>
          <p className="plan-desc">Best for serious students targeting top results.</p>

          <ul>
            <li><FaCheckCircle /> Everything in Standard</li>
            <li><FaCheckCircle /> Exam revision bundles</li>
            <li><FaCheckCircle /> Summarized notes</li>
            <li><FaCheckCircle /> Priority support</li>
          </ul>

          <button className="outline-btn">Unlock Premium</button>
        </div>

      </div>

      {/* ===== CTA (INCLUDES MOVED INSIDE) ===== */}
      <div className="pricing-cta slide-up">
        <h2>What’s Included</h2>
        <p>
          Every paid plan gives you structured, secure, and professionally
          prepared learning materials designed for nursing success.
        </p>

        <button className="primary-btn">View Plans</button>
      </div>

    </section>
  );
};

export default Pricing;
