import { useLocation } from 'react-router';
import styles from './Search.module.css';
import ListingGrid from '../../components/layout/ListingGrid/ListingGrid';
import PageLayout from '../PageLayout/PageLayout';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zipcode = searchParams.get('zipcode');
  return (
    <>
      <PageLayout
        heroUrl='searchHero.webp'
        heroHeadline='Property Search Results'
      >
        <div className={styles.searchTextBlock}>
          <p>Your zipcode from location search is {zipcode}</p>
          <p>
            Since this is a demo, the zip has been changed to filter the demo
            results
          </p>
        </div>
        <ListingGrid />
      </PageLayout>
    </>
  );
}

export default Search;
