import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For icons
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Ashier-Portfolio</h1>

      {/* Hamburger Button */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
        <li><Link to="/blogpost" onClick={toggleMenu}>Blog Post</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>



      </ul>
    </nav>
  );
};
