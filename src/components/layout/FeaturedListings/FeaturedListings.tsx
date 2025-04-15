import { useState, useEffect } from 'react';
import styles from './FeaturedListings.module.css';
import FeaturedListing from './FeaturedListing';
import { PropertyDataType } from '../../../types/apiDataTypes';
import { ApiService } from '../../../api/propertiesAPI';

function FeaturedListings() {
  const [data, setData] = useState<PropertyDataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getFeaturedProperties();
        setData(response);
      } catch (err) {
        console.error(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.listingContainer}>
      <h2 className={`headline2 ${styles.headline}`}>Featured Properties</h2>
      <div className={styles.listingWrapper}>
        {loading
          ? [...Array(3)].map((_, i) => (
              <FeaturedListing isLoading={loading} key={i} />
            ))
          : data?.map((data) => {
              return <FeaturedListing listingData={data} key={data.id} />;
            })}
      </div>
    </section>
  );
}
export default FeaturedListings;
