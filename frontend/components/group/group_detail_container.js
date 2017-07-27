import {connect} from 'react-redux';
import {fetchGroup} from '../../actions/group_actions';
import {fetchGroupEvents} from '../../actions/event_actions';
import {fetchGroupUsers, joinGroup, leaveGroup} from '../../actions/user_actions';
import GroupDetail from './group_detail';

const mapStateToProps = ({session, groups, events, users}, ownProps) => ({
  currentUser: session.currentUser,
  group: groups.groups[ownProps.match.params.id],
  events: events.events,
  users: users.users
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupUsers: id => dispatch(fetchGroupUsers(id)),
  fetchGroupEvents: id => dispatch(fetchGroupEvents(id)),
  joinGroup: groupId => dispatch(joinGroup(groupId)),
  leaveGroup: groupId => dispatch(leaveGroup(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
