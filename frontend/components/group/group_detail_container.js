import {connect} from 'react-redux';
import {createMembership, deleteMembership} from '../../actions/membership_actions';
import {fetchGroup, fetchGroupMembers} from '../../actions/group_actions';
import GroupDetail from './group_detail';

const mapStateToProps = ({session, group}) => ({
  currentUser: session.currentUser,
  group: group.group
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupMembers: id => dispatch(fetchGroupMembers(id)),
  createMembership: membership => dispatch(createMembership(membership)),
  deleteMembership: membership => dispatch(deleteMembership(membership))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
