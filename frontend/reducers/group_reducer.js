import {RECEIVE_GROUPS, RECEIVE_GROUP, RECEIVE_GROUP_ERRORS, REMOVE_GROUP} from '../actions/group_actions';
import merge from 'lodash/merge';

const _nullGroup = Object.freeze({
  groups: {},
  group: {},
  groupErrors: []
});

const groupReducer = (state = _nullGroup, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_GROUPS:
      let groups = action.groups;
      newState = merge({}, _nullGroup, {groups});
      return newState;
    case RECEIVE_GROUP:
      let group = action.group;
      newState = merge({}, state);
      newState.group = group;
      newState.groups[group.id] = group;
      return newState;
    case REMOVE_GROUP:
      newState = merge({}, state);
      let id = action.group.id;
      delete newState.groups[id];
      return newState;
    case RECEIVE_GROUP_ERRORS:
      let groupErrors = action.groupErrors;
      newState = merge({}, state);
      return merge({}, newState, {groupErrors});
    default:
      return state;
  }
};

export default groupReducer;
