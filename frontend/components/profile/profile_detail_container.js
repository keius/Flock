import {connect} from 'react-redux';
import {fetchUserGroups} from '../../actions/group_actions';
import ProfileDetail from './profile_detail';

const mapStateToProps = ({session, group}) => ({
  currentUser: session.currentUser,
  groups: group.groups
});

const mapDispatchToProps = dispatch => ({
  fetchUserGroups: () => dispatch(fetchUserGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
