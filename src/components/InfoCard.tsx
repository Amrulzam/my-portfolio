import { type FC } from 'react';
import styles from './InfoCard.module.css';
import { type InfoCard as InfoCardType } from '../data/portfolioData';

interface InfoCardProps {
  card: InfoCardType;
}

const InfoCard: FC<InfoCardProps> = ({ card }) => {
  return (
    <div className={`card ${styles.infoCard}`}>
      <div className={styles.iconWrapper}>
        <i className={card.icon} aria-hidden="true" />
      </div>
      <h4 className={styles.title}>{card.title}</h4>
      <p className={styles.value}>{card.value}</p>
    </div>
  );
};

export default InfoCard;
