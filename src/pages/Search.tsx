import { useLocation } from 'react-router';
import Nav from '../components/Nav/Nav';
// import Hero from '../components/layout/Hero/Hero';
import Footer from '../components/layout/Footer/Footer';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zipcode = searchParams.get('zipcode');
  return (
    <>
      <Nav />
      <h2>TESTING</h2>
      <p>zipcode is {zipcode}</p>
      <Footer />
    </>
  );
}

export default Search;
