import { useState, useEffect } from 'react';
import { formatter } from '../../../util/utils';
import styles from './ListingGrid.module.css';

export interface ListingGridType {
  id: string;
  picture: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
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
      <h2 className={`display2 ${styles.headline}`}>Results</h2>
      <ul className={styles.listingWrapper}>
        {data
          ? data.map(
              ({
                id,
                picture,
                address,
                price,
                beds,
                baths,
              }: ListingGridType) => {
                return (
                  <li key={id} className={styles.listing}>
                    <a
                      className={styles.listingLink}
                      href='#'
                      title='View Details on 1234 Main Street'
                    >
                      <img
                        src={`/` + picture}
                        className={styles.listingImage}
                        alt='1234 Main Street Single Family Home: 4 Beds 2 Baths'
                      />
                      <div className={styles.listingText}>
                        <p>{address}</p>
                        <p>{formatter.format(Number(price))}</p>
                        <p>
                          Beds: {beds} &#8226; Baths: {baths}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              }
            )
          : 'Loading'}
      </ul>
    </section>
  );
}
export default ListingGrid;
