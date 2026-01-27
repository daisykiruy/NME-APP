import React from "react";
// import { Link } from "react-router-dom";
import "./Services.css";
import { useEffect } from "react";


const Services: React.FC = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-image, .slide-title, .slide-text, .slide-up"
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
    <div className="services-page">


      {/* ===== HERO SERVICES SECTION ===== */}
      <section className="services-hero">
  <div className="services-hero-content">

    {/* Hero Text */}
    <div className="services-hero-text">
      <h1 className="slide-title">OUR SERVICES</h1>
      <h2 className="slide-title">
        Smart learning designed for modern nursing students
      </h2>
      <p className="slide-text">
        Nursing Made Easy provides structured, exam-focused learning tools
        designed to simplify nursing education. From summarized notes to
        interactive quizzes, our services are built to help students learn
        faster, retain more, and perform confidently.
      </p>
    </div>

    {/* Hero Image */}
    <div className="services-hero-img slide-image">
      <img src="src/assets/img31.png" alt="service-hero-img" />
    </div>

  </div>
</section>


{/* ===== WHAT WE OFFER ===== */}
<section className="services-offer">
  <h1>WHAT WE OFFER</h1>
  <h2>Focused solutions for effective nursing education</h2>

  {/* Structured Learning */}
  <div className="offer-card slide-up">
    <div className="offer-row">
      <div className="offer-image">
        <img src="src/assets/img33.png" alt="Structured Learning" />
      </div>
      <div className="offer-text">
        <h3>Structured Learning</h3>
        <p>
          Our learning content is carefully structured to follow nursing
          curricula and examination standards. Topics are broken down into
          logical sections, making it easier for students to understand
          complex concepts without feeling overwhelmed.
          <br /><br />
          Each module builds on the previous one, ensuring steady academic
          progress and stronger knowledge retention.
        </p>
      </div>
    </div>
  </div>

  {/* Interactive Quizzes */}
  <div className="offer-card slide-up">
    <div className="offer-row reverse">
      <div className="offer-text">
        <h3>Interactive Quizzes</h3>
        <p>
          Our quizzes are designed to test understanding, not memorization.
          They simulate real exam conditions and help students identify weak
          areas early.
          <br /><br />
          Instant feedback allows learners to correct mistakes immediately,
          boosting confidence and long-term retention.
        </p>
      </div>
      <div className="offer-image">
        <img src="src/assets/img20.jpg" alt="Interactive Quizzes" />
      </div>
    </div>
  </div>

  {/* Summarized Notes */}
  <div className="offer-card slide-up">
    <div className="offer-row">
      <div className="offer-image">
        <img src="src/assets/img22.jpg" alt="Summarized Notes" />
      </div>
      <div className="offer-text">
        <h3>Summarized Notes</h3>
        <p>
          We provide concise, exam-oriented notes that highlight key points
          without unnecessary detail. These summaries are ideal for quick
          revision before exams or clinical assessments.
          <br /><br />
          The notes are designed to save time while maintaining academic
          accuracy and professional nursing standards.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ===== FAQ SECTION ===== */}
      <section className="services-faq">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <h2>Your questions, clearly answered</h2>

        <div className="faq-list">
          {[
            "Is Nursing Made Easy suitable for all nursing levels?",
            "Are the notes aligned with nursing curricula?",
            "Can I access content on my phone?",
            "Do quizzes track my progress?",
            "Is there free content available?",
            "How secure is the learning material?",
            "Can I use the platform offline?",
            "How often is content updated?",
            "Do you offer exam preparation support?",
            "Is customer support available?"
          ].map((q, index) => (
            <div key={index} className="faq-item">
              <h3>{q}</h3>
              <p>
                Yes. Nursing Made Easy is designed to support students across
                different nursing levels with structured, secure, and updated
                learning materials.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
