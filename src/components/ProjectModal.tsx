import { useEffect, type FC } from 'react';
import { type Project } from '../data/portfolioData';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={`${styles.overlay} ${project ? styles.open : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={styles.modal}>
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close project details"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        {/* Project image */}
        <div className={styles.imageSection}>
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className={styles.image}
          />
          <div className={styles.imageBadges}>
            {project.category && (
              <span className={styles.categoryBadge}>
                <i className="fa-solid fa-layer-group" aria-hidden="true" />
                {project.category}
              </span>
            )}
            {project.year && (
              <span className={styles.yearBadge}>
                <i className="fa-regular fa-calendar" aria-hidden="true" />
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.actionBtns}>
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary ${styles.actionBtn}`}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  Live Demo
                </a>
              ) : null}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-secondary ${styles.actionBtn}`}
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                  Source Code
                </a>
              ) : null}
              {!project.liveLink && !project.githubLink && (
                <span className={styles.comingSoon}>
                  <i className="fa-regular fa-clock" aria-hidden="true" />
                  Links coming soon
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>{project.description}</p>

          <div className={styles.body}>
            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <i className="fa-solid fa-list-check" aria-hidden="true" />
                  Key Features
                </h3>
                <ul className={styles.featureList}>
                  {project.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <i className="fa-solid fa-circle-check" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <i className="fa-solid fa-code" aria-hidden="true" />
                Tech Stack
              </h3>
              <div className={styles.techGrid}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
