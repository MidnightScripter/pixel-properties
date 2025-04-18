import { useRef } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import FeaturedListings from '../../components/layout/FeaturedListings/FeaturedListings';
import Hero from '../../components/layout/Hero/Hero';
import MosaicCTA from '../../components/layout/MosaicCTA/MosaicCTA';
import styles from './Index.module.css';
import { Search, Location } from '../../assets/icons';

function Index() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a non-test setting, this would be validated properly for real city/zips from
    // something like the postal service api
    const inputValue = inputRef.current?.value.trim();
    const urlParam = inputValue?.match(/^\d{5}&/gi) ? 'zipcode' : 'city';
    if (inputValue) {
      navigate(`/search?${urlParam}=${encodeURIComponent(inputValue)}`);
    }
  };

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
      <Hero
        fullHeight
        heroImage='/hero.webp'
        heroHeadline={
          <>
            <p className={`display1 ${styles.headline}`}>
              Your Perfect <span className='bold'>Home</span>
            </p>
            <h1 className='headline3'>
              Find your perfect home in the Onett, Eagleland area
            </h1>
            <form onSubmit={handleSubmit} name='search-form'>
              <div className={styles.searchContainer}>
                <Input
                  label='Enter a City or Zip Code'
                  hideLabel
                  placeholder='Enter a City or Zip Code'
                  inputName='cityZip'
                  ref={inputRef}
                />
                <span className={styles.buttonContainer}>
                  <Button icon={Search} buttonIconOnly label='Submit Search' />
                </span>
              </div>
            </form>
            <Button
              label='Search Near Me'
              icon={Location}
              onClick={handleSearchNearby}
            />
          </>
        }
      />
      <MosaicCTA />
      <FeaturedListings />
    </>
  );
}
export default Index;
