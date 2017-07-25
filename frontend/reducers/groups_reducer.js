import merge from 'lodash/merge';
import { RECEIVE_GROUP, RECEIVE_GROUPS } from '../actions/group_actions';

const _default = {
  groups: {}
};

const groupsReducer = (state = _default, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      const group = action.group;
      return {
        groups: Object.assign({}, state.groups, {[group.id]: group})
      };
    case RECEIVE_GROUPS:
      const groups = action.groups;
      return merge({}, {groups});
    default:
      return state;
  }
};

export default groupsReducer;
