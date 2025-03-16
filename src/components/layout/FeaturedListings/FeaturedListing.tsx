import { FeaturedListingType } from './FeaturedListings';
import styles from './FeaturedListings.module.css';
import { formatter } from '../../../util/utils';

export interface FeaturedListingProps {
  imageOnRight?: boolean;
  listingData: FeaturedListingType;
}
function FeaturedListing({ imageOnRight, listingData }: FeaturedListingProps) {
  return (
    <div
      className={`${imageOnRight ? styles.imageOnRight : ''} ${styles.listing}`}
    >
      <img className={styles.listingImage} src={listingData.picture} alt='' />
      <div className={styles.descriptionBlock}>
        <h3>{listingData.title}</h3>
        <p>{listingData.description}</p>
        <p>Beds:{listingData.beds}</p>
        <p>Baths:{listingData.baths}</p>
        <p>{formatter.format(Number(listingData.price))}</p>
      </div>
    </div>
  );
}
export default FeaturedListing;
