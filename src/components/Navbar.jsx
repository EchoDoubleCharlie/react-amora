import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const PenroseLogo = ({ size = 40, id = "grad" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#00d2e6"/>
      </linearGradient>
    </defs>
    <polygon points="50,6 94,82 6,82" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinejoin="round"/>
    <polygon points="50,22 80,74 20,74" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinejoin="round"/>
    <line x1="6" y1="82" x2="20" y2="74" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
    <line x1="94" y1="82" x2="80" y2="74" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
    <line x1="50" y1="6" x2="50" y2="22" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
    <line x1="20" y1="74" x2="80" y2="74" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
    <line x1="20" y1="74" x2="50" y2="22" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
    <line x1="80" y1="74" x2="50" y2="22" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>

        <Link to="/" className={styles.logoMark} onClick={closeMenu}>
          <PenroseLogo size={42} id="grad1" />
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
          <PenroseLogo size={36} id="grad2" />
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