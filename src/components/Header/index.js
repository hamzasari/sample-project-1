import React, { useState } from 'react';
import { Translate } from 'react-redux-i18n';
import LocalePicker from '../LocalePicker';
import { Link, useLocation } from 'react-router-dom';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import LoginButtonAndModal from '../LoginButtonAndModal';
import './style.sass';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const location = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <span className="icon-text">
            <span className="icon">
              <span className="fas fa-atom fa-lg" />
            </span>{' '}
            <span className="Header__Title">
              {location.pathname === NavigationRoutes.homepage ? (
                <Translate value={`headerLinks.title`} />
              ) : (
                <Translate
                  value={`headerLinks.${location.pathname.replace('/', '')}`}
                />
              )}
            </span>
          </span>
        </a>
        <a
          role="button"
          className={`navbar-burger${isActive ? ` is-active` : ``}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-links"
          onClick={toggleIsActive}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="nav-links"
        className={`navbar-menu${isActive ? ` is-active` : ``}`}>
        <div className="navbar-end">
          <Link to={NavigationRoutes.homepage} className="navbar-item">
            <Translate value={`headerLinks.homepage`} />
          </Link>
          <Link to={NavigationRoutes.about} className="navbar-item">
            <Translate value={`headerLinks.about`} />
          </Link>
          <Link to={NavigationRoutes.contactUs} className="navbar-item">
            <Translate value={`headerLinks.contactUs`} />
          </Link>

          <LocalePicker />

          <div className="navbar-item">
            <LoginButtonAndModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
