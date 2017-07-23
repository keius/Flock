import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, {user});
    default:
      return state;
    }
  };

export default usersReducer;
