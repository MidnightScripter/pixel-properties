import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import FeaturedListings, {
  FeaturedListingType,
} from '../../components/layout/FeaturedListings/FeaturedListings';
import styles from './Property.module.css';
import { formatter } from '../../util/formatter';
import Hero from '../../components/layout/Hero/Hero';
import ErrorUI from '../ErrorUI/ErrorUI';
import PropertyDetailBlock from '../../components/PropertyDetail/PropertyDetailBlock';
import PropertyImage from '../../components/PropertyImage/PropertyImage';
import { ApiService } from '../../api/propertiesAPI';
import { Bed, Shower } from '../../assets/icons';

function Property() {
  const { propertyId } = useParams();
  const [data, setData] = useState<FeaturedListingType>();
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Error state

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true); // Start loading animation
  //       setHasError(false); // Reset error state
  //       const response = await fetch(`/api/data/${propertyId}`);
  //       if (!response.ok) {
  //         throw new Error('Bad Response');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setHasError(true);
  //     } finally {
  //       setIsLoading(false); // Stop loading animation
  //     }
  //   };
  //   fetchData();
  // }, [propertyId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await ApiService.getPropertyById(propertyId || 0);
        setData(response);
      } catch (err) {
        setHasError(true);
        console.log((err as Error).message);
      } finally {
        setIsLoading(false);
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
        <ErrorUI
          errorImage='/propertyMissing.webp'
          errorHeadline='Not Found'
          messageBody={
            <>
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
              <FeaturedListings />{' '}
            </>
          }
        />
      ) : data ? (
        <>
          <Hero heroImage='/searchHero.webp' heroHeadline='Property Details' />
          <div className={styles.propertyDescriptionWrapper}>
            <div className={styles.propertyIntro}>
              <h2 className={`headline2 ${styles.headline}`}>
                {data.address} {data.city}, {data.state}
              </h2>
              <span className={styles.imageContainer}>
                <PropertyImage
                  propId={data.id}
                  imageUrl={data.picture}
                  className={styles.image}
                />
              </span>
              <h3 className='headline3'>{data.title}</h3>
              <h4 className={`headline3 ${styles.price}`}>
                {formatter.price(data.price)}
              </h4>
              <p className={styles.propertyShort}>
                <span>
                  <Bed />
                </span>
                Beds: {data.beds}
                <span aria-hidden>&#8226;</span>
                <span>
                  <Shower />
                </span>
                Baths: {data.baths}
              </p>
            </div>
            <div className={styles.propertyDescription}>
              <h3>
                Details for {data.address} {data.city}, {data.state}
              </h3>
              <p>{data.description}</p>
            </div>
            <PropertyDetailBlock propertyData={data} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default Property;
