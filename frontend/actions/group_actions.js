import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const removeGroup = id => ({
  type: REMOVE_GROUP,
  id
});

//THUNK
export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchUserGroups = (id) => dispatch => (
  APIUtil.fetchUserGroups(id).then(groups => dispatch(receiveGroups(groups)))
);

export const fetchCategoryGroups = (category) => dispatch => (
  APIUtil.fetchCategoryGroups(category).then(groups => dispatch(receiveGroups(groups)))
);

export const fetchGroup = (id) => dispatch => (
  APIUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group).then(newGroup => dispatch(receiveGroup(newGroup)))
);

export const updateGroup = (group) => dispatch => (
  APIUtil.updateGroup(group).then(updatedGroup => dispatch(receiveGroup(updatedGroup)))
);

export const deleteGroup = (id) => dispatch => (
  APIUtil.deleteGroup(id).then(() => dispatch(removeGroup(id)))
);
