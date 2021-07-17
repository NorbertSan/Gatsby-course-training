import { Link } from 'gatsby';
import React from 'react';
import styles from './Header.module.scss';

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
            className={styles.link}
            activeClassName={styles.link_active}
            to="/about"
          >
            About
          </Link>
          <Link
            className={styles.link}
            activeClassName={styles.link_active}
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
