import styles from "./Projects.module.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Amora Portfolio",
    description: "A personal portfolio website built with React and Vite, showcasing skills and experience. Created for academic purpose.",
    tags: ["React", "Vite", "CSS Modules"],
    github: "https://github.com/EchoDoubleCharlie/react-amora.git",
    live: "https://echodoublecharlieact-amora",
  },
];

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.links}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink}>
                    <FiGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={styles.iconLink}>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span className={styles.tag} key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};