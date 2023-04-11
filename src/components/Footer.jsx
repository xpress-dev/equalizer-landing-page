import React from 'react';
import logo from '../assets/logo.svg';
import classes from './Footer.module.css';
import facebookLogo from '../assets/icon-facebook.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import twitterLogo from '../assets/icon-twitter.svg';
const Footer = () => {
  return (
    <footer>
      <div className={classes.logoContainer}>
        <img
          src={logo}
          alt='Equalizer Logo'
          className={classes.logoImage}
          aria-hidden='true'
        />
        <p className={classes.copyright}>
          All rights reserved © Equalizer 2021 <br />
          Have any problems? Contact us via social media or email us at
          <span className={classes.rightBold}> equalizer@example.com</span>
        </p>
      </div>
      <div className={classes.containerIcons}>
        <a href='' className={classes.icons}>
          <img src={facebookLogo} alt='facebook icon' />
        </a>
        <a href='' className={classes.icons}>
          <img src={instagramLogo} alt='instagram icon' />
        </a>
        <a href='' className={classes.icons}>
          <img src={twitterLogo} alt='twitter icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
