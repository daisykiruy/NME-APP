// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 
import { useEffect, useState } from "react";
// Icons for Features section
import {
  FaBook,
  FaClipboardCheck,
  FaStar,
  FaLock,
  FaChartLine,
  FaClock
} from "react-icons/fa";

const AnimatedCounter: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
}> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);



  useEffect(() => {
  const cards = document.querySelectorAll(".about-card, .feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);


  return (
    <h2>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};


const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>NURSING </h1>
          <h2>MADE EASY</h2>
          <p>
            Learn smarter, faster, and easier with online notes, quizzes, and premium content for nurses-in-training.
          </p>
          <Link to="/pricing" className="cta-btn">
            Get Started
          </Link>

          <div className="hero-counters">
            <div className="counter-item">
               <div className="counter-card">
                <AnimatedCounter end={500} suffix="+" />
            </div>
           <p>Happy Students</p>
          </div>

         <div className="counter-item">
            <div className="counter-card">
             <AnimatedCounter end={1000} suffix="+" />
           </div>
           <p>Study Resources</p>
         </div>

        <div className="counter-item">
          <div className="counter-card">
           <AnimatedCounter end={98} suffix="%" />
          </div>
          <p>Pass Rate</p>
         </div>
        </div>

        </div>
        <div className="hero-image">
          <img src="src/assets/hero-img3.png" alt="Nursing Illustration" />
        </div>
      </section>

      {/* about section */}
      <section className="about-section">
  <div className="about-header">
    <h1 className="about-title">
      who are we?
    </h1>

    <h2 className="about-subtitle">
      simplifying nursing education through accessible, student-focused learning
    </h2>
  </div>

  <div className="about-content">
    <div className="about-text ">

     <h2 className="about-subtitle">
      Simplify nursing
    </h2>

      <p>
        Nursing Made Easy was created with one clear goal — to make nursing
        education simpler, more understandable, and less overwhelming.
        Over the years, nursing students have struggled with dense textbooks,
        complex medical terms, and limited access to simplified learning resources.
      </p>

      <p>
        We bridge this gap by breaking down nursing concepts into clear,
        practical explanations supported by well-structured study materials.
        Our platform is designed to support students at every stage of their
        nursing journey, from beginners to advanced learners.
      </p>
    </div>

    <div className="about-image ">
      <img src="src/assets/img16.jpg" alt="Nursing students learning" />
    </div>
  </div>

  <div className="about-cards">
    <div className="about-card ">
      <h3>our mission</h3>
      <p>
        To empower nursing students by providing clear, reliable, and
        easy-to-understand learning resources that improve confidence,
        competence, and academic success.
      </p>
    </div>

    <div className="about-card ">
      <h3>our vision</h3>
      <p>
        To become a trusted global learning companion for nursing students,
        shaping a future where nursing education is accessible, engaging,
        and stress-free.
      </p>
    </div>
  </div>
</section>


     {/* Features Section */}
<section className="features">
  <h2>Our Features</h2>

  <div className="features-cards">
    {/* Feature 1 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaBook />
      </div>
      <h3>Extensive Notes</h3>
      <p>
        Access a rich library of well-structured nursing notes organized by topics and exams.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaClipboardCheck />
      </div>
      <h3>Interactive Quizzes</h3>
      <p>
        Test your knowledge regularly with quizzes designed to strengthen understanding and retention.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaStar />
      </div>
      <h3>Premium Access</h3>
      <p>
        Unlock advanced content, exclusive quizzes, and full study materials with a subscription.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaLock />
      </div>
      <h3>Secure Learning</h3>
      <p>
        Content is fully protected—no downloads or screenshots—to ensure safe and professional learning.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaChartLine />
      </div>
      <h3>Progress Tracking</h3>
      <p>
        Monitor your quiz performance and learning progress over time with ease and clarity.
      </p>
    </div>

    {/* Feature 6 */}
    <div className="feature-card">
      <div className="feature-icon">
        <FaClock />
      </div>
      <h3>Flexible Learning</h3>
      <p>
        Study anytime, anywhere at your own pace on a responsive and user-friendly platform.
      </p>
    </div>
  </div>
</section>


     {/* How It Works Section */}
<section className="steps">
  <h2>How It Works</h2>

  <div className="steps-cards">
    {/* Step 1 */}
    <div className="step">
      <h3>1. Sign Up</h3>
      <p>Create an account in seconds to start your learning journey.</p>
    </div>

    {/* Arrow */}
    <div className="step-arrow">→</div>

    {/* Step 2 */}
    <div className="step">
      <h3>2. Explore</h3>
      <p>Access free notes and quizzes, and preview premium content.</p>
    </div>

    <div className="step-arrow">→</div>

    {/* Step 3 */}
    <div className="step">
      <h3>3. Subscribe & Learn</h3>
      <p>Subscribe to unlock full content and track your progress efficiently.</p>
    </div>

    <div className="step-arrow">→</div>

    {/* Step 4 */}
    <div className="step">
      <h3>4. Review & Improve</h3>
      <p>Take quizzes and revise regularly to excel in your exams.</p>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to start learning?</h2>
        <Link to="/pricing" className="cta-btn">
          Subscribe Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
