import FeaturedListings from './components/layout/FeaturedListings/FeaturedListings';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/layout/Hero/Hero';
import MosaicCTA from './components/layout/MosaicCTA/MosaicCTA';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Hero fullHeight heroImage='/hero.jpg' heroHeadline='App'></Hero>
      <MosaicCTA />
      <FeaturedListings />
      <Footer />
    </>
  );
}

export default App;
