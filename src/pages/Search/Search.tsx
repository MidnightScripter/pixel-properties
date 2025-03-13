import { useLocation } from 'react-router';
import styles from './Search.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/layout/Footer/Footer';
import ListingGrid from '../../components/layout/ListingGrid/ListingGrid';
import Hero from '../../components/layout/Hero/Hero';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zipcode = searchParams.get('zipcode');
  return (
    <>
      <Nav />
      <Hero heroImage='/searchHero.webp'>
        <h1 className='display2'>Property Search Results</h1>
      </Hero>
      <div className={styles.searchTextBlock}>
        <p>Your zipcode from location search is {zipcode}</p>
        <p>
          Since this is a demo, the zip has been changed to filter the demo
          results
        </p>
      </div>
      <ListingGrid />
      <h1>Property Search Results</h1>
      <Footer />
    </>
  );
}

export default Search;
