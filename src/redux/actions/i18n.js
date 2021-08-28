import { setLocale } from 'react-redux-i18n';
import { fallbackLocale, supportedLocales } from '../../config/i18n';

export const setLocaleWithFallback = (desiredLocale) => {
  const finalLocale = Object.keys(supportedLocales).includes(desiredLocale)
    ? desiredLocale
    : fallbackLocale;
  return (dispatch) => dispatch(setLocale(finalLocale));
};
