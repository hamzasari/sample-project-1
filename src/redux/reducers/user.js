import { EMPTY_USER_INFO, SET_USER_INFO } from '../actions/types';

const initialState = {
  info: {},
};

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
