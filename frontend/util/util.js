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

export function geocode(location) {
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params:{
      address: location,
      key: "AIzaSyBMc9Vwf_2R_o2gkB6AdoCzDOl7DK4FlII"
    }
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}
