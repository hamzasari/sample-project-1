import PropTypes from 'prop-types';

/**
 * Property types of ContactUs component
 * @type {{userInfo: Requireable<object>, locale: Validator<NonNullable<string>>}}
 */
export const ContactUsPropTypes = {
  /**
   * Current locale information in redux state
   */
  locale: PropTypes.string.isRequired,
  /**
   * User information object in redux state
   */
  userInfo: PropTypes.object,
};
