import merge from 'lodash/merge';
import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      const group = action.group;
      return merge({}, {group});
    case RECEIVE_ALL_GROUPS:
      const groups = action.groups;
      return merge({}, state, {groups});
    default:
      return state;
  }
};

export default groupsReducer;
