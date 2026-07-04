import { useEffect, useRef, type FC } from 'react';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About Me',   href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'My Work',    href: '#projects' },
  { label: 'Contact Me', href: '#contact' },
];

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Trap focus and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} aria-label="Close menu" />

      {/* Drawer */}
      <nav
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.brand}>Amrul</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ animationDelay: `${index * 0.06}s` }}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.drawerFooter}>
          <p>© 2026 Amrul</p>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
