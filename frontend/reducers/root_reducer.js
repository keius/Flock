import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
import usersReducer from './users_reducer';
import mapReducer from './map_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  groups: groupsReducer,
  events: eventsReducer,
  users: usersReducer,
  map: mapReducer
});

export default rootReducer;
