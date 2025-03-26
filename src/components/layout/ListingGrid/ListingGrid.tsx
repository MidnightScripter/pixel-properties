import { useState, useEffect } from 'react';
import { formatter } from '../../../util/formatter';
import styles from './ListingGrid.module.css';
import { Link } from 'react-router';

export interface ListingGridType {
  id: string;
  picture: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
  title: string;
  description: string;
}

function ListingGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
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
    <section>
      <h2 className={`headline2 ${styles.headline}`}>Results</h2>
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
                    <img
                      src={`/${data.picture}`}
                      className={styles.listingImage}
                      alt={`${data.title}: ${data.beds} Beds 2 ${data.baths}`}
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
    </section>
  );
}
export default ListingGrid;
