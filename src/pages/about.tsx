// src/pages/About.tsx
import React from "react";
import "./About.css";
import { FaShieldAlt, FaLightbulb, FaAward } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="about-page">

      {/* Hero Section with Background Image */}
      <section className="about-hero">
        
          <div className="hero-text">
            <h1>ABOUT NURSING MADE EASY</h1>
            <h2>Empowering nurses with smarter, faster, and easier learning.</h2>
            <p>
              NME-App is dedicated to providing accessible, structured online notes and quizzes 
              to help nursing students excel in exams and practical skills. Our innovative platform 
              bridges the gap between learning and real-world nursing practice.
            </p>
          </div>
          <div className="hero-image">
            <img src="src/assets/img14.png" alt="Nursing Illustration" />
          </div>
       
      </section>

      

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose NME-App?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>Structured Learning</h3>
            <p>Well-organized notes and quizzes that make learning intuitive and efficient.</p>
          </div>
          <div className="why-card">
            <h3>Interactive Quizzes</h3>
            <p>Engaging quizzes that reinforce knowledge and build confidence.</p>
          </div>
          <div className="why-card">
            <h3>Secure Content</h3>
            <p>Non-downloadable content ensures a safe and professional learning environment.</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
<section className="founders">
  <h2>Hear From Our Founders</h2>

  <div className="founder-cards">

    <div className="founder-card">
      <div className="founder-image">
        <img src="src/assets/nicole6.jpg" alt="Founder Jane Doe" />
      </div>

      <div className="founder-content">
        <h3>Limo Bill</h3>
        <p>
          Our goal is to empower every nursing student to succeed through
          accessible, structured, and interactive learning tools that bridge
          theory and real-world practice.
        </p>
      </div>
    </div>

    <div className="founder-card">
      <div className="founder-image">
        <img src="src/assets/nicole5.jpg" alt="Founder John Smith" />
      </div>

      <div className="founder-content">
        <h3>Nicole Magut</h3>
        <p>
          We believe learning should be engaging, secure, and practical.
          NME-App blends innovation with simplicity to support confident,
          competent nursing professionals.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Reviews Section */}
      <section className="reviews">
        <h2>What Students Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>"NME-App helped me ace my exams! The quizzes are amazing."</p>
            <h4>- Mary K.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="review-card">
            <p>"The notes are so clear and easy to follow. Highly recommended!"</p>
            <h4>- Peter N.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
<section className="core-values">
  <h2>Our Core Values</h2>

  <div className="values-cards">

    <div className="value-card">
      <div className="value-icon">
        <FaShieldAlt />
      </div>
      <h3>Integrity</h3>
      <p>We provide honest and reliable educational content for students.</p>
    </div>

    <div className="value-card">
      <div className="value-icon">
        <FaLightbulb />
      </div>
      <h3>Innovation</h3>
      <p>Continuously improving learning tools with technology and creativity.</p>
    </div>

    <div className="value-card">
      <div className="value-icon">
        <FaAward />
      </div>
      <h3>Excellence</h3>
      <p>Striving for the highest quality in content, support, and learning outcomes.</p>
    </div>

  </div>
</section>

    </div>
  );
};

export default About;
