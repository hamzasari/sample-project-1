import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import translations from '../../l10n/translations';
import { isObjectEmpty } from '../../common/helpers';
import { mapStateToProps } from './state';
import { ContactUsPropTypes } from './propTypes';
import {
  validateCountry,
  validateEmail,
  validateMessage,
  validateName,
  validatePhoneNumber,
} from '../../common/formValidations';

/**
 * Contact us page
 * @param {object} userInfo
 * @param {string} locale
 * @returns {JSX.Element}
 */
const ContactUs = ({ userInfo, locale }) => {
  /**
   * @typedef {string} name - state variable is used to store user name
   * @typedef {function} setName - method to set name state variable
   * @type {[name, setName]} name
   */
  const [name, setName] = useState('');
  /**
   * @typedef {string} email - state variable is used to store user email
   * @typedef {function} setEmail - method to set email state variable
   * @type {[email, setEmail]} email
   */
  const [email, setEmail] = useState('');
  /**
   * @typedef {string} phoneNumber - state variable is used to store user phone number
   * @typedef {function} setPhoneNumber - method to set phoneNumber state variable
   * @type {[phoneNumber, setPhoneNumber]} phoneNumber
   */
  const [phoneNumber, setPhoneNumber] = useState('');
  /**
   * @typedef {string} country - state variable is used to store country code
   * @typedef {function} setCountry - method to set country state variable
   * @type {[country, setCountry]} country
   */
  const [country, setCountry] = useState('');
  /**
   * @typedef {boolean} countryDropdownIsActive - state variable is used to identify if the country dropdown should be shown or not
   * @typedef {function} setCountryDropdownIsActive - method to set countryDropdownIsActive state variable to true or false
   * @type {[countryDropdownIsActive, setCountryDropdownIsActive]} countryDropdownIsActive
   */
  const [countryDropdownIsActive, setCountryDropdownIsActive] = useState(false);
  /**
   * @typedef {Array} filteredCountryList - state variable is used to store filtered country list
   * @typedef {function} setFilteredCountryList - method to set filteredCountryList state variable
   * @type {[filteredCountryList, setFilteredCountryList]} filteredCountryList
   */
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  /**
   * @typedef {string} message - state variable is used to store message
   * @typedef {function} setMessage - method to set message state variable
   * @type {[message, setMessage]} message
   */
  const [message, setMessage] = useState('');

  /**
   * @typedef {Object} stateFormErrors - state variable is used to store form errors object
   * @typedef {Function} setStateFormErrors - method to set stateFormErrors state variable
   * @type {[stateFormErrors, setStateFormErrors]} stateFormErrors
   */
  const [stateFormErrors, setStateFormErrors] = useState({});
  /**
   * Object to store form errors
   * @property {string} name - Error message for name
   * @property {string} email - Error message for email
   * @property {string} phoneNumber - Error message for phone number
   * @property {string} country - Error message for country
   * @property {string} message - Error message for message
   * @type {object}
   */
  let formErrors = {};
  /**
   * Property to store information of if the form is valid
   * @type {boolean}
   */
  let formIsValid = true;

  // if userInfo state value is changed then set name and email variables with suitable values
  useEffect(() => {
    if (isObjectEmpty(userInfo)) {
      setName('');
      setEmail('');
    } else {
      setName(userInfo?.name);
      setEmail(userInfo?.email);
    }
  }, [userInfo]);

  /**
   * Return true if the form is valid, otherwise returns false
   * @returns {boolean}
   */
  const isFormValid = () => {
    formIsValid = validateName(name).valid;
    formErrors.name = validateName(name).message;

    formIsValid = validateEmail(email).valid;
    formErrors.email = validateEmail(email).message;

    formIsValid = validatePhoneNumber(phoneNumber).valid;
    formErrors.phoneNumber = validatePhoneNumber(phoneNumber).message;

    formIsValid = validateCountry(country).valid;
    formErrors.country = validateCountry(country).message;

    formIsValid = validateMessage(message).valid;
    formErrors.message = validateMessage(message).message;

    setStateFormErrors(formErrors);

    return formIsValid;
  };

  /**
   * Handles action that is triggered from send button
   */
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

  /**
   * Handles action that is triggered from input that is in country dropdown
   */
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

  /**
   * Toggles the countryDropdownIsActive state variable to true or false
   */
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
                <button
                  key={countryElement[0]}
                  className="dropdown-item link-button country-item"
                  onClick={() => {
                    setCountry(countryElement[0]);
                    toggleCountryDropdownIsActive();
                  }}>
                  <Translate value={`countryList.${countryElement[0]}`} />
                </button>
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
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <span className={`error-span`}>{stateFormErrors.message}</span>
      <footer className="footer contact-us-footer">
        <button className="button is-success" onClick={handleSend}>
          <Translate value={`buttons.send`} />
        </button>
      </footer>
    </div>
  );
};

ContactUs.propTypes = ContactUsPropTypes;

export default connect(mapStateToProps)(ContactUs);
