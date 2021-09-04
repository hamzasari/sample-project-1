import PropTypes from 'prop-types';

/**
 * Property types of LocalePicker component
 * @type {{setLocaleWithFallback: Validator<NonNullable<(...args: any[]) => any>>, locale: Validator<NonNullable<string>>, align: Requireable<string>}}
 */
export const LocalePickerPropTypes = {
  /**
   * Function to dispatch locale state variable in redux
   */
  setLocaleWithFallback: PropTypes.func.isRequired,
  /**
   * Current locale information in redux state
   */
  locale: PropTypes.string.isRequired,
  /**
   * Parameter to move locale picker right or left within a container
   */
  align: PropTypes.string,
};
