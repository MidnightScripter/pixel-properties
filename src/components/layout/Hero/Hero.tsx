import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './Hero.module.css';
import LocationIcon from '../../../assets/location-icon.svg?react';
import SearchIcon from '../../../assets/search-icon.svg?react';

function Hero() {
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (currentPosition) {
          lookup(currentPosition);
        },
        function (error) {
          console.log('Error: ' + error.code);
        }
      );
    }
  }
  return (
    <section id='hero'>
      <div className={styles.container}>
        <p className={`${styles.headline} display1`}>
          {' '}
          Welcome <span className='bold'>Home</span>
        </p>
        <h1 className='display3'>
          Find your next home in the Onett, Eagleland area
        </h1>
        <form action='' name='search-form'>
          <div className={styles.searchContainer}>
            <Input
              label='Enter a City or Zip Code'
              hideLabel
              placeholder='Enter a City or Zip Code'
            />
            <span className={styles.buttonContainer}>
              <Button icon={SearchIcon} buttonIconOnly label='Submit Search' />
            </span>
          </div>
        </form>

        <Button
          label='Search Near Me'
          icon={LocationIcon}
          onClick={getLatLong}
        />
      </div>
    </section>
  );
}
export default Hero;
