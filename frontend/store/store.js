import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const createLogger = require('redux-logger');
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  )
);

export default configureStore;
