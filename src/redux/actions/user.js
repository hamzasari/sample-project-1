import { EMPTY_USER_INFO, SET_USER_INFO } from './types';

/**
 * Returns redux action for setting user information
 * @param info
 * @returns {{payload: {info}, type: string}}
 */
export const setUserInfo = (info) => {
  return {
    type: SET_USER_INFO,
    payload: { info: { ...info } },
  };
};

/**
 * Returns redux action for emptying user information
 * @returns {{type: string}}
 */
export const emptyUserInfo = () => {
  return {
    type: EMPTY_USER_INFO,
  };
};
