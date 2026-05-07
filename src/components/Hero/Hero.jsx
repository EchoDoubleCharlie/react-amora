import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>

      <div
        className={styles.bgFace}
        style={{ backgroundImage: `url(${getImageUrl("hero/amora.jpg")})` }}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.tagline}>IT Student · Hardware · Networking</span>
        <h1 className={styles.title}>
          <span className={styles.firstName}>Al-Yashier</span>
          <span className={styles.lastName}>Amora.</span>
        </h1>
        <p className={styles.description}>
          I'm a WMSU college student studying Bachelor of Science in Information Technology.
          I specialize in computer hardware servicing and basic network cable management.
          Reach out if you'd like to learn more with me!
        </p>
      </div>

    </section>
  );
};