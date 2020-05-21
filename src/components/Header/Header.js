import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import Button from '../Button';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = ({ status, handleSignOut }) => {
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
            <a
              href="#features"
              className="header__navigation__menu__link__item"
            >
              Pricing
            </a>
          </li>
          <li className="header__navigation__menu__link">
            <a
              href="#features"
              className="header__navigation__menu__link__item"
            >
              Resources
            </a>
          </li>
          {status ? (
            <li className="u-header-top signup u-pull-right">
              <Button
                title="Sign out"
                action={handleSignOut}
                variant="btn-signout"
              />
            </li>
          ) : (
            <>
              <li className="header__navigation__menu__link header-login u-pull-right">
                <Link
                  to="/login"
                  className="header__navigation__menu__link__item"
                >
                  Login
                </Link>
              </li>
              <li className="u-header-top signup">
                <LinkButton
                  title="Sign up"
                  location="/signup"
                  prop="btn-signup"
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
