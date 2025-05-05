import React from "react";
import styles from "./Experience.module.css";
import { Briefcase, Code, Wrench, Server } from "lucide-react";

export const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        
        <div className={styles.experienceList}>
    
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <Briefcase size={24} className={styles.experienceIcon} />
              <div>
                <h2 className={styles.company}>INNOVATESPHERE</h2>
                <p className={styles.role}>System Analyst</p>
                <p className={styles.duration}>2024-2025</p>
              </div>
            </div>
            <ul className={styles.responsibilities}>
              <li>Requirement Gathering & Analysis</li>
              <li>Testing & Quality Assurance</li>
              <li>Project Management Assistance</li>
            </ul>
          </div>

          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <Wrench size={24} className={styles.experienceIcon} />
              <div>
                <h2 className={styles.company}>Quiriones SingkoNet</h2>
                <p className={styles.role}>Hardware Maintenance and Servicing</p>
                <p className={styles.duration}>2018-2020</p>
              </div>
            </div>
            <ul className={styles.responsibilities}>
              <li>Troubleshooting & Diagnostics</li>
              <li>Peripheral & Network Device Support</li>
              <li>Installation & Upgrade</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};