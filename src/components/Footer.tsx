import { type FC } from 'react';
import styles from './Footer.module.css';
import { socialLinks } from '../data/portfolioData';

const Footer: FC = () => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.logo}>amrul</span>
            <p className={styles.tagline}>
              Fullstack Developer &amp; UI/UX Enthusiast based in Sri Lanka.
            </p>
          </div>

          {/* Nav */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={styles.navTitle}>Navigation</p>
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Me', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'My Work', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
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

          {/* Contact / Social */}
          <div className={styles.social}>
            <p className={styles.navTitle}>Connect</p>
            <a
              href="mailto:amrulzameer@gmail.com"
              className={styles.email}
              aria-label="Send email to amrulzameer@gmail.com"
            >
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              amrulzameer@gmail.com
            </a>
            <div className={styles.socialIcons}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  aria-label={`Visit Amrul on ${social.name}`}
                  title={social.name}
                >
                  <img
                    src={social.image}
                    alt={social.name}
                    className={styles.socialImg}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Amrul. All rights reserved.</p>
          <p className={styles.madeWith}>
            Made with React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
