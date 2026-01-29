// src/pages/About.tsx
import React from "react";
import "./about.css";
import { FaShieldAlt, FaLightbulb, FaAward, FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const About: React.FC = () => {
  useEffect(() => {
  const track = document.getElementById("reviewsTrack");
  const left = document.getElementById("reviewLeft");
  const right = document.getElementById("reviewRight");

  left?.addEventListener("click", () => {
    track?.scrollBy({ left: -400, behavior: "smooth" });
  });

  right?.addEventListener("click", () => {
    track?.scrollBy({ left: 400, behavior: "smooth" });
  });
}, []);




useEffect(() => {
  const cards = document.querySelectorAll(".why-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const elements = document.querySelectorAll(
    ".slide-image, .slide-title, .slide-text"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);





  return (
    <div className="about-page">

      {/* Hero Section with Background Image */}
      <section className="about-hero">
        
          <div className="hero-text">
            <h1>OUR STORY </h1>
            <h2>Empowering nurses with smarter, faster, and easier learning.</h2>
            <p>
              NME-App is dedicated to providing accessible, structured online notes and quizzes 
              to help nursing students excel in exams and practical skills. Our innovative platform 
              bridges the gap between learning and real-world nursing practice.
            </p>
              <Link to="/pricing" className="cta-btn">Get Started</Link>
          </div>
          <div className="hero-image">
            <img src="src/assets/img9.png" alt="Nursing Illustration" />
          </div>
       
      </section>


{/* WHY CHOOSE US */}
<section className="why-choose">
  <h2>Why Choose NME-App?</h2>

  <div className="why-cards">

    <div className="why-card" data-aos="fade-up">
      <div className="why-card-content">
        <h3>
          <Link to="/services#structured-learning">Structured Learning</Link>
        </h3>

        <p>Well-organized notes and quizzes designed for easy understanding.</p>

        <ul className="why-list">
          <li><FaCheckCircle /> Curriculum-based modules</li>
          <li><FaCheckCircle /> Step-by-step explanations</li>
          <li><FaCheckCircle /> Strong knowledge retention</li>
        </ul>
      </div>
    </div>

    <div className="why-card" data-aos="fade-up" data-aos-delay="150">
      <div className="why-card-content">
        <h3>
          <Link to="/services#interactive-quizzes">Interactive Quizzes</Link>
        </h3>

        <p>Practice-based quizzes that boost confidence and retention.</p>

        <ul className="why-list">
          <li><FaCheckCircle /> Exam-style questions</li>
          <li><FaCheckCircle /> Instant feedback</li>
          <li><FaCheckCircle /> Performance tracking</li>
        </ul>
      </div>
    </div>

    <div className="why-card" data-aos="fade-up" data-aos-delay="300">
      <div className="why-card-content">
        <h3>
          <Link to="/services#summary-notes">Summary Notes</Link>
        </h3>

        <p>Summarized materials that capture a wide range of knowledge.</p>

        <ul className="why-list">
          <li><FaCheckCircle /> Exam-focused summaries</li>
          <li><FaCheckCircle /> Key points highlighted</li>
          <li><FaCheckCircle /> Quick revision ready</li>
        </ul>
      </div>
    </div>

  </div>
</section>


{/* Founders Section */}
<section className="founders">
  <h2>Hear From Our Founders</h2>

  <div className="founder-cards">

    {/* Founder 1 — CEO (FIRST) */}
    <div className="founder-card">

      <div className="founder-header">
        <div className="founder-image slide-image">
          <img src="src/assets/nicole6.jpg" alt="Nicole Jepchumba Magut" />
        </div>

        <div className="founder-title slide-title">
          <h3>CEO</h3>
          <span>Nicole Jepchumba Magut</span>
        </div>
      </div>

      <p className="founder-text slide-text">
        We believe learning should be engaging, secure, and practical.
        NME-App blends innovation with simplicity to support confident,
        competent nursing professionals. Our approach ensures students
        gain both knowledge and confidence needed to excel in real
        healthcare environments.
      </p>

    </div>

    {/* Founder 2 — Co-founder */}
    <div className="founder-card">

      <div className="founder-header">
        <div className="founder-image slide-image">
          <img src="src/assets/limo.jpeg" alt="Limo Bill" />
        </div>

        <div className="founder-title slide-title">
          <h3>CO-FOUNDER</h3>
          <span>Limo Bill</span>
        </div>
      </div>

      <p className="founder-text slide-text">
        Nothing inspires me more than impacting lives. Nursing Made Easy
        is a reflection of my desire to simplify complex concepts and walk
        with learners every step of the way. One reason to help someone
        else outweighs a thousand reasons not to — that is my motivation.
        <br />
        Can we make the world a bit different from how we faced it? 
        This is the question that inspires my waking up and lying down every day. 
        A thousand reasons not to lend a helping hand is feasible but just a single reason 
        to make it simpler for someone else adds flavor to it all.
        Nursing Made Easy to me is a fulfillment of my desire to change the tune. 
        It is a testament that someone ever lived to the fullest of their desires. 
        I hope this will not only move you in matters academics but also in the way
        you think and handle your day-in day-out affairs.
      </p>

    </div>

  </div>
</section>



     {/* Reviews Section */}
<section className="reviews">
  <h2>What Students Say</h2>

  <div className="reviews-wrapper">

    <button className="review-arrow left" id="reviewLeft">
      &#10094;
    </button>

    <div className="reviews-track" id="reviewsTrack">

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

      <div className="review-card">
        <p>"I finally understand complex nursing topics thanks to NME-App."</p>
        <h4>- Grace W.</h4>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>

      <div className="review-card">
        <p>"The structured content saves me so much study time."</p>
        <h4>- Kevin T.</h4>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>

    </div>

    <button className="review-arrow right" id="reviewRight">
      &#10095;
    </button>

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
