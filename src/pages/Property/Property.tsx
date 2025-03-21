import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import FeaturedListings, {
  FeaturedListingType,
} from '../../components/layout/FeaturedListings/FeaturedListings';
import styles from './Property.module.css';
import { formatter } from '../../util/utils';
import Hero from '../../components/layout/Hero/Hero';

function Property() {
  const { propertyId } = useParams();
  const [data, setData] = useState<FeaturedListingType>();
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Start loading animation
        setHasError(false); // Reset error state
        const response = await fetch(`/api/data/${propertyId}`);
        if (!response.ok) {
          throw new Error('Bad Response');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setHasError(true);
      } finally {
        setIsLoading(false); // Stop loading animation
      }
    };
    fetchData();
  }, [propertyId]);

  return (
    <>
      {isLoading ? (
        <>
          <Hero heroImage='/searchHero.webp' heroHeadline='Loading' />
          <p>Loading...</p>
        </>
      ) : hasError ? (
        <>
          <Hero heroImage='/propertyMissing.webp' heroHeadline='Not Found' />
          <div
            className={`${styles.searchTextBlock} ${styles.noPropertyTextBlock}`}
          >
            <h2>Sorry, but this property is no longer found</h2>
            <p>
              Consider some of the popular properties below or{' '}
              <Link className='link' to={{ pathname: '/search' }}>
                Head to our Property Search
              </Link>
            </p>
          </div>
          <FeaturedListings />
        </>
      ) : data ? (
        <>
          <Hero heroImage='/searchHero.webp' heroHeadline='Property Details' />
          <div className={styles.searchTextBlock}>
            <h2>{data.title}</h2>
            <img
              className={styles.listingImage}
              src={`/${data.picture}`}
              alt=''
            />
            <p>{data.description}</p>
            <p className={styles.bedsBaths}>
              <span>Beds: {data.beds}</span>
              <span role='presentation'>&#8226;</span>
              <span>Baths: {data.baths}</span>
            </p>
            <p className={styles.price}>
              {formatter.format(Number(data.price))}
            </p>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Property;
