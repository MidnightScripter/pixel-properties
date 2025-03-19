import { FeaturedListingType } from './FeaturedListings';
import styles from './FeaturedListings.module.css';
import { formatter } from '../../../util/utils';
import SaveListing from '../../SaveListing/SaveListing';

export interface FeaturedListingProps {
  imageOnRight?: boolean;
  listingData: FeaturedListingType;
}
function FeaturedListing({ imageOnRight, listingData }: FeaturedListingProps) {
  function handleSave(propId: string) {
    console.log(propId);
  }
  return (
    <div
      className={`${imageOnRight ? styles.imageOnRight : ''} ${styles.listing}`}
    >
      <div className={styles.imageBlock}>
        <img className={styles.listingImage} src={listingData.picture} alt='' />
        <span className={styles.saveListing}>
          <SaveListing onClick={() => handleSave(listingData.id)} />
        </span>
      </div>
      <div className={styles.descriptionBlock}>
        <h3 className={styles.title}>{listingData.title}</h3>
        <p>{listingData.description}</p>
        <p className={styles.bedsBaths}>
          <span>Beds: {listingData.beds}</span>
          <span role='presentation'>&#8226;</span>
          <span>Baths: {listingData.baths}</span>
        </p>
        <p className={styles.price}>
          {formatter.format(Number(listingData.price))}
        </p>
      </div>
    </div>
  );
}
export default FeaturedListing;
