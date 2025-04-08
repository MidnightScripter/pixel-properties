import styles from './FavoritesSheet.module.css';
import { ListingGridType } from '../layout/ListingGrid/ListingGrid';
import { Link } from 'react-router';
import PropertyImage from '../PropertyImage/PropertyImage';
import { formatter } from '../../util/formatter';

interface FavoritesSheetItemType {
  data: ListingGridType;
}
function FavoritesSheetItem({ data, ...props }: FavoritesSheetItemType) {
  return (
    <li className={styles.favoritesListing} {...props}>
      <Link
        className={styles.listingLink}
        to={{ pathname: `/property/${data.id}` }}
        title={`View Details on ${data.title}`}
      >
        <PropertyImage
          propId={data.id}
          imageUrl={data.picture}
          description={`${data.title}: ${data.beds} Beds ${data.baths} Baths`}
        />{' '}
      </Link>
      <div className={styles.listingText}>
        <p>{data.address}</p>
        <p>{formatter.price(data.price)}</p>
        <p>
          Beds: {data.beds} &#8226; Baths: {data.baths}
        </p>
      </div>
    </li>
  );
}
export default FavoritesSheetItem;
