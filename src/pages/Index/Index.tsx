import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import FeaturedListings from '../../components/layout/FeaturedListings/FeaturedListings';
import Footer from '../../components/layout/Footer/Footer';
import Hero from '../../components/layout/Hero/Hero';
import MosaicCTA from '../../components/layout/MosaicCTA/MosaicCTA';
import Nav from '../../components/Nav/Nav';
import styles from './Index.module.css';
import SearchIcon from '../../assets/search-icon.svg?react';
import LocationIcon from '../../assets/location-icon.svg?react';

function Index() {
  let currentZipcode = '';
  async function lookup(currentPosition: {
    coords: { latitude: number; longitude: number };
  }) {
    const { latitude, longitude } = currentPosition.coords;
    try {
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=67d2060ee952f691603490csfb646b6`
      );
      const data = await response.json();
      // Default only here for testing
      currentZipcode = data.address.postcode || '80903';
      console.log(currentZipcode);
    } catch (error) {
      console.error('Error fetching geocode data:', error);
    }
  }

  function getLatLong() {
    return new Promise<void>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (currentPosition) {
            lookup(currentPosition).then(() => resolve());
          },
          function (error) {
            console.log('Error: ' + error.code);
            reject(error);
          }
        );
      }
    });
  }
  const navigate = useNavigate();
  const handleSearchNearby = async () => {
    try {
      await getLatLong();
      navigate(`/search?zipcode=${currentZipcode}`);
    } catch (error) {
      console.error('Error in handleSearchNearby:', error);
    }
  };
  return (
    <>
      <Nav />
      <Hero fullHeight heroImage='/hero.jpg'>
        <p className={`${styles.headline} display1`}>
          Your Perfect <span className='bold'>Home</span>
        </p>
        <h1 className='display3'>
          Find your perfect home in the Onett, Eagleland area
        </h1>
        <form action='' name='search-form'>
          <div className={styles.searchContainer}>
            <Input
              label='Enter a City or Zip Code'
              hideLabel
              placeholder='Enter a City or Zip Code'
              inputName='cityZip'
            />
            <span className={styles.buttonContainer}>
              <Button icon={SearchIcon} buttonIconOnly label='Submit Search' />
            </span>
          </div>
        </form>
        <Button
          label='Search Near Me'
          icon={LocationIcon}
          onClick={handleSearchNearby}
        />
      </Hero>
      <MosaicCTA />
      <FeaturedListings />
      <Footer />
    </>
  );
}
export default Index;
