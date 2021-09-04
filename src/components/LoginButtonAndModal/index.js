import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import LocalePicker from '../LocalePicker';
import { LoginButtonAndModalPropTypes } from './propTypes';
import { mapDispatchToProps, mapStateToProps } from './state';
import { isObjectEmpty } from '../../common/helpers';
import './style.sass';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../common/formValidations';

/**
 * Login Button and Login Modal component
 * The two functionality is combined in one component, because one of them cannot function without the other one
 * @param {object} userInfo
 * @param {func} dispatchSetUserInfo
 * @param {func} dispatchEmptyUserInfo
 * @returns {JSX.Element}
 */
const LoginButtonAndModal = ({
  userInfo,
  dispatchSetUserInfo,
  dispatchEmptyUserInfo,
}) => {
  /**
   * @typedef {boolean} isActive - state variable is used to identify if the login modal should be shown or not
   * @typedef {function} setIsActive - method to set isActive state variable to true or false
   * @type {[isActive, setIsActive]} isActive
   */
  const [isActive, setIsActive] = useState(false);

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
   * @typedef {string} password - state variable is used to store user password
   * @typedef {function} setPassword - method to set password state variable
   * @type {[password, setPassword]} password
   */
  const [password, setPassword] = useState('');

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
   * @property {string} password - Error message for password
   * @type {object}
   */
  let formErrors = {};
  /**
   * Property to store information of if the form is valid
   * @type {boolean}
   */
  let formIsValid = true;

  /**
   * Login modal identifier
   * @type {string}
   */
  const loginModalId = `modal-login`;

  /**
   * Toggles the isActive state variable to true or false
   */
  const toggleIsActive = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setName('');
      setEmail('');
      setPassword('');
      setStateFormErrors({});
    }
  };

  /**
   * Return true if the form is valid, otherwise returns false
   * @returns {boolean}
   */
  const isFormValid = () => {
    formIsValid = validateName(name).valid;
    formErrors.name = validateName(name).message;

    formIsValid = validateEmail(email).valid;
    formErrors.email = validateEmail(email).message;

    formIsValid = validatePassword(password).valid;
    formErrors.password = validatePassword(password).message;

    setStateFormErrors(formErrors);

    return formIsValid;
  };

  /**
   * Handles action that is triggered from login button
   */
  const handleLogin = () => {
    if (isFormValid()) {
      dispatchSetUserInfo({
        name: name,
        email: email,
        password: password,
      });
      toggleIsActive();
    }
  };

  /**
   * Handles action that is triggered from logout button
   */
  const handleLogOut = () => {
    dispatchEmptyUserInfo();
  };

  if (isObjectEmpty(userInfo)) {
    return (
      <div className="navbar-item">
        <button
          className="button"
          data-target={loginModalId}
          onClick={toggleIsActive}>
          <Translate value={`headerLinks.logIn`} />
        </button>
        <div
          className={`modal${isActive ? ` is-active` : ``}`}
          id={loginModalId}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                <Translate value={`headerLinks.logIn`} />
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={toggleIsActive}
              />
            </header>
            <section className="modal-card-body">
              <LocalePicker align="right" />
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
                <Translate value={`form.password`} />
              </h6>
              <input
                className={`input${
                  stateFormErrors.password ? ' is-danger' : ''
                }`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={`error-span`}>{stateFormErrors.password}</span>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={handleLogin}>
                <Translate value={`buttons.login`} />
              </button>
              <button className="button" onClick={toggleIsActive}>
                <Translate value={`buttons.cancel`} />
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-item">
        <div className={`navbar-item has-dropdown is-hoverable`}>
          <button className={`navbar-link button-email`}>
            {userInfo.email}
          </button>
          <div className="navbar-dropdown button-logout-container">
            <button className={`button button-logout`} onClick={handleLogOut}>
              <Translate value={`headerLinks.logOut`} />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

LoginButtonAndModal.propTypes = LoginButtonAndModalPropTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonAndModal);
