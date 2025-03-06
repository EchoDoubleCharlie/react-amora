import React from "react";
import styles from "./AboutMe.module.css";
import { User, Wrench, Move, Code, Heart } from "lucide-react"; 
export const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I'm Al-Yashier Amora, an aspiring IT professional passionate about computer hardware servicing.
          I enjoy maintaining and optimizing computer systems to ensure peak performance.
        </p>

       
        <div className={styles.aboutList}>
          <div className={styles.aboutItem}>
            <User size={30} className={styles.icon} />
            <span>BSIT Student at WMSU</span>
          </div>
          <div className={styles.aboutItem}>
            <Wrench size={30} className={styles.icon} />
            <span>Computer Hardware Servicing</span>
          </div>
          <div className={styles.aboutItem}>
            <Move size={30} className={styles.icon} /> 
            <span>Passionate About Running & Trail Running</span>
          </div>
          <div className={styles.aboutItem}>
            <Code size={30} className={styles.icon} />
            <span>Interested in IT & System Maintenance</span>
          </div>
          <div className={styles.aboutItem}>
            <Heart size={30} className={styles.icon} />
            <span>Dedicated & Passionate in My Work</span>
          </div>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
