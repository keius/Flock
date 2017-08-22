import {RECEIVE_COORDINATES} from '../actions/map_actions';
import merge from 'lodash/merge';

const nullMap = Object.freeze({
  coordinates: null
});

const mapReducer = (state = nullMap, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COORDINATES:
      const coordinates = action.coordinates;
      return merge({}, nullMap, {coordinates});
    default:
      return state;
  }
};

export default mapReducer;
