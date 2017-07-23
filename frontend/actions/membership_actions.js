import * as APIUtil from '../util/membership_api_util';

export const createMembership = (membership) => dispatch => (
  APIUtil.createMembership(membership).then(success => console.log(success), errors => console.log(errors.responseJSON))
);

export const deleteMembership = (membership) => dispatch => (
  APIUtil.deleteMembership(membership).then(success => console.log(success), errors => console.log(errors.responseJSON))
);
