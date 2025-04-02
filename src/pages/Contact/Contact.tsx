import { OpenNew } from '../../assets/icons';
import Hero from '../../components/layout/Hero/Hero';
import styles from './Contact.module.css';

function Contact() {
  return (
    <>
      <Hero heroImage='/contact.webp' heroHeadline='Contact Us' />
      <div className={styles.container}>
        <h2 className='headline2'>Contact Us</h2>
        <p>
          Thanks for browsing this test website for fictional Pixel Properties.
          I use this site to test out new layouts, techniques, and just
          generally keep in practice.
        </p>
        <p>Contact me at any of the below:</p>
        <div className={styles.contactContainer}>
          <a
            className='externalLink'
            href='https://www.linkedin.com/in/crystal-clark'
            target='_blank'
          >
            My LinkedIn Profile
            <span className='icon' aria-label='Opens in a New Window'>
              <OpenNew />
            </span>
          </a>
          <a
            className='externalLink'
            href='https://github.com/MidnightScripter'
            target='_blank'
          >
            My GitHub Profile{' '}
            <span className='icon' aria-label='Opens in a New Window'>
              <OpenNew />
            </span>
          </a>
          <a className='link' href='mailto:crystal.m.clark@proton.me'>
            Send me an Email
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
