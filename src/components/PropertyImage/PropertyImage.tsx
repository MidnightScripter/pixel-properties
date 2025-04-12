import SaveListing from '../SaveListing/SaveListing';
import styles from './PropertyImage.module.css';

export interface PropertyImageType {
  imageUrl?: string;
  description?: string;
  className?: string;
  propId?: number;
}

function PropertyImage({
  imageUrl = 'underconstruction.webp',
  description,
  className,
  propId,
}: PropertyImageType) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <img
        className={styles.image}
        src={`/${imageUrl}`}
        alt={description || ''}
        loading='lazy'
      />
      <SaveListing propId={propId} className={styles.saveListing} />
    </div>
  );
}
export default PropertyImage;
