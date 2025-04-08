import styles from './FavoritesSheet.module.css';
import Sidesheet from '../Sidesheet/Sidesheet';
import { useEffect, useState } from 'react';
import { ListingGridType } from '../layout/ListingGrid/ListingGrid';
import { FeaturedListingType } from '../layout/FeaturedListings/FeaturedListings';
import { useFavorites } from '../../context/FavoritesContext';
import { ApiService } from '../../api/propertiesAPI';
import FavoritesSheetItem from './FavoritesSheetItem';

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
        const response = await ApiService.postFavorites(favorites);
        setData(response);
        console.log('Favorites synced successfully:', response);
      } catch (err) {
        console.error('Failed to sync favorites:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [favorites, isOpen]);

  return (
    <Sidesheet
      size='l'
      isOpen={isOpen}
      onClose={onClose}
      title='Your Saved Properties'
    >
      <ul className={styles.favoritesListingWrapper}>
        {data
          ? data.map((data: ListingGridType) => {
              return <FavoritesSheetItem key={data.id} data={data} />;
            })
          : 'Loading'}
      </ul>
    </Sidesheet>
  );
}
export default FavoritesSheet;
