import * as APIUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) =>  ({
  type: RECEIVE_USER,
  user
});

export const editUser = (user) => dispatch => (
  APIUtil.editUser(user).then(
    editedUser => dispatch(receiveUser(editedUser)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchUser = (userId) => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);
