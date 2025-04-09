import { ComponentType } from 'react';
import styles from './MosaicCTA.module.css';
import { Link } from 'react-router';

export interface MosaicCTABlockProps {
  link: string;
  icon: ComponentType;
  title: string;
  text: string;
  onClick?: () => void;
}
function MosaicCTABlock({
  link,
  icon: Icon,
  title,
  text,
  onClick,
}: MosaicCTABlockProps) {
  return (
    <Link className={styles.cta} to={{ pathname: link }} onClick={onClick}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <h2 className='headline4'>{title}</h2>
      <p>{text}</p>
    </Link>
  );
}
export default MosaicCTABlock;
