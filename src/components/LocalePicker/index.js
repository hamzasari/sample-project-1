import React from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { supportedLocales } from '../../config/i18n';
import { setLocaleWithFallback } from '../../redux/actions/i18n';
import './style.sass';

const LocalePicker = (props) => {
  const changeLocale = (code) => {
    props.setLocaleWithFallback(code);
  };

  const Locales = () => {
    return (
      <>
        {Object.entries(supportedLocales).map((locale) => (
          <button
            key={locale[0]}
            className={`link-button navbar-item${
              locale[0] === props.locale ? ` is-active` : ``
            }`}
            onClick={() => {
              changeLocale(locale[0]);
            }}>
            {locale[1]}
          </button>
        ))}
      </>
    );
  };

  return (
    <div
      className={`navbar-item has-dropdown is-hoverable${
        props.align === 'right' ? ' align-right' : ''
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

LocalePicker.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleWithFallback: PropTypes.func.isRequired,
  align: PropTypes.string,
};

const mapStateToProps = (state) => ({ locale: state.i18n.locale });
const mapDispatchToProps = { setLocaleWithFallback };

export default connect(mapStateToProps, mapDispatchToProps)(LocalePicker);
