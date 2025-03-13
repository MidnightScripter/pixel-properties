import styles from './MosaicCTA.module.css';
import MosaicCTABlock from './MosaicCTABlock';
import House from '../../../assets/house-icon.svg?react';
import Bookmark from '../../../assets/bookmark-icon.svg?react';
import Contact from '../../../assets/contact-icon.svg?react';

function MosaicCTA() {
  return (
    <section id='midpage-ctas'>
      <div className={styles.ctaWrapper}>
        <MosaicCTABlock
          link='#'
          icon={House}
          title='Sell Your Home'
          text='Use our tools to estimate a price for your home then connect with one of our agents.'
        />
        <MosaicCTABlock
          link='#'
          icon={Bookmark}
          title='See Your Saved Listings'
          text="Review the property listings you've saved previously."
        />
        <MosaicCTABlock
          link='#'
          icon={Contact}
          title='Contact Us'
          text="If you're ready to being your search, or have a questions, feel free to contact us."
        />
      </div>
    </section>
  );
}
export default MosaicCTA;
