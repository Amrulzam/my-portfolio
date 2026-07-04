import { type FC } from 'react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark'
        ? <i className="fa-regular fa-sun" aria-hidden="true" />
        : <i className="fa-regular fa-moon" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
