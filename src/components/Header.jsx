import logo from '../assets/logo.svg';
import classes from './Header.module.css';
import backgroundImage from '../assets/bg-pattern-1.svg';
const Header = () => {
  return (
    <header>
      <img
        src={backgroundImage}
        alt='Background Image'
        className={classes.backgroundImage}
      />
      {/* Equalizer Logo */}
      <img src={logo} alt='Equalizer Logo' className={classes.logo} />
    </header>
  );
};

export default Header;
