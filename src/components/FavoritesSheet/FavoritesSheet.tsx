import styles from './FavoritesSheet.module.css';
import Sidesheet from '../Sidesheet/Sidesheet';
import { useEffect, useState } from 'react';
import { ListingGridType } from '../layout/ListingGrid/ListingGrid';
import { FeaturedListingType } from '../layout/FeaturedListings/FeaturedListings';
import { Link } from 'react-router';
import PropertyImage from '../PropertyImage/PropertyImage';
import { formatter } from '../../util/formatter';
import { useFavorites } from '../../context/FavoritesContext';
import { ApiService } from '../../api/propertiesAPI';

export interface FavoritesSheetType {
  isOpen: boolean;
  onClose: () => void;
}

function FavoritesSheet({ isOpen, onClose }: FavoritesSheetType) {
  const { favorites } = useFavorites();
  const [data, setData] = useState<FeaturedListingType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const response = await ApiService.postFavorites(favorites);
        const response = await ApiService.getFeaturedProperties();
        setData(response);
        console.log('Favorites synced successfully:', response);
      } catch (err) {
        console.error('Failed to sync favorites:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [favorites]);

  return (
    <Sidesheet isOpen={isOpen} onClose={onClose} title='Your Saved Properties'>
      <h2>TESTING PROPS</h2>
      <ul className={styles.listingWrapper}>
        {data
          ? data.map((data: ListingGridType) => {
              return (
                <li key={data.id} className={styles.listing}>
                  <Link
                    className={styles.listingLink}
                    to={{ pathname: `/property/${data.id}` }}
                    title={`View Details on ${data.title}`}
                  >
                    <PropertyImage
                      propId={data.id}
                      imageUrl={data.picture}
                      description={`${data.title}: ${data.beds} Beds ${data.baths} Baths`}
                    />
                    <div className={styles.listingText}>
                      <p>{data.address}</p>
                      <p>{formatter.price(data.price)}</p>
                      <p>
                        Beds: {data.beds} &#8226; Baths: {data.baths}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })
          : 'Loading'}
      </ul>
    </Sidesheet>
  );
}
export default FavoritesSheet;
