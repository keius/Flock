import {connect} from 'react-redux';
import {fetchUser, editUser} from '../../actions/user_actions';
import ProfileDetail from './profile_detail';

const mapStateToProps = ({session, users}) => ({
  currentUser: session.currentUser,
  user: users.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  editUser: (user) => dispatch(editUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
