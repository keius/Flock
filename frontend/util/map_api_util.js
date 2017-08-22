import axios from 'axios';

export const fetchCoordinates = (location) => (
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',
  {
    params:{
      address: location,
      key: "AIzaSyBMc9Vwf_2R_o2gkB6AdoCzDOl7DK4FlII"
    }
  })
);
