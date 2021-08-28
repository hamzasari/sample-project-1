import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import user from './user';

const rootReducer = combineReducers({ i18n: i18nReducer, user });

export default rootReducer;
