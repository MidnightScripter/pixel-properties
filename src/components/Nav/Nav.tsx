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
          <a href='#'>Find a Home</a>
        </li>
        <li className={styles.link}>
          <a href='#'>Sell a Home</a>
        </li>
        <li className={styles.link}>
          <a href='#'>Agents</a>
        </li>
        <li className={styles.link}>
          <a href='#'>About Us</a>
        </li>
        <li className={styles.link}>
          <a href='#'>Contact</a>
        </li>
      </menu>
    </nav>
  );
}
export default Nav;
