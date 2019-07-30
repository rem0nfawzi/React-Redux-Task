import {
  GET_USERS,
  GET_USERS_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR
} from './types';
import axios from 'axios';

export const getUsers = () => async dispatch => {
  try {
    const users = await axios.get(
      'http://remonfawzi0.front.challenge.dev.monospacelabs.com/users'
    );
    dispatch({
      type: GET_USERS,
      payload: users.data
    });
  } catch (err) {
    dispatch({
      type: GET_USERS_ERROR
    });
  }
};

export const updateStatus = id => async dispatch => {
  try {
    const user = await axios.put(
      `http://remonfawzi0.front.challenge.dev.monospacelabs.com/users/${id}`
    );
    dispatch({
      type: UPDATE_USER,
      payload: user.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_ERROR
    });
  }
};
