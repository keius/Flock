import {connect} from 'react-redux';
import {receiveGroup, createGroup} from '../../actions/groups_actions';
import GroupForm from './group_form';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
