import { ReactNode } from 'react';
import styles from './Hero.module.css';

export interface HeroProps {
  fullHeight?: boolean;
  heroImage: string;
  heroHeadline: ReactNode;
}

function Hero({ fullHeight, heroImage, heroHeadline }: HeroProps) {
  return (
    <section id='hero'>
      <div
        className={`${fullHeight ? styles.fullHeight : ''} ${
          styles.heroContainer
        }`}
      >
        <img className={styles.backgroundImage} src={heroImage} />
        <div className={styles.heroContent}>
          {fullHeight ? (
            heroHeadline
          ) : (
            <h1 className='display1'>{heroHeadline}</h1>
          )}
        </div>
      </div>
    </section>
  );
}
export default Hero;
