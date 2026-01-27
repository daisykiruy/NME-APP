// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

type FooterLink = {
  name: string;
  path: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  sections: FooterSection[];
  copyright?: string;
};

const Footer: React.FC<FooterProps> = ({ sections, copyright }) => {
  return (
    <footer className="footer">



      {/* ===== FOOTER CTA ===== */}
        {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to start learning?</h2>
        <Link to="/pricing" className="cta-btn">
          Subscribe Now
        </Link>
      </section>
     

      {/* ===== FOOTER LINKS ===== */}
      <div className="footer-container">
        {sections.map((section) => (
          <div key={section.title} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== SOCIAL MEDIA ICONS ===== */}
      <div className="footer-socials">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="footer-bottom">
        {copyright || `© ${new Date().getFullYear()} NURSING MADE EASY`}
      </div>

    </footer>
  );
};

export default Footer;
