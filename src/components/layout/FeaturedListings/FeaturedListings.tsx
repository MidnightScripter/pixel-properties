import { useState, useEffect } from 'react';
import styles from './FeaturedListings.module.css';
import FeaturedListing from './FeaturedListing';

export interface FeaturedListingType {
  id: string;
  picture: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
  title: string;
  description: string;
}

function FeaturedListings() {
  const [data, setData] = useState<FeaturedListingType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/featured');
        if (!response.ok) {
          throw new Error('Bad Response');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error as Error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className={styles.listingContainer}>
      <h2 className={`display2 ${styles.headline}`}>Featured Properties</h2>
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
