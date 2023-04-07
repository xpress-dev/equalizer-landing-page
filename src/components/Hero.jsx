import React from 'react';
import classes from './Hero.module.css';
import backgroundImage from '../assets/bg-pattern-1.svg';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>We make your music sound extraordinary.</h1>
      <p>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </section>
  );
};

export default Hero;
