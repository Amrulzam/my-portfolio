import { type FC } from 'react';
import styles from './ServiceCard.module.css';
import { type Service } from '../data/portfolioData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`card ${styles.serviceCard}`}>
      <div className={styles.iconWrapper} aria-hidden="true">
        <i className={service.icon} />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
