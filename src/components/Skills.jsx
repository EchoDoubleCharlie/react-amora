import React from "react";
import styles from "./Skills.module.css";
import { Wrench, Cpu, Network, Trash2, Settings } from "lucide-react"; 

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <Wrench size={40} className={styles.skillIcon} />
          <span>Hardware Troubleshooting</span>
        </div>
        <div className={styles.skillCard}>
          <Cpu size={40} className={styles.skillIcon} />
          <span>PC Repair & Maintenance</span>
        </div>
        <div className={styles.skillCard}>
          <Network size={40} className={styles.skillIcon} />
          <span>Basic Network Cable Management</span>
        </div>
        <div className={styles.skillCard}>
          <Trash2 size={40} className={styles.skillIcon} />
          <span>Junk File Cleanup & Optimization</span>
        </div>
        <div className={styles.skillCard}>
          <Settings size={40} className={styles.skillIcon} />
          <span>System Maintenance</span>
        </div>
      </div>
    </div>
  );
};
