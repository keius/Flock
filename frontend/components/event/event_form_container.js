import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = ({ groups }) => ({
  id: Object.keys(groups.groups)[0]
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
