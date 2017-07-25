import {connect} from 'react-redux';
import {fetchUser, editUser} from '../../actions/user_actions';
import {fetchUserGroups} from '../../actions/group_actions';
import ProfileDetail from './profile_detail';

const mapStateToProps = ({session, groups}) => ({
  currentUser: session.currentUser,
  groups: Object.keys(groups.groups).map(id => groups.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUserGroups: (id) => dispatch(fetchUserGroups(id)),
  editUser: (user) => dispatch(editUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
