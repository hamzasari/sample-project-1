import React, { useState } from 'react';
import { I18n, Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocalePicker from '../LocalePicker';
import './style.sass';
import { emptyUserInfo, setUserInfo } from '../../redux/actions/user';

const LoginButtonAndModal = React.memo(({
  userInfo,
  dispatchSetUserInfo,
  dispatchEmptyUserInfo,
}) => {
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginModalId = `modal-login`;

  const toggleIsActive = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setName('');
      setEmail('');
      setPassword('');
      setStateFormErrors({});
    }
  };

  const isObjectEmpty = (obj) => {
    return JSON.stringify(obj) === JSON.stringify({});
  };

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

    if (!password) {
      formIsValid = false;
      formErrors.password = I18n.t('formErrors.passwordEmpty');
    }

    setStateFormErrors(formErrors);

    return formIsValid;
  };

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

  const handleLogOut = () => {
    dispatchEmptyUserInfo();
  };

  if (isObjectEmpty(userInfo)) {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <div className={`navbar-item has-dropdown is-hoverable`}>
        <button className={`navbar-link button-email`}>{userInfo.email}</button>

        <div className="navbar-dropdown button-logout-container">
          <button className={`button button-logout`} onClick={handleLogOut}>
            <Translate value={`headerLinks.logOut`} />
          </button>
        </div>
      </div>
    );
  }
});

LoginButtonAndModal.propTypes = {
  userInfo: PropTypes.object,
  dispatchSetUserInfo: PropTypes.func.isRequired,
  dispatchEmptyUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchSetUserInfo: (userInfo) => {
    dispatch(setUserInfo(userInfo));
  },
  dispatchEmptyUserInfo: () => {
    dispatch(emptyUserInfo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonAndModal);
