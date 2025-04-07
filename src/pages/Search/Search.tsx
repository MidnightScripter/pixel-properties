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
        {zipcode && <p>Your zipcode from location search is {zipcode}</p>}
      </div>
      <ListingGrid />
    </>
  );
}

export default Search;
