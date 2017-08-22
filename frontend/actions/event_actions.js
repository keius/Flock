import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event,
});

export const removeEvent = id => ({
  type: REMOVE_EVENT,
  id
});

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location: location
});

//THUNK
export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);

export const fetchUserEvents = id => dispatch => (
  APIUtil.fetchUserEvents(id).then(events => dispatch(receiveEvents(events)))
);

export const fetchGroupEvents = id => dispatch => (
  APIUtil.fetchGroupEvents(id).then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const createEvent = event => dispatch => (
  APIUtil.createEvent(event).then(newGroup => dispatch(receiveEvent(newGroup)))
);

export const updateEvent = event => dispatch => (
  APIUtil.updateEvent(event).then(updatedGroup => dispatch(receiveEvent(updatedGroup)))
);

export const deleteEvent = id => dispatch => (
  APIUtil.deleteEvent(id).then(() => removeEvent(id))
);
