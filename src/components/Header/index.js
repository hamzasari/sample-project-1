import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import NavigationRoutes from '../../navigation/NavigationRoutes';
import LocalePicker from '../LocalePicker';
import LoginButtonAndModal from '../LoginButtonAndModal';

/**
 * Header component
 * This component is shown at the top of all pages
 * @returns {JSX.Element}
 */
const Header = () => {
  /**
   * location variable created with useLocation hook from react-router-dom to get current page information
   * @type {Location<LocationState>}
   */
  const location = useLocation();

  /**
   * @typedef {Boolean} isActive - state variable is used to identify if the top navbar should shown as desktop or mobile version
   * @typedef {Function} setIsActive - method to set isActive state variable to true or false
   * @type {[isActive, setIsActive]} isActive
   */
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggles the isActive state variable to true or false
   */
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  /**
   * Brand inner component
   * If this component will reuse then we can extract it to another folder in components folder and modify it to use as reusable component
   * @returns {JSX.Element}
   */
  const Brand = () => {
    return (
      <div className="navbar-brand">
        <button className="navbar-item link-button">
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
        </button>
        <button
          className={`navbar-burger${isActive ? ` is-active` : ``}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-links"
          onClick={toggleIsActive}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    );
  };

  /**
   * PageLinks inner component
   * If this component will reuse then we can extract it to another folder in components folder and modify it to use as reusable component
   * @returns {JSX.Element}
   */
  const PageLinks = () => {
    return (
      <>
        <Link to={NavigationRoutes.homepage} className="navbar-item">
          <Translate value={`headerLinks.homepage`} />
        </Link>
        <Link to={NavigationRoutes.about} className="navbar-item">
          <Translate value={`headerLinks.about`} />
        </Link>
        <Link to={NavigationRoutes.contactUs} className="navbar-item">
          <Translate value={`headerLinks.contactUs`} />
        </Link>
      </>
    );
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Brand />
      <div
        id="nav-links"
        className={`navbar-menu${isActive ? ` is-active` : ``}`}>
        <div className="navbar-end">
          <PageLinks />
          <LocalePicker />
          <LoginButtonAndModal />
        </div>
      </div>
    </nav>
  );
};

export default Header;
