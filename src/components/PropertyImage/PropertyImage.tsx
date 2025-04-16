import SaveListing from '../SaveListing/SaveListing';
import styles from './PropertyImage.module.css';

export interface PropertyImageType {
  imageUrl?: string;
  description?: string;
  className?: string;
  propId?: number;
  loadingType?: 'lazy' | 'eager';
}

function PropertyImage({
  imageUrl = 'underconstruction.webp',
  description,
  className,
  propId,
  loadingType = 'lazy',
}: PropertyImageType) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <img
        className={styles.image}
        src={`/${imageUrl}`}
        alt={description || ''}
        loading={loadingType}
      />
      <SaveListing propId={propId} className={styles.saveListing} />
    </div>
  );
}
export default PropertyImage;
