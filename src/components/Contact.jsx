import React from "react";
import styles from "./Contact.module.css";
import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
       
        <p className={styles.description}>
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className={styles.contactInfo}>
          <p>Email: amoraalyashier00@gmail.com</p>
          <p>Phone: +63 975 542 8821</p>
          <p>Location: Zamboanga City, Philippines 7000</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/ashiernakama" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            <FaInstagram />
          </a>
          <a href="https://github.com/EchoDoubleCharlie" target="_blank" rel="noopener noreferrer" className={styles.github}>
            <FaGithub />
          </a>
          <a href="https://www.tiktok.com/@ashier0000" target="_blank" rel="noopener noreferrer" className={styles.tiktok}>
  <FaTiktok />
</a>

        </div>
      </div>
    </section>
  );
};
