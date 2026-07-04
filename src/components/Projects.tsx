import { useState, type FC } from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import { projects, type Project } from '../data/portfolioData';

const INITIAL_COUNT = 3;

const Projects: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className="section-tag">My Portfolio</span>
          <h2 id="projects-heading" className="section-title">My Latest Work</h2>
          <p className="section-desc">
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in front-end and full-stack development.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className={styles.toggle}>
            <button
              id="show-more-btn"
              className="btn-secondary"
              onClick={() => setShowAll(prev => !prev)}
              aria-expanded={showAll}
              aria-controls="projects-grid"
            >
              {showAll ? (
                <>Show less <i className="fa-solid fa-chevron-up" aria-hidden="true" /></>
              ) : (
                <>Show more <i className="fa-solid fa-arrow-right-long" aria-hidden="true" /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
