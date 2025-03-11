import styles from './Footer.module.css';
import Realtor from '../../../assets/realtor-icon.svg?react';
import EHO from '../../../assets/equal-housing-opportunity-icon.svg?react';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.addressBlock}>
        <img
          className={styles.logo}
          src='/logo.png'
          alt='Go To Pixel Properties Homepage'
        />
        <address>
          <p className='display3'>Pixel Properties Office</p>
          <p>123 Starman Lane</p>
          <p>Onett, Eagleland 11111</p>
          <p>
            <span className='bold'>Phone:</span>
            <a href='tel:555-555-5555'> 555-555-5555</a>
          </p>
          <p>
            <span className='bold'>Toll Free:</span>
            <a href='tel:800-555-5555'> 800-555-5555</a>
          </p>
        </address>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.externalLinks}>
          <a
            className={styles.externalLink}
            href='https://www.nar.realtor'
            title='National Association of Realtors. Opens a new window.'
            target='_blank'
          >
            <span className={styles.externalLinkIcon}>
              <Realtor />
            </span>
          </a>
          <a
            className={styles.externalLink}
            href='https://www.hud.gov/program_offices/fair_housing_equal_opp'
            title='US Department of Housing and Urban Development. Opens a new window.'
            target='_blank'
            rel='nofollow'
          >
            <span className={styles.externalLinkIcon}>
              <EHO />
            </span>{' '}
          </a>
        </div>
        <nav id='footer-nav' className={styles.footerNav}>
          <menu className={styles.nav}>
            <li>
              <a href='#'>Agents Only Login</a>
            </li>
            <li>
              <a href='#'>Disclaimer</a>
            </li>
            <li>
              <a href='#'>Terms of Use</a>
            </li>
            <li>
              <a href='#'>ADA Accessibility</a>
            </li>
          </menu>
        </nav>
        <p className={styles.copyright}>
          &copy;2025 Pixel Properties (Demo Site, not a real company)
        </p>
      </div>
    </footer>
  );
}
export default Footer;
