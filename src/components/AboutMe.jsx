import React from "react";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing. 
          I enjoy maintaining and optimizing computer systems to ensure peak performance.
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
