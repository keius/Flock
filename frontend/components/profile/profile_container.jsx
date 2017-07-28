import {connect} from 'react-redux';
import {fetchUserGroups} from '../../actions/group_actions';
import {fetchUserEvents} from '../../actions/event_actions';
import {sortEvents} from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = ({session, groups, events}) => {
  return {
    currentUser: session.currentUser,
    groups: Object.keys(groups.groups).map(id => groups.groups[id]),
    events: sortEvents(Object.keys(events.events).map(id => events.events[id]))
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserGroups: (id) => dispatch(fetchUserGroups(id)),
  fetchUserEvents: (id) => dispatch(fetchUserEvents(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
