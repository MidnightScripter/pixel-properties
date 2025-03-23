import styles from './Footer.module.css';

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
          <p className='headline3'>Pixel Properties Office</p>
          <p>123 Starman Lane</p>
          <p>Onett, Eagleland 11111</p>
          <p>
            <span className='bold'>Phone:</span>
            <a href='tel:555-555-5555'> 555-555-5555</a>
          </p>
        </address>
      </div>
      <div className={styles.linksContainer}>
        <p className={styles.copyright}>
          Please note that this is a Demo Portfolio Site, not a real company and
          these properties and any site content or information is NOT REAL{' '}
        </p>
        <p className={styles.copyright}>
          The only thing that is real is the developer,{' '}
          <a
            className={styles.externalLink}
            href='https://www.linkedin.com/in/crystal-clark'
            target='_blank'
            title='To Crystal C on LinkedIn'
          >
            Crystal C
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
