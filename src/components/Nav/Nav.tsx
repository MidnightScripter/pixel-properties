import { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './Nav.module.css';
import Menu from '../../assets/menu.svg?react';
import Close from '../../assets/close.svg?react';

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
      <a
        className={styles.logo}
        href='#'
        title='Go to Pixel Properties Homepage'
      >
        <img src='/logo.svg' alt='' role='presentation' />
      </a>
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
        <li className={styles.link}>
          <Button label='Login' />
        </li>
      </menu>
    </nav>
  );
}
export default Nav;
