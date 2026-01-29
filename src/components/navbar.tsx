// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

type NavLink = {
  name: string;
  path: string;
};

type NavbarProps = {
  logo: string;
  links: NavLink[];
  ctaText?: string;
  ctaLink?: string;
};

const Navbar: React.FC<NavbarProps> = ({ logo, links, ctaText, ctaLink }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="NME Logo" />
          <span>NURSING MADE EASY</span>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="navbar-cta">
            {ctaText}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
