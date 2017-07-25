import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';
import MainNav from './main_nav';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav));
