import { FeaturedListingType } from './FeaturedListings';
import styles from './FeaturedListings.module.css';
import { formatter } from '../../../util/formatter';
import { Link } from 'react-router';
import PropertyImage from '../../PropertyImage/PropertyImage';

export interface FeaturedListingProps {
  imageOnRight?: boolean;
  listingData: FeaturedListingType;
}
function FeaturedListing({ imageOnRight, listingData }: FeaturedListingProps) {
  return (
    <div
      className={`${imageOnRight ? styles.imageOnRight : ''} ${styles.listing}`}
    >
      <div className={styles.imageBlock}>
        <PropertyImage imageUrl={listingData.picture} propId={listingData.id} />
      </div>
      <div className={styles.descriptionBlock}>
        <h3 className={styles.title}>{listingData.title}</h3>
        <p>{listingData.description}</p>
        <p className={styles.bedsBaths}>
          <span>Beds: {listingData.beds}</span>
          <span role='presentation'>&#8226;</span>
          <span>Baths: {listingData.baths}</span>
        </p>
        <p className={styles.price}>{formatter.price(listingData.price)}</p>
        <span className={styles.linkWrapper}>
          <Link
            to={{ pathname: `/property/${listingData.id}` }}
            aria-label={`See Details about ${listingData.title}`}
            className={styles.link}
          >
            See More Details
            <span aria-hidden className={styles.seeMoreIcon}>
              &#62;
            </span>
          </Link>
          <span aria-hidden className={styles.linkBackground}></span>
        </span>
      </div>
    </div>
  );
}
export default FeaturedListing;
