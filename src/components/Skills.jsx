import React from "react";
import styles from "./Skills.module.css";
import { Wrench, Cpu, Network, HardDriveDownload, Trash2, Settings } from "lucide-react"; 

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <Wrench size={40} className={styles.skillIcon} />
          <p>Hardware Troubleshooting</p>
        </div>
        <div className={styles.skillCard}>
          <Cpu size={40} className={styles.skillIcon} />
          <p>PC Repair & Maintenance</p>
        </div>
        <div className={styles.skillCard}>
          <Network size={40} className={styles.skillIcon} />
          <p>Basic Network Cable Management</p>
        </div>
        <div className={styles.skillCard}>
          <Trash2 size={40} className={styles.skillIcon} />
          <p>Junk File Cleanup & Optimization</p>
        </div>
        <div className={styles.skillCard}>
          <Settings size={40} className={styles.skillIcon} />
          <p>System Maintenance</p>
        </div>
      </div>
    </div>
  );
};
