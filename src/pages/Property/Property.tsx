import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import FeaturedListings, {
  FeaturedListingType,
} from '../../components/layout/FeaturedListings/FeaturedListings';
import styles from './Property.module.css';
import { formatter } from '../../util/utils';
import PageLayout from '../PageLayout/PageLayout';

function Property() {
  const { propertyId } = useParams();
  const [data, setData] = useState<FeaturedListingType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data/${propertyId}`);
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
  }, [propertyId]);
  return (
    <PageLayout heroUrl='/searchHero.webp' heroHeadline='Property Details'>
      <div className={styles.searchTextBlock}>
        {data ? (
          <>
            <h2>{data.title}</h2>
            {/* <img
              className={styles.listingImage}
              src={`/${data.picture}`}
              alt=''
            /> */}
            <p>{data.description}</p>
            <p className={styles.bedsBaths}>
              <span>Beds: {data.beds}</span>
              <span role='presentation'>&#8226;</span>
              <span>Baths: {data.baths}</span>
            </p>
            <p className={styles.price}>
              {formatter.format(Number(data.price))}
            </p>
          </>
        ) : (
          <>
            <h2> Sorry, but this property is no longer found </h2>
            <p>
              {' '}
              Consider some of the popular properties below, or{' '}
              <Link className='link' to={{ pathname: '/search' }}>
                Head to our Property Search
              </Link>
            </p>
            <FeaturedListings />
          </>
        )}
      </div>
    </PageLayout>
  );
}

export default Property;
