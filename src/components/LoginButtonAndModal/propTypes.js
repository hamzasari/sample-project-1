import PropTypes from 'prop-types';

/**
 * Property types of LoginButtonAndModal component
 * @type {{dispatchEmptyUserInfo: Validator<NonNullable<(...args: any[]) => any>>, userInfo: Requireable<object>, dispatchSetUserInfo: Validator<NonNullable<(...args: any[]) => any>>}}
 */
export const LoginButtonAndModalPropTypes = {
  /**
   * User information object in redux state
   */
  userInfo: PropTypes.object,
  /**
   * Method to set user information in redux state with dispatch function in redux
   */
  dispatchSetUserInfo: PropTypes.func.isRequired,
  /**
   * Method to empty user information in redux state with dispatch function in redux
   */
  dispatchEmptyUserInfo: PropTypes.func.isRequired,
};
