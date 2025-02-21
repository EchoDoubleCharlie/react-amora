import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Al-Yashier Amora</h1>
        <p className={styles.description}>
          I'm a WMSU college student studying Bachelor of Science in Information Technology. Reach out if you'd like to learn more with me about computer hardware servicing!
        </p>
      </div>
      <img
        src={getImageUrl("hero/amora.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
