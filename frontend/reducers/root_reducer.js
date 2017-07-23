import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupReducer from './group_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  group: groupReducer,
  users: usersReducer
});

export default rootReducer;
