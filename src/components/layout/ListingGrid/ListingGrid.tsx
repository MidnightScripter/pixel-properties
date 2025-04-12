import { useState, useEffect } from 'react';
import { formatter } from '../../../util/formatter';
import styles from './ListingGrid.module.css';
import { Link } from 'react-router';
import PropertyImage from '../../PropertyImage/PropertyImage';
import { ApiService } from '../../../api/propertiesAPI';
import { PropertyDataType } from '../../../types/apiDataTypes';
import Skeleton from 'react-loading-skeleton';

function ListingGrid() {
  const [data, setData] = useState<PropertyDataType[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getProperties();
        setData(response);
      } catch (err) {
        console.error((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2 className={`headline2 ${styles.headline}`}>Results</h2>
      <ul className={styles.listingWrapper}>
        {loading
          ? [...Array(9)].map(() => (
              <li className={styles.listing}>
                <Skeleton
                  containerClassName={styles.skeleton}
                  highlightColor='#ad91aa'
                />
              </li>
            ))
          : data?.map((data: PropertyDataType) => {
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
            })}
      </ul>
    </section>
  );
}
export default ListingGrid;
