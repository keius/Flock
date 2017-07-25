import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group, user) => ({
  type: RECEIVE_GROUP,
  group,
  user
});

export const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});

//THUNK
export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchUserGroups = (id) => dispatch => (
  APIUtil.fetchUserGroups(id).then(groups => dispatch(receiveGroups(groups)))
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
  APIUtil.deleteGroup(id).then(() => dispatch(fetchGroups()))
);
