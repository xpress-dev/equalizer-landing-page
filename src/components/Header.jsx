import logo from '../assets/logo.svg';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header>
      {/* Equalizer Logo */}
      <img src={logo} alt='Equalizer Logo' />
    </header>
  );
};

export default Header;
