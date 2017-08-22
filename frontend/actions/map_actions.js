import * as APIUtil from '../util/map_api_util';

export const RECEIVE_COORDINATES = "RECEIVE_COORDINATES";

export const receiveCoordinates = coordinates => ({
  type: RECEIVE_COORDINATES,
  coordinates
});

export const fetchCoordinates = (location) => dispatch => (
  APIUtil.fetchCoordinates(location).then((response) => {
    const coordinates = response.data.results[0].geometry.location;
    dispatch(receiveCoordinates(coordinates));
    }
  )
);
