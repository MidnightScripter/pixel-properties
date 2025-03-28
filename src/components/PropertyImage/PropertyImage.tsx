import SaveListing from '../SaveListing/SaveListing';
import styles from './PropertyImage.module.css';

export interface PropertyImageType {
  imageUrl?: string;
  description?: string;
  className?: string;
}

function PropertyImage({
  imageUrl = 'underconstruction.webp',
  description,
  className,
}: PropertyImageType) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <img
        className={styles.image}
        src={`/${imageUrl}`}
        alt={description || ''}
      />
      <SaveListing className={styles.saveListing} />
    </div>
  );
}
export default PropertyImage;
