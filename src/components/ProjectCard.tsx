import { type FC } from 'react';
import styles from './ProjectCard.module.css';
import { type Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => {
  // Handle accessibility key presses (Enter or Space)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={`card ${styles.projectCard}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <span className={styles.overlayText}>
            <i className="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i> View Details
          </span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.shortDescription}</p>

        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <div className={styles.viewDetailsRow}>
          <span className={styles.viewDetailsLink}>
            View Details <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
