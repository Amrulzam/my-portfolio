import { type FC } from 'react';
import styles from './Hero.module.css';
import { getAssetUrl } from '../data/portfolioData';
const heroImg = getAssetUrl('assets/pro_2.jpeg');

const Hero: FC = () => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className={`section ${styles.hero}`} aria-label="Hero section">
      <div className={`container ${styles.inner}`}>
        {/* Text content */}
        <div className={styles.content}>
          <p className={styles.intro}>
            <span className={styles.wave} aria-hidden="true">👋</span>
            Hi! I'm Amrul Haq Zameer, a passionate fullstack developer| Software Engineer | AI & Cloud Enthusiast.
          </p>
          {/* <h1 className={styles.heading}>
            A passionate fullstack developer
            <br />
            <span className={styles.highlight}>Based in Sri Lanka.</span>
          </h1> */}
          <p className={styles.desc}>
            Final-year Information Systems Engineering &amp; Informatics student
            passionate about building end-to-end digital solutionsand solving real-world problems through clean and efficient software solutions.
          </p>
          <div className={styles.buttons}>
            <button
              id="hero-contact-btn"
              className="btn-primary"
              onClick={() => scrollTo('#contact')}
              aria-label="Go to contact section"
            >
              Contact me
              <i className="fa-regular fa-envelope" aria-hidden="true" />
            </button>
            <button
              id="hero-work-btn"
              className="btn-secondary"
              onClick={() => scrollTo('#projects')}
              aria-label="Go to projects section"
            >
              See my work
              <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </button>
          </div>

          {/* Quick stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Years learning</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className={styles.imageWrapper} aria-hidden="true">
          <div className={styles.imageBg} />
          <img
            src={heroImg}
            alt="Amrul — Fullstack Developer"
            className={styles.image}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
};

export default Hero;
