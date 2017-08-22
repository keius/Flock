import {connect} from 'react-redux';
import {fetchEvent, deleteEvent} from '../../actions/event_actions';
import {fetchCoordinates} from '../../actions/map_actions';
import {fetchEventUsers, joinEvent, leaveEvent} from '../../actions/user_actions';
import EventDetail from './event_detail';

const mapStateToProps = ({session, events, users}, ownProps) => ({
  currentUser: session.currentUser,
  event: events.events[ownProps.match.params.id],
  users: users.users,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEventUsers: id => dispatch(fetchEventUsers(id)),
  deleteEvent: id => dispatch(deleteEvent(id)),
  joinEvent: eventId => dispatch(joinEvent(eventId)),
  leaveEvent: eventId => dispatch(leaveEvent(eventId)),
  fetchCoordinates: location => dispatch(fetchCoordinates(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
