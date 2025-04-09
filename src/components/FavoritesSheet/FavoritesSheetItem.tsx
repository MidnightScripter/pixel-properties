import styles from './FavoritesSheet.module.css';
import { ListingGridType } from '../layout/ListingGrid/ListingGrid';
import { Link, useNavigate } from 'react-router';
import PropertyImage from '../PropertyImage/PropertyImage';
import { formatter } from '../../util/formatter';
import Button from '../Button/Button';

interface FavoritesSheetItemType {
  data: ListingGridType;
  onClose: () => void;
}
function FavoritesSheetItem({
  data,
  onClose,
  ...props
}: FavoritesSheetItemType) {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    onClose(); // Close the sidesheet
    navigate(path); // Navigate to the property details page
  };
  return (
    <li className={styles.favoritesListing} {...props}>
      <Link
        className={styles.propertyImage}
        to={{ pathname: `/property/${data.id}` }}
        title={`View Details on ${data.title}`}
        onClick={onClose}
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
        <span className={styles.buttonCTA}>
          <Button
            label='More Details'
            aria-label={`More Details for ${data.address}`}
            onClick={() => handleNavigate(`/property/${data.id}`)}
          />
        </span>
      </div>
    </li>
  );
}
export default FavoritesSheetItem;
