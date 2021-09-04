import { setLocaleWithFallback } from '../../redux/actions/i18n';

/**
 * mapStateToProps function to use with redux
 * @param state
 * @returns {{locale}}
 */
export const mapStateToProps = (state) => ({
  /**
   * Current locale information in redux state
   */
  locale: state.i18n.locale,
});

/**
 * mapDispatchToProps object to use with redux
 * @type {{setLocaleWithFallback: ((function(*=): function(*): *)|*)}}
 */
export const mapDispatchToProps = {
  /**
   * Function to dispatch locale state variable in redux
   */
  setLocaleWithFallback,
};
