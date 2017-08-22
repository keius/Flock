export const fetchLocation = (location) => dispatch => (
  APIUtil.fetchLocation(location).then((response) => {
    const result = response.data.results[0].geometry.location;
    dispatch(receiveLocation(result));
    }
  )
);

export const 
