import React from "react";
import { FaBookMedical, FaClipboardCheck, FaVideo, FaFileAlt } from "react-icons/fa";
import "./Resource.css";

const Resources: React.FC = () => {
  return (
    <section className="resources-section">

      {/* ===== RESOURCES INTRO ===== */}
      <div className="resources-header">
        <h1>LEARNING RESOURCES</h1>
        <h2>Everything you need to study smarter and succeed faster</h2>
        <p>
          Nursing Made Easy provides a wide range of carefully curated resources
          designed to support nursing students throughout their academic journey.
          All materials are structured, exam-focused, and easy to understand.
        </p>
      </div>

      {/* ===== RESOURCE CATEGORIES ===== */}
      <div className="resource-categories">

        <div className="resource-card">
          <FaBookMedical className="resource-icon" />
          <h3>Nursing Notes</h3>
          <p>
            Well-organized notes covering core nursing subjects, written in
            simple language to help you grasp concepts quickly.
          </p>
        </div>

        <div className="resource-card">
          <FaClipboardCheck className="resource-icon" />
          <h3>Practice Quizzes</h3>
          <p>
            Topic-based quizzes that simulate real exams and help identify
            weak areas early.
          </p>
        </div>

        <div className="resource-card">
          <FaVideo className="resource-icon" />
          <h3>Learning Guides</h3>
          <p>
            Step-by-step study guides that show you how to revise effectively
            and prepare for exams with confidence.
          </p>
        </div>

        <div className="resource-card">
          <FaFileAlt className="resource-icon" />
          <h3>Quick Summaries</h3>
          <p>
            Concise summaries for last-minute revision, highlighting only the
            most important nursing points.
          </p>
        </div>

      </div>

      {/* ===== FEATURED RESOURCES ===== */}
      <div className="featured-resources">
        <h2>Featured Resources</h2>

        <div className="featured-grid">

          <div className="featured-item">
            <span className="tag">Popular</span>
            <h3>Fundamentals of Nursing Notes</h3>
            <p>
              A complete breakdown of nursing fundamentals, perfect for both
              beginners and revision.
            </p>
            <button>View Resource</button>
          </div>

          <div className="featured-item">
            <span className="tag">New</span>
            <h3>Medical-Surgical Quiz Pack</h3>
            <p>
              Test your understanding with professionally designed quiz
              questions aligned with exams.
            </p>
            <button>Start Quiz</button>
          </div>

          <div className="featured-item">
            <span className="tag premium">Premium</span>
            <h3>Exam Revision Bundle</h3>
            <p>
              A premium collection of summarized notes and quizzes designed
              for final exam preparation.
            </p>
            <button>Unlock Access</button>
          </div>

        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="resources-cta">
        <h2>Ready to access quality nursing resources?</h2>
        <p>
          Join Nursing Made Easy today and take control of your learning
          experience with structured, reliable, and secure study materials.
        </p>
        <button className="cta-btn">Explore Resources</button>
      </div>

    </section>
  );
};

export default Resources;
