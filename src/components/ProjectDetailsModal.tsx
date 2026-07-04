import { useEffect, type FC } from 'react';
import { type Project } from '../data/portfolioData';
import styles from './ProjectDetailsModal.module.css';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailsModal: FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        {/* Project Image */}
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} className={styles.image} />
        </div>

        <div className={styles.content}>
          {/* Title */}
          <h2 id="modal-title" className={styles.title}>{project.title}</h2>

          {/* Quick Meta (Role and Status) */}
          <div className={styles.metaRow}>
            {project.role && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role:</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            )}
            {project.status && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Status:</span>
                <span className={styles.metaValue}>{project.status}</span>
              </div>
            )}
          </div>

          {/* Full Description */}
          {project.fullDescription && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>About the Project</h3>
              <p className={styles.text}>{project.fullDescription}</p>
            </div>
          )}

          {/* Problem Solved */}
          {project.problemSolved && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Problem Solved</h3>
              <p className={styles.text}>{project.problemSolved}</p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Key Features</h3>
              <ul className={styles.featureList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tech Stack</h3>
              <div className={styles.badgeContainer}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.badge}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
