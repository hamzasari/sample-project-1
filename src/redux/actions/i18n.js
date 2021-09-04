import { setLocale } from 'react-redux-i18n';
import { fallbackLocale, supportedLocales } from '../../config/i18n';

/**
 * Sets the locale
 * If the parameter is not in supported locales then sets the default value for the locale
 * @param desiredLocale
 * @returns {function(*): *}
 */
export const setLocaleWithFallback = (desiredLocale) => {
  const finalLocale = Object.keys(supportedLocales).includes(desiredLocale)
    ? desiredLocale
    : fallbackLocale;
  return (dispatch) => dispatch(setLocale(finalLocale));
};
