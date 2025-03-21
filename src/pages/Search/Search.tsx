import { useLocation } from 'react-router';
import styles from './Search.module.css';
import ListingGrid from '../../components/layout/ListingGrid/ListingGrid';
import Hero from '../../components/layout/Hero/Hero';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zipcode = searchParams.get('zipcode');
  return (
    <>
      <Hero heroImage='/searchHero.webp' heroHeadline='Search Properties' />
      <div className={styles.searchTextBlock}>
        <p>Your zipcode from location search is {zipcode}</p>
        <p>
          Since this is a demo, the zip has been changed to filter the demo
          results
        </p>
      </div>
      <ListingGrid />
    </>
  );
}

export default Search;
