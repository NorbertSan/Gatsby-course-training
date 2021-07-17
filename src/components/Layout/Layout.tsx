import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.main_container}>
      <Header />
      <h2>{data.site.siteMetadata.title}</h2>
      <main className={styles.flex_grow_1}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
