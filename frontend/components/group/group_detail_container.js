import {connect} from 'react-redux';
import {fetchGroup, joinGroup, leaveGroup} from '../../actions/group_actions';
import GroupDetail from './group_detail';

const mapStateToProps = ({session, groups}) => ({
  currentUser: session.currentUser,
  group: groups.group
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  joinGroup: (groupId, userId) => dispatch(joinGroup(groupId, userId)),
  leaveGroup: groupId => dispatch(leaveGroup(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
