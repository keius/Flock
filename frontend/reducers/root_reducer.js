import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupsReducer from './groups_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  groups: groupsReducer,
  users: usersReducer
});

export default rootReducer;
