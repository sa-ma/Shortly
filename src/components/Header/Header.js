import React, { useState } from 'react';
import LinkButton from '../LinkButton';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    const menu = document.querySelector('.header__navigation');
    if (open || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  };
  return (
    <header className="header" id="top">
      <a href="#top" className="header__logo">
        <img src={Logo} alt="Shortly Logo" />
      </a>
      <button className="header__menu__button" onClick={handleClick}>
        &#9776;
      </button>

      <nav className="header__navigation">
        <ul className="header__navigation__menu">
          <li className="header__navigation__menu__link">
            <a
              href="#features"
              className="header__navigation__menu__link__item"
            >
              Features
            </a>
          </li>
          <li className="header__navigation__menu__link">
            <a href="#pricing" className="header__navigation__menu__link__item">
              Pricing
            </a>
          </li>
          <li className="header__navigation__menu__link">
            <a
              href="#resources"
              className="header__navigation__menu__link__item"
            >
              Resources
            </a>
          </li>
          <li className="header__navigation__menu__link login u-pull-right">
            <a href="#pricing" className="header__navigation__menu__link__item">
              Login
            </a>
          </li>
          <li className="u-header-top signup">
            <LinkButton title="Sign up" prop="btn-signup" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
