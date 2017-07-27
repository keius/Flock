import merge from 'lodash/merge';
import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';

const _default = {
  users: {}
};

const usersReducer = (state = _default, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return Object.assign({}, state, {users});
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, {users: {[user.id]: user}});
    case REMOVE_USER:
      const newState = merge({}, state);
      delete newState.users[action.user.id];
      return newState;
    default:
      return state;
    }
  };

export default usersReducer;
