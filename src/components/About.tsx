import { type FC } from 'react';
import styles from './About.module.css';
import InfoCard from './InfoCard';
import { infoCards, tools, getAsset } from '../data/portfolioData';

const aboutImg = getAsset('/assets/Prot.jpeg');

const About: FC = () => {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <span className="section-tag">Introduction</span>
          <h2 id="about-heading" className="section-title">About Me</h2>
        </div>

        <div className={styles.grid}>
          {/* Left — image */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src={aboutImg}
                alt="Amrul — portrait photo"
                className={styles.image}
              />
              {/* Floating badge */}
              <div className={styles.badge}>
                <i className="fa-solid fa-code" aria-hidden="true" />
                <span>Fullstack Dev</span>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className={styles.contentCol}>
            <p className={styles.bio}>
              I am a final-year Information Systems undergraduate at the University of Sri Jayewardenepura with hands-on experience in full-stack web development, backend API development, database management, 
              AI integration, and cloud deployment.
            </p>
            <p className={styles.bio}>
              I enjoy building practical software solutions from idea to deployment, including responsive user 
              interfaces, secure REST APIs, database-driven systems, authentication flows, and cloud-hosted 
              applications.
            </p>
            <p className={styles.bio}>
              My main technical interests include full-stack development, backend engineering, software engineering, cloud deployment, and AI-powered applications. I am currently seeking opportunities as a Software Engineering Intern, Associate Software Engineer, Full-Stack Developer, Backend Developer, or AI-related Software Engineer.
            </p>

            {/* Info cards */}
            <div className={styles.cardsGrid}>
              {infoCards.map((card) => (
                <InfoCard key={card.id} card={card} />
              ))}
            </div>

            {/* Tools */}
            <div className={styles.toolsSection}>
              <h3 className={styles.toolsTitle}>
                <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" />
                Tools I Use
              </h3>
              <div className={styles.toolsGrid} role="list">
                {tools.map((tool) => (
                  <div key={tool.name} className={styles.toolItem} role="listitem" title={tool.name}>
                    <img src={tool.image} alt={tool.name} className={styles.toolImg} />
                    <span className={styles.toolName}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
