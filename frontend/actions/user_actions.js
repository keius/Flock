import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = (user) =>  ({
  type: RECEIVE_USER,
  user
});

export const removeUser = (user) => ({
  type: REMOVE_USER,
  user
});

export const editUser = (user) => dispatch => (
  APIUtil.editUser(user).then(
    editedUser => dispatch(receiveUser(editedUser))
  )
);

export const fetchGroupUsers = (id) => dispatch => (
  APIUtil.fetchGroupUsers(id).then(
    users => dispatch(receiveUsers(users))
  )
);

export const fetchEventUsers = (id) => dispatch => (
  APIUtil.fetchEventUsers(id).then(
    users => dispatch(receiveUsers(users))
  )
);

export const fetchUser = (userId) => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user))
  )
);

export const joinGroup = (groupId) => dispatch => (
  APIUtil.joinGroup(groupId).then(user => dispatch(receiveUser(user)))
);

export const leaveGroup = (groupId) => dispatch => (
  APIUtil.leaveGroup(groupId).then(user => dispatch(removeUser(user)))
);

export const joinEvent = (eventId) => dispatch => (
  APIUtil.joinEvent(eventId).then(user => dispatch(receiveUser(user)))
);

export const leaveEvent = (eventId) => dispatch => (
  APIUtil.leaveEvent(eventId).then(user => dispatch(removeUser(user)))
);
