import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>
        Feel free to reach out if you have any questions or just want to connect!
      </p>

   
      <div className={styles.contactList}>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>Email: amoraalyashier00@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <span>Phone: +63 975 542 8821</span>
        </div>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Location: Zamboanga City, Philippines</span>
        </div>
      </div>

     
      <div className={styles.socialLinks}>
        <a href="https://instagram.com/ashiernakama" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.instagram} />
        </a>
        <a href="https://github.com/EchoDoubleCharlie" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.github} />
        </a>
        <a href="https://www.tiktok.com/@ashier0000" target="_blank" rel="noopener noreferrer">
          <FaTiktok className={styles.tiktok} />
        </a>
      </div>
    </section>
  );
};
