import styles from './MosaicCTA.module.css';
import MosaicCTABlock from './MosaicCTABlock';
import { House, Agent, Contact } from '../../../assets/icons';

function MosaicCTA() {
  return (
    <section id='midpage-ctas'>
      <div className={styles.ctaWrapper}>
        <MosaicCTABlock
          link='/contact'
          icon={House}
          title='Sell Your Home'
          text='Use our tools to estimate a price for your home then connect with one of our agents.'
        />
        <MosaicCTABlock
          link='/agents'
          icon={Agent}
          title='Meet Our Agents'
          text='Meet the people that make Pixel Properties wonderful.'
        />
        <MosaicCTABlock
          link='/contact'
          icon={Contact}
          title='Contact Us'
          text="If you're ready to being your search, or have a questions, feel free to contact us."
        />
      </div>
    </section>
  );
}
export default MosaicCTA;
