// src/components/Footer.tsx
import React from "react";
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
      <div className="footer-bottom">
        {copyright || `© ${new Date().getFullYear()} NURSING MADE EASY`}
      </div>
    </footer>
  );
};

export default Footer;
