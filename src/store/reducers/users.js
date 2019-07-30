import {
  GET_USERS,
  GET_USERS_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR
} from '../actions/types';

const initState = {
  users: [],
  loading: true,
  updateError: false
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        users: [],
        loading: false
      };
    case UPDATE_USER:
      const newUsers = state.users.map(user => {
        if (user.id === payload.id) {
          return payload;
        }
        return user;
      });
      return {
        ...state,
        users: newUsers
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        updateError: true
      };

    default:
      return state;
  }
};
