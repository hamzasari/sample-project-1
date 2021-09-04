import { I18n } from 'react-redux-i18n';

/**
 * @typedef ValidationResult
 * @property {boolean} valid
 * @property {string} message
 */

/**
 * Success result object
 * @type {ValidationResult}
 */
const successResult = { valid: true, message: '' };

/**
 * Validates name parameter of form
 * @param name
 * @returns {ValidationResult}
 */
export const validateName = (name) => {
  return validateEmptyInput(name, 'formErrors.nameEmpty');
};

/**
 * Validates email parameter of form
 * @param email
 * @returns {ValidationResult}
 */
export const validateEmail = (email) => {
  if (!email) {
    return {
      valid: false,
      message: I18n.t('formErrors.emailEmpty'),
    };
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
      return {
        valid: false,
        message: I18n.t('formErrors.emailNotValid'),
      };
    }
  }

  return successResult;
};

/**
 * Validates password parameter of form
 * @param password
 * @returns {ValidationResult}
 */
export const validatePassword = (password) => {
  return validateEmptyInput(password, 'formErrors.passwordEmpty');
};

/**
 * Validates phone number parameter of form
 * @param phoneNumber
 * @returns {ValidationResult}
 */
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) {
    return {
      valid: false,
      message: I18n.t('formErrors.phoneNumberEmpty'),
    };
  } else if (typeof phoneNumber !== 'undefined') {
    let regex = new RegExp(/^\d+$/);
    if (!regex.test(phoneNumber)) {
      return {
        valid: false,
        message: I18n.t('formErrors.phoneNumberNotValid'),
      };
    }
  }

  return successResult;
};

/**
 * Validates country parameter of form
 * @param country
 * @returns {ValidationResult}
 */
export const validateCountry = (country) => {
  return validateEmptyInput(country, 'formErrors.countryEmpty');
};

/**
 * Validates message parameter of form
 * @param message
 * @returns {ValidationResult}
 */
export const validateMessage = (message) => {
  return validateEmptyInput(message, 'formErrors.messageEmpty');
};

/**
 * Validates input against empty rule
 * @param input
 * @param errorMessageCode
 * @returns {ValidationResult}
 */
export const validateEmptyInput = (input, errorMessageCode) => {
  if (!input) {
    return {
      valid: false,
      message: I18n.t(errorMessageCode),
    };
  }

  return successResult;
};
