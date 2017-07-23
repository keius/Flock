import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUP_MEMBERS = "RECEIVE_GROUP_MEMBERS";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveGroupMembers = members => ({
  type: RECEIVE_GROUP_MEMBERS,
  members
});

export const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});

//THUNK
export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchUserGroups = () => dispatch => (
  APIUtil.fetchUserGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchGroupMembers = (id) => dispatch => (
  APIUtil.fetchGroupMembers(id).then(members => dispatch(receiveGroupMembers(members)))
);

export const fetchGroup = (id) => dispatch => (
  APIUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group).then(newGroup => dispatch(receiveGroup(newGroup)), errors => dispatch(receiveGroupErrors(errors)))
);

export const deleteGroup = (id) => dispatch => (
  APIUtil.deleteGroup(id).then(() => dispatch(receiveGroup(null)), errors => dispatch(receiveGroupErrors(errors)))
);
