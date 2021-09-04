import React from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';

import { supportedLocales } from '../../config/i18n';
import { setLocaleWithFallback } from '../../redux/actions/i18n';
import './style.sass';

/**
 * LocalePicker component
 * You can see the supported locales and change current locale with this component
 * @param setLocaleWithFallback - Function to dispatch locale state variable in redux
 * @param locale - Current locale information in redux state
 * @param align - Parameter to move locale picker right or left within a container
 * @returns {JSX.Element}
 */
const LocalePicker = ({ setLocaleWithFallback, locale, align }) => {
  /**
   * Changes current locale information that is stored in redux state
   * @param code - can be one of the keys of supportedLocales object in /src/config/i18.js
   */
  const changeLocale = (code) => {
    setLocaleWithFallback(code);
  };

  /**
   * Locales inner component
   * This component is used to show all supported locales and when one of them is clicked, it triggers the changeLocale function with the locale code of clicked item
   * @returns {JSX.Element}
   */
  const Locales = () => {
    return (
      <>
        {Object.entries(supportedLocales).map((localeItem) => (
          <button
            key={localeItem[0]}
            className={`link-button navbar-item${
              localeItem[0] === locale ? ` is-active` : ``
            }`}
            onClick={() => {
              changeLocale(localeItem[0]);
            }}>
            {localeItem[1]}
          </button>
        ))}
      </>
    );
  };

  return (
    <div
      className={`navbar-item has-dropdown is-hoverable${
        align === 'right' ? ' align-right' : ''
      }`}>
      <button className={`navbar-link link-button`}>
        <span className="icon-text">
          <span className="icon">
            <span className="fas fa-globe" />
          </span>{' '}
          <span>
            <Translate value={`headerLinks.language`} />
          </span>
        </span>
      </button>

      <div className="navbar-dropdown">
        <Locales />
      </div>
    </div>
  );
};

/**
 * Property types of LocalePicker component
 * @type {{setLocaleWithFallback: Validator<NonNullable<(...args: any[]) => any>>, locale: Validator<NonNullable<string>>, align: Requireable<string>}}
 */
LocalePicker.propTypes = {
  /**
   * Current locale information in redux state
   */
  locale: PropTypes.string.isRequired,
  /**
   * Function to dispatch locale state variable in redux
   */
  setLocaleWithFallback: PropTypes.func.isRequired,
  /**
   * Parameter to move locale picker right or left within a container
   */
  align: PropTypes.string,
};

/**
 * mapStateToProps function to use with redux
 * @param state
 * @returns {{locale}}
 */
const mapStateToProps = (state) => ({
  /**
   * Current locale information in redux state
   */
  locale: state.i18n.locale,
});

/**
 * mapDispatchToProps object to use with redux
 * @type {{setLocaleWithFallback: ((function(*=): function(*): *)|*)}}
 */
const mapDispatchToProps = {
  /**
   * Function to dispatch locale state variable in redux
   */
  setLocaleWithFallback,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalePicker);
