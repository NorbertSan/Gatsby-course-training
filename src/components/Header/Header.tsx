import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Header.module.scss';

const partlyActive = () => ({
  isPartiallyCurrent,
}: {
  isPartiallyCurrent: boolean;
}) => ({
  className: isPartiallyCurrent ? styles.link_active : ``,
});

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <Link
            className={styles.link}
            activeClassName={styles.link_active}
            to="/"
          >
            Home
          </Link>
          <Link
            getProps={partlyActive()}
            className={styles.link}
            // activeClassName={styles.link_active}
            to="/about"
          >
            About
          </Link>
          <Link
            getProps={partlyActive()}
            className={styles.link}
            // activeClassName={styles.link_active}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            getProps={partlyActive()}
            className={styles.link}
            // activeClassName={styles.link_active}
            to="/blog"
          >
            Blog
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
