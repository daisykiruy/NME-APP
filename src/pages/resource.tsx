import React, { useEffect } from "react";
import {
  FaBookMedical,
  FaClipboardCheck,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";
import "./Resource.css";

const Resources: React.FC = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-left, .slide-right, .slide-up"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);


useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );

  const bookStack = document.querySelector(".book-animation");
  if (bookStack) observer.observe(bookStack);

  return () => observer.disconnect();
}, []);


  return (
    <section className="resources-section">

      {/* ===== HERO RESOURCES (FLEX) ===== */}
      <div className="resources-hero">

        {/* left TEXT */}
        <div className="resources-header slide-left">
          <h1>LEARNING RESOURCES</h1>
          <h2>Everything you need to study smarter and succeed faster</h2>
          <p>
            Nursing Made Easy provides a wide range of carefully curated
            resources designed to support nursing students throughout
            their academic journey. All materials are structured,
            exam-focused, and easy to understand.
          </p>
        </div>

        {/* right IMAGE */}
        <div className="resources-hero-image slide-right">
          <img src="src/assets/img13.png" alt="Nursing resources" />
        </div>

      </div>

      {/* ===== FEATURED RESOURCES ===== */}
      <div className="featured-resources">
        <h2>Featured Resources</h2>

        <div className="resource-categories">

          <div className="resource-card slide-up">
            <FaBookMedical className="resource-icon" />
            <h3>Nursing Notes</h3>
            <p>
              Well-organized nursing notes aligned with curriculum
              requirements and examination standards.
            </p>
          </div>

          <div className="resource-card slide-up">
            <FaClipboardCheck className="resource-icon" />
            <h3>Practice Quizzes</h3>
            <p>
              Exam-style quizzes that help identify weak areas and
              reinforce learning through practice.
            </p>
          </div>

          <div className="resource-card slide-up">
            <FaVideo className="resource-icon" />
            <h3>Learning Guides</h3>
            <p>
              Step-by-step guides to help students revise efficiently
              and prepare confidently for exams.
            </p>
          </div>

          <div className="resource-card slide-up">
            <FaFileAlt className="resource-icon" />
            <h3>Quick Summaries</h3>
            <p>
              Concise summaries highlighting key nursing concepts for
              last-minute revision.
            </p>
          </div>

        </div>
      </div>

      {/* ===== NEW BOOK INTRO ===== */}
      <div className="book-intro">

        <h2>
          Obstetric Emergencies Made Easy
          <span className="new-badge">What’s New</span>
        </h2>

        <div className="book-intro-content">

          {/* LEFT TEXT */}
          <div className="book-text slide-left">
            <p>
              <strong>Obstetric Emergencies Made Easy</strong> is a
              comprehensive, exam-oriented guide designed to simplify
              the management of critical obstetric conditions. The book
              covers high-yield topics including postpartum hemorrhage,
              pre-eclampsia and eclampsia, obstructed labor, shoulder
              dystocia, sepsis, uterine rupture, and neonatal
              resuscitation.
              <br /><br />
              Each topic is presented using clear explanations,
              step-by-step emergency protocols, clinical tips, and
              memory aids to help nursing students respond confidently
              in real clinical situations.
            </p>
          </div>

          {/* RIGHT BOOK ANIMATION */}
          <div className="book-animation slide-right">
            <img src="src/assets/book1.jpg" className="book book-1" alt="Book 1" />
            <img src="src/assets/book2.jpg" className="book book-2" alt="Book 2" />
            <img src="src/assets/book3.jpg" className="book book-3" alt="Book 3" />
            <img src="src/assets/book4.jpg" className="book book-4" alt="Book 4" />
            <img src="src/assets/book5.jpg" className="book book-5" alt="Book 5" />
          </div>

        </div>
      </div>

      {/* ===== CTA (CARD + IMAGE) ===== */}
      <div className="resources-cta-wrapper">

        {/* IMAGE */}
        <div className="cta-image slide-right">
          <img src="src/assets/img8.png" alt="Student holding card" />
        </div>

        {/* CARD */}
        <div className="resources-cta slide-left">
          <h2>Ready to access quality nursing resources?</h2>
          <p>
            Join Nursing Made Easy today and take control of your
            learning experience with structured, reliable, and secure
            study materials.
          </p>
          <button className="cta-btn">Explore Resources</button>
        </div>

      </div>

    </section>
  );
};

export default Resources;
