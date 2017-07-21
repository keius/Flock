import {connect} from 'react-redux';
import ProfileDetail from './profile_detail';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps)(ProfileDetail);
