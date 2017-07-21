import {connect} from 'react-redux';
import {receiveGroup, createGroup} from '../../actions/group_actions';
import GroupForm from './group_form';

const mapStateToProps = ({group}) => ({
  errors: group.errors
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
