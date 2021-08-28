import { EMPTY_USER_INFO, SET_USER_INFO } from './types';

export const setUserInfo = (info) => {
  return {
    type: SET_USER_INFO,
    payload: { info: { ...info } },
  };
};

export const emptyUserInfo = () => {
  return {
    type: EMPTY_USER_INFO,
  };
};
