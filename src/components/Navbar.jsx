import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Portfolio</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};
