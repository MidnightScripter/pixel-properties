import { useState, useEffect } from 'react';
import styles from './FeaturedListings.module.css';
import FeaturedListing from './FeaturedListing';
import { PropertyDataType } from '../../../types/apiDataTypes';
import { ApiService } from '../../../api/propertiesAPI';

function FeaturedListings() {
  const [data, setData] = useState<PropertyDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getFeaturedProperties();
        setData(response);
      } catch (err) {
        console.error(err as Error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.listingContainer}>
      <h2 className={`headline2 ${styles.headline}`}>Featured Properties</h2>
      <div className={styles.listingWrapper}>
        {data
          ? data.map((data) => {
              return <FeaturedListing listingData={data} key={data.id} />;
            })
          : 'Loading'}
      </div>
    </section>
  );
}
export default FeaturedListings;
