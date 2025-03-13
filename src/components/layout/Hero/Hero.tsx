import { ReactNode } from 'react';
import styles from './Hero.module.css';

export interface HeroProps {
  fullHeight?: boolean;
  heroImage: string;
  children?: ReactNode;
}

function Hero({ fullHeight, heroImage, children }: HeroProps) {
  return (
    <section id='hero'>
      <div
        className={`${fullHeight ? styles.fullHeight : ''} ${
          styles.heroContainer
        }`}
      >
        <img className={styles.backgroundImage} src={heroImage} />
        <div className={styles.heroContent}>{children}</div>
      </div>
    </section>
  );
}
export default Hero;
