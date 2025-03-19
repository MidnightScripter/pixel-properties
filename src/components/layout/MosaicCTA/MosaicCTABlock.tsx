import { ComponentType } from 'react';
import styles from './MosaicCTA.module.css';

export interface MosaicCTABlockProps {
  link: string;
  icon: ComponentType;
  title: string;
  text: string;
}
function MosaicCTABlock({
  link,
  icon: Icon,
  title,
  text,
}: MosaicCTABlockProps) {
  return (
    <a className={styles.cta} href={link}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <h2 className='headline4'>{title}</h2>
      <p>{text}</p>
    </a>
  );
}
export default MosaicCTABlock;
