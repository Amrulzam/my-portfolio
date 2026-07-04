import { type FC } from 'react';
import styles from './Services.module.css';
import ServiceCard from './ServiceCard';
import { services } from '../data/portfolioData';

const Services: FC = () => {
  return (
    <section id="services" className={`section ${styles.services}`} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className="section-tag">What I Offer</span>
          <h2 id="services-heading" className="section-title">My Services</h2>
          <p className="section-desc">
            I am a fullstack developer from Sri Lanka with 4 years of experience building
            scalable, modern applications.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
