import styles from './PageLayout.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/layout/Footer/Footer';
import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}
function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.pageContainer}>
      <header>
        <Nav />
      </header>
      <main className={styles.contentContainer}>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
