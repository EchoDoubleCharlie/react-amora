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
        <p className={styles.description}>
          Besides technology, I have a deep passion for running and trail running. Exploring new trails and
          pushing my physical limits in nature is something that excites me. Running helps me stay focused
          and disciplined, both in my personal and professional life.
        </p>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
