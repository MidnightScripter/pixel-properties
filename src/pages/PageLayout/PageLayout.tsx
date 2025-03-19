import styles from './PageLayout.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/layout/Footer/Footer';
import Hero from '../../components/layout/Hero/Hero';
import { ReactNode } from 'react';

export interface PageLayoutProps {
  heroUrl?: string;
  heroHeadline?: string;
  children: ReactNode;
}
function PageLayout({
  heroUrl = '/searchHero.webp',
  heroHeadline,
  children,
}: PageLayoutProps) {
  return (
    <div className={styles.pageContainer}>
      <header>
        <Nav />
      </header>
      <main className={styles.contentContainer}>
        <Hero heroImage={heroUrl}>
          {heroHeadline && <h1 className='display1'>{heroHeadline}</h1>}
        </Hero>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
