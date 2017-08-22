import merge from 'lodash/merge';
import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT, RECEIVE_LOCATION } from '../actions/event_actions';

const _default = {
  events: {}
};

const eventsReducer = (state = _default, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      const event = action.event;
      return {
        events: Object.assign({}, state.events, {[event.id]: event})
      };
    case RECEIVE_EVENTS:
      const events = action.events;
      return merge({}, {events});
    case REMOVE_EVENT:
      const id = action.id;
      const newEvents = Object.assign({}, state.events);
      delete newEvents[id];
      return Object.assign({}, state, {events: newEvents});
    case RECEIVE_LOCATION:
      const location = action.location;
    default:
      return state;
  }
};

export default eventsReducer;
