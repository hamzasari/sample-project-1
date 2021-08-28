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
          <a
            key={locale[0]}
            className={`navbar-item${
              locale[0] === props.locale ? ` is-active` : ``
            }`}
            onClick={() => {
              changeLocale(locale[0]);
            }}>
            {locale[1]}
          </a>
        ))}
      </>
    );
  };

  return (
    <div
      className={`navbar-item has-dropdown is-hoverable${
        props.align === 'right' ? ' align-right' : ''
      }`}>
      <a className={`navbar-link`}>
        <span className="icon-text">
          <span className="icon">
            <span className="fas fa-globe" />
          </span>{' '}
          <span>
            <Translate value={`headerLinks.language`} />
          </span>
        </span>
      </a>

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
