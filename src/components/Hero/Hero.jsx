import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Al-Yashier Amora</h1>
        <p className={styles.description}>
          I'm a WMSU college student studying Bachelor of Science in Information Technology.
          I specialize in computer hardware servicing and basic network cable management.
          Reach out if you'd like to learn more with me!
        </p>
      </div>

      
      <img
        src={getImageUrl("hero/amora.jpg")}
        alt="Al-Yashier Amora"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
