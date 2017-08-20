import axios from 'axios';

export function processDate(datetime) {
  const date = new Date(datetime);
  const day = date.toUTCString();
  // const time = () => {
  //   if (date.getHours() > 12) {
  //     return `${date.getHours()%12} PM`;
  //   } else {
  //     return `${date.getHours()} AM`;
  //   }
  // };
  return `${day}`;
}

export const geocode = (location) => dispatch => {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json',
  {
    params:{
      address: location,
      key: "AIzaSyBMc9Vwf_2R_o2gkB6AdoCzDOl7DK4FlII"
    }
  })
  .then((response) => {
    console.log(response);
    const result = response.data.results[0].geometry.location;
    dispatch(receiveLocation(result));
  })
  .catch(function(error) {
    console.log(error);
  });
};

export const receiveLocation = (location) => {
  return location;
};
