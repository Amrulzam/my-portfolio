import { useState, useEffect, type FC } from 'react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'My Work',  href: '#projects' },
];

const Header: FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={`container ${styles.inner}`}>
          {/* Logo / Brand */}
          <a
            href="#home"
            className={styles.brand}
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            aria-label="Amrul — back to top"
          >
            Amrul
          </a>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className={styles.controls}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              className={`btn-primary ${styles.contactBtn}`}
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            >
              Contact
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>
            {/* Hamburger — mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <i className="fa-solid fa-bars" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
