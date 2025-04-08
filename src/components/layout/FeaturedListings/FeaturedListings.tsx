import { useState, useEffect } from 'react';
import styles from './FeaturedListings.module.css';
import FeaturedListing from './FeaturedListing';
import { ApiService } from '../../../api/propertiesAPI';

export interface FeaturedListingType {
  id: number;
  mlsNo: string;
  sqFt: string;
  picture: string;
  address: string;
  city: string;
  state: string;
  county: string;
  price: string;
  beds: string;
  baths: string;
  title: string;
  description: string;
  yearBuilt: number;
  propertyType: string;
  garage: boolean;
  garageSize?: string;
  garageAttached?: boolean;
  lotSize: string;
  squareFootage: string;
  heating: string;
  cooling: string;
  flooring: string;
  HOA: boolean;
  taxAnnualAmount: number;
  taxYear: number;
  schoolDistrict: string;
  featured?: boolean;
}

function FeaturedListings() {
  const [data, setData] = useState<FeaturedListingType[]>([]);

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
