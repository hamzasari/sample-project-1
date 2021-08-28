import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { I18n, Translate } from 'react-redux-i18n';

import './style.sass';
import translations from '../../l10n/translations';
import { connect } from 'react-redux';

const ContactUs = ({ userInfo, locale }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [countryDropdownIsActive, setCountryDropdownIsActive] = useState(false);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setName(userInfo?.name);
    setEmail(userInfo?.email);
  }, [userInfo.name, userInfo.email]);

  const [stateFormErrors, setStateFormErrors] = useState({});
  let formErrors = {};
  let formIsValid = true;

  const isFormValid = () => {
    if (!name) {
      formIsValid = false;
      formErrors.name = I18n.t('formErrors.nameEmpty');
    }

    if (!email) {
      formIsValid = false;
      formErrors.email = I18n.t('formErrors.emailEmpty');
    } else if (typeof email !== 'undefined') {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formErrors.email = I18n.t('formErrors.emailNotValid');
      }
    }

    if (!phoneNumber) {
      formIsValid = false;
      formErrors.phoneNumber = I18n.t('formErrors.phoneNumberEmpty');
    } else if (typeof phoneNumber !== 'undefined') {
      let regex = new RegExp(/^\d+$/);
      if (!regex.test(phoneNumber)) {
        formIsValid = false;
        formErrors.phoneNumber = I18n.t('formErrors.phoneNumberNotValid');
      }
    }

    if (!country) {
      formIsValid = false;
      formErrors.country = I18n.t('formErrors.countryEmpty');
    }

    if (!message) {
      formIsValid = false;
      formErrors.message = I18n.t('formErrors.messageEmpty');
    }

    setStateFormErrors(formErrors);

    return formIsValid;
  };

  const handleSend = () => {
    if (isFormValid()) {
      const postObject = {
        name: name,
        email: email,
        phonenumber: phoneNumber,
        country_code: country,
        text: message,
      };

      console.log(postObject);
    }
  };

  const handleCountrySearch = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      setFilteredCountryList([]);
    } else {
      setFilteredCountryList(
        Object.entries(translations[locale].countryList).filter((element) =>
          element[1]
            .toLocaleLowerCase()
            .startsWith(e.target.value.toLocaleLowerCase())
        )
      );
    }
  };

  const toggleCountryDropdownIsActive = () => {
    setCountryDropdownIsActive(!countryDropdownIsActive);
  };

  return (
    <div className={`page-content-container`}>
      <h2 className={`title is-2`}>
        <Translate value={`headerLinks.contactUs`} />
      </h2>
      <h6 className="title is-6 form-input-label">
        <Translate value={`form.name`} />
      </h6>
      <input
        className={`input${stateFormErrors.name ? ' is-danger' : ''}`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className={`error-span`}>{stateFormErrors.name}</span>
      <h6 className="title is-6 form-input-label">
        <Translate value={`form.email`} />
      </h6>
      <input
        className={`input${stateFormErrors.email ? ' is-danger' : ''}`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span className={`error-span`}>{stateFormErrors.email}</span>
      <h6 className="title is-6 form-input-label">
        <Translate value={`form.phoneNumber`} />
      </h6>
      <input
        className={`input${stateFormErrors.phoneNumber ? ' is-danger' : ''}`}
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <span className={`error-span`}>{stateFormErrors.phoneNumber}</span>
      <h6 className="title is-6 form-input-label">
        <Translate value={`form.country`} />
      </h6>
      <div className={`dropdown${countryDropdownIsActive ? ' is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={toggleCountryDropdownIsActive}>
            <span>
              {country ? (
                <Translate value={`countryList.${country}`} />
              ) : (
                <Translate value={`form.pleaseSelect`} />
              )}
            </span>
            <span className="icon is-small">
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="field dropdown-item">
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input is-transparent"
                  onChange={handleCountrySearch}
                />
                <span className="icon is-left">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
            <hr className="dropdown-divider" />
            {filteredCountryList.map((countryElement) => {
              return (
                <a
                  className="dropdown-item"
                  onClick={() => {
                    setCountry(countryElement[0]);
                    toggleCountryDropdownIsActive();
                  }}>
                  <Translate value={`countryList.${countryElement[0]}`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <span className={`error-span`}>{stateFormErrors.country}</span>
      <h6 className="title is-6 form-input-label">
        <Translate value={`form.message`} />
      </h6>
      <textarea
        className={`textarea${stateFormErrors.message ? ' is-danger' : ''}`}
        onChange={(e) => setMessage(e.target.value)}>
        {message}
      </textarea>
      <span className={`error-span`}>{stateFormErrors.message}</span>
      <footer className="footer contact-us-footer">
        <button className="button is-success" onClick={handleSend}>
          <Translate value={`buttons.send`} />
        </button>
      </footer>
    </div>
  );
};

ContactUs.propTypes = {
  locale: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  locale: state.i18n.locale,
  userInfo: state.user.info,
});

export default connect(mapStateToProps)(ContactUs);
