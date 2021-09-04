import React from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import { supportedLocales } from '../../config/i18n';
import { LocalePickerPropTypes } from './propTypes';
import { mapDispatchToProps, mapStateToProps } from './state';
import './style.sass';

/**
 * LocalePicker component
 * You can see the supported locales and change current locale with this component
 * @param {func} setLocaleWithFallback - Function to dispatch locale state variable in redux
 * @param {string} locale - Current locale information in redux state
 * @param {string} align - Parameter to move locale picker right or left within a container
 * @returns {JSX.Element}
 */
const LocalePicker = ({ setLocaleWithFallback, locale, align }) => {
  /**
   * Changes current locale information that is stored in redux state
   * @param {string} code - can be one of the keys of supportedLocales object in /src/config/i18.js
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

LocalePicker.propTypes = LocalePickerPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LocalePicker);
