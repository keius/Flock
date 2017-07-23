import {connect} from 'react-redux';
import {fetchGroup} from '../../actions/group_actions';
import GroupDetail from './group_detail';

const mapStateToProps = ({session, group}) => ({
  currentUser: session.currentUser,
  group: group.group,
  members: group.members
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupMembers: id => dispatch(fetchGroupMembers(id)),
  createMembership: membership => dispatch(createMembership(membership)),
  deleteMembership: membership => dispatch(deleteMembership(membership))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
