import { EMPTY_USER_INFO, SET_USER_INFO } from '../actions/types';

/**
 * Initial state of user information object in redux
 * @type {{info: {}}}
 */
const initialState = {
  info: {},
};

/**
 * User reducer to make modifications on user state object in redux
 * @param state
 * @param action
 * @returns {{info}|{info: {}}}
 */
const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        info: { ...action.payload.info },
      };
    case EMPTY_USER_INFO:
      return {
        ...state,
        info: {},
      };

    default:
      return state;
  }
};

export default user;
