import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>

        <Link to="/" className={styles.logoMark} onClick={closeMenu}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,4 36,36 4,36" fill="none" stroke="url(#grad)" strokeWidth="2.5" strokeLinejoin="round"/>
            <line x1="10.5" y1="26" x2="29.5" y2="26" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#00d2e6"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${isOpen ? styles.activeOverlay : ""}`}
        onClick={closeMenu}
      />

      <div className={`${styles.sidebar} ${isOpen ? styles.activeSidebar : ""}`}>
        <div className={styles.sidebarLogo}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,4 36,36 4,36" fill="none" stroke="url(#grad2)" strokeWidth="2.5" strokeLinejoin="round"/>
            <line x1="10.5" y1="26" x2="29.5" y2="26" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="grad2" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#00d2e6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <ul className={styles.sidebarLinks}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};