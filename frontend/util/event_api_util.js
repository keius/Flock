import axios from 'axios';

export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchUserEvents = (id) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {user_id: id}
  })
);

export const fetchGroupEvents = (groupId) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {group_id: groupId}
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event}
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

export const fetchLocation = (location) => (
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',
  {
    params:{
      address: location,
      key: "AIzaSyBMc9Vwf_2R_o2gkB6AdoCzDOl7DK4FlII"
    }
  })
);
