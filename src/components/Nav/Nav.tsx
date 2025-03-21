import { useState } from 'react';
import classNames from 'classnames';
import styles from './Nav.module.css';
import Menu from '../../assets/menu.svg?react';
import Close from '../../assets/close.svg?react';
import Bookmark from '../../assets/bookmark-icon.svg?react';
import Logo from '../../assets/logo.svg?react';
import { Link } from 'react-router';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick() {
    setMenuOpen((prevState) => !prevState);
  }
  const menuClasses = classNames(styles.nav, styles.mainNavLinks, {
    [styles.active]: menuOpen,
  });

  return (
    <nav id='main-nav' className={styles.mainNav}>
      <Link
        className={styles.logo}
        title='Go to Pixel Properties Homepage'
        to={{
          pathname: '/',
        }}
      >
        <Logo />
      </Link>
      <button aria-label='Saved Listings' className={styles.savedListings}>
        <Bookmark />
        <span className={styles.listingsCount} aria-label={`0 Listings Saved`}>
          0
        </span>
      </button>
      {!menuOpen ? (
        <button
          className={styles.mobileNavButton}
          aria-label='Open Navigation'
          onClick={handleClick}
        >
          <Menu />
        </button>
      ) : (
        <button
          className={styles.mobileNavButton}
          aria-label='Close Navigation'
          onClick={handleClick}
        >
          <Close />
        </button>
      )}
      <menu className={menuClasses}>
        <li className={styles.link}>
          <Link to={{ pathname: '/search' }}>Find a Home</Link>
        </li>
        <li className={styles.link}>
          <Link to={{ pathname: '/search' }}>Sell a Home</Link>
        </li>
        <li className={styles.link}>
          <Link to={{ pathname: '/search' }}>Agents</Link>
        </li>
        <li className={styles.link}>
          <Link to={{ pathname: '/search' }}>About Us</Link>
        </li>
        <li className={styles.link}>
          <Link to={{ pathname: '/search' }}>Contact</Link>
        </li>
      </menu>
    </nav>
  );
}
export default Nav;
