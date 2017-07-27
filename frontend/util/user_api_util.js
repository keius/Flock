export const editUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: {user}
  });
};

export const fetchGroupUsers = (groupId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: {group_id: groupId}
  });
};

export const fetchEventUsers = (eventId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: {event_id: eventId}
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const joinGroup = (groupId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/groups/${groupId}/memberships`
  });
};

export const leaveGroup = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${groupId}/memberships`
  });
};

export const joinEvent = (eventId) => (
  $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/rsvps`
  })
);

export const leaveEvent = (eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/rsvps`
  })
);
