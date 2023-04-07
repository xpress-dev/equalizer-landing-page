import React from 'react';
import classes from './CallToAction.module.css';
import backgroundImageTwo from '../assets/bg-pattern-2.svg';
import illustration from '../assets/illustration-app.png';
import iOSIcon from '../assets/icon-apple.svg';
import androidIcon from '../assets/icon-android.svg';
const CallToAction = () => {
  return (
    <section className={classes.callToAction}>
      <img
        src={backgroundImageTwo}
        className={classes.backgroundImageTwo}
        alt='Background Image'
      />
      <img
        src={illustration}
        className={classes.illustration}
        alt='Application Illustration'
      />
      <div className={classes.mainCallToAction}>
        <h2>Premium EQ</h2>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>

        <div className={classes.price}>
          <h1>$4</h1>
          <span> / month</span>
        </div>
        <button className={classes.iOSDownload}>
          <img src={iOSIcon} />
          iOS Download
        </button>
        <button className={classes.androidDownload}>
          <img src={androidIcon} />
          Android Download
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
