import SaveListing from '../SaveListing/SaveListing';
import styles from './PropertyImage.module.css';

export interface PropertyImageType {
  imageUrl?: string;
  description?: string;
}

function PropertyImage({
  imageUrl = 'underconstruction.webp',
  description,
}: PropertyImageType) {
  return (
    <div className={styles.container}>
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
