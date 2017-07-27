import {connect} from 'react-redux';
import {createEvent} from '../../actions/group_actions';
import EventForm from './event_form';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
