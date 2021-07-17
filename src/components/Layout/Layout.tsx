import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.main_container}>
      <Header />
      <main className={styles.flex_grow_1}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
