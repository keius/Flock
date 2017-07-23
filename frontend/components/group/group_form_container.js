import {connect} from 'react-redux';
import {createGroup, fetchGroups} from '../../actions/group_actions';
import GroupForm from './group_form';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
